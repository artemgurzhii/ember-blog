import config from '../../config/environment';

const {
  torii: {
    sessionServiceName
  }
} = config;

export function stubValidSession(application, sessionData) {
  const session = application.__container__.lookup(`service:${sessionServiceName}`);
  const sm = get(session, 'stateMachine');

  Ember.run(() => {
    sm.send('startOpen');
    sm.send('finishOpen', sessionData);
  });
}

export function login(application) {
  stubValidSession(application, {
    currentUser: {
      handle: 'testguy',
      uid: 'xyz'
    }
  });
}
