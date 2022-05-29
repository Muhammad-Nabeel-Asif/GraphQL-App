const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    const animal = animals.find((animal) => animal.slug === args.slug);
    return animal;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    const category = categories.find((category) => category.slug === args.slug);
    return category;
  },
};

module.exports = Query;
