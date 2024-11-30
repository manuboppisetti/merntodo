const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const errorHandler = require('./middlewares/errorHandler');
const requestLogger = require('./middlewares/requestLogger');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger); // Log every request

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use('/api/todos', todoRoutes);

app.use(errorHandler); // Error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
