import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
      constructor(props) {
            super(props);
            this.state = { isToggleOn: true };

            // Este enlace es necesario para hacer que `this` funcione en el callback
            this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
            this.setState({isToggleOn : !this.state.isToggleOn})
      }

      changeComponent() {
            return (
                  <div>
                        HOLA
                  </div>
            )
      }

      render() {
            return (
                  <div>
                       <h3>Esto es About</h3>
                  </div>
            );
      }
}

export default About; 