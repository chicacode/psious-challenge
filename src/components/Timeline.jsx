import React from 'react';
import '../assets/styles/components/Timeline.scss';

const Timeline = ({ children }) => (
  <section className='section-container'>
    <div className='section-container-item'>
      {children}
    </div>
  </section>
);

export default Timeline;