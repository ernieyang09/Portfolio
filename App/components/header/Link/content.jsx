import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Velocity from 'velocity-animate';
import constants from '../constants';

import './link.scss';

const mapStateToProps = (state) => {
  return ({
    current: state.getIn(['App', 'Page']),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onClick: (e, page) => {
      e.preventDefault();
      const offset = (page === 'intro') ? constants.navDefault : constants.navFix;

      Velocity(document.getElementById(page), 'scroll', {
        duration: 500,
        offset: -offset,
        easing: 'ease-in-out',
      });

    },
  });
};


const Link = ({
  text,
  page,
  current,
  onClick,
}) => {

  const btnClass = classNames({
    active: page === current,
  });

  return (
    <a href={`#${page}`} className={btnClass} onClick={(e) => { onClick(e,page); }}><span>{text}</span></a>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
