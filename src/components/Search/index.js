import React from 'react';
import {Input} from './styled';

function request(event, props){
  event.preventDefault()
  let value = event.target[0].value
  props.history.push(`/busqueda/${value}`)
  window.location.reload()
}

const Search = (props) => {
  return (
    <form onSubmit={(e) => request(e, props)}>
      <Input type="text" placeholder="Buscar"/>
    </form>
  );
}

export default Search;
