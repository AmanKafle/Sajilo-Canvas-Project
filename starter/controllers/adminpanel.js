const Product = require("../models/product");
const Projectinfo = require("../models/projectinfo");
const User = require('../models/user');
const Payment = require('../models/payment');
const Order = require('../models/order')

const productHandler = async (req, res) => {
  const { category, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (category) {
    queryObject.category = category;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(>|>=|=|<|<=)\b/g;
    let filter = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "ratings"];
    filter = filter.split(",").forEach((element) => {
      const [field, operator, value] = element.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  let result = Product.find(queryObject);
  let result2 = Product.find(queryObject);

  if (sort) {
    const sortlist = sort.split(",").join(" ");
    result = result.sort(sortlist);
    result2 = result2.sort(sortlist);
  }
  if (fields) {
    const fieldlist = fields.split(",").join(" ");
    result = result.select(fieldlist);
    result2 = result2.select(fieldlist);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 3;
  const skip = (page - 1) * limit;
  const count = await result2.find({}).countDocuments();
  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({
    products,
    nbHits: products.length,
    nextPage: page + 1,
    totalPage: Math.ceil(count / limit),
  });
};
const getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findById(id);
    return res.json({
      result,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "product not found",
      error: error,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const editProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  
};
const getallproject = async(req,res) =>{
  const{progress , ProjectId , userid} = req.query
  const queryobject = {};
  if (progress) {
    queryobject.progress = progress;
  }
  if (ProjectId){
    queryobject.ProjectId = ProjectId;
  }
  if (userid){
    queryobject.userid = userid ;
  }

  const project = await Projectinfo.find(queryobject);
  res.json({project});
}
const getalldesigner = async(req,res)=>{
  const desingers = await User.find({role:"Designer"})
  res.json({desingers})
}
const projectupdate = async(req,res) =>{
const project = await Projectinfo.findOneAndUpdate(
  {_id:req.body.projectId },
 { $set :{
     progress: req.body.progress
 }},
 {new : true})


 res.json({project});
}
const getallpayment = async(req,res) =>{
  const payment = await Payment.find({})
  res.json(payment)
}
const paymentverify = async(req,res) =>{
  const verify = await Payment.findOneAndUpdate({_id:req.body.id },
    { $set :{
        status : req.body.status
    }},
    {new : true})
   
   
    res.json({verify});
}
const getallorder = async(req,res)=>{
  const {status}= req.query
  const queryobject= {};

  if (status){
    queryobject.status = status;
  }
  const order = await Order.find(queryobject)
  
  res.json({order})
}
const orderupdate =async(req,res)=>{
  const order = await Order.findOneAndUpdate({_id: req.body.orderid},
    {$set :{
      status : req.body.status
  }},
  {new : true})
  
    res.json({order})

}


module.exports = {
  productHandler,
  getOneProduct,
  deleteProduct,
  createProduct,
  editProduct,
  getallproject,
  getalldesigner,
  projectupdate,
  getallpayment,
  paymentverify,
  getallorder,
  orderupdate
};
