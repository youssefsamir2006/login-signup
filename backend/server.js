const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

if (!process.env.MONGO_URI || process.env.MONGO_URI === 'your_mongodb_connection_string_here') {
    console.error('FATAL ERROR: MONGO_URI is not defined or not updated in .env file.');
    process.exit(1);
}
if (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'your_super_secret_jwt_key_that_is_long_and_random') {
    console.error('FATAL ERROR: JWT_SECRET is not defined or not updated in .env file.');
    process.exit(1);
}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
const Feature = require('./models/feature.model');
const Car = require('./models/car.model');

const seedFeatures = async () => {
    try {
        if (await Feature.countDocuments() > 0) return;
        const initialFeatures = [
            {
                title: 'Wide Selection',
                description: 'Explore a vast range of cars and real estate properties from trusted sellers.',
                icon: 'fa-solid fa-car'
            },
            {
                title: 'Easy Search',
                description: 'Our advanced search filters help you find exactly what you are looking for in no time.',
                icon: 'fa-solid fa-magnifying-glass'
            },
            {
                title: 'Secure Transactions',
                description: 'We ensure that all your transactions are safe and secure.',
                icon: 'fa-solid fa-shield-halved'
            }
        ];
        await Feature.insertMany(initialFeatures);
        console.log('Database seeded with initial features.');
    } catch (error) {
        console.error('Error seeding features:', error);
    }
};

const seedCars = async () => {
    try {
        if (await Car.countDocuments() > 0) return;
        const initialCars = [
            {
                make: "Toyota",
                model: "Camry",
                year: 2021,
                price: 25000,
                description: "A reliable and fuel-efficient sedan, perfect for families.",
                imageUrl: "https://via.placeholder.com/300"
            },
            {
                make: "Ford",
                model: "Mustang",
                year: 2022,
                price: 45000,
                description: "An iconic American muscle car with powerful performance.",
                imageUrl: "https://via.placeholder.com/300"
            },
            {
                make: "Honda",
                model: "CR-V",
                year: 2020,
                price: 28000,
                description: "A versatile and spacious SUV with a comfortable ride.",
                imageUrl: "https://via.placeholder.com/300"
            }
        ];
        await Car.insertMany(initialCars);
        console.log('Database seeded with initial cars.');
    } catch (error) {
        console.error('Error seeding cars:', error);
    }
};

const seedDatabase = async () => {
    await seedFeatures();
    await seedCars();
};

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
  seedDatabase();
})

// A simple test route
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

const featuresRouter = require('./routes/features');
app.use('/api/features', featuresRouter);

const carsRouter = require('./routes/cars');
app.use('/api/cars', carsRouter);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
