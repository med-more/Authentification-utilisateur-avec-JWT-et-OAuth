const express = require('express');
const { connectDB, PORT } = require('./db.js');
const authRoutes = require('./routes/authRoutes.js');

connectDB();

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));