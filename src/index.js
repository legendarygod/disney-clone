import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const firebaseConfig = {
//   apiKey: "AIzaSyC1zrLOheo8gk1ExljoCwD2TjwWRYkC7Q4",
//   authDomain: "moviesanime-3f59e.firebaseapp.com",
//   projectId: "moviesanime-3f59e",
//   storageBucket: "moviesanime-3f59e.appspot.com",
//   messagingSenderId: "63403317692",
//   appId: "1:63403317692:web:2142255abc919df0cef3b9"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = getStorage(firebaseApp);

// export { auth, provider, storage };
// export default db;
