import Home from '../../routes/Home';
import Header from '../Header/Header';

const Layout = () => {

  return (
    <div className="max-w-7xl flex mx-auto min-h-screen">
      <Header />
      <main className="border-x border-x-gray-100 flex-1 max-w-[600px]">
        <Home />
      </main>
    </div>
  );
};

export default Layout;