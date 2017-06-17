import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from './Link';
import { Action } from '../app/';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
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

    if (windowScrollTop < 90 && this.props.navStyle !== 'default') {
      this.props.onchangeNav('default');
    } else if (windowScrollTop >= 90 && this.props.navStyle !== 'fix') {
      this.props.onchangeNav('fix');
    }


    return windowScrollTop;
  }

  render() {
    return (
      <header className={this.props.navStyle}>
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

// const Header = ({
//   navStyle
// }) => {
//   return (
//     <header className={`${classes[navStyle]}`}>
//       <nav>
//         <Link page="intro" text="Intro" />
//         <Link page="skill" text="Skill" />
//         <Link page="experience" text="Experience" />
//         <Link page="contact" text="Contact" />
//         <a href="">中英</a>
//       </nav>
//     </header>
//   );
// };

const mapStateToProps = (state) => {
  return ({
    navStyle: state.getIn(['App', 'NavStyle'])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onchangeNav: (style) => {
      dispatch(Action.changeNav(style));
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
