
import { NextResponse } from 'next/server';
export async function GET(){
  const base = process.env.SITE_URL || 'https://crestvistapropertiesltd.co.ke';
  const pages = ['/', '/properties', '/about', '/services', '/contact', '/privacy-policy'];
  const urls = pages.map(p=>`  <url><loc>${base}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new NextResponse(xml, {headers:{'Content-Type':'application/xml'}});
}
