import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      /*{React Projects}*/
      return(
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:"white", height:'176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>My portfolio page</CardTitle>
            <CardText>
              This is my third version portfolio website.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/Kate9202/portfolioPage">Github</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:"white", height:'176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>BWT web app</CardTitle>
            <CardText>
              This is the web app built for the basketball team I play in. The project is still in construction.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        /*{Java Spring Projects}*/
        <div><h1>Java / Spring projects waiting to be published</h1></div>
      )
    } else if(this.state.activeTab === 2){
      return(
        /*{Ruby on Rails Projects}*/
        <div><h1>Ruby on Rails waiting to be published</h1></div>
      )
    } else if(this.state.activeTab === 3){
      return(
        /*{MongoDB Projects}*/
        <div><h1>MongoDB waiting to be published</h1></div>
      )
    }
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Java / Spring</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid >
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
