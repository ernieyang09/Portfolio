import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import { About } from '../features/about';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      <section id='intro'>

      </section>
      <About />
      <section id='skill' class ='test'>
      skill
      </section>
      <section id='Experience' class ='test'>
      Experience
      </section>
      <section id='Contact' class ='test'>
      Contact
      </section>
      <footer>

      </footer>
    </div>)
  }

}

export default App;
