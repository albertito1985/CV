import { Component,useEffect,useState } from 'react';

class WelcomeCarrusell extends Component{
    constructor(props){
        super(props);
        this.state={
            WordNumber:0,
        };
        this.words=[
            "Welcome",
            "to",
            "the",
            "portfolio",
            "of",
            "Alberto",
            "Nuñez"
        ];
        this.welcomeAnimation=this.welcomeAnimation.bind(this);
    }

    componentDidMount(){
        this.welcomeAnimation(true);
    }
    componentWillUnmount(){
        this.welcomeAnimation(false);
    }

    welcomeAnimation(value){
        
        var frame = ()=>{
            if(value){
                clearInterval(id);
            }else{
                if(this.state.WordNumber===6){
                    this.setState({WordNumber:0})
                }else{
                    this.setState({
                        WordNumber:this.state.WordNumber+1
                    })
                }
            }
        };
        
        var id = setInterval(frame,500);
    };
   
    

    
    render(){
        return (<h1>{this.words[this.state.WordNumber]}</h1>)
    }
}

export default WelcomeCarrusell;