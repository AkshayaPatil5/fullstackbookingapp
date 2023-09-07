const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/User');
const path = require('path');
const cors = require('cors');
const userRoutes= require('./routes/user');
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users',userRoutes);

// app.post('/users/add-user', async (req, res, next) => {
//   try {
    
    
//     const name = req.body.name;
//     const email = req.body.email;
//     const phonenumber = req.body.phonenumber;

//     const data = await User.create({ name: name, email: email, phonenumber: phonenumber }); // Fix object property names
//     res.status(201).json({ newUserDetail: data });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal error' }); // Fix error message
//   }
// });

// app.get('/users/get-users', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.status(200).json({ allUsers: users });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Error fetching users: ' + error.message });
//   }
// });

// // app.delete('/users/delete-user/:id', async (req, res) => {
// //   try {

// //     if(req.params.id =='undefined'){
// //       console.log('ID not found');
// //       return res.status(400).json({err: 'id is missing'})
// //     }

// //     const uId = req.params.id 
// //     await User.destroy({where:{id: uId}});
// //     res.sendStatus(200);
// //   }catch (err) {
// //     console.log(err)
// //     res.status(500).json(err);
// //   }
// // })


sequelize
  .sync()
  .then(result => {
    app.listen(3000);
     
    
  })
  .catch((error) => {
    console.error(error);
  });






