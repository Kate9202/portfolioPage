import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign:'center'}}>
              <img
                src="https://media.licdn.com/dms/image/C4E03AQF3L9bUg8JRIg/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=DCtvGlO_ukgdeJeSNha8WJ7RA_N-xMdLVPvQRVwypDc"
                alt="avatar-resume"
                style={{height: '200px'}}
              />
            </div>
            <div className="resume-left-text">
              <h2 style={{paddingTop: '2em', textAlign:'center'}}>Yuhuan Fan</h2>
              <h4 style={{color:'grey'}}>Software Engineer</h4>
              {/*Self introduction*/}
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>
              Started coding since freshman year in 2010, I focused on Database Management and Data Analytics. <br/>
              Finding my passion in software engineering in 2016, I learned through projects and internship, focusing on backend and full-stack development especially using Java, JavaScript and Spring framework.

              </p>
              {/*Personal info*/}
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Address</h5>
              <p>Sunnyvale, CA 94089</p>
              <h5>Email</h5>
              <p>yfan4@binghamton.edu</p>

              {/*Download resume*/}
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Please check downloadable resume <a href="https://www.google.com">here</a></p>
            </div>

          </Cell>

          <Cell col={8} className="resume-right-col">

          {/*Education section*/}
          <h2>Education</h2>
          <Education
            startYear="Jan 2017"
            endYear="Apr 2018"
            city="San Jose, CA"
            schoolName="International Technological University"
            degreeDescription="Master of Science in Computer Science"
            relevantCourse="Big Data, Principle of OS & Distributed System, Ruby on Rails, R Programming, Python Programming"
           />
          <Education
            startYear="Sep 2014"
            endYear="Dec 2016"
            city="Binghamton, NY"
            schoolName="Binghamton University, SUNY"
            degreeDescription="Master of Science in Accounting"
            relevantCourse="Information System Analysis and Specification, Database Management System, Advanced Spreadsheeting (VBA), IT for Business Analytics, Decision Modeling & Risk Analysis"
           />

          <Education
            startYear="Sep 2010"
            endYear="Jun 2014"
            city="Zhengzhou, China"
            schoolName="Zhengzhou University of Light Industry"
            degreeDescription="Zhengzhou, China"
            />

            <hr style={{borderTop:'3px solid white'}}/>

            {/*Work Experience section*/}
            <h2>Experience</h2>
            <Experience
              startYear={2012}
              endYear={2012}
              workCity="Santa Clara, CA"
              companyName="BitTiger Inc. | Software Engineer Intern"
              companyDescription="Full-stack and backend development"
            />
            <Experience
              startYear={2012}
              endYear={2012}
              workCity="New York, NY"
              companyName="Gottesman Company | M&A Business Research Intern"
              companyDescription="Business research for business merch and acquisition for Investment Banking company"
            />
            <Experience
              startYear={2012}
              endYear={2012}
              workCity="Zhengzhou, China"
              companyName="Dahua Accounting Firm | Audit Intern"
              companyDescription="Performed annual financial report audit with a team of 5"
            />
            <Experience
              startYear={2012}
              endYear={2012}
              workCity="Hong Kong"
              companyName="MassMutual Asia Ltd. | Financial Management Intern"
              companyDescription="Designed and presented financial management product"
            />
            <hr style={{borderTop:'3px solid white'}}/>

            {/*Skill section*/}
            <h2>Skills</h2>
            <Skills
              skill="Java"
              progress={80}
            />
            <Skills
              skill="JavaScript"
              progress={70}
            />
            <Skills
              skill="Python"
              progress={60}
            />
            <Skills
              skill="HTML/CSS"
              progress={70}
            />
            <p className="skill-list">
              <ul>
                <li><b>Programming Language</b>: Java, JavaScript, Python, Ruby, R, HTML, CSS</li>
                <li><b>Framework</b>: Spring Framework, Meteor, Node.js, REST, Ruby on Rails, React, AngularJS</li>
                <li><b>Cloud Platform</b>: AWS EC2, RDS, S3, Spring Cloud, Docker</li>
                <li><b>Database</b>: MySQL, MongoDB, Redis, MemCached, Cassandra, RabbitMQ</li>
              </ul>
            </p>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Resume;
