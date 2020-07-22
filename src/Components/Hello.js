import React, { Component } from 'react';


class Hello extends Component {
    state = {
        formal: true
    };

    swaper = () => {
        console.log(this.state);
        this.setState({
            formal: !this.state.formal
        })
    }

    render(){
        return (
            <> 
                {this.state.formal ?
                    <h1>Bonjour {this.props.userInfo.firstName} from Hello Component</h1>
                 :  <h1>Hello Mrs {this.props.userInfo.lastName} from Hello Component</h1>

                }
                <button onClick={this.swaper}> Click here</button>
            </>
        )
    }
}

export default Hello;