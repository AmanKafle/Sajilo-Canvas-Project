const User = require ('../models/user')

const currentUserInfo = async (req, res) => {
    const { email, password} = req.body;
  
    try {
      let user;
  
      
      user = await User.findOne({ email, password, role: 'Admin' });
  
      
      if (!user) {
        user = await User.findOne({ email, password, role: 'Designer' });
      }
  
      
      if (!user) {
        user = await User.findOne({ email, password, role: 'User' });
      }
  
      if (user) {
        
        const { email, password, role } = user;
        res.json({ email, password, role });
      } else {
        
        res.json({ email: 'undefined', password: 'undefined', role: 'undefined'});
      }
    } catch (err) {
      console.error('Error retrieving user:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  module.exports = {
    currentUserInfo
  }
  