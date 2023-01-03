import React from "react"



class Clascomponent extends React.Component{
constructor(){
    super()
    console.log("hello constructer")
    this.state={
        a:2
    }
    this.update()
}
update(){
    setInterval(()=>{
       this.setState({a:this.state.a+1})
    },1000)
}

    render(){
      return <div>
        <h1>{this.props.greet} I am class component and a child of time component </h1>
        <p>value - {this.state.a}</p>
   </div> }
  }
export default Clascomponent