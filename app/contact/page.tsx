
'use client';
import {useState} from 'react';
export default function Contact(){
  const [s,setS]=useState({name:'',email:'',message:'',status:''});
  async function submit(e){
    e.preventDefault();
    setS({...s,status:'sending'});
    const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({name:s.name,email:s.email,message:s.message})});
    if(res.ok) setS({...s,status:'sent'}); else setS({...s,status:'error'});
  }
  return (
    <main className="container" style={{paddingTop:24}}>
      <h1>Contact Us</h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20,marginTop:12}}>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:8}}>
          <input required placeholder="Your name" value={s.name} onChange={(e)=>setS({...s,name:e.target.value})} />
          <input required placeholder="Your email" value={s.email} onChange={(e)=>setS({...s,email:e.target.value})} />
          <textarea required placeholder="Message" value={s.message} onChange={(e)=>setS({...s,message:e.target.value})} />
          <div style={{display:'flex',gap:8}}>
            <button type="submit" style={{background:'#D8A944',border:'none',padding:'8px 12px',borderRadius:8}}>Send Message</button>
            <button type="reset" onClick={()=>setS({name:'',email:'',message:'',status:''})}>Reset</button>
          </div>
          <div>
            {s.status==='sending' && <span>Sending…</span>}
            {s.status==='sent' && <span style={{color:'green'}}>Message logged — we'll reply shortly.</span>}
            {s.status==='error' && <span style={{color:'red'}}>Error logging message.</span>}
          </div>
        </form>
        <div style={{background:'#fff',padding:12,borderRadius:8}}>
          <h3>Contact Details</h3>
          <p><strong>Address:</strong> Lonak Business Centre, Kasarani, Nairobi, Kenya</p>
          <p><strong>Phone:</strong> 0758 625 209 / 0739 944 751</p>
          <p><strong>Email:</strong> info@crestvistapropertiesltd.co.ke</p>
          <a href="https://wa.me/254758625209" style={{display:'inline-block',marginTop:8,background:'#25D366',color:'#fff',padding:'8px 10px',borderRadius:8,textDecoration:'none'}}>WhatsApp Us</a>
          <div style={{marginTop:12}}>
            <h4>Business Hours</h4>
            <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
            <p>Sat: 9:00 AM – 1:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </main>
  );
}
