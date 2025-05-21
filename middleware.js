export default function middleware(req) { const url = req.nextUrl; if (url.pathname === "/test") { url.pathname = "/"; return Response.redirect(url); } return; }
