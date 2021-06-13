import React from 'react';
import Header from './Header';
import Timeline from '../components/Timeline';
import ItemList from './ItemList';
import Footer from './Footer';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => {

  return (
    <div className='Layout'>
      <Header />
      {children}
      <main>
        <h1 id="title">Virtual Reality</h1>
        <p id="description">The evolution of the psyche</p>
      </main>
        <Timeline>
          <ItemList />
        </Timeline>
      <Footer />
    </div>
  )
};

export default Layout;