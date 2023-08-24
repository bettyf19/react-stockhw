import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <Link to="/">iStocks</Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default NavBar;


{/* <ul>
<li><Link to="/">iStocks</Link></li>
<li><Link to="/stocks">Stocks</Link></li>
<li><Link to="/about">About</Link></li>
</ul> */}