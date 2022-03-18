import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Display from "../../components/Display/Display";
import "./Calculator.css";

export default function Calculator(props) {
  let [valor, setValor] = useState(0);
  let [valorAnterior, setValorAnterior] = useState();
  let [operador, setOperador] = useState();

  function isFloat(num) {
    if (!isNaN(num)) {
      if (parseInt(num) !== parseFloat(num)) {
        return true;
      }
    }
    return false;
  }

  function inputNum(e) {
    let entrada = e.target.value;
    valor === 0 ? setValor(entrada) : setValor((valor += entrada));
  }

  function clearAll() {
    setValor(0);
  }

  function sinalOperador(e) {
    let operador = e.target.value;
    setOperador(operador);
    setValorAnterior(valor);
    setValor(0);
  }

  function realizaOperacao() {
    if (operador === "/") {
      let resultado = Number(valorAnterior) / Number(valor);
      isFloat(resultado) ? (resultado = resultado.toFixed(4)) : (Number(resultado));
      setValor(resultado);
    } else if (operador === "+") {
      let resultado = Number(valorAnterior) + Number(valor);
      setValor(resultado);
    } else if (operador === "-") {
      let resultado = Number(valorAnterior) - Number(valor);
      setValor(resultado);
    } else if (operador === "X") {
      let resultado = Number(valorAnterior) * Number(valor);
      console.log(resultado);
    }
  }

  return (
    <div className="calculator">
      <Display valorDisplay={valor} />
      <Button label="AC" estilo="button-triple" evento={clearAll} />
      <Button label="/" estilo="button-operation" evento={sinalOperador} />
      <Button label="7" evento={inputNum} />
      <Button label="8" evento={inputNum} />
      <Button label="9" evento={inputNum} />
      <Button label="X" estilo="button-operation" evento={sinalOperador} />
      <Button label="4" evento={inputNum} />
      <Button label="5" evento={inputNum} />
      <Button label="6" evento={inputNum} />
      <Button label="-" estilo="button-operation" evento={sinalOperador} />
      <Button label="1" evento={inputNum} />
      <Button label="2" evento={inputNum} />
      <Button label="3" evento={inputNum} />
      <Button label="+" estilo="button-operation" evento={sinalOperador} />
      <Button label="0" estilo="button-double" evento={inputNum} />
      <Button label="." evento={inputNum} />
      <Button label="=" estilo="button-operation" evento={realizaOperacao} />
    </div>
  );
}
