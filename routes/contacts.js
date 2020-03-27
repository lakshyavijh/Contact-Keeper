const express= require('express');
const router = express.Router();


// @route   Get api/contacts
// @desc    Get contacts users
// @access  Private

router.get('/',(req,res) =>{
    res.send('Get all contacts');
});


// @route   post api/contacts
// @desc    Add new Contacts
// @access  Private

router.post('/',(req,res) =>{
    res.send('Add new contacts');
});

// @route   put api/contacts/:id
// @desc    UPDATE Contacts
// @access  Private

router.put('/:id',(req,res) =>{
    res.send('update contacts');
});

// @route   Delete api/contacts/:id
// @desc    Delete Contacts
// @access  Private

router.delete('/:id',(req,res) =>{
    res.send('Delete contacts');
});



module.exports=router;