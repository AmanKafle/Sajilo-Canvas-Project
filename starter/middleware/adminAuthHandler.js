const adminEmail ="admin@gmail.com"
const adminPass = "admin123"

const adminAuthHandler = (req, res, next) =>{
    const{email, password} = req.body 
     if(email == adminEmail && password == adminPass){
        next();
     }
     else{
        res.status(401).json({success : false , error : 'unauthorized'})
     }
}
module.exports = adminAuthHandler