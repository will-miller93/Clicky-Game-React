import React, { Component } from 'react';
import Image from './image.js';
import './content.css';
import character from '../character';
import Title from './title';
import ReactiveText from './reactivetext';
import ScoreBoard from './scoreboard';

class Content extends Component {

    state = {
        score: 0,
        topScore: 0,
        message: "Click an Image to Begin"
    };

    handleScoreIncrement = () => {
        this.setState({
            score: this.state.score + 1,
        });
    };

    handleTopScoreIncrement = () => {
        this.setState({
            topScore: this.state.topScore + 1
        })
    }

    handleGameLoss = () => {
        this.setState({
            score: 0
        })
    }

    handleCorrectGuess = () => {
        this.setState({
            message: "Correct!!"
        })
    }

    handleIncorrectGuess = () => {
        this.setState({
            message: "Incorrect!!"
        })
    }

    handleImageClick = (name, selected) => {
        console.log(name, selected);
        // console.log(character);
        // handle if image has not been clicked before
        let charactersArray = character;
        console.log(charactersArray);
        charactersArray.sort(function(a,b){return 0.5 - Math.random()});
        if (selected){
            charactersArray.forEach((character) => {
                if (character.name === name && character.selected === true) {
                    character.selected = false;
                    this.handleGameLoss();
                    this.handleIncorrectGuess();
                    this.setState({
                        message: "Incorrect!!"
                    });
                };
            });
        } else {
            charactersArray.forEach((character) => {
                if (character.name === name && character.selected === false) {
                    character.selected = true;
                    this.handleScoreIncrement();
                    if (this.state.score === this.state.topScore) {
                        this.handleTopScoreIncrement();
                    }
                    this.setState({
                        message: "Correct!"
                    });
                };
            });
        };
    };

    render() {
        return (
            <div>
                <nav className="navbar-nav sticky-top nav-fill shadow-lg">
                    <ul className="nav">
                        <Title />
                        <ReactiveText handleImageClick={this.handleImageClick} message={this.state.message}/>
                        <ScoreBoard handleImageClick={this.handleImageClick} score={this.state.score} topScore={this.state.topScore}/>
                    </ul>
                </nav>
                <div className="jumbotron">
                    <h1 className="text-center">Legend of Zelda Clicky Game</h1>
                    <h2 className="text-center">Click the images to score points. If you click an image more than once you'll lose!</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {character.map((character) =>
                            <Image key={character.key} id={character.name} selected={character.selected} handleImageClick={this.handleImageClick} />
                        )}
                    </div>
                </div>
                <div className="footer">
                    <a> Legend Of Zelda Clicky Game!! </a>
                    <br />
                    <a> Created by: Will Miller </a>
                </div>
            </div>
        );
    };

};

export default Content;

// charactersArray.forEach(character => character.selected === true);
// this.setState({ character: charactersArray, score: 0 });
// console.log(charactersArray);