import React from 'react';
import { Footer, Blog, Possibility, Features, Header, Whatgpt3} from './containers';
import { CTA, Brand, NavBar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App