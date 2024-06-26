import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import DonePage from '@/pages/donePage/DonePage';
// import HomePage from '@/pages/homePage/HomePage';
// import KeywordPage from '@/pages/keywordPage/KeywordPage';
// import ReviewPage from '@/pages/reviewPage/ReviewPage';
import App from '@/App';

const DonePage = lazy(() => import('@/pages/donePage/DonePage'));
const HomePage = lazy(() => import('@/pages/homePage/HomePage'));
const KeywordPage = lazy(() => import('@/pages/keywordPage/KeywordPage'));
const ReviewPage = lazy(() => import('@/pages/reviewPage/ReviewPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'keyword/:reservationId',
        element: (
          <Suspense>
            <KeywordPage />
          </Suspense>
        ),
      },
      {
        path: 'review/:reservationId',
        element: (
          <Suspense>
            <ReviewPage />
          </Suspense>
        ),
      },
      {
        path: 'done/:reservationId',
        element: (
          <Suspense>
            <DonePage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
