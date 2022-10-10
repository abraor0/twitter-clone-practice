import firebaseApp from '../config/firebase-config';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export async function fetchPosts() {
  const posts = await getDocs(query(collection(db, 'tweets'), orderBy('created', 'desc')));
  
  return posts.docs.map(doc => doc.data());
}

export async function findUser(email) {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('email', '==', email));
  const querySnapshot = await getDocs(q);

  if(querySnapshot.empty) throw new Error('Sorry, we could not find your account.');

  return true;
}

export async function getUserInfo(uid, token) {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('uid', '==', uid));
  const querySnapshot = await getDocs(q);

  if(querySnapshot.empty) throw new Error('Sorry, we could not find your account.');

  return querySnapshot.docs[0].data();
}