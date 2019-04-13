import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };  

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // a sub that notifies us whenever a child is removed, child_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // a sub that notifies us whenever a child is changed, child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // a sub that notifies us whenever a child is added, child_added event, it fires once for all data thats already in the location
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => { // iterating over each snapshot
//       expenses.push({ // creating a new item for each one
//         id: childSnapshot.key, // .key gets the string id
//         ...childSnapshot.val()
//       });
//     })

//     console.log(expenses);
// });

// // same as above, subbing to the array based data
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//       id: childSnapshot.key, 
//       ...childSnapshot.val()
//     });
//   })

//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'gas bill1',
//   notes: 'none',
//   amount: 300,
//   createdAt: 1201
// });

// push automatically adds a new property to the reference
// database.ref('notes').push({
//   title: 'To learn',
//   body: 'firebase'
// })

// const firebaseNotes = {
//   notes: {
//       dsbfgsdf: {
//         title: 'First note',
//         body:'This is my note'        
//       },
//       dssdbfgsdf: {
//         title: 'First note',
//         body:'This is my note'        
//       }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body:'This is my note'
// }, {
//   id: '38gfdew',
//   title: 'Second note',
//   body:'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12');

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => { // subscribes to changes
//   console.log(snapshot.val()); // this functions runs with every data change
// }, (e) => { // this is the error function that runs when we try to access data we cant
//   console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//   database.ref('age').set(23);
// }, 3500);

// //  off unsubscribes from the store
// setTimeout(() => {
//   database.ref().off(onValueChange) 
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(24);
// }, 10500);

// If the data updates, we wont get notified using .once()
// database.ref()
// .once('value') // on allows you to listen for changes
// .then((snapshot) => { // snapshot is a copy of the requested data
//   const val = snapshot.val() 
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e)
// })

// // .set returns a promise
// database.ref().set({
//     name: 'Zarek Ivey',
//     age: 19,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Atlanta',
//         country: 'United States'
//     },
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// // only updates at the root level, so a / is needed to update nested elements
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data was removed')
//     }).catch((e) => {
//         console.log('did not remove data', e)
//     });