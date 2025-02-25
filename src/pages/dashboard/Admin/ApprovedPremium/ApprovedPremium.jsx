import React, { useEffect, useState } from "react";
import useAllUsers from "../../../../hooks/useAllUsers";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../../componenets/shared/loadingSpinner/LoadingSpinner";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allUsers = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["request-premium"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/user/request-premium");
      return data;
    },
  });

  if(loading){
     return <LoadingSpinner></LoadingSpinner>
  }

  const handleRoleChange = (person, value) => {
      console.log(value);
      Swal.fire({
        title: "Are you sure?",
        text: `Do you want to change ${person?.name}'s role?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosSecure.patch(
            `/user/${person?.email}`,
            value
          );
          console.log(data);
          if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${person?.name} role has changed.`,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    };


  return (
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
              Email
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
              Action
            </th>
          </tr>
          {allUsers.map((person, index) => (
            <tr key={person._id}>
              <th
                scope="row"
                className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600"
              >
                {index + 1}
              </th>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                {person?.name}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                {person?.email}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                {person?.id[0]?.bioDataId}
              </td>

              <td className="h-12 px-6 text-xs transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                <button
                  onClick={() =>
                    handleRoleChange(person, { role: "make-premium" })
                  }
                  className="bg-gold-color text-white px-4 py-1 rounded-lg"
                >
                  Make Premium
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedPremium;
