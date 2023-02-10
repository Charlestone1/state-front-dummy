import React, { useState } from "react";
import styled from "styled-components";
import {BsPlusLg} from "react-icons/bs";
import {FaMinus} from "react-icons/fa";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #164E63;
  margin: 3rem 0;

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;
const Title = styled.div`
  font-size: 0.875em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 0.4rem;
  color: #010606;
  
  
  p {
    font-size: 1rem;
  font-weight: 300;
  // line-height: 1.3rem;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  color: #164E63;
`;

const Indicator = styled.span`
  font-size: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: auto;
  color: #164E63;

  
  @media (max-width: 48em) {
    font-size: 2em;
  }
`;

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? (
          <Indicator>
            <FaMinus />
          </Indicator>
        ) : (
          <Indicator>
            <BsPlusLg />
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
