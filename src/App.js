import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom';
import Bloggers from './components/main/Bloggers/Bloggers';
import ProfileInfo from './components/main/Bloggers/ProfileInfo/ProfileInfo';
import {ProfileInfoСlip} from './components/main/Bloggers/ProfileInfo/ProfileInfo';
import Outherbloggers from './components/main/Bloggers/Outherbloggers/Outherbloggers'

function App() {

  let way = "Главная";

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <div>
          {way}
        </div>

        {/* <Bloggers /> */}
        <ProfileInfo />
        <ProfileInfoСlip />

        <Outherbloggers />
        <Footer />
      </div>

    </BrowserRouter>

  );
}

export default App;
