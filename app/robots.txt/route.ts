
export function GET(){
  return new Response("User-agent: *\nAllow: /\nSitemap: /sitemap.xml", {headers:{'Content-Type':'text/plain'}});
}
