const { v4 } = require("uuid");
const { animal } = require("./Query");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    { animals }
  ) => {
    const newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },
  //  To remove an animal from animals array, we do :
  //  1 - Find Index of that animal using the ID given by user
  //  2 - Splice the index from the animals array
  removeAnimal: (parent, { id }, { animals }) => {
    const index = animals.findIndex((animal) => animal.id === id);
    animals.splice(index, 1);
    return true;
  },
};

module.exports = Mutation;
