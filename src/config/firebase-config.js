import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDY5AMHd1c2felq3nBbvvWQaMwhOEis5Rg",
  authDomain: "twitter-clone-9e7bd.firebaseapp.com",
  projectId: "twitter-clone-9e7bd",
  storageBucket: "twitter-clone-9e7bd.appspot.com",
  messagingSenderId: "441414416295",
  appId: "1:441414416295:web:b908018b9742691324e882"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;