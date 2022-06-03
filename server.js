require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefs');
const { models } = require('./models');

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            ...models
        }
    });

    await server.start();

    app.use(cors({
        origin: "*"
    }));

    server.applyMiddleware({ app });

    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true
    }, (error) => {
        if (error) console.log(error);
    });

    const PORT = process.env.PORT || 4000;

    app.listen({ port: PORT }, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();