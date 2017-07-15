import React, {Component} from 'react';


class Container extends Component{

  render(){


    return (
      <div style={{padding:"50px 200px"}}>
        {this.props.children}
      </div>

    );

  }
}


export default Container;
