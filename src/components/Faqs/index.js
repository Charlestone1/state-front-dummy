import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: #164E63;

  margin: 1rem auto;
  // border-bottom: 2px solid #164E63;
  width: fit-content;

  @media (max-width: 48em) {
    font-size: 2em;
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  .identify_span {
    font-weight: bold;
    color: #164E63;
  }
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faqs = () => {
  return (
    <Section id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="How long does it take to verify a user?">
            <p>
              The process of verifying a new user in <span className="identify_span">Identify</span>  is almost seamless, and fast. all you need to do is provide the correct data.
            </p>
          </Accordion>
          <Accordion title="Is there an API for other websites?">
            <p>
              Yes. no need to log into out website to access the featues of <span className="identify_span">Identify</span>. Third party API has been provided for oginazational consumption.
            </p>
          </Accordion>
        </Box>
        <Box>
          <Accordion title="Can I try IDENTIFY without registration">
            <p>
              No. An unregistered account has very limited abilitites within the <span className="identify_span">Identify</span> system.
               Register and verify your account to use our great features.
              account at any time.
            </p>
          </Accordion>
          <Accordion title="Can I query the system without verification?">
            <p>
              Yes, we want you to start from where you stopped, making your
              transition to <span className="identify_span">Identify</span> to be as
              smooth as possible. You can import playlists here.
            </p>
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faqs;
