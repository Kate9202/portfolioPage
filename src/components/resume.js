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
                src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1607/tuktukdesign160700194/59972391-woman-user-icon-laptop-computer-device-worker-vector-illustration.jpg?ver=6"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Yuhuan Fan</h2>
            <h4 style={{color:'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>ASDF may refer to: Alabama State Defense Force, a military entity; Alaska State Defense Force, a military entity; Air Self-Defense Force, a branch of the Japan ...
            ASDF may refer to: Alabama State Defense Force, a military entity; Alaska State Defense Force, a military entity; Air Self-Defense Force, a branch of the Japan ...
            ASDF may refer to: Alabama State Defense Force, a military entity; Alaska State Defense Force, a military entity; Air Self-Defense Force, a branch of the Japan ...</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Hacker Way Melon Park</p>
            <h5>Phone</h5>
            <p>123-123-1231</p>
            <h5>Email</h5>
            <p>asdf@gmail.com</p>
            <h5>Website</h5>
            <p>www.mywebsite.com</p>
          </Cell>

          <Cell col={8} className="resume-right-col">

          {/*Education section*/}
          <h2>Education</h2>
          <Education
            startYear={2010}
            endYear={2014}
            schoolName="My University"
            schoolDescription="Prior to being uploaded to YouTube, asdf began as a webcomic series by TomSka. He initially posted the strips on Sheezyart under the name “asdfman."
           />
           <Education
             startYear={2014}
             endYear={2016}
             schoolName="My 2nd University"
             schoolDescription="Prior to being uploaded to YouTube, asdf began as a webcomic series by TomSka. He initially posted the strips on Sheezyart under the name “asdfman."
            />

            <hr style={{borderTop:'3px solid white'}}/>

            {/*Work Experience section*/}
            <h2>Experience</h2>
            <Experience
              startYear={2012}
              endYear={2012}
              companyName="First Job"
              companyDescription="Prior to being uploaded to YouTube, asdf began as a webcomic series by TomSka. He initially posted the strips on Sheezyart under the name “asdfman."
            />
            <Experience
              startYear={2012}
              endYear={2012}
              companyName="Second Job"
              companyDescription="Prior to being uploaded to YouTube, asdf began as a webcomic series by TomSka. He initially posted the strips on Sheezyart under the name “asdfman."
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
              progress={50}
            />
            <Skills
              skill="Python"
              progress={60}
            />
            <Skills
              skill="HTML/CSS"
              progress={50}
            />
          </Cell>
        </Grid>





      </div>
    )
  }
}

export default Resume;
