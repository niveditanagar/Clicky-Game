import React, { Component } from "react";
import Container from "./components/Container/container";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import Row from "./Row";
import Column from "./Column";
import Nav from "./components/Nav/nav";
import "./App.css";


function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });      
    }
    else if (newScore === 16) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "YES",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <div className="App-header">
        <Wrapper>
          <Nav
            title="Click Any Image to Begin"
            score={this.state.currentScore}
            topScore={this.state.topScore}
            rightWrong={this.state.rightWrong}
          />
          <Title></Title>
          <header className="app-header"></header>
          <div className="card-container">
            
            <Row>
              {this.state.friends.map(friend => (
                <Column size="md-3 sm-6">
                  <Container
                    key={friend.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    handleShuffle={this.handleShuffle}
                    id={friend.id}
                    image={friend.image}
                  />
                </Column>
                ))}
                </Row>
              
              
              
                
                 
                   
                      
                
            </div>
          </Wrapper>
        </div>
        // );
        )}
    }
  
  
  export default App;
  
  
