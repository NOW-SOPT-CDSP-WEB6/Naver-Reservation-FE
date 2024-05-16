import DoneHeader from '@/pages/donePage/DoneHeader/DoneHeader';
import ReviewList from '@/pages/donePage/ReviewBox/ReviewBox';
import TopBar from '@/pages/donePage/TopBar/TopBar';

const DonePage = () => {
  return (
    <>
      <TopBar />
      <DoneHeader />
      <ReviewList />
    </>
  );
};

export default DonePage;
