import React from 'react';
import { Container, SlideContainer, SlideInfo, Wrapper, Row, Column, Link, Title } from './styles/main';

export default function Menu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Menu.SlideContainer = function MenuSlideContainer({children, ...restProps}) {
  return <SlideContainer {...restProps}>{children}</SlideContainer>
}

Menu.SlideInfo = function MenuSlideInfo({children, ...restProps}) {
  return <SlideInfo {...restProps}>{children}</SlideInfo>
}

Menu.Wrapper = function MenuWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Menu.Row = function MenuRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Menu.Column = function MenuColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Menu.Link = function MenuLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Menu.Title = function MenuTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

