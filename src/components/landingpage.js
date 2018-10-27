import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn-images-1.medium.com/max/1200/1*RpxcLZjkK2fZYECYCBeYUA.jpeg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr/>
              <p className="skill-list">Java / JavaScript</p>
              <div className="social-links">
                {/*Github*/}
                <a href ="https://github.com/Kate9202" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*Linkedin*/}
                <a href ="https://www.linkedin.com/in/yfan4/" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Instagram*/}
                <a href ="https://www.instagram.com/yuhuan_f/" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
