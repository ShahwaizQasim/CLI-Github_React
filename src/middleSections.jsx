import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function MiddleSections() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* <!-- ***************************************section2***************************************** --> */}

      <div class="section2-container-fluid">
        <div class="section2-container">
          <div class="section2-image">
            <div
              class="section2-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <center>
                <a href="https://git.io/typing-svg">
                  <img
                    src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=FFFFFF&center=true&vCenter=true&random=false&width=435&lines=%24+gh+issue+list;%24+gh+pr+checks;%24+gh+pr+checkout;%24+gh+release+checks"
                    alt="Typing SVG"
                    width="auto"
                  />
                </a>
                <p>View and filter a repository’s open issues.</p>
              </center>
            </div>
            <div
              class="section2-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i class="fa-solid fa-circle circle1"></i>
              <i class="fa-solid fa-circle circle2"></i>
              <i class="fa-solid fa-circle circle3"></i>
              <div class="section2-pause">
                <i class="fa-solid fa-pause pause"></i>
              </div>
              <p>$ issue list</p>
              <span>Showing 4 of 4 issues in cli/cli</span>
              <div class="section2-content-responsive">
                <div class="section2-text1">
                  <p>
                    <span>#16</span>Improving interactions with protected
                    branches
                  </p>
                  <p>
                    <span>#14</span>PR commands on a detached head
                  </p>
                  <p>
                    <span>#13</span>Support for GitHub Enterprise (enhancement)
                  </p>
                  <p>
                    <span>#8</span>&nbsp;Add an easier upgrade command (bug)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="section2-last"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a href="#">
              View All Github CLI Command{" "}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- ******************************************************section2-end************************************************ --> */}
      {/* <!-- ******************************************************section3-start************************************************ --> */}

      <div class="section3-container-fluid">
        <div class="section3-container">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Goodbye context switching. <br />
            Hello, terminal.
          </h1>
          <div
            class="section3-container-boxes"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="section3-box">
              <h2>Your entire GitHub workflow</h2>
              <p>Work with issues, pull requests, checks, releases and more.</p>
              <a href="#">
                View Github CLI Command <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div class="section3-box">
              <h2>Script and Customize</h2>
              <p>
                Call the GitHub API to script almost any action, and set a
                custom alias for any command.
              </p>
              <a href="#">
                Learn about aliases and API
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div class="section3-box">
              <h2>Enterprise-ready</h2>
              <p>
                Connect to GitHub Enterprise Server in addition to GitHub.com.
              </p>
              <a href="#">
                Get set up with Enterprise{" "}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div class="section3-box">
              <h2>We 3 community</h2>
              <p>GitHub CLI is open source and ready for your contributions.</p>
              <a href="#">
                Contribute to CLI <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ******************************************************section3-end************************************************ --> */}
      {/* <!-- ******************************************************section4-start************************************************ --> */}

      <div class="section4-container-fluid">
        <div class="section4-container">
          <div
            class="section4-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>Try GitHub on the command line</h2>
            <p>
              GitHub CLI brings GitHub to your terminal. Free and open source.
            </p>
            <button class="section4-button">Download For Windows</button>
            <br />
            <a href="#">
              View installation instructions
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleSections;
