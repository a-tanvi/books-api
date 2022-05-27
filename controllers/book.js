const Book = require('../model/book');

const create = async (req,res) => {
    try {
        const books = await Book.create(req.body)
        res.status(201).json({ books })
      } catch (error) {
        res.status(500).json({ msg : error })
      }
}

const getbyTitle = async(req, res) => {
    try {
        const { title: bookName } = req.params
      const books = await Book.findOne({ name: bookName })
      if (!books) {
         return res.status(404).json({ status : `No Book found with title : ${bookName}` })
      }
    
      res.status(200).json({ 
          status : `true`,
          books
       })
      } catch (error) {
        res.status(500).json({ msg : error })
      }
}

const getByRater = async (req, res) => {
    try {
        
        const { book: bookName } = req.params
        
        const books = await Book.findOne({ name: bookName })
        if (!books) {
            return res.status(404).json({ status : `False - No Book found with title : ${bookName}` })
         }

         const { username : rater} = req.params;
         
         if ( books.raters.includes(rater)){
             return res.status(200).json({
                 status : `true`,
                 rating : `1`,
                 bookList : {books}
             })
         }
         res.status(404).json({status : `False : Book does not has the mentioned rater`})
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}


const updateBooks = async (req, res) => {
    try {
        const { book: bookName } = req.params;
       
        const  {username : username} = req.params;
        const {rate : rate} = req.params;
        
        
    const books = await Book.findOne({ name : bookName});
   
    if (!books) {
        return res.status(404).json({ status : `False - No Book found with title : ${bookName}` })
     }
     
     await books.updateOne(
          
          { $push: { raters: username }},
          
     );

     await books.updateOne(
        { $inc:  { ratersNumber: 1  }, },
        
     )

     


        res.status(200).json("Books have been updated");
        
    } catch (error) {
        res.status(500).json({ msg : error })
    }
    
}
module.exports = {getbyTitle, create, getByRater, updateBooks};