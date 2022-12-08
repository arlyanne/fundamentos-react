import './App.css';
import React from "react";

import Card from "./components/layout/Card";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/CompParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia.jsx";
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default () =>

    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">

        <Card titulo="#13 - Desafio Megasena " color="#f4f811">

            <Mega qtde={8}></Mega>


        </Card>    

        <Card titulo="#12 - Contador " color="#333333">

            <Contador numeroInicial={10}></Contador>


        </Card>

        <Card titulo="#11 - Componente Controlado (Input)" color="#7D6608 ">
              
             <Input> </Input>
             
          </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#990000">
              
                <IndiretaPai> </IndiretaPai>
               
            </Card>

        <Card titulo="#9 - Comunicação Direta" color="#822963">
               
                <DiretaPai></DiretaPai>
               
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#003366">
                
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando'}} />
               {/* <UsuarioInfo usuario={{ email: 'fer@nando.com'}} /> */}
                
            </Card>

            <Card titulo="#7 - Desafio Repetição " color="#d556c4">

                <TabelaProdutos></TabelaProdutos>

            </Card>

            <Card titulo="#6 - Repetição" color="#124a2a">

                <ListaAlunos></ListaAlunos>

            </Card>
            
            <Card titulo="#5 - Componente com Filhos" color="#FF432E">

                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Anna"/>
                    <FamiliaMembro nome="Gustavo"/> 
                </Familia>

            </Card>

            <Card titulo="#4 - Desafio Aleatório" color=" #FA6900">
                
                <Aleatorio min={1} max={60} />

            </Card>

            <Card titulo="#3 - Fragmento" color="#E94C6F">
              
                <Fragmento />

            </Card>

            <Card titulo="#2 - Com Parametro" color="#D96459">
                
                <ComParametro
                    Titulo="Situação do Aluno "
                    Aluno="Pedro Silva"
                    nota={9.3}
                />

            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#F2AE72">
               
                <Primeiro></Primeiro>

            </Card>

        </div>
    </div>



