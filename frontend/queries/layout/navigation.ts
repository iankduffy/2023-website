import { clientFetch } from 'lib/sanity';

export const navigationQuery = `*[_type == "siteSettings"][0] { 
  mainNavigation
}`;

export const getNavigation = async () => {
  const nav = await clientFetch(navigationQuery);

  return nav;
};
