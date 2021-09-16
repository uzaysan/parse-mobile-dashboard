import Config from '../config';

export default request = {
  POST: async (endpoint, body, headers) => {
    const response = await fetch(`${Config.serverUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': Config.applicationId,
        'X-Parse-Master-Key': Config.masterKey,
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  },
  GET: async (endpoint, headers) => {
    const response = await fetch(`${Config.serverUrl}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': Config.applicationId,
        'X-Parse-Master-Key': Config.masterKey,
        ...headers,
      },
    });
    return await response.json();
  },
};
