import { clientFetch } from 'lib/sanity';

export const settingQuery = `*[_type == "siteSettings"][0] { 
  'cv': cv.asset->url, 
  linkedin,
  github
}`;

export const getSiteSettings = async () => {
  const setting = await clientFetch(settingQuery);

  return setting;
};
