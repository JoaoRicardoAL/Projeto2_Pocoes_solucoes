function PotionCard({ potion }) {
    return (
        <div className="card">
            <div className="image-box">
                <img src={potion.image} alt={potion.name} className="card-img"/>
            </div>
            <div className="info-box">
                <h3>{potion.name}</h3>
                <p>{potion.description}</p>
                <p><strong>Preço:</strong> {potion.price}</p>
                <button>Comprar</button>
            </div>
        </div>
    );
} 

export default PotionCard;