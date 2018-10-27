import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Yuhuan Fan</h2>
              <img
                src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1607/tuktukdesign160700194/59972391-woman-user-icon-laptop-computer-device-worker-vector-illustration.jpg?ver=6"
                alt="avatar"
                style={{height: '250px'}}
              />

              <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
              Download female programmer icon in PNG and vector SVG formats for both personal & commercial use. Find more icons for infographics and websites.
              </p>


          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true" />(123)-456-1234
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                  <i className="fa fa-fax" aria-hidden="true" />123-123-123
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true" />yfan4@binghamton.edu
                  </ListItemContent>
                </ListItem>

              </List>
            </div>




          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
