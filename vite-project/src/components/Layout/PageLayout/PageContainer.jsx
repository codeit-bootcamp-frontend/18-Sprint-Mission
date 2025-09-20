import usePageTitle from "@/hooks/usePageTitle";

const PageContainer = ({ title = "", children }) => {
  usePageTitle(title);
  return <>{children}</>;
};

export default PageContainer;
