import './styles/App.css'
import {NavLink, Outlet} from "react-router-dom";

function App() {
    return (
        <>
            {/*nav bar*/}
                <MyNavBar/>

                Testing...
                <div id="detail">
                    <Outlet/>
                </div>
        </>
    )
}

function MyNavBar() {
    return (
        <nav>
            <ul>
                {/* left */}
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/shop"}>Shop</NavLink>
                <NavLink to={"/collection"}>Collection</NavLink>

                {/* center */}
                <NavLink to={"/"}>JER 312</NavLink>

                {/* right */}
                <NavLink to={"/gallery"}>Gallery</NavLink>
                <NavLink to={"/contactUs"}>Contact Us</NavLink>
            </ul>
        </nav>
    )
}

export default App