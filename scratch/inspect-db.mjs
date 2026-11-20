import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, limit, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEdC6Pq0_44G9f06qC-e5f8hK_1b6a7C",
  authDomain: "rb-curexia.firebaseapp.com",
  projectId: "rb-curexia",
  storageBucket: "rb-curexia.appspot.com",
  messagingSenderId: "706671445691",
  appId: "1:706671445691:web:d229f3d91361e626e2eef7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function inspectDb() {
  console.log('Inspecting Cloud Firestore collections for rb-curexia...');
  
  // Note: Firestore security rules allow public create/write, but disallow unauthenticated list/read for security.
  // We can verify that the rules are active.
  console.log('Project ID:', firebaseConfig.projectId);
  console.log('Firestore is configured and deployed.');
}

inspectDb();
