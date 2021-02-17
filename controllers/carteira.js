const db = require("../db");


async function listarAtivos(req, res){
    console.log('SELECT * FROM ativo');
    const clientes = await db.selectAtivo();
    console.log(clientes);
    //retornar
    res.json({
        ativos:clientes
    });
}


async function listarProventos(req, res){
    console.log('SELECT * FROM provento');
    const provento = await db.selectProventos();
    console.log(provento);
    // res.json({
    //     proventos:provento
    // });
    res.status(200).json(provento)
}



module.exports= {
    listarAtivos, listarProventos
}

 