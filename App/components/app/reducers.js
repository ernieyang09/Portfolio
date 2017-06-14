import immutable from 'immutable';
import constants from './constants';

const initstate = immutable.fromJS({
  Page: 'intro',
  NavStyle: 'default',
  ScrollHeight: 0,
});

const App = (state = initstate, action) => {
  switch (action.type) {
    case constants.changePage: {
      return state.set('Page', action.Page);
    }
    case constants.changeNav: {
      return state.set('NavStyle', action.Style)
    }
    default:
      return state;
  }
};

export default App;
