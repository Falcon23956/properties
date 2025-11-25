type Property = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <div className="card">
      <div
        style={{
          height: 160,
          overflow: "hidden",
          borderRadius: 8,
          background: "#eee",
        }}
      >
        <img
          src={property.image}
          alt={property.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <h3>{property.title}</h3>
      <p>{property.summary}</p>
    </div>
  );
}
