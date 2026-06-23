import { useState, useEffect } from "react";
import axios from "axios";
import PotionCard from "../components/PotionCard";

function Shop(){
    const [potions, setPotions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/potions")
            .then(response => setPotions(response.data))
            .catch(error => console.error("Erro ao buscar poções:", error));
    }, []);

    return (
        <div className="container">
            <header>
                <h1>Poções e Soluções</h1>
                <p>Loja de poções por Annabelle Merigold</p>              
            </header>
            
            <section>
                <h2>Produtos</h2>
                <div className="vitrine">
                    {potions.map(potion => (
                        <PotionCard key={potion.id} potion={potion} />
                    ))}
                </div>
            </section>

            <footer>
                <p>Local: Beco da Última Saída</p>
            </footer>
        </div>

    )
}

export default Shop;