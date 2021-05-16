import styled from 'styled-components';
import React from 'react';
import { ArticleTitle } from './ArticleTitle';
import { ArticleImage } from './ArticleImage';

const ArticleHeaderWrap = styled.div`
  width: 100%;
  position: relative;
`;

const ArticleHeaderImage = styled(ArticleImage)`
  position: relative;
  overflow: hidden;
`;

const ArticleTitleWrapper = styled.div`
  position: absolute;
  width: 500px;
  text-align: center;
  margin: 0 auto;
  background-color: #1a1a1a;
  bottom: 0;
  left: 0;
  right: 0;
`

interface IProps {
  imageSrc: string;
  imageAlt: string;
  articleTitle: string;
}

export const ArticleHeader: React.FC<IProps> = props => {
  const { articleTitle, imageSrc, imageAlt } = props;
  return (
    <ArticleHeaderWrap>
      <ArticleHeaderImage imageSrc={imageSrc} imageAlt={imageAlt} />
      <ArticleTitleWrapper>
        <ArticleTitle title={articleTitle} />
      </ArticleTitleWrapper>
    </ArticleHeaderWrap>
  );
};
