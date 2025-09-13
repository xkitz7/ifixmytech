import { serve } from "https://deno.land/std/http/server.ts";
import { serveDir } from "https://deno.land/std/http/file_server.ts";

serve(async (req) => {
  const pathname = new URL(req.url).pathname;
  
  // Serve static files from 'public' directory
  if (pathname.startsWith("/public")) {
    return serveDir(req, { fsRoot: "public" });
  }

  // Default route: serve HTML
  if (pathname === "/") {
    const html = await Deno.readTextFile("./public/index.html");
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }

  return new Response("Not Found", { status: 404 });
}, { port: 8000 });

console.log("Server running on http://localhost:8000");
```:cite[7]

#### b) Configure Deno via `deno.json`
```json
{
  "tasks": {
    "start": "deno run --allow-net --allow-read src/main.ts"
  },
  "compilerOptions": { "strict": true }
}
