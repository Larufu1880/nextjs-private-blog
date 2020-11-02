import { createClient, Entry } from 'contentful';

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getBlogEntry = async (entryID: string): Promise<Entry<IBlogPost>> => {
  return contentfulClient.getEntry<IBlogPost>(entryID);
};
