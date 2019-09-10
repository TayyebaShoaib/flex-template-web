import styled from 'styled-components';

const SuggestionsCss = styled.div`
  max-width: 1120px;
  padding: 1em;
  margin: 3em auto 0;
  width: 100%;
  .flex {
    background-color: #dead2c;
  }
  div.suggestion {
    border-width: 0 0 4px 0;
    border-style: dotted;
    border-color: #fff;
    border-image-source: url('./dot.svg');
    min-height: 150px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    a {
      max-width: 169px;
    }
  }
  div.suggestion:last-child {
    border-bottom: 0;
  }
  div a {
    color: #fff;
  }
  div a:hover {
    text-decoration: none;
  }
  a span {
    text-decoration: underline;
  }
  @media (min-width: 576px) {
    .flex {
      display: flex;
      padding: 1em 0;
    }
    div.suggestion {
      min-height: 250px;
      border-width: 0 4px 0 0;
    }
    div.suggestion:last-child {
      border-width: 0;
    }
  }
  @media (min-width: 768px) {
    div.suggestion a {
      font-size: 25px;
      line-height: 1.3;
      max-width: 220px;
    }
  }
`;

export default SuggestionsCss;
