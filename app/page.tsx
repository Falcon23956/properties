
import Hero from '../components/Hero'
import PropertyCard from '../components/PropertyCard'
import properties from '../src/data/properties.json'

export default function Home(){
  return (
    <>
      <Hero />
      <section className="container section">
        <h2>Featured Properties</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16,marginTop:12}}>
          {properties.map(p=> <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>
    </>
  );
}
