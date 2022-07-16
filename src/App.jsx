import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import books from "./api/API";
import "./assets/styles/style.scss";
import Books from "./components/Books/Books";
import Control from "./components/Control/Control";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/navbar/Navabar";
import Private from "./components/Private/Private";
const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   books.getBooks().then((res) => setData(res));
  // }, []);

  // const obj = {
  //   id: uuidv4(),
  //   name: "Shaytanat",
  //   author: "Tohir Malik",
  //   price: "3000",
  // }

  // books.sendBooks(obj)

  // const sendData = () => {
  //   axios.post("http://localhost:5000/booklist", {
  //     id: uuidv4(),
  //     name: "Shaytanat",
  //     author: "Tohir Malik",
  //     price: "3000",
  //   });
  // };

  // const deleteData = () => {
  //   axios.delete("http://localhost:5000/booklist/1", {})
  // }

  // const updateData = () => {
  //   axios.put("http://localhost:5000/booklist/159f5a60-04cf-4037-9654-4eff1d81a690", {
  //     id: uuidv4(),
  //     name: "Otgan Kunlar",
  //     author: "Abdulla Qodiriy",
  //     price: "60000",
  //   })
  // }

  // // useEffect(() => {
  // //   const getData= async()=> {
  // //     fetch('http://localhost:5000/booklist')
  // //     .then((data) => data.json())
  // //     .then((result) => setData(result))
  // //     .catch((error) => {
  // //       return console.log(error);
  // //     })
  // //   }

  // //   getData()
  // // }, []);

  // // useEffect(() => {
  // //   const getData = async() => {
  // //     const response = await axios.get('http://localhost:5000/booklist');
  // //     setData(response.data)
  // //   }

  // //   getData();
  // // }, []);

  // console.log(data);

  return (
    <>
      {/* <button className="btn btn-primary" onClick={() => sendData()}>
        Send
      </button>
      <button className="btn btn-dark" onClick={() => deleteData()}>
        Delete
      </button>
      <button className="btn btn-danger" onClick={() => updateData()}>
        Update
      </button> */}
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Private />}>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/control" element={<Control />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
