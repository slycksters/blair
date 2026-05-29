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
    path: '/',
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'ghost-types',
        element: <GhostTypesPage />,
      },
      {
        path: 'ghost-types/:name',
        element: <GhostTypeViewPage />,
      },
      {
        path: 'items',
        element: <ItemsPage />,
      },
      {
        path: 'cursed-objects',
        element: <CursedObjectsPage />,
      },
      {
        path: 'guides',
        element: <GuidesPage />,
      },
    ],
  },
]);
