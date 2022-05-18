import React from "react";
import styled from "styled-components";

import ButtonDark from "../ButtonDark";
import Carasel from "../Carasel";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.body};
  align-items: flex-start;
  margin: 0 auto;
`;
const SubTitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};

  width: 80%;
  color: ${(props) => props.theme.body};
  align-items: flex-start;
  margin: 1rem auto;
`;
const ButtonContain = styled.div`
  width: 80%;
  margin: 1 auto;
  align-items: flex-start; ;
`;
const About = () => {
  return (
    <Section>
      <Container>
        <Box>
          {" "}
          <Carasel />
        </Box>
        <Box>
          <Title>Welcome To The Weirdos Club.</Title>
          <SubTitle>
            THE WEIRDOS CLUB is private collection of NFTs-Unique digital
            collectibles.The Weirdos are stored as{" "}
          </SubTitle>
          <SubTitle>
            THE WEIRDOS CLUB is private collection of NFTs-Unique digital
            collectibles.The Weirdos are stored as{" "}
          </SubTitle>

          <ButtonContain>
            <ButtonDark text="JOIN OUR DISCORD" link="#" />
          </ButtonContain>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
