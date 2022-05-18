import React from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100w;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
  width: 705;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Roadmap() {
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
      </Container>
    </Section>
  ); 
}

export default Roadmap;
