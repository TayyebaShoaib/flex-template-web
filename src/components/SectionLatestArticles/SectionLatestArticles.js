import React from 'react';
import SectionLatestArticlesCss from './SectionLatestArticlesCss';

const SectionLatestArticles = () => {
  return (
    <SectionLatestArticlesCss>
      <div className="heading">
        <div className="left">
          <hr />
        </div>
        <h1>Latest articles</h1>
        <div className="right">
          <hr />
        </div>
      </div>
      <div className="articles">
        <div className="article">
          <img src={require('./images/bump.jpg')} alt="" />
          <h2>Tools to help you keep calm during the last weeks of pregnancy</h2>
          <span>The Hypnobirthing Midwife</span>
        </div>
        <div className="article">
          <img src={require('./images/baby.jpg')} alt="" />
          <h2>Baby awake cycles</h2>
          <span>The Gentle Sleep Consultant</span>
        </div>
        <div className="article">
          <img src={require('./images/wrap.jpg')} alt="" />
          <h2>The benefits of carrying your baby</h2>
          <span>Consultant X</span>
        </div>
        <div className="article">
          <img src={require('./images/slinky.jpg')} alt="" />
          <h2>Tips on how to take great photos of your little one</h2>
          <span>Ana Rachel Estrougo</span>
        </div>
      </div>
    </SectionLatestArticlesCss>
  );
};

export default SectionLatestArticles;
