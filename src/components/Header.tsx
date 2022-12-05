import NavItem from "./NavItem";
import Canvas from "./Graphics/Canvas";
import Shape1 from "../assets/shape1.png";
import Shape2 from "../assets/shape2.png";

const Header = () => {
    return (
        <header >
          {/* <Canvas></Canvas> */}
        <img className="shape1" src={Shape1} alt="backround abstract shape 1"></img>
        <div className="header">
        <h1 className="headerTitle">Aina Pérez</h1>
        <p className="headerP">Fullstack Engineer</p>
        <nav id="menu">
              <ul className="menuUl">
                <NavItem linkName='about' />
                <NavItem linkName='work' />
                <NavItem linkName='contact' />
              </ul>
          </nav>
          </div>
          <img className="shape2" src={Shape2} alt="backround abstract shape 2"></img>
        </header>
    )
}

export default Header; 