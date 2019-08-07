import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styled';
import Card from '../../components/Card';
import { filterMovies } from '../../Redux/actions';

class Search extends React.Component {
  componentDidMount(){
   fetch('https://mfwkweb-api.clarovideo.net//services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico/api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52')
   .then((res) => {
     return res.json()
   })
   .then((json) => {
     let movies = json.response.groups
     let filterMovies = movies.filter(movie => movie.title.includes(this.props.match.params.text));

     this.props.filterMovies(filterMovies)
   })
 }

  render() {
    let movies = this.props.filter
    console.log(movies);

    return (
      <Container>
        {
          movies.map((movie, i) => {
            return (
              <Card
                key={i}
                id={movie.id}
                slug={movie.title_uri}
                image={movie.image_large}
                title={movie.title}
                description={movie.description_large}
                year={movie.year}
                duration={movie.duration}
                rating_code={movie.rating_code}
              />
            )
          })
        }
      </Container>
    );
  }
}

const mapStateToProps = (state)=>{
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    filterMovies: (type) => {
      dispatch(filterMovies(type))
    },
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)
