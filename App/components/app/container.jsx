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
import Footer from '../footer/footer';

require('flexboxgrid');
require('../../assets/main.scss');
require('../../assets/font.css');
require('../../assets/normalize.css');


class App extends React.Component {
  render() {
    return (
      <div style={{ overflow: 'auto' }}>
        <Header />
        <Intro />
        <About />
        <Skill />
        <Experience />
        <Contact />
        <Footer />
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
