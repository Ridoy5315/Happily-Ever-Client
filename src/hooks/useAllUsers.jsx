import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllUsers = (search) => {
  const {user} = useAuth();
     const axiosSecure = useAxiosSecure();
     const {data: allUsers=[], isPending: loading, refetch} = useQuery({
          queryKey: [user?.email, 'allUser', search],
          queryFn: async() => {
            const {data} = await axiosSecure(`/allUsers/${user?.email}?search=${search}`);
            return data;
          }
          
        })
     return [allUsers, loading, refetch];
};

export default useAllUsers;