import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Arthouse, Contact, Header, Work, Brands, Graduations, Portraits, Belongings, Slfmade, Kalsoni} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Header />} />
           <Route path="/work" element={<Work />} />
          <Route path="/Arthouse" element={<Arthouse />} />
          <Route path='/Brands' element={<Brands /> } />
          <Route path='/Graduations' element={<Graduations /> } />
          <Route path='/Portraits' element={<Portraits /> } />
          <Route path='/Belongings' element={<Belongings /> } />
          <Route path='/Slfmade' element={<Slfmade /> } />
          <Route path='/Kalsoni' element={<Kalsoni /> } />
          <Route path='/Contact' element={<Contact /> } />

         
          {/* Add your other routes here as you create them */}
        </Routes>
        

      </div>
    </Router>
  );
};

export default App;
