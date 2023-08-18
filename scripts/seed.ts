require('dotenv').config(); // Load environment variables from .env file
const { MongoClient } = require('mongodb');

async function main() {
  const uri = process.env.DATABASE_URL; // Get MongoDB URI from environment variables
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db(); // No need to specify a database name in the connection URI
    const categoriesCollection = database.collection('categories');

    const categoriesToInsert = [
      { name: 'Famous People' },
      { name: 'Movies & TV' },
      { name: 'Musicians' },
      { name: 'Games' },
      { name: 'Animals' },
      { name: 'Philosophy' },
      { name: 'Scientists' },
    ];

    await categoriesCollection.insertMany(categoriesToInsert);
    console.log('Default categories seeded successfully.');
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await client.close();
  }
}

main();
