import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      
      //var profilepic= "images/"+this.props.data.image;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={null} alt="Taras Kozak Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I'm a Full Stack developer with a passion for coding and experimenting with new technologies. I love solving problems and bringing new ideas to life. Give me a shout if you're looking for a developer with experience in React and Java and passion for learning new tecnologies.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Me</h2>
                  <p className="address">
						   <span>416-829-0813</span><br />
                     <span>kozaktaras15@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
