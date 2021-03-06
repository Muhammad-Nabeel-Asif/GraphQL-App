import React from "react";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

import animals from "../../assets/images";
import "./MainHero.css";

const FETCH_MAIN_CARDS = gql`
  {
    mainCards {
      title
      image
    }
  }
`;

function MainHero() {
  const { loading, data } = useQuery(FETCH_MAIN_CARDS);

  if (loading) return <div>loading...</div>;

  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} alt="rhino" />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card) => {
            return (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <img
                  src={animals[card.image]}
                  alt="animals"
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
