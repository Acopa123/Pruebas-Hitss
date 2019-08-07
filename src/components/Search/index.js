import React from 'react';
import {Input} from './styled';

function request(event, props){
  event.preventDefault()
  let value = event.target[0].value
  props.history.push(`/${value}`)
}

const Search = (props) => {
  return (
    <form onSubmit={(e) => request(e, props)}>
      <Input name="search" type="text" placeholder="Buscar"/>
    </form>
  );
}

export default Search;
