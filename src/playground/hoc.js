import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// A HIGH ORDER COMPONENT, written like a normal arrow function
const withAdminWarning = (WrappedComponent) => { // Its a convention to name the component this way
    return (props) => ( // this is the actual high order component
        <div>
            {props.isAdmin && <p>This is private info please dont share</p>}
            <WrappedComponent {...props} /> 
        </div>
    ); // spreading props in the component has the effect of passing in every key value pair as a prop
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? ( // This is to hide or show the component based on the value
                <WrappedComponent {...props} /> 
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info); //Pass in the component we want to use in the hoc, assign it to what the hoc name will be
const AuthInfo = requireAuthentication(Info); 

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById('app'))

