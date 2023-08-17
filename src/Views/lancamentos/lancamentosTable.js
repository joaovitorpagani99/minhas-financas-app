import React from "react";

export default propos => {

    const row =propos.lancamentos.map(Lancamento =>{
        return(
            <tr>
                <tr>{Lancamento.descricao}</tr>
                <tr>{Lancamento.valor}</tr>
                <tr>{Lancamento.tipo}</tr>
                <tr>{Lancamento.mes}</tr>
                <tr>{Lancamento.status}</tr>
                <tr>

                </tr>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Tipo</th>
                      <th scope="col">Mês</th>
                      <th scope="col">Situação</th>
                      <th scope="col">Ações</th>
                </tr>
                <tbody>
                    {row}
                </tbody>
            </thead>
        </table>
    )
}