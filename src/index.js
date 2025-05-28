import cors from 'cors';
import express from 'express';
import pool from './config/db.js'; 
import userRouter from './routes/user.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';

const app = express();

const PORT = process.env.PORT || 3000;

//Miiddlewares
app.use(cors());
app.use(express.json());


//Routes
app.use('/api', userRouter);

//Error handlers
app.use(errorHandler);

createUserTable();

//Testing postgres connection
app.get('/', async(req,res)=>{
  const result = await pool.query('SELECT current_database()');
  res.send(`Connected to database: ${result.rows[0].current_database}`);
})

//Server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});