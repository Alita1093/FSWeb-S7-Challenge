import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import littlepic from "./Pizza.jpg";

const AnaKisim = styled.div`
  width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const AltBaslikk = styled.h2`
  text-align: center;
`;
const KucukFoto = styled.img`
  width: 100%;
`;
const Assa = styled.h3`
  text-align: center;
`;
const Toppings = styled.div`
  display: flex;
  justify-content: space-between;
  height: 720px;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: stretch;
`;
const AltBolum = styled.p`
  background-color: #000033;
  font-size: 22px;
  color: white;
  padding: 0.2rem 1rem;
`;
const Justify = styled.p`
  padding: 7px;
`;
const Input = styled.input`
  width: 620px;
  margin: auto;
  display: block;
  height: 30px;
  text-align: center;
`;
const Button = styled.button`
  width: 575px;
  height: 30px;
`;
const Div = styled.div`
  width: 620px;
  margin: auto;
  display: block;
  height: 30px;
  text-align: center;
`;
const PieceInput = styled.input`
  width: 35px;
  height: 30px;

  padding: 0px;
`;
const Warning = styled.p`
  text-align: center;
`;
const Form = (props) => {
  const {
    handleSubmit,
    formVerisi,
    handleDegisiklik,
    toppings,
    Sauces,
    Breads,
    handleChange,
    buttonDisable,
    errors,
    ekstra,
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AnaKisim>
          <AltBaslikk>Build your own pizza</AltBaslikk>
          <KucukFoto src={littlepic}></KucukFoto>
          <Assa>Build your own pizza</Assa>
          <AltBolum> Pizza boyutu Seçiniz</AltBolum>

          <label htmlFor="sizes">
            <select
              key="dropDown"
              id="sizes"
              name="sizes"
              onChange={handleDegisiklik}
              data-cy="dropDown"
            >
              <option key="Opt">Pizza boyutu Seçiniz</option>
              <option
                name="sizes"
                checked={formVerisi.sizes === "Büyük"}
                value="Büyük"
                key="Büyük"
              >
                Büyük
              </option>
              <option
                name="sizes"
                checked={formVerisi.sizes === "Orta"}
                value="Orta"
                key="Orta"
              >
                Orta
              </option>
              <option
                name="sizes"
                checked={formVerisi.sizes === "Küçük"}
                value="Küçük"
                key="Küçük"
              >
                Küçük
              </option>
            </select>
          </label>
          {errors.sizes !== "" ? (
            <p data-cy="sizeError">{errors.sizes}</p>
          ) : null}

          <AltBolum key="AltBolum">Choice Of Sauce</AltBolum>

          <div>
            {Sauces.map((list, index) => {
              return (
                <p>
                  <label htmlFor={`sos-${index}`}>
                    <input
                      type="radio"
                      value={list.isim}
                      id={`sos-${index}`}
                      name="sosSecimi"
                      checked={formVerisi.sosSecimi === list.isim}
                      onChange={handleDegisiklik}
                      key={list.isim}
                    />
                    {list.isim}
                  </label>
                </p>
              );
            })}
          </div>
          <AltBolum>Ekstra malzeme Seçiniz</AltBolum>
          {ekstra.length < 1 ? (
            <Warning data-cy="firstWarning">En az 1 sos seçmelisiniz!</Warning>
          ) : null}
          {ekstra.length > 10 ? (
            <Warning> En fazla 10 ekstra seçilebilir!</Warning>
          ) : null}
          <Toppings key="Toppings">
            {toppings.map(({ name }, index) => {
              return (
                <Justify
                  onMouseOver={(event) => {
                    event.target.style.fontSize = "16px";
                  }}
                  onMouseLeave={(event) => {
                    event.target.style.fontSize = "15px";
                  }}
                >
                  <input
                    id={`kosul-${index}`}
                    name={name}
                    type="checkbox"
                    onChange={handleChange}
                    value={name}
                    key={name}
                  />
                  <label htmlFor={`kosul-${index}`}>{name}</label>
                </Justify>
              );
            })}
          </Toppings>

          <AltBolum key="AltBolumBread">Choice of Bread</AltBolum>
          <div>
            {Breads.map((list, index) => {
              return (
                <div>
                  <label htmlFor={`ekmek-${index}`}>
                    <input
                      id={`ekmek-${index}`}
                      name="ekmekSecimi"
                      type="radio"
                      onChange={handleDegisiklik}
                      checked={formVerisi.ekmekSecimi === list.ekmek}
                      value={list.ekmek}
                      key={list.ekmek}
                    />
                    {list.ekmek}
                  </label>
                </div>
              );
            })}
          </div>
          <AltBolum key="SpecialIntruction">Special Instructions</AltBolum>
          <p>
            <label htmlFor="İstek"></label>
            <Input
              id="İstek"
              name="Specs"
              type="text"
              onChange={handleDegisiklik}
              value={formVerisi.Specs}
              placeholder="Anything else you'd like to add?"
              key="Istek"
              data-cy="OzelIstek"
            />
          </p>
          <Div>
            {errors.piece != null ? <p>{errors.piece}</p> : null}
            {errors.Specs != null ? <p>{errors.Specs}</p> : null}
            <label htmlFor="pieces">
              <PieceInput
                id="pieces"
                name="piece"
                type="number"
                onChange={handleDegisiklik}
                value={formVerisi.piece}
                key="piece"
                data-cy="piece-teset"
              />
            </label>

            <Link to="/Order">
              <Button
                key="SubmitButton"
                disabled={buttonDisable}
                type="submit"
                data-cy="order-test"
              >{`Add to Order ${formVerisi.piece * 17.99}$`}</Button>
            </Link>
          </Div>
        </AnaKisim>
      </form>
    </div>
  );
};
export default Form;
