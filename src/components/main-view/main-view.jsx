
import React from 'react';
import axios from 'axios';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import {RegistrationView} from '../registration-view/registration-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container, Navbar } from 'react-bootstrap';


export class MainView extends React.Component {

  constructor() {
    super();
// Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      register: null
    };
  }

  componentDidMount() {
     axios.get("https://sammy-flix.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
getMovies(token) {
  axios.get('https://sammy-flix.herokuapp.com/movies', {
    headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {
    // Assign the result to the state
    this.setState({
      movies: response.data
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}
/*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

    onLoggedIn(authData) {
  console.log(authData);
  this.setState({
    user: authData.user.Username
  });

  localStorage.setItem('token', authData.token);
  localStorage.setItem('user', authData.user.Username);
  this.getMovies(authData.token);
}
  onRegister(register) {
    this.setState({
      register,
    });
  }

render() {

    const { movies, selectedMovie, user, register } = this.state;
    

     //if (!register) return <RegistrationView onRegister={(register) => this.onRegister(register)} />;

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView*/
      
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
  <div className="main-view">
    {selectedMovie
      ? (
        <Row className="justify-content-md-center">
         
          <Col md={8} >
        
           
            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                
          </Col>
        </Row>
      )
      : (
        <Row className="justify-content-md-center">
          {movies.map(movie => ( 
            <Col md={3}  key={movie._id}>
              <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            </Col>
          ))}
        </Row>
      )
    }
  </div>
);
  }

}
  
export default MainView;




