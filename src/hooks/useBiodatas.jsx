import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBiodatas = (minAge, maxAge, gender, divisionName, currentPage) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: biodatas = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["biodatas", minAge, maxAge, gender, divisionName, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/biodatas?page=${currentPage}&min=${minAge}&max=${maxAge}&gender=${gender}&division=${divisionName}`
      );
      return data;
    },
  });
  return [biodatas, loading, refetch];
};

export default useBiodatas;
