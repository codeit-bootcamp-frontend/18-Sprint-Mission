import Button from "@/components/Button";
import FormField, { Form } from "@/components/Form/FormField";
import Input from "@/components/Form/Input";
import Icon from "@/components/Icon";
import styled, { css } from "styled-components";
import alignmentCenter from "@/assets/icon/ic_alignment_center.svg?url";
import alignmentLeft from "@/assets/icon/ic_alignment_left.svg?url";
import alignmentRight from "@/assets/icon/ic_alignment_right.svg?url";
import arrow_down from "@/assets/icon/ic_arrow_down.svg?url";
import back from "@/assets/icon/ic_back.svg?url";
import bold from "@/assets/icon/ic_bold.svg?url";
import bullet from "@/assets/icon/ic_Bullet.svg?url";
import check from "@/assets/icon/ic_check.svg?url";
import chevronLeft from "@/assets/icon/ic_chevron_left.svg?url";
import chevronRight from "@/assets/icon/ic_chevron_right.svg?url";
import close from "@/assets/icon/ic_X.svg?url";
import coloring from "@/assets/icon/ic_coloring.svg?url";
import facebook from "@/assets/icon/ic_facebook.svg?url";
import google from "@/assets/icon/ic_google.svg?url";
import hide from "@/assets/icon/ic_hide.svg?url";
import instagram from "@/assets/icon/ic_instagram.svg?url";
import italic from "@/assets/icon/ic_italic.svg?url";
import kakao from "@/assets/icon/ic_kakao.svg?url";
import likeFill from "@/assets/icon/ic_like_fill.svg?url";
import like from "@/assets/icon/ic_like.svg?url";
import medal from "@/assets/icon/ic_medal.svg?url";
import numbering from "@/assets/icon/ic_numbering.svg?url";
import plus from "@/assets/icon/ic_plus.svg?url";
import profile from "@/assets/icon/ic_profile.svg?url";
import searchDarker from "@/assets/icon/ic_search_darker.svg?url";
import search from "@/assets/icon/ic_search.svg?url";
import show from "@/assets/icon/ic_show.svg?url";
import sort from "@/assets/icon/ic_sort.svg?url";
import twitter from "@/assets/icon/ic_twitter.svg?url";
import underline from "@/assets/icon/ic_underline.svg?url";
import youtube from "@/assets/icon/ic_youtube.svg?url";

const ComponentGroupCol = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: start;
`;
const ComponentGroupRow = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: start;
  background-color: #f3c6c6;
`;
const IconUrl = css`
  mask-image: url(${(props) => props.iconName});
  -webkit-mask-image: url(${(props) => props.iconName});
`;
const IconWrap = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background-color: #1a1a1a;
  ${IconUrl};
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;

const ComponentTestPage = () => {
  return (
    <>
      <IconWrap iconName={twitter}></IconWrap>
      <ComponentGroupRow>
        <img src={alignmentCenter} />
        <img src={alignmentLeft} />
        <img src={alignmentRight} />
        <img src={arrow_down} />
        <img src={back} />
        <img src={bold} />
        <img src={bullet} />
        <img src={check} />
        <img src={chevronLeft} />
        <img src={chevronRight} />
        <img src={close} />
        <img src={coloring} />
        <img src={facebook} />
        <img src={google} />
        <img src={hide} />
        <img src={instagram} />
        <img src={italic} />
        <img src={kakao} />
        <img src={likeFill} />
        <img src={like} />
        <img src={medal} />
        <img src={numbering} />
        <img src={plus} />
        <img src={profile} />
        <img src={searchDarker} />
        <img src={search} />
        <img src={show} />
        <img src={sort} />
        <img src={twitter} />
        <img src={underline} />
        <img src={youtube} />
      </ComponentGroupRow>
      <ComponentGroupRow>
        <Icon iconName="alignmentCenter" size="md" color="gray200"></Icon>
        <Icon iconName="alignmentLeft" size="md"></Icon>
        <Icon iconName="alignmentRight" size="md"></Icon>
        <Icon iconName="arrow_down" size="md"></Icon>
        <Icon iconName="back" size="md"></Icon>
        <Icon iconName="bold" size="md"></Icon>
        <Icon iconName="bullet" size="md"></Icon>
        <Icon iconName="check" size="md" iconType="bg"></Icon>
        <Icon iconName="chevronLeft" size="md"></Icon>
        <Icon iconName="chevronRight" size="md"></Icon>
        <Icon iconName="close" size="md" iconType="bg"></Icon>
        <Icon iconName="coloring" size="md"></Icon>
        <Icon iconName="facebook" size="md"></Icon>
        <Icon iconName="google" size="md" iconType="bg"></Icon>
        <Icon iconName="hide" size="md"></Icon>
        <Icon iconName="instagram" size="md"></Icon>
        <Icon iconName="italic" size="md"></Icon>
        <Icon iconName="kakao" size="md" iconType="bg"></Icon>
        <Icon iconName="likeFill" size="md" iconType="bg"></Icon>
        <Icon iconName="like" size="md"></Icon>
        <Icon iconName="medal" size="md" iconType="bg"></Icon>
        <Icon iconName="numbering" size="md"></Icon>
        <Icon iconName="plus" size="md"></Icon>
        <Icon iconName="profile" size="md" iconType="bg"></Icon>
        <Icon iconName="searchDarker" size="md"></Icon>
        <Icon iconName="search" size="md"></Icon>
        <Icon iconName="show" size="md"></Icon>
        <Icon iconName="sort" size="md"></Icon>
        <Icon iconName="twitter" size="md"></Icon>
        <Icon iconName="underline" size="md"></Icon>
        <Icon iconName="youtube" size="md"></Icon>
      </ComponentGroupRow>
    </>
  );
  return (
    <>
      <ComponentGroupCol>
        <ComponentGroupRow>
          <ComponentGroupCol>
            <p className="txt-2xl">Default Button</p>
            <Button>Default = bg + lg</Button>
            <Button size="xs">size="xs</Button>
            <Button size="sm">size="sm</Button>
            <Button size="md">size="md</Button>
            <Button size="lg">size="lg</Button>
            <Button size="xs" round>
              size="xs + round
            </Button>
            <Button size="sm" round>
              size="sm + round
            </Button>
            <Button size="md" round>
              size="md + round
            </Button>
            <Button size="lg" round>
              size="lg + round
            </Button>
            <Button size="xs" round full>
              size="xs + round full
            </Button>
            <Button size="sm" round full>
              size="sm + round full
            </Button>
            <Button size="md" round full>
              size="md + round full
            </Button>
            <Button size="lg" round full>
              size="lg + round full
            </Button>
          </ComponentGroupCol>
          <ComponentGroupCol>
            <p className="txt-2xl">Border Button</p>

            <Button btnStyle={"line"}>btnStyle="line" + lg </Button>
            <Button size="xs" btnStyle="line">
              size="xs + line
            </Button>
            <Button size="sm" btnStyle="line">
              size="sm + line
            </Button>
            <Button size="md" btnStyle="line">
              size="md + line
            </Button>
            <Button size="lg" btnStyle="line">
              size="lg + line
            </Button>
            <Button size="xs" round btnStyle="line">
              size="xs + round + line
            </Button>
            <Button size="sm" round btnStyle="line">
              size="sm + round + line
            </Button>
            <Button size="md" round btnStyle="line">
              size="md + round + line
            </Button>
            <Button size="lg" round btnStyle="line">
              size="lg + round + line
            </Button>

            <Button size="xs" round btnStyle="line" full>
              size="xs + round + line + full
            </Button>
            <Button size="sm" round btnStyle="line" full>
              size="sm + round + line + full
            </Button>
            <Button size="md" round btnStyle="line" full>
              size="md + round + line + full
            </Button>
            <Button size="lg" round btnStyle="line" full>
              size="lg + round + line + full
            </Button>
          </ComponentGroupCol>
          <ComponentGroupCol>
            <p className="txt-2xl">Icon Button</p>
            <Button icon size="xs">
              <Icon iconName="profile" size="md"></Icon>
              버튼~
            </Button>
            <Button icon size="sm">
              <Icon iconName="profile" size="md"></Icon>
              버튼~
            </Button>
            <Button icon size="md">
              <Icon iconName="profile" size="md"></Icon>
              버튼~
            </Button>
            <Button icon size="lg">
              <Icon iconName="profile" size="md"></Icon>
              버튼~
            </Button>

            <p className="txt-2xl">onlyIcon Button</p>
            <Button onlyIcon size="sm">
              <Icon iconName="profile" size="md"></Icon>
            </Button>
            <Button onlyIcon size="md">
              <Icon iconName="profile" size="md"></Icon>
            </Button>
          </ComponentGroupCol>
        </ComponentGroupRow>
      </ComponentGroupCol>
      <ComponentGroupCol>
        <ComponentGroupRow>
          <Icon iconName="alignmentCenter" size="md" color="gray200"></Icon>
          <Icon iconName="alignmentLeft" size="md"></Icon>
          <Icon iconName="alignmentRight" size="md"></Icon>
          <Icon iconName="arrow_down" size="md"></Icon>
          <Icon iconName="back" size="md"></Icon>
          <Icon iconName="bold" size="md"></Icon>
          <Icon iconName="bullet" size="md"></Icon>
          <Icon iconName="check" size="md" iconType="bg"></Icon>
          <Icon iconName="chevronLeft" size="md"></Icon>
          <Icon iconName="chevronRight" size="md"></Icon>
          <Icon iconName="close" size="md" iconType="bg"></Icon>
          <Icon iconName="coloring" size="md"></Icon>
          <Icon iconName="facebook" size="md"></Icon>
          <Icon iconName="google" size="md" iconType="bg"></Icon>
          <Icon iconName="hide" size="md"></Icon>
          <Icon iconName="instagram" size="md"></Icon>
          <Icon iconName="italic" size="md"></Icon>
          <Icon iconName="kakao" size="md" iconType="bg"></Icon>
          <Icon iconName="likeFill" size="md" iconType="bg"></Icon>
          <Icon iconName="like" size="md"></Icon>
          <Icon iconName="medal" size="md" iconType="bg"></Icon>
          <Icon iconName="numbering" size="md"></Icon>
          <Icon iconName="plus" size="md"></Icon>
          <Icon iconName="profile" size="md" iconType="bg"></Icon>
          <Icon iconName="searchDarker" size="md"></Icon>
          <Icon iconName="search" size="md"></Icon>
          <Icon iconName="show" size="md"></Icon>
          <Icon iconName="sort" size="md"></Icon>
          <Icon iconName="twitter" size="md"></Icon>
          <Icon iconName="underline" size="md"></Icon>
          <Icon iconName="youtube" size="md"></Icon>
        </ComponentGroupRow>
      </ComponentGroupCol>
      <ComponentGroupCol>
        <ComponentGroupRow>
          <Input type="text"></Input>
          <Input type="text" error></Input>
        </ComponentGroupRow>
        <ComponentGroupRow>
          <Form>
            <FormField
              type="email"
              label="아이디"
              name="userEmail"
              placeholder="이메일을 입력해주세요."
              errorMsg="아이디를 입력해주세요."
            ></FormField>
            <FormField
              type="password"
              label="비밀번호"
              name="userPassword"
              placeholder="비밀번호를 입력해주세요."
              errorMsg="비밀번호를 8자 이상 입력해주세요."
            ></FormField>
          </Form>
        </ComponentGroupRow>
      </ComponentGroupCol>
    </>
  );
};
export default ComponentTestPage;
