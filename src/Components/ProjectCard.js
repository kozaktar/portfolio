import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: "transparent",
          color:'#A7F4F6'
        }
      }
    }
  }
})


const useStyles = makeStyles({
    root: {
      maxWidth:600 ,
      height:620,
      marginLeft:10,
      marginRight:10,
      position:'relative'
    },
    media: {
      height: 290,
    },
    icon:{
        fontSize:30,
    }

  });

  export default function ProjectCard({project}) {
    const classes = useStyles();

    console.log(project)
    function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }

    console.log(project.frontEnd)
    return (
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={project.projectImg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h3">
              {project.projectTitle}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              {project.projectDescription}
                  <div style={project.frontEnd?{marginTop:15}:{marginTop:15, display:'none'}}><span style={{fontSize:16, fontWeight:'bold'}}>Front End:</span> {project.frontEnd}</div>
                  <div style={project.backEnd?{marginTop:15}:{marginTop:15, display:'none'}}><span style={{fontSize:16, fontWeight:'bold'}}>Back End:</span> {project.backEnd}</div>
                  <div style={project.DevOps?{marginTop:15}:{marginTop:15, display:'none'}}><span style={{fontSize:16, fontWeight:'bold'}}>DevOps:</span> {project.DevOps}</div>
            </Typography>
          </CardContent>
          <MuiThemeProvider theme={theme}>
        <CardActions style={{position:'absolute', bottom:'0px'}}>
        <IconButton color="black" aria-label="open git" onClick={()=>openInNewTab(project.projectGit)}>
        <GitHubIcon className={classes.icon}/>
        </IconButton >
         <IconButton color="black" aria-label="open website" onClick={()=>openInNewTab(project.projectWebsite)} style={project.projectWebsite?{}:{display:'none'}}>
        <LanguageIcon className={classes.icon}/>
        </IconButton>
        </CardActions>
        </MuiThemeProvider>
      </Card>
    );
  }