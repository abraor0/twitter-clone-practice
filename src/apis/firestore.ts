import firebaseApp from '../config/firebase-config';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';
import { DocumentData } from '../../node_modules/@firebase/firestore/dist';

const db = getFirestore(firebaseApp);

export type TweetTypes = {
  id: string;
  created: string;
  favorites: number;
  quotes: number;
  retweets: number;
  text: string;
  user_id: string;
  user_name: string;
  user_m_name: string;
  user_profile_img: string;
};


export async function fetchPosts(): Promise<DocumentData[]> {
  const posts = await getDocs(query(collection(db, 'tweets'), orderBy('created', 'desc')));
  
  return posts.docs.map(doc => doc.data());
}

export async function findUser(email: string): Promise<Boolean> {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('email', '==', email));
  const querySnapshot = await getDocs(q);

  if(querySnapshot.empty) throw new Error('Sorry, we could not find your account.');

  return true;
}

export async function getUserInfo(uid: string): Promise<DocumentData> {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('uid', '==', uid));
  const querySnapshot = await getDocs(q);

  if(querySnapshot.empty) throw new Error('Sorry, we could not find your account.');

  return querySnapshot.docs[0].data();
}