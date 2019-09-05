import React from 'react';
import './App.css';
import Header from "./components/Header"
import Container from "./components/Container"
import Card from "./components/Card"

// state = {
//     cards,
//     score: 0,
//     highscore: 0
// }

// gameOver = () => {
//   if(this.state.score > this.state.highscore) {
//     this.setState({highscore:this.state.score},function() {
//     })
//   }
// }


function App() {
  return (
    <Container>
      <Header>Clinky Game Simsons version!<Header/>
      <Card/>
    </Container>
  );
}

export default App;
