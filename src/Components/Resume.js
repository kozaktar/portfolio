import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialUI from '../skills/material-ui.png';



class Resume extends Component {
  render() {

    if(this.props.data){
    
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
            
         </div>

         <div className="nine columns main-col">
         <Grid container spacing={3}>
        <Grid item xs>
        <i class="devicon-java-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-javascript-plain" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-html5-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-css3-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-react-original-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-webpack-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-npm-original-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-nodejs-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-mongodb-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-postgresql-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-docker-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize:120}}/>
        </Grid>
        <Grid item xs>
        <i class="devicon-git-plain-wordmark" style={{fontSize:120}}/>
        
        </Grid>
        <Grid item xs>
        <img src={MaterialUI} style={{maxHeight:100}} alt=''/>
        </Grid>
      </Grid>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
