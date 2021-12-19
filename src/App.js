import React, { useState } from 'react';
import About from './components/About'
import Header from './components/Header'
import ContactForm from './components/Contact'


function App() {
  return (
   <div>
     <Header ></Header>
     <main>
       <About></About>
       //display based on the nav selection
     </main>
   </div>
  );
}

export default App;
