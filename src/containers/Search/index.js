import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styled';
import { search } from '../../Redux/actions';

class Search extends React.Component {
  componentDidMount(){
   fetch('https://mfwkweb-api.clarovideo.net//services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico/api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52')
   .then((res) => {
     return res.json()
   })
   .then((json) => {
     this.props.search(this.props.match.params.text, json)
   })
 }

  render() {
    return (
      <Container>
        search
      </Container>
    );
  }
}

const mapStateToProps = (state)=>{
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    search: (type, json) => {
      dispatch(search(type, json))
    },
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)
