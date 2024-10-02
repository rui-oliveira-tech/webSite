export const pageList: Page[] = [
  {
    navigationBar: true,
    name: "homepage",
    url: "/",
  },
  {
    navigationBar: true,
    name: "cv",
    url: "/cv",
  },
  /*   {
    navigationBar: false,
    name: "portfolio",
    url: "/portfolio",
  }, */
];

export type Page = {
  navigationBar: boolean;
  name: string;
  url: string;
};
