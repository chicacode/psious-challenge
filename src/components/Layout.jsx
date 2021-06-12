import React from 'react';
import Header from './Header';
import Timeline from '../components/Timeline';
import Item from '../components/Item';
import Footer from './Footer';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => {

  return (
    <div className='Layout'>
      <Header />
      {children}
      <main>
        <h1 id="title">Virtual Reality</h1>
        <p id="description">The evolution of an icon</p>
      </main>
      <div className="layout-image-container">

        <Timeline>
          <Item />
        </Timeline>

      </div>
      <Footer />
    </div>
  )
};

export default Layout;