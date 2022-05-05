import { useEffect } from 'react';
import firebaseApp from './firebase-config';
import { getUsers } from './apis/firestore';

const App = () => {
  console.log(firebaseApp);

  return (
    <div className="h-screen flex items-center justify-center w-full">
      <h1 className="text-5xl text-sky-400 font-bold border-b-4 border-sky-400 pb-3">Starting project</h1>
    </div>
  );
};

export default App;