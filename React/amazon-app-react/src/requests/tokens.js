import {BASE_URL} from './config';

export const Token = {
  create (params) {
    return fetch(
      `${BASE_URL}/api/v1/tokens`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => {
      if (res.status === 200) { //200 --> status for successful response for HTTP request
        return res.json();
      } else {
        return {error: 'Unauthorized'};
      }
    });
  }
};
