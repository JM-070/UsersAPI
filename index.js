import express from 'express';
import userRoutes from './Routes/Users.js';
import db from './db.js';

const app = express();
app.use(express.json());

//User Routes
app.use('/api/users', userRoutes);

// Server 
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
