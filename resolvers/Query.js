exports.Query = {
    hello: () => 'hello world',
    coffees: async (_, __, { CoffeeModel }) => {
        return (await CoffeeModel.find());
    }
};