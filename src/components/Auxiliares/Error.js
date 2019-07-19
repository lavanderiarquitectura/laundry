
import React from 'react';

class Error extends React.Component{

    render(){

        var error = 

        <div style={{textAlign: "center", margin: "10px 0 0 0"}}><h1>ERROR 403 Forbidden</h1><h1>You don't have permission to access this route.</h1></div>

        return(
            <div>
                {error}
            </div>
            )
    }
}

export default Error;