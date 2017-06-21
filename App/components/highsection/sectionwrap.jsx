import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Action } from '../app';

class SectionWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: false,
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
    const ref = this.child.section || this.child.getWrappedInstance().section;

    const windowScrollTop = (window.pageYOffset !== undefined) ?
                            window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if ((windowScrollTop > ref.offsetTop - 120
      && windowScrollTop < ref.offsetTop + ref.offsetHeight - 90)
      && !this.state.enter) {
      this.setState({ enter: true });
      this.props.onScroll(ref.id);
    } else if ((windowScrollTop < ref.offsetTop - 120
      || windowScrollTop > ref.offsetTop + ref.offsetHeight - 90)
      && this.state.enter) {
      this.setState({ enter: false });
    }
  }

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      ref: (n) => { this.child = n; },
      enter: this.state.enter,
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
