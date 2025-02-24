import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useUsers = () => {
     const {user} = useAuth();
     const axiosSecure = useAxiosSecure();

     const {data , isPending: loading} = useQuery({
          queryKey: [user?.email, 'count'],
          queryFn: async() => {
               const {data} = await axiosSecure('/user/count');
               return data;
          }
     })
     return [data, loading];
};

export default useUsers;