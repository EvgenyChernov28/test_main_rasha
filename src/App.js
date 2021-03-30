import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom';
import Bloggers from './components/main/Bloggers/Bloggers'

function App() {

  let way = "Главная";

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <div>
          {way}
        </div>

        <Bloggers />

        <Footer />
      </div>

    </BrowserRouter>

  );
}

export default App;
