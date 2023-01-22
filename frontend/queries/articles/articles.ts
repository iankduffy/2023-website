import { clientFetch } from 'lib/sanity';

export const allArticlesQuery = `*[_type == "articles"] { 
  ...,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
}`;

export const getAllArticles = async () => {
  const articles = await clientFetch(allArticlesQuery);

  return articles;
};
