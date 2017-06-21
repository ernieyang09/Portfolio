import React from 'react';
import ReactDOM from 'react-dom';

const SectionConnect = Component => class HighSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: false,
    };
    console.log(this)
    this.scrollFunction = this.scrollListener.bind(this);
  }

  componentDidMount() {
    const ref = ReactDOM.findDOMNode(this);
    window.a = ref;
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

    return windowScrollTop;
  }

  render() {
    return <Component />;
  }

};


export default SectionConnect;
