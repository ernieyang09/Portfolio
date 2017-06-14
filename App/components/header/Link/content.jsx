import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Velocity from 'velocity-animate';
import classes from './link.scss';
import { Action } from '../../app';


const mapStateToProps = (state) => {
  return ({
    current: state.getIn(['App', 'Page']),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onClick: (e, page) => {
      e.preventDefault();
      Velocity(document.getElementById(page), 'scroll', {
        duration: 500,
        offset: -(document.getElementsByTagName('header')[0].clientHeight),
        easing: 'ease-in-out',
      });
      dispatch(Action.changePage(page));
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
    [classes.active]: page === current,
  });

  return (
    <a href={`#${page}`} className={btnClass} onClick={(e) => { onClick(e,page); }}>{text}</a>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
