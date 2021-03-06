import React from 'react';
import Velocity from 'velocity-animate';
import { Navigation } from 'react-router';

import MessagesActions from '../../actions/ChatViewAction';
import UserStore from '../../stores/UserStore';

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

const INPUT_TEXT = {
  name: { valid: 'Hey there!', invalid: 'Hey there!'},
  email: { valid: 'Nice email!', invalid: 'Invalid email' }
};

let Login = React.createClass({
  mixins: [Navigation],
  componentWillMount: function() {
    UserStore.addChangeListener(this.onStoreChange);
  },
  componentWillUnmount: function() {
    UserStore.removeChangeListener(this.onStoreChange);
  },
  getInitialState: function() {
    return {
      name: {
        valid: false,
        text: INPUT_TEXT.name.valid,
        value: ''
      },
      email: {
        valid: false,
        text: INPUT_TEXT.email.invalid,
        value: ''
      }
    };
  },
  onStoreChange() {
    Velocity.animate(this.refs.formWrapper.getDOMNode().childNodes, 'transition.slideLeftOut', {
      stagger: 130,
      duration: 600
    }).then(() => {
      Velocity.animate(this.refs.loginPage.getDOMNode(), 'login.slidePageLeft')
        .then(() => {
          this.transitionTo('/chat');
        });
    });
  },
  handleLogin(e) {
    e.preventDefault();

    if (!this.state.name.valid) {
      this.handleInvalidInput(this.refs.nameInput.getDOMNode());
      return;
    }

    if (!this.state.email.valid) {
      this.handleInvalidInput(this.refs.emailInput.getDOMNode());
      return;
    }

    MessagesActions.login(this.state.name.value, this.state.email.value);
  },
  handleInvalidInput(el) {
    Velocity.animate(el.parentNode, 'callout.shake')
      .then(() => {
        el.focus();
      });
  },
  updateName(e) {
    var target = e.target;
    if (target.value) {
      this.handleInputState(true, 'name', target.value);
      target.previousSibling.classList.add('in');
    } else {
      this.handleInputState(false, 'name', target.value);
      target.previousSibling.classList.remove('in');
    }
  },
  updateEmail(e) {
    var target = e.target;
    if (target.value) {
      if (!validateEmail(target.value)) {
        this.handleInputState(false, 'email', target.value);
      } else {
        this.handleInputState(true, 'email', target.value);
      }
      target.previousSibling.classList.add('in');
    } else {
      target.previousSibling.classList.remove('in');
    }
  },
  handleInputState(valid, textFrom, value) {
    var v = (valid) ? 'valid' : 'invalid';
    this.setState({
      [textFrom]: {
        valid: valid,
        text: INPUT_TEXT[textFrom][v],
        value: value
      }
    });
  },
  componentDidMount() {
    console.log('Login Page: loaded');
    Velocity(this.refs.formWrapper.getDOMNode().childNodes, 'login.bounceIn', {
      stagger: 230,
      display: 'block'
    });
  },

  render() {
    return(
      <div className="login-page" ref="loginPage">
        <form className="login-form" onSubmit={this.handleLogin} ref="formWrapper">
          <label>
            <span className="login-form__placeholder">
              { this.state.name.text }
            </span>
            <input className="login-form__input" type="text" placeholder="Name" ref="nameInput" onChange={ this.updateName } value={ this.state.name.value } />
            <span className="login-form__icon">
              <svg version="1.1" width="14px" viewBox="0 0 18 19" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path d="M9,0C6.2,0,4,2.7,4,6c0,1.7,0.6,3.2,1.6,4.3C0.4,11.4,0,14,0,14v2c0,1.1,1.9,3,3,3h12c1.1,0,3-1.9,3-3v-2
                    c0,0-0.4-2.6-5.6-3.7C13.4,9.2,14,7.7,14,6C14,2.7,11.8,0,9,0L9,0z M9,10c-1.7,0-3-1.8-3-4c0-2.2,1.3-4,3-4c1.7,0,3,1.8,3,4
                    C12,8.2,10.7,10,9,10L9,10z M4,17c-0.6,0-2-0.4-2-1v-1v-1c1.3-1.2,3.8-2,7-2c3.2,0,5.7,0.8,7,2v1v1c0,0.6-1.4,1-2,1H4L4,17z"/>
                </g>
              </svg>
            </span>
          </label>
          <label>
            <span className="login-form__placeholder">
              { this.state.email.text }
            </span>
            <input className="login-form__input" type="email" placeholder="Email" ref="emailInput" onChange={ this.updateEmail } value={ this.state.email.value } />
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
          </label>
          <input className="login-form__submit" type="submit" ref="submitButton" value="Let's Talk" />
        </form>
      </div>
    );
  }
});

export default Login; 