import Home from '../../routes/home';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

const Layout = () => {

  return (
    <div className=" justify-center flex mx-auto min-h-screen">
      <Header />
      <main className="border-x border-x-gray-100 basis-[600px] shrink-0">
        <Home />
      </main>
      <div className="hidden lg:flex flex-col gap-y-6 px-8 grow-0 basis-[398px] shrink-1 relative">
        <Search />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;