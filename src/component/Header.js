export const Title = () => (
    <a href="/">
    <img
    className="logo" 
    alt="logo" 
    src="https://img.freepik.com/free-vector/restaurant-retro-logo-pack_23-2148369916.jpg?w=740&t=st=1695195526~exp=1695196126~hmac=4999cc14aeefcdda47d43b78dc0bfc10eafdb5f555c12c6bfd16f89ad6f7dae8"
    />
    </a>
);

const Header = () => {
    return(
        <div className="header">
            <Title />
             <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};
export default Header;