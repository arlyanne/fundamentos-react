
import React from 'react';
export default function ComParametro(props) {
     const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
     const notaInt = Math.ceil(props.nota)

     return (
          <div>
               <h2> {props.Titulo} </h2>
               <p>

                    <strong> {props.Aluno} </strong>
                    tem nota
                    <strong> {notaInt} </strong>
                    e está em
                    <strong> {status} </strong>!
               </p>
          </div>
     )

}