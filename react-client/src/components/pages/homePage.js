import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>
          This is some embedded javascript: {1 + 3}
        </h2>
      	<div>
        	Home page
        </div>
        <div>
        	My name is Ian, I am a computer science major at the University of Puget Sound
      	and an aspiring software developer. 
      	</div>
      </div>
    )
  }
}

export default HomePage;