import { con } from "./connection.js";

export async function InserirCliente(cliente){
    const resposta = `    
        insert into tb_clientes(nm_cliente, ds_email, nr_telefone, nr_cpf, nr_cnh)
        values(?, ?, ?, ?, ?);    
    ` 
   const [linhas] = await con.query(resposta, [
    cliente.nome,
    cliente.email,
    cliente.telefone,
    cliente.cpf,
    cliente.cnh
   ]);
        
   cliente.id = linhas.InsertId;
   return cliente;
}
