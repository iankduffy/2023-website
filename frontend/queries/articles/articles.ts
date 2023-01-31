import { clientFetch } from 'lib/sanity';

export const allArticlesQuery = `*[_type == "articles"] { 
  ...,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
}`;

export const getAllArticles = async () => {
  const articles = await clientFetch(allArticlesQuery);

  return articles;
};

export const articleFromSlugQuery = `*[_type == "articles" && slug.current == $slug][0] {
  ...,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
  content[]{
    ...,
    video {
      asset->{...}
    }
  }
}`;

export const getArticleFromSlug = async (slug: string) => {
  const article = await clientFetch(articleFromSlugQuery, { slug });

  return article;
};
