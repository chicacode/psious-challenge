import React from 'react';
import Header from './Header';
// import PicViewer from '../components/PicViewer';
// import PicViewerItem from '../components/PicViewerItem';
// import ErrorBoundary from '../containers/ErrorBoundary';
import Footer from './Footer';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => {

  return(
  <div className='Layout'>
       <Header />
       {children}
      <main>
        <h1 id="title">Realidad virtual</h1>
        <p id="description">The evolution of an icon</p>
      </main>
      <div className="layout-image-container">


      </div>
      <Footer />
  </div>
)};

export default Layout;