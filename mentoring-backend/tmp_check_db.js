require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

async function checkDB() {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('MONGO_URI format:', MONGO_URI ? MONGO_URI.replace(/:\/\/[^:@]+:[^@]+@/, '://***:***@') : 'NOT SET');
    
    await mongoose.connect(MONGO_URI);
    console.log('✓ Connected to MongoDB successfully\n');

    const db = mongoose.connection.db;
    
    // Check collections
    const collections = ['mentors', 'mentor', 'users', 'profiles'];
    
    for (const collName of collections) {
      try {
        const count = await db.collection(collName).countDocuments();
        console.log(`Collection "${collName}": ${count} documents`);
        
        if (count > 0) {
          const sample = await db.collection(collName).findOne();
          console.log(`  Sample document keys:`, Object.keys(sample || {}));
          console.log(`  Sample document:`, JSON.stringify(sample, null, 2).substring(0, 500));
        }
      } catch (e) {
        console.log(`Collection "${collName}": does not exist or error:`, e.message);
      }
    }
    
    await mongoose.disconnect();
    console.log('\n✓ Disconnected from MongoDB');
  } catch (err) {
    console.error('✗ Connection failed:', err.message);
    console.error('Stack:', err.stack);
    process.exit(1);
  }
}

checkDB();

