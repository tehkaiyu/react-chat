import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

function registerVelocityEvents() {
  Velocity.RegisterEffect('login.bounceIn', {
    defaultDuration: 1200,
    calls: [
        [ { opacity: [ 1, 0 ], scaleX: [ 1.03, 0.3 ], scaleY: [ 1.03, 0.3 ] }, 0.40 ],
        [ { scaleX: 0.95, scaleY: 0.92, translateZ: 0 }, 0.20 ],
        [ { scaleX: 1, scaleY: 1 }, 0.50 ]
    ]
  });
}

const LoginAnimation = {
  init() {
    registerVelocityEvents();
  }
};

export default LoginAnimation;