import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';
import RecipeBox from '../portfolio/Recipe_Box.jpg';
import GymMembership from '../portfolio/gym.jpg';
import { Grid } from '@material-ui/core';
import Coding from '../portfolio/images.jpeg'




class Portfolio extends Component {

   portfolioProjects=[{projectTitle:'Recipe-Box', 
   projectDescription:'Recipe-Box is a cooking recipe managment web app. Store and eddit your recipes, share them with others, keep your shoping list and more! Never loose a recipe again!', projectImg:RecipeBox, projectWebsite:'http://ec2-54-149-29-93.us-west-2.compute.amazonaws.com/', projectGit:'https://github.com/kozaktar/meal-planer', frontEnd:'React, Redux-Saga, CSS, Material UI', backEnd:'Node.JS, MongoDB, Firebase Authentication', DevOps:'Docker, AWS EC2'},

   {projectTitle:'Gym Membership App', 
   projectDescription:'This was a Software Engineering term project. My team and I developed a Java desktop application for managing gym members, scheduling classes and managing club finances.', projectImg:GymMembership, projectGit:'https://github.com/kozaktar/SchoolProjects/tree/master/Software%20Engineering%20Project',frontEnd:'Java Swing', backEnd:'Java, JDBC, HyperSQL'},
   
   {projectTitle:'Patient Information and Records Management System', 
   projectDescription:'This was a Databse Systems term project.  An application for managing patient records and information accross multiple health care facilities.', projectImg:Coding, projectGit:'https://github.com/kozaktar/SchoolProjects/tree/master/Databases%20Term%20Project', frontEnd:'React, Redux, CSS, Material UI', backEnd:'Node.JS, Oracle SQL',},
   
   {projectTitle:'File Sharing Comand Line Application', 
   projectDescription:'This was a networking term project. A command line application for distributed p2p file sharing similair to torrent.', projectImg:Coding, projectGit:'https://github.com/kozaktar/SchoolProjects/tree/master/Networking%20Term%20Project',  backEnd:'Java'}]

  render() {

    return(
      <section id="portfolio">

      <div className="row">

         <div>

            <h1>Check Out Some of My Projects</h1>

            <Grid container spacing={3}>
            {this.portfolioProjects.map(item=><Grid item sm={6}><ProjectCard style={{height:'300px'}} project={item}/></Grid>)}
                
          </Grid>
          </div>
      </div>
   </section>
    )
  }
}

export default Portfolio;