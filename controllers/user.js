const User = require('../models/User');

const addUser = async (req, res, next ) => {
        try {
          const name = req.body.name;
          const email = req.body.email;
          const phonenumber = req.body.phonenumber;
      
          const data = await User.create({ name: name, email: email, phonenumber: phonenumber });
          res.status(201).json({ newUserDetail: data });
        } catch (error) {
          res.status(500).json({ error: 'Internal error' }); 
        }
};

const getUser = async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.status(200).json({ allUsers: users });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Error fetching users: ' + error.message });
    }
};


const deleteUser = async (req, res) => {
    try {
  
      if(req.params.id =='undefined'){
        console.log('ID not found');
        return res.status(400).json({err: 'id is missing'})
      }
  
      const uId = req.params.id 
      await User.destroy({where:{id: uId}});
      res.sendStatus(200);
    }catch (err) {
      console.log(err)
      res.status(500).json(err);
    }

  }

module.exports={
  addUser,
  getUser,
  deleteUser
}