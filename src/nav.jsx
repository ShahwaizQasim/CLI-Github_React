import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-cli-logo">
          <a href="#">
            {/* <i className="fa-brands fa-github nav-icon" /> */}
            <FontAwesomeIcon icon={faGithub} className='nav-icon' />
            <span> CLI</span>
          </a>
        </div>
        <div className="nav-text">
          <ul>
            <li>
              <a href="#">Manual</a>
            </li>
            <li>
              <a href="#">Release Notes</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
// Nav();

export default Nav;
