/**
 * Yeh ek Netlify Serverless Function hai.
 * Yeh function har request par automatically run hota hai.
 * Is file ka naam hi iska URL ban jata hai.
 * Example: /getMarketData
 */

// 'exports.handler' Netlify ke liye zaroori hai.
// Yeh function ka entry point (shuruat) hai.
exports.handler = async (event, context) => {

  // Step 1: CORS Headers tayaar karna.
  // Yeh security headers hain jo hamare frontend ko is backend se baat karne ki ijazat denge.
  // '*' ka matlab hai 'kisi bhi website se request aa sakti hai'.
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Step 2: Ek sample data ka package tayaar karna.
  const sampleData = {
    status: "success",
    message: "Backend on Netlify is LIVE and working perfectly! 🎉"
  };

  // Step 3: Final response tayaar karna.
  // Netlify ko is format mein jawab chahiye hota hai.
  return {
    statusCode: 200, // 200 ka matlab hai 'Sab Kuch Theek Hai'
    headers: headers,
    body: JSON.stringify(sampleData) // Hum apne data ko JSON string mein badal kar bhej rahe hain.
  };
};