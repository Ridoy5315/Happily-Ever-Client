import React, { useState } from "react";
import useAllUsers from "../../../../hooks/useAllUsers";
import LoadingSpinner from "../../../../componenets/shared/loadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { IoSearchOutline } from "react-icons/io5";
const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  // const [allUsers, setAllUsers] = useState([]);
  const [allUsers, loading, refetch] = useAllUsers(search);

  const handleRoleChange = (person, value) => {
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

  // if (loading) {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }
  return (
    <div className="w-11/12 mx-auto py-10">
      {/* title */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-maroon-color text-2xl font-semibold">All Users</p>
        <div className="flex relative w-full max-w-xl">
          {/* <button className="absolute left-4 top-1 bg-maroon-color text-white text-3xl px-1 py-1 rounded-full">
            <IoSearchOutline></IoSearchOutline>
          </button> */}
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Search user by username"
            className="input w-full"
          />
          {/* {loading && <p>Loading...</p>} */}
        </div>
      </div>

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
                User name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                User email
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Action
              </th>
            </tr>
            {/* {loading && } */}
            {!loading && allUsers?.map((person, index) => (
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
                <td className="h-12 px-6 text-xs transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.role === "admin" ? (
                    <p className="text-base text-maroon-color font-semibold">
                      Admin
                    </p>
                  ) : (
                    <button
                      onClick={() =>
                        handleRoleChange(person, { role: "make-admin" })
                      }
                      className="bg-maroon-color text-white px-4 py-1 rounded-lg"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="h-12 px-6 text-xs transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.role === "premium" ? (
                    <p className="text-base text-gold-color font-semibold">
                      Premium User
                    </p>
                  ) : (
                    <button
                      onClick={() =>
                        handleRoleChange(person, { role: "make-premium" })
                      }
                      className="bg-gold-color text-white px-4 py-1 rounded-lg"
                    >
                      Make Premium
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
