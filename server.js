const express = require('express');
const connectDB =require('./config/db');

const app =express();

//connect database

connectDB();

// init middleware
app.use(express.json({ extented:false}))

app.get('/',(req,res) => res.json({msg:'welcome to contact keeper api'}));
const PORT = process.env.PORT || 5000


//Define routes
app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));