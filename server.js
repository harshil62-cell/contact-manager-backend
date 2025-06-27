const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const dotenv = require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const startBirthdayCron = require("./cron/scheduler");
const { errorHandler } = require('./middleware/errorHandler.js');
const { connectDb } = require('./config/dbConnection.js');

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Load Swagger YAML file
const swaggerDocument = YAML.load('./swagger.yaml');

// Serve Swagger docs from YAML
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(express.json());

// API Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

startBirthdayCron();
