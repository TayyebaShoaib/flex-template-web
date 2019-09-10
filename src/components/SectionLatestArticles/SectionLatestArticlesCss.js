import styled from 'styled-components';

const SectionLatestArticlesCss = styled.div`
  background-color: #fff;
  max-width: 1120px;
  width: 100%;
  padding: 1em;
  margin: 0 auto;
  > div.heading {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    div.right hr,
    div.left hr {
      border-width: 4px 0 0 0;
      border-style: dotted;
      border-color: #dead2c;
      border-image-source: url('./dot.svg');
    }
    div.left {
      margin-right: 1em;
    }
    div.right {
      margin-left: 1em;
    }
  }
  .articles {
    margin-top: 1em;
  }
  .article {
    max-width: 280px;
    margin: 0 auto 2em;
    img {
      width: 100%;
    }
    h2,
    span {
      color: rgb(0, 0, 0);
    }
    h2 {
      margin: 0.5em 0 0.3em;
      line-height: 1.25;
    }
  }
  @media (min-width: 576px) {
    .articles {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      .article {
        max-width: 100%;
        margin: 0;
      }
    }
  }
  @media (min-width: 768px) {
    .articles {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 40px;
    }
  }
`;

export default SectionLatestArticlesCss;
