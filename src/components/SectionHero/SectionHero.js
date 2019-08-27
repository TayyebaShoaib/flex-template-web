import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <img src={require('../../assets/octopus.png')} alt="octopus logo" />
        <p>
          A place for you to buy, sell, swap or give baby/kids stuff. Born from the constant need to
          update our baby’s things to be age appropriate, the preference for a clutter-free home
          and, of course, the environment.
        </p>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
