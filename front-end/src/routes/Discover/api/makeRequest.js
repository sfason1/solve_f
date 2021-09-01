import axios from 'axios';
import qs from 'querystring';
import config from '../../../config';

const { api } = config;

export default async function makeRequest(path, resourceType) {
  const { data: { access_token: token } } = await axios.post(
    'https://accounts.spotify.com/api/token',
    /* something here */
    /* header stuff here */
    {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },data: 'grant-type_client_credentials',
      method: 'POST'
    }
    .then(tokenResponse => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
    })
  );

  const res = await axios.get(
    /* endpoint here */
    'https://api.spotify.com/v1/browse/new-releases',
    /* header stuff here */
    {
      headers: {
        'Authorization' : 'Bearer ' + tokenResponse.data.access_token
      }
      .then(newRelease => {
        
      })
    }
  );

  const res = await axios.get(
    /* endpoint here */
    'https://api.spotify.com/v1/browse/featured-playlists',
    /* header stuff here */
    {
      headers: {
        'x-access-token': 'token-value'
      }
    }
  );

  const res = await axios.get(
    /* endpoint here */
    'https://api.spotify.com/v1/browse/categories',
    /* header stuff here */
    {
      headers: {
        'x-access-token': 'token-value'
      }
    }
  );

  return res.data[resourceType].items;
}
