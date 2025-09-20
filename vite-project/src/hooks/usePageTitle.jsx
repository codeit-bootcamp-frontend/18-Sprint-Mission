import { useEffect } from "react";

const SITE_NAME = "판다마켓";

const usePageTitle = (title = "") => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  }, [title]);
};

export default usePageTitle;
