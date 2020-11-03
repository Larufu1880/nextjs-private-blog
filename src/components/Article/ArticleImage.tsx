import styled from 'styled-components';
import React from 'react';

const Image = styled.img`
  width: 100%;
`;

interface IProps {
  imageSrc: string;
  imageAlt: string;
}

export const ArticleImage: React.FC<IProps> = props => <Image src={props.imageSrc} alt={props.imageAlt} />;
