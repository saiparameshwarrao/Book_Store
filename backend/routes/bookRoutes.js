import express from 'express';
import { Book } from '../models/bookModel.js';

const route = express();

route.post('/', async (request, response) => {
    try {
      const { title, author, publishYear } = request.body;
  
      if (!title || !author || !publishYear) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const newBook = {
        title,
        author,
        publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
route.get('/',async (request,response) => {
      try{
          const books = await Book.find({});
          return response.status(200).json({
              count:books.length,
              data:books
          });
      }catch(error){
          console.log(error);
          response.status(500).send({ message: error.message });
      }
  });
  
  route.get('/:id',async (request,response) => {
  
      try{
          const {id} = request.params;
          const book = await Book.findById(id);
          return response.status(200).json(book);
      }catch(error){
          console.log(error);
          response.status(500).send({ message: error.message });
      }
  });
  
route.put('/:id',async (request,response) => {
      const { title, author, publishYear } = request.body;
      try {
          if (!title || !author || !publishYear) {
              return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
              });
            }
            const {id} = request.params;
            const result = await Book.findByIdAndUpdate(id,request.body); 
  
            if(!result){
              return response.status(404).send({message:'book not found'});
            }
            return response.status(200).send({message:'book updated into database'});
  
  
      } catch (error) {
          console.log(error);
          response.status(500).send({ message: error.message });
      }
      
  });
  
route.delete('/:id',async (request,response) => {
  
      try{
          const {id} = request.params;
          const result = await Book.findByIdAndDelete(id);
          if(!result){
              return response.status(404).send({message:"book not found"});
          }
          return response.status(200).send({message: "book deleted successfully"});
      }catch(error){
          console.log(error);
          response.status(500).send({ message: error.message });
      }
  });

export default route;