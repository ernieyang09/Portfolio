/* eslint class-methods-use-this: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/header';
import SectionWrapper from '../highsection/sectionwrap';
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

const App = () => (
  <div style={{ overflow: 'hidden' }}>
    <Header />
    <SectionWrapper>
      <Intro />
    </SectionWrapper>
    <SectionWrapper>
      <About />
    </SectionWrapper>
    <SectionWrapper>
      <Skill />
    </SectionWrapper>
    <SectionWrapper>
      <Experience />
    </SectionWrapper>
    <SectionWrapper>
      <Contact />
    </SectionWrapper>
    <Footer />
  </div>
);

export default App;
