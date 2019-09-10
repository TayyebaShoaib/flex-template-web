import styled from 'styled-components';

const RecentlyListedCss = styled.div`
  background-color: #fff;
  max-width: 1120px;
  width: 100%;
  padding: 1em;
  margin: 0 auto;
  > div.heading {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    div.right,
    div.left {
      background-image: linear-gradient(to right, #dead2c 10%, rgba(255, 255, 255, 0) 0%);
      background-position: center;
      background-size: 20px 2px;
      background-repeat: repeat-x;
    }
    div.left {
      margin-right: 1em;
    }
    div.right {
      margin-left: 1em;
    }
  }
  div.hero {
    position: relative;
    img {
      width: 100%;
    }
    .hero-content {
      position: absolute;
      max-width: 350px;
      text-align: center;
      top: 10%;
      left: 0;
      right: 0;
      margin-right: auto;
      margin-left: auto;
      p {
        color: #fff;
      }
      button {
        color: #fff;
        background-color: #dead2c;
        border: 0;
        padding: 0.5em 1em;
      }
      @media (min-width: 768px) {
        top: 15%;
        left: 5%;
        right: auto;
        max-width: 300px;
        p {
          margin-bottom: 1.5em;
        }
      }
      @media (min-width: 992px) {
        top: 30%;
      }
    }
  }
  h1 {
    text-align: center;
  }
`;

export default RecentlyListedCss;
