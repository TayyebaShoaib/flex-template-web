import React, { Component } from 'react';
import RecentlyListedCss from './SectionRecentlyListedCss.js';

const SectionRecentlyListed = props => {
  return (
    <RecentlyListedCss>
      <div className="heading">
        <div className="left" />
        <h1>Recently Listed</h1>
        <div className="right" />
      </div>
      <div className="hero">
        <img src={require('./babyWithDinasour.png')} alt="" />
        <div className="hero-content">
          <p>
            The Octopus Club has a community of friends and professionals who share knowledge and
            personal experiences with you on pregnancy and parenthood{' '}
          </p>
          <button>Find out more</button>
        </div>
      </div>
    </RecentlyListedCss>
  );
};

export default SectionRecentlyListed;
