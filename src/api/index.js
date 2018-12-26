import UserAccountAPI from './user-account.api';
import ContainerAPI from './container.api';

const API_ROOT = process.env.VUE_APP_API_ROOT || window.location.origin;
// eslint-disable-next-line
export { 
  API_ROOT,
  UserAccountAPI,
  ContainerAPI
};
