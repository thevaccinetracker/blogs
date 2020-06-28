import React from "react";
import facebookIcon from "../images/facebook.svg";
import producthuntIcon from "../images/producthunt.svg";
import twitterIcon from "../images/twitter.svg";
import youtubeIcon from "../images/youtube.svg";

class MainHeader extends React.PureComponent {
  render() {
    return (
      <div className="container mainFooter">
        <div className="row">
          <div className="col-md-7">
            <div className="socialMediaIconsSection">
              <div className="followUS">
                <p className="paragraph">Follow us on</p>
              </div>
              <div className="socialMediaIcons facebookIcon">
                <a
                  href="https://www.facebook.com/thevaccinetracker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={facebookIcon}
                    alt="Open Facebook Page"
                    className="img img-responsive"
                  />
                </a>
              </div>
              <div className="socialMediaIcons twitterIcon">
                <a
                  href="https://twitter.com/TheVaccineTrakr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={twitterIcon}
                    alt="Open Twitter"
                    className="img img-responsive"
                  />
                </a>
              </div>
              <div className="socialMediaIcons youtubeIcon">
                <a
                  href="https://www.youtube.com/channel/UCtMJ_bX7VPUWoLXI_2mAUtQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={youtubeIcon}
                    alt="Open Youtube"
                    className="img img-responsive"
                  />
                </a>
              </div>
              <div className="socialMediaIcons producthuntIcon">
                <a
                  href="https://www.producthunt.com/posts/covid-19-vaccine-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={producthuntIcon}
                    alt="Open Producthunt"
                    className="img img-responsive"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-right">
            <div className="allthelinks">
              <ul>
                <li>
                  <a
                    href="https://rohitbind.typeform.com/to/Kso14D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Collaborate with us
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thevaccinetracker/thevaccinetracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.figma.com/file/8rXo6Cu59WpdOkXdQdi1Ce/The-Vaccine-Tracker-(-thevaccinetracker.com-)?node-id=0%3A1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Figma
                  </a>
                </li>
                <li>
                  <a
                    href="https://forms.gle/6DDNX4b74NMRw6GH8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resources &amp; Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
