import HomeBtn from '@/components/home/homeBtn/HomeBtn';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <h1>Home Page</h1>
      <HomeBtn category="all" />
      <HomeBtn category="beauty" />
      <HomeBtn category="health" />
      <HomeBtn category="life" />
      <HomeBtn category="living" />
      <HomeBtn category="restaurant" />
      <HomeBtn category="sport" />
      <HomeBtn category="ticket" />
    </>
  );
};

export default HomePage;
