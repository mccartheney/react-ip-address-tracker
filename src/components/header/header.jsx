// import search icon
import searchIcon from "../../images/icon-arrow.svg";
// import mobile background
import mobileBackground from "../../images/pattern-bg-mobile.png";
// import desktop background
import desktopBackground from "../../images/pattern-bg-desktop.png";;

const Header = (props) => {
    const {setIP} = props;

    return (
        <div className="header">
            {/* background */}
            <picture>
                <source media="max-width:1024px" srcSet={mobileBackground} />
                <img src={desktopBackground} alt="background" />
            </picture>


            {/* header header */}
            <h1>
                IP Address Tracker
            </h1>

            {/* search for ip */}
            <div className="header_form">
                <input type="text" placeholder=" Search for any IP address" className="header_form_input" />
                <button className="header_form_button" onClick={() => {
                    setIP(document.querySelector(".header_form_input").value);
                }}>
                    <img src={searchIcon} alt="search" />
                </button>
            </div>
        </div>
    )
};

export default Header;