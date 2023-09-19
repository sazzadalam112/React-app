import React from "react";
import  ReactDOM  from "react-dom";

const Title = () => (
    <img
    className="logo" 
    alt="logo"
    src="https://img.freepik.com/premium-vector/eat-food-logo-with-concept-design-forming-letter-e-vector_598213-9264.jpg"
    />
);
const Headercomponent = () => {
    return(
        <div className="header">
            (<Title />)
             <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headercomponent />)