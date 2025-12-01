// Test fetch to /api/mentors endpoint
const fetch = require('node-fetch');

async function testEndpoint() {
  try {
    const url = 'http://localhost:5001/api/mentors';
    console.log('Testing:', url);
    
    const res = await fetch(url);
    console.log('Status:', res.status, res.statusText);
    console.log('Headers:', JSON.stringify(Object.fromEntries(res.headers.entries()), null, 2));
    
    const data = await res.json();
    console.log('\nResponse JSON:');
    console.log(JSON.stringify(data, null, 2));
    
    if (data.mentors && Array.isArray(data.mentors)) {
      console.log(`\n✓ SUCCESS: GET /api/mentors returns ${data.mentors.length} mentors`);
      if (data.mentors.length > 0) {
        console.log('\nFirst mentor sample:');
        console.log(JSON.stringify(data.mentors[0], null, 2));
      }
    } else {
      console.log('\n✗ Unexpected response format');
    }
  } catch (err) {
    console.error('✗ Fetch failed:', err.message);
    console.error('Stack:', err.stack);
  }
}

testEndpoint();

