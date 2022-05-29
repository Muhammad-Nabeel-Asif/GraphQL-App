import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";

const ANIMALS_QUERY = gql`
  query {
    animals {
      id
      image
      title
      price
      slug
    }
  }
`;

const ADD_ANIMAL_MUTATION = gql`
  mutation (
    $image: String!
    $category: String!
    $title: String!
    $rating: Float!
    $price: String!
    $description: [String!]!
    $slug: String!
    $stock: Int!
  ) {
    addAnimal(
      image: $image
      category: $category
      title: $title
      rating: $rating
      price: $price
      description: $description
      slug: $slug
      stock: $stock
    ) {
      id
    }
  }
`;

function LandingPage() {
  const { data, loading } = useQuery(ANIMALS_QUERY);
  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
      <button
        onClick={() =>
          addAnimal({
            variables: {
              image: "ostrich",
              category: "1",
              title: "This a really cool ostrich",
              rating: 3.5,
              price: "32,333",
              description: ["das"],
              slug: "ostrich",
              stock: 13,
            },
          })
        }
      >
        Click to add Ostrich
      </button>
    </div>
  );
}

export default LandingPage;
