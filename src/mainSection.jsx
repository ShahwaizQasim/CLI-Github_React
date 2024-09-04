import 'animate.css';

function MainSec() {
  return (
    <>
      <div className="section1-container-fluid">
        <div className="section1-container">
          <div className="section1-content">
            <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
              Take GitHub to the command line
            </h1>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              GitHub CLI brings GitHub to your terminal. Free and open source.
            </p>
            <button className="section1-button animate__animated animate__zoomIn animate__delay-3s">
              Download For Windows
            </button>
            <br />
            <a
              href="#"
              className="animate__animated animate__fadeInUp animate__delay-4s"
            >
              View Installation Instructions
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


export default MainSec;
