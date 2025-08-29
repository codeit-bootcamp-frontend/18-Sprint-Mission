import { useEffect, useState } from "react";

/**
 * 데이터 통신을 위한 공통 커스텀 훅
 * @param {Function} fetchFunction 서버와 직접 통신하는 함수
 * @returns {data: object, isLoading: boolean}
 */
const useService = (fetchFunction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const getService = async (getDataFunction) => {
      try {
        setIsLoading(true);
        const response = await getDataFunction();

        if (!response) {
          throw new Error("서버와의 통신에 실패했습니다.");
        }

        setData(response);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getService(fetchFunction);
  }, []);

  return { data, isLoading, error };
};

export default useService;
