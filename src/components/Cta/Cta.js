import React from 'react';
import styled from 'styled-components';

const CtaCss = styled.div`
  max-width: 1120px;
  width: 100%;
  padding: 1em;
  margin: 2em auto 0;
  position: relative;
  img {
    width: 100%;
  }
  a {
    background-color: #dead2c;
    color: #fff;
    padding: 0.5em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 15%;
    margin-left: auto;
    margin-right: auto;
    max-width: 240px;
    font-size: 14px;
    text-align: center;
  }
  a:hover {
    text-decoration: none;
  }
  @media (min-width: 576px) {
    a {
      font-size: 18px;
      max-width: 280px;
      padding: 0.7em;
    }
  }
`;

const Cta = () => {
  return (
    <CtaCss>
      <img src={require('./cta.jpg')} alt="" />
      <a href="">INVITE YOUR FRIENDS TO JOIN</a>
    </CtaCss>
  );
};

export default Cta;
