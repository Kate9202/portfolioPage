import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C4E03AQF3L9bUg8JRIg/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=DCtvGlO_ukgdeJeSNha8WJ7RA_N-xMdLVPvQRVwypDc"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr/>

              <p className="skill-list">
                <ul>
                  <li><b>Programming Language</b>: Java, JavaScript, Python, Ruby, R, HTML, CSS</li>
                  <li><b>Framework</b>: Spring Framework, Meteor, Node.js, REST, Ruby on Rails, React, AngularJS</li>
                  <li><b>Cloud Platform</b>: AWS EC2, RDS, S3, Spring Cloud, Docker</li>
                  <li><b>Database</b>: MySQL, MongoDB, Redis, MemCached, Cassandra, RabbitMQ</li>
                </ul>
              </p>              
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
