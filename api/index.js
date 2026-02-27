/**
 * Vercel Serverless Function
 * Runtime: @vercel/node
 */

export default function handler(request, response) {
  // CORS configuration
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle pre-flight OPTIONS request
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Logic for GET/POST requests
  try {
    const { name } = request.query;

    return response.status(200).json({
      status: "success",
      message: "Server is operational",
      data: {
        greeting: name ? `Hello, ${name}` : "Hello",
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error"
    });
  }
}

