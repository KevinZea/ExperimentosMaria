/* istanbul ignore file */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import "./Container.css";

import { BestRecipes } from "./components/main/ourBestRecipes/BestRecipes";
import { Contact } from "./components/main/contact/Contact";
import Experiment from "./components/experiment/Experiment";

function Container() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={
        <>
          <Header></Header>
          <Hero></Hero>
          <BestRecipes></BestRecipes>
          <Contact></Contact>
        </>}></Route>

        <Route exact path="/experiment/:id" element={<Experiment />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default Container;
