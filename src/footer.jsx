import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div class="footer-container-fluid">
        <div class="footer-container">
          <div class="footer-box1">
            <h2>Github</h2>
          </div>
          <div class="footer-box">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Customer stories</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
          <div class="footer-box">
            <h4>Platform</h4>
            <ul>
              <li>
                <a href="#">Developer API</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Atom</a>
              </li>
              <li>
                <a href="#">Electron</a>
              </li>
              <li>
                <a href="#">Github Desktop</a>
              </li>
            </ul>
          </div>
          <div class="footer-box">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Community Forum</a>
              </li>
              <li>
                <a href="#">Professional Services</a>
              </li>
              <li>
                <a href="#">Learning Lab</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
              <li>
                <a href="#">Contact Github</a>
              </li>
            </ul>
          </div>
          <div class="footer-box">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- **************************************footer-end************************************************** --> */}
      {/* <!-- *******************************************footer-nav********************************************* --> */}
      <div class="footer-nav-container-fluid">
        <div class="footer-nav-container">
          <div class="footer-nav-box1">
            <ul>
              <li>&copy; 2024 Github,Inc.</li>
              <li>Terms</li>
              <li>Policy</li>
            </ul>
          </div>
          <div class="footer-nav-box2">
            <ul>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Footer;
