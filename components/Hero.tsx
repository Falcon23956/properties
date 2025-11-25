
export default function Hero(){
  return (
    <section className="hero">
      <div className="bg" style={{backgroundImage: 'url(/hero.jpg)'}}></div>
      <div className="overlay"></div>
      <div className="content container">
        <h1 style={{fontSize:'2.4rem',margin:0}}>Where Value Meets Excellence</h1>
        <p style={{marginTop:12,maxWidth:680}}>Premium real estate sales and advisory across Nairobi and surrounding counties.</p>
        <div style={{marginTop:18}}>
          <a href="/properties" className="btn">View Properties</a>
        </div>
      </div>
    </section>
  );
}
