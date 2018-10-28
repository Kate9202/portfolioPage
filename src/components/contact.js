import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>

              <img
                src="https://media.licdn.com/dms/image/C4E03AQF3L9bUg8JRIg/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=DCtvGlO_ukgdeJeSNha8WJ7RA_N-xMdLVPvQRVwypDc"
                alt="avatar"
                style={{height: '250px'}}
                className="contact-avatar"
              />
              <h2>Yuhuan Fan</h2>
              <p style={{fontSize:'30px', width:'75%', margin:'auto', paddingTop: '1em'}}>
                Software Engineer
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
