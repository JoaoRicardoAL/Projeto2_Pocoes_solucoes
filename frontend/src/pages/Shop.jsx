import { useState, useEffect } from "react";
import axios from "axios";
import PotionCard from "../components/PotionCard";
import fachadaImg from "../assets/fachada.png";

function Shop(){
    const [potions, setPotions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/potions')
            .then(response => setPotions(response.data))
            .catch(error => console.error("Erro ao buscar poções:", error));
    }, []);

    return (
        <div className="container">
            <header>
                <h1>Poções e Soluções</h1>
                <p>por Annabelle Merigold</p>              
            </header>

            <section className="shop-description">
              <h2>Sobre Nós</h2>
              <p>
                Bem-vindo à <strong>Poções e Soluções</strong>, a loja mais tradicional do 
                Beco da Última Saída! Nós oferecemos poções de diversos tipos para as 
                suas necessidades mágicas do dia a dia.
              </p>
            </section>          

            <section className="shop-history">
              <h2>Nosso Histórico</h2>
              <p>
                Criada no ano de <strong>1867</strong>, a nossa loja possui mais de um século 
                de tradição e sucesso no mundo mágico, passando de geração em geração 
                na família de Innabelle Merigold. Recentemente, expandimos nossos horizontes 
                do ambiente físico para o e-commerce, trazendo nossa magia diretamente 
                para você!
              </p>
              <div className="fachada-img">
                <img 
                src= {fachadaImg} 
                alt="Foto histórica da fachada da loja em 1867" 
                className="history-img"
              />
              </div>
              
            </section>
            
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