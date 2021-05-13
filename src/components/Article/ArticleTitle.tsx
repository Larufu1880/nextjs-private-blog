import styled from 'styled-components';
import React from 'react';

const Title = styled.h1`
  font-size: 0.8rem;
`;

interface IProps {
  title: string;
}

export const ArticleTitle: React.FC<IProps> = props => {
  const { title } = props;
  return <Title>{title}</Title>;
};
