import React from 'react';
import { Navigation } from 'react-router';


let Login = React.createClass({
  mixins: [Navigation],

  handleLogin(e) {
    e.preventDefault();
    this.transitionTo('/chat');
  },

  render() {
    return(
      <div className="login-page">
        <form className="login-form" onSubmit={this.handleLogin}>
          <div>
            <input className="login-form__input" type="text" placeholder="Name" required />
            <span className="login-form__icon">
              <svg version="1.1" width="14px" viewBox="0 0 18 19" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path d="M9,0C6.2,0,4,2.7,4,6c0,1.7,0.6,3.2,1.6,4.3C0.4,11.4,0,14,0,14v2c0,1.1,1.9,3,3,3h12c1.1,0,3-1.9,3-3v-2
                    c0,0-0.4-2.6-5.6-3.7C13.4,9.2,14,7.7,14,6C14,2.7,11.8,0,9,0L9,0z M9,10c-1.7,0-3-1.8-3-4c0-2.2,1.3-4,3-4c1.7,0,3,1.8,3,4
                    C12,8.2,10.7,10,9,10L9,10z M4,17c-0.6,0-2-0.4-2-1v-1v-1c1.3-1.2,3.8-2,7-2c3.2,0,5.7,0.8,7,2v1v1c0,0.6-1.4,1-2,1H4L4,17z"/>
                </g>
              </svg>
            </span>
          </div>
          <div>
            <input className="login-form__input" type="email" placeholder="Email" required />
            <span className="login-form__icon">
              <svg version="1.1" width="16px" viewBox="0 0 22 16" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path d="M19,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h16c1.7,0,3-1.3,3-3V3C22,1.3,20.7,0,19,0L19,0z M4,14
                    c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2H4L4,14z"/>
                </g>
                <g>
                  <path d="M22,2L11,9.8L0,2v2.5l10.4,7.4c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1c0.1,0.1,0.2,0.1,0.3,0.1
                    c0.1,0,0.2,0,0.3-0.1L22,4.5V2L22,2z"/>
                </g>
              </svg>
            </span>
          </div>
          <input className="login-form__submit" type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
});

export default Login; 