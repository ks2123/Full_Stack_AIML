function AnimalCard({ name, speed, diet, image }) {
  return (
    <div style={{
      backgroundColor: "#1e1e1e",
      borderRadius: "10px",
      overflow: "hidden",
      width: "250px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
      border: "1px solid #333",
      display: "flex",
      flexDirection: "column"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100%", height: "160px", objectFit: "cover" }} 
      />

      <div style={{ padding: "15px", color: "white" }}>
        <h3 style={{ margin: "0 0 10px 0", color: "#4ade80" }}>{name}</h3>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          <strong>Top Speed:</strong> {speed}
        </p>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          <strong>Diet:</strong> {diet}
        </p>
      </div>
    </div>
  );
}

export default AnimalCard;