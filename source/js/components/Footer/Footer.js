import React from 'react';
import Paper from 'material-ui/Paper';


export default class Footer extends React.Component {
    render(){

    return (
      <div>
        <footer className="footer">
        <div className="footer_center">
          <h3>What Plates</h3>
          <p className="footer_text-light">Because Math is for Losers</p>
        </div>
{/*          <div className="footer_logos">
            <a href="http://sampedley.com">
              <img src="/images/sam_logo.png" />
            </a>
          </div>
*/}
        </footer>

        </div>
    );
    }
}
