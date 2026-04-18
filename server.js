//  C:\Users\yashw\Desktop\PhonePe\server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const SwaggerUi = require('swagger-ui-express')
const authRoutes = require('./src/routes/authRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes');

let swaggerDocument = {};
try {
    swaggerDocument = require('./swagger-output.json')
} catch (error) {
    console.log('ERROR FROM SWAGGER =>', error);

}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
const PORT = process.env.PORT || 5000

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument))

//routes
app.get('/', (req, res) => {
    res.send('PhonePe Backend is Running..')
})

//middleware --> routes
app.use('/api/auth', authRoutes)
app.use('/api/transaction', transactionRoutes);





app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);

})

