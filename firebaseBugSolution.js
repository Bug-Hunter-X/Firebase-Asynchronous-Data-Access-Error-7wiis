```javascript
// Incorrect - Accessing data before it's loaded
db.collection('users').doc('someUser').get().then((snapshot) => {
  const userName = snapshot.data().name; // Error prone!
  console.log(userName); 
});

// Correct - Using async/await
async function getUserData() {
  const snapshot = await db.collection('users').doc('someUser').get();
  if (snapshot.exists) {
    const userName = snapshot.data().name;
    console.log(userName); 
  } else {
    console.log('No such document!');
  }
}
getUserData();

// Correct - Using .then() chaining
db.collection('users').doc('someUser').get()
.then(snapshot => {
  if (snapshot.exists) {
    const userName = snapshot.data().name;
    console.log(userName);
  } else {
    console.log('No such document!');
  }
})
.catch(error => {
  console.error('Error getting document:', error);
});
```