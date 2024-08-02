import mongoose from 'mongoose';

let databaseName = 'FoodFinder'
let mongoURI = `mongodb+srv://subhamrahar22:HsnrYatHXhtSeKzw@foodfinder.xrb4b70.mongodb.net/${databaseName}`;

const mongoOptions = {
  retryWrites: true,
  w: "majority",
  tls: true,
  tlsInsecure: false,
  // tlsAllowInvalidCertificates: true
};
let mongoConnect = () => {
  mongoose.connect(mongoURI, mongoOptions)
    .then((data) => {
      console.log('Connected to MongoDB successfully');
      return data.connection.db.collection("food_items").find({});
    })
    .then((data) => {
      return data.toArray();
    })
    .catch((error) => {
      console.log('Failed to connect to MongoDB: ', error);
    }) 
}

export default mongoConnect; 