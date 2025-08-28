import { useEffect, useState } from "react";

/**
 * 데이터 통신을 위한 공통 커스텀 훅
 * @param {Function} fetchFunction 서버와 직접 통신하는 함수
 * @returns {data: object, isLoading: boolean}
 */
const useService = (fetchFunction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const getService = async (getDataFunction) => {
      try {
        setIsLoading(true);
        const response = await getDataFunction();

        if (!response) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }

        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getService(fetchFunction);
  }, []);

  return { data, isLoading };
};

export default useService;
