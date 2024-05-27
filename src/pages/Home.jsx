import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";

export const Home = () => {
    return (
      <div className="text-center">
      <Header/>
      <Main/>
      <Footer/>
      </div>
    )
}

