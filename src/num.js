import React from "react";
import "./num.css"

class Numcomponent extends React.Component{    
constructor(){
    super()
this.state={
    a:5,
    char:" ",
    showParagraph: false,
}
}
inc(){
    this.setState({
        a:this.state.a+1
    })
}
dec(){
    this.setState({
        a:this.state.a-1
    })
}
changeval(value){
    this.setState({
        a:value
    })
}

render(){
    return <div >
         <div className="blck">
<p>count--{this.state.a}</p>
<input type={"number"} value={this.state.a} onChange={(event)=>this.changeval(event.target.value)}/>
<button onClick={()=>{this.inc()}}>Increase</button>
<button onClick={()=>this.dec()}>Decrease</button>
</div>
<div className="assign">

<textarea className="inp" value={this.state.char} onChange={(event)=>this.setState({char:event.target.value})}/>
<button className="btn" onClick={() => {this.setState({char:this.state.char.toUpperCase()})}}>Submit</button>



</div>
    </div>
}

}

export default Numcomponent