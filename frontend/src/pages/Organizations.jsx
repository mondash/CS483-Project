import React from 'react';
import Navbar from '../components/shared/Navbar';
import ReactDOM from 'react-dom';

class Organization extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <h1>Organization</h1>
            </div>
        )
    }
}
ReactDOM(<Organization />, document.getElementById('app'));