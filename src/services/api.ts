export const api = ({ method, url, body, isJSON }) =>
  new Promise((resolve, reject) => {
    const payload = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
		if (body !== null) {
			(payload as any).body = JSON.stringify(body);
		}
    fetch(url, payload)
      .then((response: any) => {
        if (isJSON) {
          response = response.json();
          resolve(response);
        } else {
          response = response.text();
          resolve(response);
        }
      })
      .catch(error => reject(error));
  });
