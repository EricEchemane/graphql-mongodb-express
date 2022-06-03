exports.Mutation = {
    createCoffee: async (_, { input }, { CoffeeModel }) => {
        const newCoffee = new CoffeeModel({
            name: input.name,
            price: input.price,
            imageUrl: input.imageUrl,
        });
        await newCoffee.save();
        return newCoffee;
    }
};