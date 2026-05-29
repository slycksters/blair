import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import {
  CursedObjectsPage,
  GhostTypeViewPage,
  GhostTypesPage,
  GuidesPage,
  HomePage,
  ItemsPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/blair',
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/blair/ghost-types',
        element: <GhostTypesPage />,
      },
      {
        path: '/blair/ghost-types/:name',
        element: <GhostTypeViewPage />,
      },
      {
        path: '/blair/items',
        element: <ItemsPage />,
      },
      {
        path: '/blair/cursed-objects',
        element: <CursedObjectsPage />,
      },
      {
        path: '/blair/guides',
        element: <GuidesPage />,
      },
    ],
  },
]);
