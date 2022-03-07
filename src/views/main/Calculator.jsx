import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Display from '../../components/Display/Display'
import './Calculator.css'

export default function Calculator (props) {
    let [valor, setValor] = useState ('0')
 
   
    return (
        <div className="calculator">   
            <Display valorDisplay={valor} />        
            <Button label='AC' estilo='button-triple'/>
            <Button label='/' estilo='button-operation' />
            <Button label='7' evento={(e)=>setValor(e.target.value)} />
            <Button label='8' evento={(e)=>setValor(e.target.value)} />
            <Button label='9' evento={(e)=>setValor(e.target.value)} />
            <Button label='X' estilo='button-operation'/>
            <Button label='4' evento={(e)=>setValor(e.target.value)} />
            <Button label='5' evento={(e)=>setValor(e.target.value)} />
            <Button label='6' evento={(e)=>setValor(e.target.value)} />
            <Button label='-' estilo='button-operation'/>
            <Button label='1' evento={(e)=>setValor(e.target.value)} />
            <Button label='2' evento={(e)=>setValor(e.target.value)} />
            <Button label='3' evento={(e)=>setValor(e.target.value)} />
            <Button label='+' estilo='button-operation' />
            <Button label='0' estilo='button-double' evento={(e)=>setValor(e.target.value)} />
            <Button label='.' />
            <Button label='=' estilo='button-operation'/> 
        </div>
       
    )
}