import Homepage from '../Homepage';
import Cv from "../Cv";
import Portfolio from "../Portfolio";

export const pageList = [
  /*   {
      url: '',
      Component: Portfolio
    }, */
  {
    navigationBar: false,
    url: '',
    Component: Homepage
  },
  {
    navigationBar: true,
    url: 'cv',
    Component: Cv
  },
  {
    navigationBar: true,
    url: 'portfolio',
    Component: Portfolio
  },
]