import { api } from '../services/api';

const login = ( username:string, password:string ) => {
	const method = 'POST';
  const url = 'https://accounts.zoho.com/apiauthtoken/nb/create?SCOPE=Zohopeople/peopleapi&EMAIL_ID=' + username + '&PASSWORD=' + password + '&DISPLAY_NAME=davinci';
	const body = null;
	const isJSON = false;
  return api({ method, url, body,isJSON });
};

export { login };