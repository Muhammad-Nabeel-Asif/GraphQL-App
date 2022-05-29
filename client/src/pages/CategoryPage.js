import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import CardDisplay from "../components/CardDisplay/CardDisplay";

const CATEGORY_QUERY = gql`
  query ($slug: String!) {
    category(slug: $slug) {
      id
      category
      slug
      animals {
        id
        title
        price
        image
      }
    }
  }
`;

function CategoryPage() {
  const { slug } = useParams();
  const { data, loading } = useQuery(CATEGORY_QUERY, {
    variables: {
      slug,
    },
  });

  if (loading) return <div>loading...</div>;

  console.log(data);

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data.category.category}
          <CardDisplay animals={data.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
