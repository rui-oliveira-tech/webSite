import Homepage from '../Homepage';
import Curriculum from "../Curriculum";
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
    Component: Curriculum
  },
/*   {
    navigationBar: true,
    name: 'portfolio',
    url: 'portfolio',
    Component: Portfolio
  }, */
]