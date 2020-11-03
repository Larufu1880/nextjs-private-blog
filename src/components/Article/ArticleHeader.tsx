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

interface IProps {
  imageSrc: string;
  imageAlt: string;
  articleTitle: string;
}

export const ArticleHeader: React.FC<IProps> = props => (
  <ArticleHeaderWrap>
    <ArticleTitle title={props.articleTitle} />
    <ArticleHeaderImage imageSrc={props.imageSrc} imageAlt={props.imageAlt} />
  </ArticleHeaderWrap>
);
