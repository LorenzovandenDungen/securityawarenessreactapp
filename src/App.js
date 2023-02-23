import React from 'react';
import { Admin, Resource } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider
} from 'react-admin-firebase';
import { firebaseConfig as config, firebaseApp as firebaseAppInstance } from './firebase';
import { CommentList, CommentEdit, CommentCreate, CommentShow} from './comments';

// Optional
const options = {
  app: firebaseAppInstance,
  persistence: 'session'
}

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      title="Admin Dashboard"
    >
    <Resource name="Comments" list={CommentList} show={CommentShow} create={CommentCreate} edit={CommentEdit} />
  </Admin>
  );
}

export default App;