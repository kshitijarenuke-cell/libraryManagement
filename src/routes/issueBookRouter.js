const express = require('express');
const {issueBook,returnBook}=('../controllers/issueBookController');

const router=express.Router();

router.post('/', issueBook);
router.put('/:id',returnBook);

module.exports=router;