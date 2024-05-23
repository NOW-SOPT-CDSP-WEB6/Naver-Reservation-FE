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
        path: 'keyword/:reservationId',
        element: <KeywordPage />,
      },
      {
        path: 'review/:reservationId',
        element: <ReviewPage />,
      },
      {
        path: 'done/:reservationId',
        element: <DonePage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
