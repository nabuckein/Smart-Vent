import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="roomsDiv">
          <div className="rooms" id="room1">
            <p>72</p>    
          </div>
          <div className="rooms" id="room2">
            <p id="tempReading2"></p>    
          </div>
          <div className="rooms" id="room3">
            <p>69</p>    
          </div>
          <div className="rooms" id="room4">
            <p>78</p>    
          </div>
          <div className="rooms" id="room5">
            <p>71</p>    
          </div>
          <div className="rooms" id="room6">
            <p>69</p>    
          </div>
          <div className="rooms" id="addRoom">
            <p>Add a room</p>    
          </div>

        </div>
            </div>
    );
  }
}

export default App;
