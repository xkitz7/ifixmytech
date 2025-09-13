export async function onRequest(context) {
  // Your logic here. This can be:
  // - Fetching from a database
  // - Returning JSON
  // - Processing form data
  // - Talking to a third-party API

  // Example: Return a simple JSON response
  const jsonResponse = JSON.stringify({
    message: "FixMyTech API web",
    path: context.request.url,
    time: new Date().toISOString()
  });

  return new Response(jsonResponse, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // Allows requests from your frontend
    }
  });
}
