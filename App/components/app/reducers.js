import immutable from 'immutable';
import constants from './constants';

const initstate = immutable.fromJS({
  Page: 'intro',
});

const App = (state = initstate, action) => {
  switch (action.type) {
    case constants.changePage: {
      return state.set('Page', action.Page);
    }
    default:
      return state;
  }
};

export default App;
