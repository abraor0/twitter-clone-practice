import firebaseApp from '../config/firebase-config';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export async function fetchPosts() {
  const posts = await getDocs(collection(db, 'tweets'));
  
  return posts.docs.map(doc => doc.data());
}