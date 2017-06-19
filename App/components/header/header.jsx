import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from './Link';
import { Action } from '../app/';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navStyle: 'default',
    };
    this.scrollFunction = this.scrollListener.bind(this);
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  attachScrollListener() {
    const el = window;
    el.addEventListener('scroll', this.scrollFunction, true);
    el.addEventListener('resize', this.scrollFunction, true);
  }

  detachScrollListener() {
    const el = window;
    el.removeEventListener('scroll', this.scrollFunction, true);
    el.removeEventListener('resize', this.scrollFunction, true);
  }

  scrollListener(e) {
    const el = window;
    const windowScrollTop = (window.pageYOffset !== undefined) ?
                            window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (windowScrollTop < 90 && this.state.navStyle !== 'default') {
      this.setState({ navStyle: 'default' });
    } else if (windowScrollTop >= 90 && this.state.navStyle !== 'fix') {
      this.setState({ navStyle: 'fix' });
    }


    return windowScrollTop;
  }

  render() {
    return (
      <header className={this.state.navStyle}>
        <nav>
          <Link page="intro" text="Intro" />
          <Link page="about" text="About" />
          <Link page="skill" text="Skill" />
          <Link page="experience" text="Experience" />
          <Link page="contact" text="Contact" />
          <a href="">中英</a>
        </nav>
      </header>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return ({
    onchangeNav: (style) => {
      dispatch(Action.changeNav(style));
    },
  });
};

export default connect(null, mapDispatchToProps)(Header);
