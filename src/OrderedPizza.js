import React from "react";
import styled from "styled-components";
import pizza from "./Pizza.png";
import gif from "./giphy.gif";
const Main = styled.div`
  text-align: center;
`;
const Photo = styled.img`
  width: 100%;
  height: 50vh;
`;
const Conf = styled.h3`
  text-align: center;
`;
const Order = () => {
  return (
    <Main>
      <Photo src={pizza} />
      <Conf>Siparişiniz Başarıyla Oluşturuldu!!!</Conf>

      <p> Enjoy this cat with Pizza</p>
      <img src={gif} alt="igf" />
    </Main>
  );
};

export default Order;
