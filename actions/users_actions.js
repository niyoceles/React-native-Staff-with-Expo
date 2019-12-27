import { GET_USERS_SUCCESS, GET_USERS_FAIL } from './types';
import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    //dispatch an action by saying facebook login is done
    dispatch({ type: GET_USERS_SUCCESS, payload: token });
  } else {
    // start up Fb login process
    doFacebookLogin(dispatch);
  }
};

// export const followers = () => async dispatch => {
//   try {
//     const res = await axios.get(`${process.env.APP_URL_BACKEND}/api/followers`);
//     dispatch(performAction(FOLLOWERS_SUCCESS, res.data.total));
//     dispatch(performAction(FOLLOWERS_USERS_SUCCESS, res.data.follower));
//   } catch (error) {
//     dispatch(performAction(FOLLOWERS_FAILURE, error.response.data.error));
//   }
// };

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    '199234764595688',
    {
      permissions: ['public_profile']
    }
  );

  if (type === 'cancel') {
    return dispatch({ type: GET_USERS_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: GET_USERS_SUCCESS, payload: token });
};
