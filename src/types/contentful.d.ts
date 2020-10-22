interface IBlogPost {
  fields: {
    title: string;
    titleImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    slug: string;
    body: string;
    publishDate: string;
  };
}
