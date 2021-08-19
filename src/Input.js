
import React from "react"


class Input extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                enable:false,
                placeholder:"Alex",
                value: "",
                value2: "",
                copied: false,
                value3: "submit",
                copyValue: ""
            }
            this.onFocus = this.onFocus.bind(this);
            this.onBlur = this.onBlur.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.onPaste = this.onPaste.bind(this);
        }
    onFocus(){
        console.log('entered');
        this.setState({
            enable:true
        })
    }   
    onBlur(){
        console.log('left');
        if(!this.state.value){
             this.setState({
            enable:false
        })
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
          const text = this.state.value
        this.setState({
            value2: text,
            value: ''
        })
        if(this.state.value === text){
            this.setState({
                value3: 'Remove'
            })  
        }
        if(this.state.value === ''){
            this.setState({
                value3: 'Submit'
            })
        }

        event.preventDefault();
      }
      onPaste(event){
        let text2 = event.clipboardData.getData('Text');
        let  copyText = text2.repeat(1);
       this.setState({
        value: this.state.value + copyText
    })
      }
    render(){
        return(
             <div className="input">
                 <h1>{this.state.value2} </h1>
           <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input  onFocus={this.onFocus} onBlur={this.onBlur} onPaste={this.onPaste} type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input disabled={!this.state.enable} type="submit" value={this.state.value3} />
      </form>
            </div>
            )
    }   
}

export default Input;