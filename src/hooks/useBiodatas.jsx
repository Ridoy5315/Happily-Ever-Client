import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBiodatas = (minAge, maxAge, gender, divisionName) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: biodatas = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["biodatas", minAge, maxAge, gender, divisionName],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/biodatas?min=${minAge}&max=${maxAge}&gender=${gender}&division=${divisionName}`
      );
      return data;
    },
  });
  console.log(biodatas);
  return [biodatas, loading, refetch];
};

export default useBiodatas;
