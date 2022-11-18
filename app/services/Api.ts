import apisauce, {ApisauceInstance} from 'apisauce';

const apiConfig: ApisauceInstance = (baseURL: string) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: {'Cache-Control': 'no-cache'},
  });

export const api: ApisauceInstance = apiConfig('https://api.veroxos.com');

const auth = () => {
  const signInUser = (credentials: {username: string; password: string}) => {
    console.log('credentials', credentials);
    return api.post('/api/auth/login', credentials);
  };

  return {
    signInUser,
  };
};

export default {
  auth,
  api,
};
