import { Router } from "express";
import { InserirCliente } from "../repository/clienteRepository.js";

const server = Router();

server.post('/cliente', async (req,resp) =>{
    try {
        const cliente = req.body;
        const resposta = await InserirCliente(cliente);
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro:'Erro'
        })
    }
});
export default server;   

