import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { getBlogEntry } from '../../lib/ContentfulClient';
import { ArticleHeader } from '../../components/Article/ArticleHeader';

const Main = styled.main`
  max-width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
`;

const Test: NextPage<IBlogPost> = props => {
  const { fields } = props;
  return (
    <Main>
      <article>
        <ArticleHeader
          imageSrc={fields.titleImage.fields.file.url}
          imageAlt={fields.title}
          articleTitle={fields.title}
        />
        <ReactMarkdown>{fields.body}</ReactMarkdown>
      </article>
    </Main>
  );
};

export async function getStaticProps() {
  const result = await getBlogEntry('3k4pWVMQtUoqr6Z7H0OYGm');
  return {
    props: {
      ...result
    }
  };
}

export default Test;
