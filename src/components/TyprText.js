import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-items: flex-start;

  span {
    text-transform: capitalize;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }
`;

const SubTitle = styled.h3`
  font-size: 25px;
  color: ${props => `rgba(${props.theme.textRgba},0.6)`};
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`;

function TyprText() {
  return (
    <Title>
      Discover a new era of cool
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class ="text-1">NFTs.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class ="text-2">Collectible Items..</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class ="text-3">ape Killer!</span>`)
            .pauseFor(2000)
            .deleteAll()

            .start();
        }}
      />
      <SubTitle>Border of apes? Try somthing new.</SubTitle>
      <ButtonContainer>
        <Button text="Expore" link="#about" />
      </ButtonContainer>
    </Title>
  );
}

export default TyprText;
