
import properties from '../../src/data/properties.json'
import PropertyCard from '../../components/PropertyCard'
export default function Properties(): JSX.Element {
  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>Properties</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16,marginTop:12}}>
        {properties.map(p=> <PropertyCard key={p.id} property={p} />)}
      </div>
    </div>
  );
}
