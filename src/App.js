import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom';
import Bloggers from './components/main/Bloggers/Bloggers';
import ProfileInfo from './components/main/Bloggers/ProfileInfo/ProfileInfo';
import { ProfileInfoСlip } from './components/main/Bloggers/ProfileInfo/ProfileInfo';
import Outherbloggers from './components/main/Bloggers/Outherbloggers/Outherbloggers'
import Way from './components/main/way/way'

function App() {

  let way = "Главная";

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Way />
        <Route path='/bloggers' render={() => <Bloggers />} />
        <Route path='/blogger' render={() => <ProfileInfo />} />
        <Route path='/blogger' render={() => <ProfileInfoСlip />} />
        <Route path='/blogger' render={() => <Outherbloggers />} />
        <Footer />
      </div>

    </BrowserRouter>

  );
}

export default App;
