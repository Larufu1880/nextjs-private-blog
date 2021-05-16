import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { getBlogEntry } from '../../lib/ContentfulClient';
import { ArticleHeader } from '../../components/Article/ArticleHeader';

const Main = styled.main`
  max-width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  padding-bottom: 10px;
  background-color: #1a1a1a;
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
        <div className="article__body">
          <ReactMarkdown>{fields.body}</ReactMarkdown>
        </div>
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
