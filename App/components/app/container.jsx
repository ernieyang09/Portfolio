/* eslint class-methods-use-this: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Header from '../header/header';
import { Intro } from '../../features/intro';
import { About } from '../../features/about';
import { Skill } from '../../features/skill';
import { Experience } from '../../features/experience';
import { Contact } from '../../features/contact';

require('../../assets/main.scss');
require('../../assets/normalize.css');


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.scrollFunction = this.scrollListener.bind(this);
  // }
  //
  // componentDidMount() {
  //   this.attachScrollListener();
  // }
  //
  // componentWillUnmount() {
  //   this.detachScrollListener();
  // }
  //
  // attachScrollListener() {
  //   const el = window;
  //   el.addEventListener('scroll', this.scrollFunction, true);
  //   el.addEventListener('resize', this.scrollFunction, true);
  // }
  //
  // detachScrollListener() {
  //   const el = window;
  //   el.removeEventListener('scroll', this.scrollFunction, true);
  //   el.removeEventListener('resize', this.scrollFunction, true);
  // }
  //
  // scrollListener(e) {
  //   const el = window;
  //   const windowScrollTop = (window.pageYOffset !== undefined) ?
  //                           window.pageYOffset :
  //   (document.documentElement || document.body.parentNode || document.body).scrollTop;
  //
  //   if (windowScrollTop === 0 && this.props.navStyle !== 'default') {
  //     this.props.onchangeNav('default');
  //   } else if (windowScrollTop !== 0 && this.props.navStyle !== 'fix') {
  //     this.props.onchangeNav('fix');
  //   }
  //
  //
  //   return windowScrollTop;
  // }


  render() {
    return (
      <div style={{ overflow: 'auto' }}>
        <Header />
        <Intro />
        <About />
        <Skill />
        <Experience />
        <Contact />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return ({
    onchangeNav: (style) => {
      dispatch(Action.changeNav(style));
    },
  });
};


export default connect(null, mapDispatchToProps)(App);
