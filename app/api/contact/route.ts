
export async function POST(req){
  try {
    const {name,email,message} = await req.json();
    console.log('Contact submission', {name,email,message});
    return new Response(JSON.stringify({ok:true}), {status:200});
  } catch(e){
    console.error(e);
    return new Response('error',{status:500});
  }
}
