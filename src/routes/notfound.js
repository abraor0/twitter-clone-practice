import LoginButton from '../components/Login/LoginButton';
import MainContentHeader from '../components/UI/MainContentHeader';

const NotFound = () => {
  return (
    <>
      <MainContentHeader contentTitle={'Not Found :('} />
      <div className="px-3 mt-10 flex flex-col items-center gap-6">
        <p>Woah there! This route doesn't exist currently. Please, return to a safe location and be careful on your way.</p>
        <LoginButton to="/home">return safely</LoginButton>
      </div>
    </>
  );
};

export default NotFound;