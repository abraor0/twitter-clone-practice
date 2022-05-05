import firebaseApp from '../firebase-config';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

