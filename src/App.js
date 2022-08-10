import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import MainPage from "./MainPage";
import Navbar from "./Components/Navbar";
import Card from "./Card";
import Footer from "./Components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const App = () => {
  const [cardContent, setcardContent] = useState([]);

  console.log(cardContent);
  const addingVal = (value) => {
    setcardContent((oldVal) => {
      return [...oldVal, value];
    });
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage passVal={addingVal} />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Card data={cardContent} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
