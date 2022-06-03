const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require("mongoose");
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

    server.applyMiddleware({ app });

    mongoose.connect('mongodb://localhost:27017/mascota', {
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