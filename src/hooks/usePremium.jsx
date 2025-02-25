import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const usePremium = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: role,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "role"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/premium/${user?.email}`);
      return data?.role;
    },
  });
  return [role, loading, refetch];
};

export default usePremium;
