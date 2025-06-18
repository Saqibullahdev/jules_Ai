import React from 'react';
import './App.css'; // Ensure App.css is imported
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Members from './components/Members';
import Mission from './components/Mission';
import Workshops from './components/Workshops';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      {/* Add IDs to sections for # links to work */}
      <div id='mission'><Mission /></div>
      <div id='members'><Members /></div>
      <div id='workshops'><Workshops /></div>
      <div id='events'><Events /></div>
      <Footer />
    </div>
  );
}

export default App;
