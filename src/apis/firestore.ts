import firebaseApp from '../config/firebase-config';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';
import { DocumentData } from '../../node_modules/@firebase/firestore/dist';

const db = getFirestore(firebaseApp);

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