import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../componenets/shared/loadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import { RiDeleteBinLine } from "react-icons/ri";

const FavoritesBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["favorite_biodata"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/favorite-biodata/${user?.email}`);
      return data;
    },
  });

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDelete = (person) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${person?.favoritePerson?.name} from here?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/favorite-biodata/${person._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${person?.favoritePerson?.name} has been deleted.`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto py-20">
      {/* title */}
      <p>My Favourites Biodata</p>

      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-center border border-separate rounded border-[#f5e7e4]"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                No
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Id
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Permanent Address
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Occupation
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Action
              </th>
            </tr>
            {data.map((person, index) => (
              <tr key={person._id}>
                <th
                  scope="row"
                  className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600"
                >
                  {index + 1}
                </th>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.favoritePerson?.name}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.favoritePerson?.biodata_Id}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.favoritePerson?.permanent_Address}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.favoritePerson?.occupation}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-red-600">
                  <button onClick={() => handleDelete(person)}>
                    <RiDeleteBinLine className="mx-auto text-lg"></RiDeleteBinLine>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoritesBiodata;
