import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
  font-style: italic;
  font-weight: 100;
  font-family: Verdana;
`;
const Header = styled.header``;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Solp = styled.p`
  display: inline;
  margin-left: 5rem;
`;
const Button = styled.div`
  background-color: black;
  color: white;
  width: 5rem;
  padding: 0.5rem;
  text-align: center;
  cursor = default;
`;
const Buttons = styled.div`
  margin-right: 5rem;
  display: flex;
`;
const Headers = () => {
  let historyss = useHistory();
  function handleClick() {
    historyss.push("/");
  }
  return (
    <div>
      <Title>Kopernik Pizza</Title>
      <Header>
        <Nav>
          <Solp>Techno</Solp>
          <Buttons>
            <Button data-cy="HomeButton" onClick={handleClick}>
              Home
            </Button>
          </Buttons>
        </Nav>
      </Header>
    </div>
  );
};
export default Headers;
