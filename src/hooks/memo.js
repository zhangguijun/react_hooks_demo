import React, { Component, PureComponent, memo } from 'react';

 class Memo extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          date : new Date()
      }
  }

  componentDidMount(){
      setInterval(()=>{
          this.setState({
              date:new Date()
          })
      },1000)
  }

  render(){
      return (
          <div>
              <Child seconds={1}/>
              <div>{this.state.date.toString()}</div>
          </div>
      )
  }
}
export default Memo
class Child extends PureComponent {
  render(){
      console.log('I am rendering');
      return (
          <div>I am update every {this.props.seconds} seconds</div>
      )
  }
}
//  const Child = memo(({seconds},areEqual)=>{

//         console.log('I am rendering');
//         return (
//             <div>I am update every {seconds} seconds</div>
//         )

// })

function areEqual(prevProps, nextProps) {
    if(prevProps.seconds===nextProps.seconds){
        return true
    }else {
        return false
    }

}


