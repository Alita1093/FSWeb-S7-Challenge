import React, { useEffect } from "react";
import MainPage from "./homepage";
import { Route } from "react-router-dom";
import { toppings } from "./datas/toppings";
import { useState } from "react";
import Form from "./Form";
import Headers from "./header";
import { Sauces } from "./datas/Sauce";
import { Breads } from "./datas/Breads";
import Order from "./OrderedPizza";
import * as Yup from "yup";
import axios from "axios";
let soslar = [];
Sauces.map((b) => {
  return soslar.push(Object.values(b)[0]);
});

let ekmekler = [];
Breads.map((b) => {
  return ekmekler.push(Object.values(b)[0]);
});
const formSchema = Yup.object().shape({
  sosSecimi: Yup.string()
    .required("1 adet sos seçmeniz gereklidir")
    .oneOf(soslar),
  ekmekSecimi: Yup.string()
    .required("1 adet ekmek seçmeniz gereklidir")
    .oneOf(ekmekler),
  piece: Yup.number()
    .required("Sipariş edilecek pizza sayısını girmelisiniz")
    .min(1, "En az 1 adet pizza sipariş edebilirsiniz   "),
  ekstralar: Yup.array()
    .required("up to 10")
    .min(1, "En az 1 eklenti seçmelisiniz")
    .max(10, "En fazla 10 eklenti seçebilirsiniz"),
  Specs: Yup.string().max(255, "Limiti aştınız daha kısa yazmalısınız"),
  sizes: Yup.string()
    .required()
    .oneOf(
      ["Büyük", "Orta", "Küçük"],
      "Listeden bir pizza boyutu seçmeniz gerekiyor"
    ),
});
function App() {
  const [formVerisi, setFormVerisi] = useState({
    sosSecimi: "Original",
    ekmekSecimi: "French Bread Pizza",
    Specs: "",
    piece: 0,
    sizes: "Büyük",
  });
  const [errors, setErrors] = useState({
    sosSecimi: "",
    ekmekSecimi: "",
    piece: "",
    ekstralar: "",
    Specs: "",
    sizes: "",
  });
  const [pizzaKayıt, setPizzaKayıt] = useState({
    sosSecimi: "",
    ekmekSecimi: "",
    piece: "",
    Specs: "",
    sizes: "",
  });
  function checkFormErrors(name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }

  const [ekstra, setEkstra] = useState([]);
  function handleDegisiklik(event) {
    const { value, name } = event.target;
    checkFormErrors(name, value);
    setFormVerisi({
      ...formVerisi,
      [name]: value,
    });
  }

  console.log(formVerisi);
  function handleChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setEkstra([...ekstra, value]);
    } else {
      setEkstra(ekstra.filter((e) => e !== value));
    }
  }
  formVerisi.ekstralar = ekstra;

  const [buttonDisable, setButtonDisable] = useState(true);
  useEffect(() => {
    formSchema.isValid(formVerisi).then((sonuc) => setButtonDisable(!sonuc));
  }, [formVerisi]);
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formVerisi)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }
  console.log(formVerisi);

  return (
    <>
      <Headers />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/pizzalar/">
        <Form
          toppings={toppings}
          formVerisi={formVerisi}
          handleDegisiklik={handleDegisiklik}
          Sauces={Sauces}
          Breads={Breads}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          buttonDisable={buttonDisable}
          errors={errors}
          ekstra={ekstra}
        />
      </Route>
      <Route path="/Order">
        <Order />
      </Route>
    </>
  );
}
export default App;
