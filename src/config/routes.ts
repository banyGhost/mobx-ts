interface NRoute {
  path: string;
  exact: boolean;
  importFunc: Function;
}

export const outerRoutes: NRoute[] = [
  {
    path: '/',
    exact: true,
    importFunc: () => import('../views/base/base'),
  },
];

export const innerRoutes: NRoute[] = [
  {
    path: '/',
    exact: true,
    importFunc: () => import('../views/todo/todo'),
  },
];
