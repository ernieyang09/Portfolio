import constants from './constants';


export const changePage = (Page) => {
  return {
    type: constants.changePage,
    Page,
  };
};

export const changeNav = (Style) => {
  return {
    type: constants.changeNav,
    Style,
  }
}

export const changelanguage = (language) => {
  return {
    type: constants.changeLanguage,
    language,
  };
};
