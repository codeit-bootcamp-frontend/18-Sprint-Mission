import hotItemImage from "../../../assets/onboarding-hot-item.png";
import registerImage from "../../../assets/onboarding-register.png";
import searchImage from "../../../assets/onboarding-search.png";

const OnboardingContent = {
  hotItem: {
    image: hotItemImage,
    label: "Hot Item",
    title: "인기 상품을\n확인해 보세요",
    description: "가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해 보세요",
  },
  search: {
    image: searchImage,
    label: "Search",
    title: "구매를 원하는\n상품을 검색하세요",
    description: "구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요",
  },
  register: {
    image: registerImage,
    label: "Register",
    title: "판매를 원하는\n상품을 등록하세요",
    description: "어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요",
  },
};

export type OnboardingContentType =
  (typeof OnboardingContent)[keyof typeof OnboardingContent];

export { OnboardingContent };
