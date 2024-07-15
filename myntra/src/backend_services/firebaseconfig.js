import { initializeApp } from 'firebase/app';
import { getFirestore ,collection,addDoc} from 'firebase/firestore';
const firebaseConfig = {

    projectId: "fir-d8934",
    storageBucket: "fir-d8934.appspot.com",
    messagingSenderId: "379259250114",
    appId: "1:379259250114:web:717416419f89e2a849225b",
    measurementId: "G-R0D9PN16PY"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
