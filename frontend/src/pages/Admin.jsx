import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
    const [potions, setPotions] = useState([]); 

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const loadPotions = () => {
        axios.get(`http://localhost:3000/api/potions`)
            .then(response => setPotions(response.data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        loadPotions();
    }, []);

    const registerPotion = (e) => {
        e.preventDefault();

        const newPotion = {
            name,
            description,
            image,
            price: Number(price)
        };

        axios.post('http://localhost:3000/api/potions', newPotion)
            .then(() => {
                alert('Nova poção cadastrada com sucesso.');
                setName('');
                setDescription('');
                setImage('');
                setPrice('');
                loadPotions();
            })
            .catch(error => console.error("Erro de cadastro:", error));
    };

    const deletePotion = (id) => {
        axios.delete(`http://localhost:3000/api/potions/${id}`)
            .then(() => loadPotions())
            .catch(error => console.error("Erro ao deletar poção:", error));
    };

    return (
        <div className="container">
            <h1>Painel do Administrador - Poções e Soluções</h1>

            <section>
                <h2>Cadastrar nova Poção</h2>
                <form onSubmit={registerPotion} className="admin-form">
                    <div className="form-group">
                        <label>Nome da Poção:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div className="form-group">
                        <label>Descrição:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label>URL da Imagem:</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label>Preço (Moedas):</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>

                    <button type="submit" style={{ marginTop: '10px' }}>Cadastrar Poção</button>
                </form>
            </section>

            <hr />

            <section>
                <h2>Poções Cadastradas</h2>
                <ul>
                    {potions.map(potion => (
                        <li key={potion.id}>
                            {potion.name} - {potion.price} moedas
                            <button onClick={() => deletePotion(potion.id)} style={{ marginLeft: '10px', backgroundColor: 'red' }}>
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Admin;