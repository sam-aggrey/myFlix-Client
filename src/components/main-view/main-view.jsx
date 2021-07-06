import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor(){
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Inception', Description: 'Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb\'s criminal history as payment for performing an inception on his sick competitor\'s son.', Genre: 'Action', Director: 'Christopher Nolan', ImagePath: 'https://resizing.flixster.com/4MrL62heb7yBgBt8zllSeqNZxg4=/206x305/v2/https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg'},
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.', Genre: 'Drama/Crime', Director: 'Frank Darabont', ImagePath: 'https://resizing.flixster.com/U8DOCAyL0efMS6cA0UmrNi8oyQk=/206x305/v2/https://flxt.tmsimg.com/NowShowing/3725/3725_aa.jpg'},
        { _id: 3, Title: 'Gladiator', Description: 'Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.', Genre: 'Adventure', Director: 'Ridley Scott', ImagePath: 'https://resizing.flixster.com/z1uxBIn8PvwL-9RdEvzLbHJbc9Y=/206x305/v2/https://flxt.tmsimg.com/assets/p24674_p_v13_bc.jpg'}
      ]
        
    }
  }
    
     setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
    
 render() {
    const { movies, selectedMovie, register } = this.state;

    if (register) return <RegistrationView onRegister={register => this.onRegister(register)} toggleRegister={this.toggleRegister} />;
    if (this.state.user === null)
        return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} toggleRegister={this.toggleRegister} />;
    if (movies.length === 0) return <div className="main-view" />;
        return (
            <div className="main-view">
                {selectedMovie
                  ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                  : movies.map(movie => (
                    <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                  ))
                }
              </div>
    );
  }
};
export default MainView;