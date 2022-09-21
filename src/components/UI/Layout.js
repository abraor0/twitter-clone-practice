import Home from '../../routes/Home';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

const Layout = () => {

  return (
    <div className="max-w-7xl flex mx-auto min-h-screen">
      <Header />
      <main className="border-x border-x-gray-100 flex-grow min-w-[600px] mr-8">
        <Home />
      </main>
      <div className="flex-grow flex flex-col gap-y-6">
        <Search />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;