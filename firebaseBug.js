The Firebase SDK might throw an error if you attempt to access a property of a document snapshot before the snapshot has fully loaded.  This commonly happens in asynchronous operations where you try to read data from a snapshot inside a callback function that executes before the data has arrived from Firebase.