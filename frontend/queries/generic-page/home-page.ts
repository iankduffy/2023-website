import { clientFetch } from 'lib/sanity';

export const homePageQuery = `*[_type == "siteSettings"][0] { 
  "page": homePage -> {
    ... 
  }
}`;

export const getHomePage = async () => {
  const pageContent = await clientFetch(homePageQuery);

  return pageContent;
};
