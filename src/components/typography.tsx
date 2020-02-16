import styled, { StyledComponent } from "styled-components";

export const Title = styled.h1`
  color: #fafafa;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 5%;
`;

export const Subtitle = styled.h2`
  color: #fafafa;
  font-size: 18px;
  font-weight: lighter;
`;

interface ContentTitleProps {
  isDragging?: boolean;
  [key: string]: any;
}

export const ContentTitle: StyledComponent<"h3", any, ContentTitleProps, never> = styled.h3`
  color: #fafafa;
  font-size: 18px;
  font-weight: normal;
`;

export const Content = styled.span`
  color: #fafafa;
  font-weight: lighter;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
