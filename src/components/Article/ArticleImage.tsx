import styled from 'styled-components';
import React from 'react';

const Image = styled.img`
  width: 100%;
`;

interface IProps {
  imageSrc: string;
  imageAlt: string;
}

export const ArticleImage: React.FC<IProps> = props => {
  const { imageSrc, imageAlt } = props;
  return <Image src={imageSrc} alt={imageAlt} />;
};
