import React from 'react';
import SuggestionsCss from './SuggestionsCss';

const Suggestions = () => {
  return (
    <SuggestionsCss>
      <div className="flex">
        <div className="suggestion">
          <a href="">
            Want to <span>list an item?</span>
          </a>
        </div>
        <div className="suggestion">
          <a href="">
            Tips on how to <span>take good photos</span> of your products?
          </a>
        </div>
        <div className="suggestion">
          <a href="">
            Suggestions on <span>how to sell quick?</span>
          </a>
        </div>
      </div>
    </SuggestionsCss>
  );
};

export default Suggestions;
