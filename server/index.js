const { ApolloServer } = require("apollo-server");

const { mainCards, animals, categories } = require("./db");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Category = require("./resolvers/Category");
const Animal = require("./resolvers/Animal");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Animal,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
