import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../Redux/actions';
import { Container } from './styled';

class VCard extends React.Component {

  componentDidMount(){
    let groupId = this.props.match.params.id
    fetch(`https://mfwkweb-api.clarovideo.net//services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${groupId}`)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      this.props.getMovie(json)
    })
  }

  render() {
    let movie = this.props.movie.response && this.props.movie.response.group

    return (
      <Container>
        <h1>test</h1>
      </Container>
    );
  }
}

const mapStateToProps = (state)=>{
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    getMovie: (type) => {
      dispatch(getMovie(type))
    },
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VCard)
