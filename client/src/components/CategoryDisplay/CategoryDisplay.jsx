import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Container } from "react-bootstrap";

import "./CategoryDisplay.css";
import animals from "../../assets/images";

const CATERGORIES_QUERY = gql`
  {
    categories {
      id
      category
      image
      slug
    }
  }
`;

function CategoryDisplay() {
  const { data, loading } = useQuery(CATERGORIES_QUERY);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="CategoryDisplay">
      <Container className="CategoryDisplay-container">
        {data.categories.map((category) => {
          return (
            <div key={category.id}>
              <Link
                to={`/products/${category.slug}`}
                className="CategoryDisplay-card-container"
              >
                <div className="CategoryDisplay-card">
                  <img src={animals[category.image]} alt="temp" />
                </div>
                <h3>{category.category}</h3>
              </Link>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default CategoryDisplay;
