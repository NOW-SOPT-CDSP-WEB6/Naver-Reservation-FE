import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/header/Header';
import MobileLayout from '@/components/layout/mobileLayout/MobileLayout';

function App() {
  return (
    <MobileLayout>
      <Header />
      <main style={{width: "100%"}}>
        <Outlet />
      </main>
    </MobileLayout>
  );
}

export default App;
