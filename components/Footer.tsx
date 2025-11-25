
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <img src="/logo.png" alt="logo" style={{height:40}}/>
        <div style={{marginTop:8}}>Lonak Business Centre, Kasarani, Nairobi, Kenya</div>
        <div style={{marginTop:8}}>📞 0758 625 209 | ✉️ info@crestvistapropertiesltd.co.ke</div>
        <div style={{marginTop:8}}>© {new Date().getFullYear()} Crestvista Properties LTD</div>
      </div>
    </footer>
  );
}
