import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Action } from '../app';

class SectionWrapper extends React.Component {
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
    const ref = this.child.section || this.child.getWrappedInstance().section;

    const windowScrollTop = (window.pageYOffset !== undefined) ?
                            window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
        this.props.onScroll('contact');
      } else if ((windowScrollTop > ref.offsetTop - 120
      && windowScrollTop < ref.offsetTop + ref.offsetHeight - 90)) {
        this.props.onScroll(ref.id);
    }
  }

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      ref: (n) => { this.child = n; },
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onScroll: (page) => {
      dispatch(Action.changePage(page));
    },
  });
};

export default connect(null, mapDispatchToProps)(SectionWrapper);
