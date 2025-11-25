export default function PropertyCard({ property }: { property: any }) {
    <div className="card">
      <div style={{height:160,overflow:'hidden',borderRadius:8,background:'#eee'}}><img src={property.image} alt={property.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      <h3 style={{marginTop:10}}>{property.title}</h3>
      <p style={{color:'#5a4e2e'}}>{property.location}</p>
      <p style={{fontWeight:700}}>{property.price}</p>
      <p>{property.summary}</p>
    </div>
  );
}
