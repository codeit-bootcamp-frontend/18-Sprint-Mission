import useService from "./useService";

const usePost = (postFetching) => {
  const { data, isLoading, isError } = useService(() => postFetching);

  return { data, isLoading, isError };
};

export default usePost;
