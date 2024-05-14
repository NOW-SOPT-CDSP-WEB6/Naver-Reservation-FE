import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DonePage from '@/pages/donePage/DonePage';
import HomePage from '@/pages/homePage/HomePage';
import KeywordPage from '@/pages/keywordPage/KeywordPage';
import ReviewPage from '@/pages/reviewPage/ReviewPage';

import App from '@/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'keyword',
        element: <KeywordPage />,
      },
      {
        path: 'review',
        element: <ReviewPage />,
      },
      {
        path: 'done',
        element: <DonePage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
