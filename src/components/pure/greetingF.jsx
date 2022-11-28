import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

  //Breve introducción a useState
  //[variable, metodo para actualizarlo] = valor inciail
  const [age, setage] = useState(31);
  
  const birthday = () => {
    setage(age + 1)
  }

  return (
    <div>
      <h1>Hola {props.name} desde componente funcional</h1>
      <h2>Tu edad es de: {age}</h2>
      <button onClick = {birthday}>
        Cumplir años
      </button>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
