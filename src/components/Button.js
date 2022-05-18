import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);

    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
`;

const Button = ({ text, link }) => {
  return (
    <Btn>
      <a href={link} arial-label={text} target="_blank" rel="noreferrer">
        {text}
      </a>
    </Btn>
  );
};

export default Button;
