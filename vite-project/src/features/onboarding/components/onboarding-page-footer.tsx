import type { JSX } from "react";
import { styled } from "styled-components";
import SocialLink from "../../../components/link/social-link";
import { Social } from "../../../components/social/social";
import { MediaQueryBreakpoint } from "../../../utils/breakpoint";

const Copyright = styled.div`
  color: var(--color-secondary-400);

  @media ${MediaQueryBreakpoint.mobile} {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const CustomerService = styled.div`
  color: var(--color-secondary-200);
  display: flex;
  gap: 30px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SocialListItem = styled.li``;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media ${MediaQueryBreakpoint.mobile} {
    height: 63px;
  }
`;

const StyledOnboardingPageFooter = styled.footer`
  background-color: var(--color-secondary-900);
  height: 160px;
  padding-top: 32px;

  @media ${MediaQueryBreakpoint.tablet} {
    padding: 32px 24px 0;
  }
`;

function OnboardingPageFooter(): JSX.Element {
  return (
    <StyledOnboardingPageFooter>
      <Content>
        <Copyright>
          <span>©codeit - 2024</span>
        </Copyright>
        <CustomerService>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </CustomerService>
        <SocialList>
          <SocialListItem>
            <SocialLink social={Social.facebook} />
          </SocialListItem>
          <SocialListItem>
            <SocialLink social={Social.twitter} />
          </SocialListItem>
          <SocialListItem>
            <SocialLink social={Social.youtube} />
          </SocialListItem>
          <SocialListItem>
            <SocialLink social={Social.instagram} />
          </SocialListItem>
        </SocialList>
      </Content>
    </StyledOnboardingPageFooter>
  );
}

export default OnboardingPageFooter;
