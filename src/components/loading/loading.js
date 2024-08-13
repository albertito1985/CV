import { Component } from 'react';
import Lottie from 'react-lottie';
import computer from '../../animations/computer.json';
import './loading.css'
import './WelcomeCarrusell';
import WelcomeCarrusell from './WelcomeCarrusell';

class Loading extends Component{
    
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: computer,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
        return <div className="loading">
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />
            <div className="WelcomeMessage">
                <WelcomeCarrusell/>
                <h3>Loading</h3>
            </div>
        </div>
    }
}

export default Loading