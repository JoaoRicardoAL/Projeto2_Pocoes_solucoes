import Potion from "../models/potion.js";

// Lista todas as poções
export const listPotion = async (req, res) => {
    try {
        const potions = await Potion.findAll();
        return res.status(200).json(potions);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar poções" });
    }
};

// Cria uma nova poção
export const createPotion = async (req, res) => {
    try {
        const { name, description, image, price} = req.body;

        if (!name || !description || !image || !price) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const newPotion = await Potion.create({name, description, image, price});
        return res.status(201).json(newPotion);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar poção" });
    }
};

// Deleta uma poção pelo ID
export const deletePotion = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedPotion = await Potion.destroy({ where: { id } });

        if (deletedPotion) {
            return res.status(200).json({ message: "Poção deletada com sucesso" });
        } else {
            return res.status(404).json({ message: "Poção não encontrada" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar poção" });
    }
};