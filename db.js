
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:Ns650adm@localhost:3306/carteira");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}



async function selectAtivo(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM ativo;');
    return rows;
}

async function selectProventos(){
    const conn = await connect();
    //const [rows] = await conn.query('SELECT * FROM provento;');
    const [rows] = await conn.query("select p.id_provento, a.ds_ativo, case when in_tipo_provento ='D' then 'Dividendo' when in_tipo_provento ='J' then 'JCP'when in_tipo_provento ='A' then 'Amortização' when in_tipo_provento ='R' then 'Rendimento Tributado' end as in_tipo_provento, dt_com, dt_pagamento, nr_valor from provento p inner join ativo a on a.id_ativo = p.cd_ativo order by dt_com desc;");
    return rows;
}
 
module.exports = {selectAtivo, selectProventos}