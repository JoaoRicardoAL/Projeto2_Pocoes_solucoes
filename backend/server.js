import express from "express";
import sequelize from "./config/database.js";
import potionRoutes from "./routes/potionRoutes.js";
import Potion from "./models/Potion.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Sincroniza o modelo com o banco de dados e inicia o servidor
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


// Vincula as rotas de poções
app.use("/api", potionRoutes);

// Popula o banco de dados com algumas poções iniciais
const seedDatabase = async () => {
    await Potion.bulkCreate([
      {
        name: "Poção Blue Sky",
        description: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
        image: "https://i.ibb.co/ZzS7xb2/rsz-sky.png",
        price: 300
      },
      {
        name: "Poção de Perfume Misterioso",
        description: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias.",
        image: "https://i.ibb.co/pyhZJXf/rsz-lilas.png",
        price: 200
      },
      {
        name: "Poção de Pinus",
        description: "Essa poção faz com que você fique 10 cm mais alto!",
        image: "https://i.ibb.co/DkzdL1q/rsz-pinus.png",
        price: 3000
      },
      {
        name: "Poção da Beleza Eterna",
        description: "Veneno que mata rápido",
        image: "https://i.ibb.co/9p872NK/rsz-1beleza.png",
        price: 100
      },
      {
        name: "Poção do Arco Íro",
        description: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
        image: "https://i.ibb.co/PrC09MP/rsz-2unicornio.png",
        price: 120
      },
      {
        name: "Caldeirão de Verdades Secretas",
        description: "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
        image: "https://i.ibb.co/s9Lyvj8/rsz-verdades.png",
        price: 150
      }
    ]);
    console.log("Banco de dados populado com poções iniciais.");
};

sequelize.sync({ force: true}).then(async () => {
    await seedDatabase();
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
