function PotionCard({ potion }) {
    return (
        <div className="card">
            <img src={potion.image} alt={potion.name} />
            <h3>{potion.name}</h3>
            <p>{potion.description}</p>
            <p><strong>Preço:</strong> {potion.price}</p>
            <button>Comprar</button>
        </div>
    );
} 

export default PotionCard;