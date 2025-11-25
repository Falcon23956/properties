
import properties from '../../../src/data/properties.json'
export default function PropertyPage({params}) {
  const prop = properties.find(p=>p.id===params.id);
  if(!prop) return <div className="container">Property not found</div>;
  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>{prop.title}</h1>
      <p>{prop.location} • {prop.price}</p>
      <div style={{height:360,background:'#eee',marginTop:12}}><img src={prop.image} alt={prop.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      <p style={{marginTop:12}}>{prop.summary}</p>
    </div>
  );
}
