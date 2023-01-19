import React from "react";
import styled from "styled-components";
import mainPhoto from "./Pizza.png";
import pizza1 from "./pizza-1.png";
import pizza2 from "./pizza-2.png";
import pizza3 from "./pizza-3.png";
import { Link } from "react-router-dom";

const Pizzalar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;
const Pizza = styled.div``;
const Pizzailk = styled.img`
  width: 150px;
`;
const Aciklama = styled.p`
  margin-top: 0px;
`;
const AltBaslik = styled.h3`
  margin-left: 50px;
`;

const Photo = styled.img`
  width: 100%;
  height: 50vh;
`;
function handleOVer(event) {
  event.target.style.width = "175px";
}
function handleLeave(event) {
  event.target.style.width = "150px";
}

const MainPage = () => {
  return (
    <div>
      <Photo src={mainPhoto}></Photo>
      <div>
        <AltBaslik>Hızlı Seçimler</AltBaslik>
        <Pizzalar>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pizzalar/0"
          >
            <Pizza>
              <Pizzailk
                onMouseOver={handleOVer}
                onMouseLeave={handleLeave}
                src={pizza1}
                data-cy="pizza1"
              ></Pizzailk>
              <Aciklama>Karışık Pizza</Aciklama>
              <Aciklama>Furkan Ustanın Özel sosu ile</Aciklama>
            </Pizza>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pizzalar/1"
          >
            <Pizza>
              <Pizzailk
                onMouseOver={handleOVer}
                onMouseLeave={handleLeave}
                src={pizza2}
                data-cy="pizza2"
              ></Pizzailk>
              <Aciklama>Vegan Pizza</Aciklama>
              <Aciklama>Furkan Ustanın Özel sosu ile</Aciklama>
            </Pizza>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pizzalar/2"
          >
            <Pizza>
              <Pizzailk
                onMouseOver={handleOVer}
                onMouseLeave={handleLeave}
                src={pizza3}
                data-cy="pizza3"
              ></Pizzailk>
              <Aciklama>Mexico Pizza</Aciklama>
              <Aciklama>Furkan Ustanın Özel sosu ile</Aciklama>
            </Pizza>
          </Link>
        </Pizzalar>
      </div>
    </div>
  );
};
export default MainPage;
