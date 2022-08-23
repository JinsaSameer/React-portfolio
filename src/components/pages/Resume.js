import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import resume from '../../assets/resume.pdf';
//import '../../styles/footer.css';
import '../../styles/style.css';
export default function Resume() {
    return (
      <div>
        <Header />
        <div className="content">
          <h2 id="h2">Resume</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>View my Resume</h3>
                <a href="https://github.com/JinsaSameer/React_portfolio/blob/main/src/assets/resume.pdf">Resume</a>
                <div className="col-md-6"><h3>Technical Skills</h3>
            <div className="row">
              <div className="col-md-6">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
              </div>
              <div className="col-md-6">
              <ul>
                <li>Front-end development</li>
                
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Debugging</li>
                
                
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
    );
}
              
  
      