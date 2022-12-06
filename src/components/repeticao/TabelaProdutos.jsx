import './TabelaProdutos.css'; 
import React from "react";
import Produtos from "../../data/Produtos";

export default (props) => {

    function getLinhas() {
        return Produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par': 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preço.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })

    }
        return (
            <div className="TabelaProdutos">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getLinhas()}
                    </tbody>

                </table>
            </div>
        )
};      