import Homepage from '../Homepage';
import Cv from "../Cv";
import Portfolio from "../Portfolio";

export const pageList = [
  {
    navigationBar: true,
    name: 'homepage',
    url: '',
    Component: Homepage
  },
  {
    navigationBar: true,
    name: 'cv',
    url: 'cv',
    Component: Cv
  },
/*   {
    navigationBar: true,
    name: 'portfolio',
    url: 'portfolio',
    Component: Portfolio
  }, */
]