import { Client, Databases, ID } from "appwrite";

// const client = new Client();

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("6470ab1aa9d7c506a0f2");

// const databases = new Databases(client);

// const promise = databases.createDocument(
//   "6471994802f1ff03036b",
//   "647199b34f0fdf66b27f",
//   ID.unique(),
//   {
//     title: "Hii",
//     desc: "Hello World",
//   }
// );

// promise.then(
//   function (response) {
//     console.log(response); //Success
//   },
//   function (error) {
//     console.log(error); //Faliure
//   }
// );

const createDocument = async () => {
  try {
    const collectionId = "[YOUR_COLLECTION_ID]"; // Replace YOUR_COLLECTION_ID with the ID of your collection

    // Set the document data
    const data = {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 25,
      // Include any other fields or data you want to store
    };

    // Call the createDocument method
    const response = await appwrite.database.createDocument(collectionId, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Call the createDocument function
createDocument();
