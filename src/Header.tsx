import "./styles/Header.css";
import PokedexText from "./images/PokedexText.png";

const Header = () => {
    return (
        <div id="header">
            <img src={PokedexText} width={115}/>
        </div>
    );
}

export default Header;  