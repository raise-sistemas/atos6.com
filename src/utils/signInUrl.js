import { isBrowser } from "./isBrowser";

export const signInUrl = () => {
  const productionUrl = 'https://atos6.com';
  const stagingUrl = 'https://teste.atos6.com';
  if(!isBrowser) return productionUrl; 
  const isStagingEnvironment = window.location.href.includes('teste');
  return isStagingEnvironment ? stagingUrl : productionUrl;
}