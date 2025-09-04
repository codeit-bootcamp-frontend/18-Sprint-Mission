import type { JSX } from "react";
import { styled } from "styled-components";
import { useDevice } from "../../../hooks/useDevice";
import { MediaQueryBreakpoint } from "../../../utils/breakpoint";
import { type OnboardingContentType } from "../models/onboarding-content";
import OnboardingTitle from "./onboarding-title";

interface Props {
  content: OnboardingContentType;
  reverse?: boolean;
}

function breakText(text: string): JSX.Element {
  const elements = text
    .split("\n")
    .map((value) => <div key={value}>{value}</div>);
  return <>{elements}</>;
}

function Title({ children }: { children: string }): JSX.Element {
  const { isDesktop } = useDevice();
  const title = isDesktop ? breakText(children) : children;
  return <OnboardingTitle>{title}</OnboardingTitle>;
}

const TextContainer = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: ${({ $reverse }) => ($reverse ? "right" : "left")};

  & > span {
    font-size: 18px;
    font-weight: 800;
    line-height: 26px;
    color: var(--color-primary-100);
  }

  h2 {
    margin-top: 12px;
    margin-bottom: 24px;
  }

  p {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  @media ${MediaQueryBreakpoint.tablet} {
    span {
      font-weight: 700;
    }

    h2 {
      margin-top: 16px;
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media ${MediaQueryBreakpoint.mobile} {
    span {
      font-size: 16px;
      font-weight: 700;
    }

    h2 {
      margin-top: 8px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const Content = styled.div<{ $reverse: boolean }>`
  width: 988px;
  height: 444px;
  margin: 0 auto;
  background-color: #f9f9f9;
  display: flex;
  gap: 64px;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;

  @media ${MediaQueryBreakpoint.tablet} {
    width: auto;
    height: auto;
    gap: 24px;
    flex-direction: column;
    align-items: ${({ $reverse }) => ($reverse ? "flex-end" : "flex-start")};
    background-color: transparent;

    img {
      width: 100%;
      border-radius: 12px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 138px 0;

  @media ${MediaQueryBreakpoint.tablet} {
    margin: 0;
    padding: 24px;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    padding: 16px;
  }
`;

const StyledContentSection = styled.section``;

function ContentSection({ content, reverse = false }: Props): JSX.Element {
  return (
    <StyledContentSection>
      <Container>
        <Content $reverse={reverse}>
          <img src={content.image} alt={content.label} />
          <TextContainer $reverse={reverse}>
            <span>{content.label}</span>
            <Title>{content.title}</Title>
            <p>{breakText(content.description)}</p>
          </TextContainer>
        </Content>
      </Container>
    </StyledContentSection>
  );
}

export default ContentSection;
