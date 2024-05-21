import DoneHeader from '@/pages/donePage/DoneHeader/DoneHeader';
import ReviewList from '@/pages/donePage/ReviewBox/ReviewBox';
import TopBar from '@/pages/donePage/TopBar/TopBar';

const DonePage = () => {
  return (
    <div
      style={{
        background:
          'var(--grad_bg-grad_bg_Blue, linear-gradient(180deg, #287CFF -66.77%, #F0F0F3 13.28%, #F0F0F3 100%))',
      }}
    >
      <TopBar />
      <DoneHeader />
      <ReviewList />
    </div>
  );
};

export default DonePage;
