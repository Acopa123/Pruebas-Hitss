import React from 'react';
import Card from '../../components/Card';
import { connect } from 'react-redux';
import {getMovies} from './actions';
import {Container} from './styled';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
   fetch('https://mfwkweb-api.clarovideo.net//services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico/api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52')
   .then((res) => { return res.json() })
   .then(
     (json) => {
       console.log(json);
       getMovies(json)
     }
   )
 }


  render() {
    return (
      <Container>
        <Card/>
      </Container>
    );
  }
}

const mapStateToProps = (state)=>{
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (type) => {
      dispatch(getMovies(type))
    },
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
