import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../componenets/shared/loadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data, isPending: loading, refetch } = useQuery({
    queryKey: ["contact_request"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/contact-request/${user?.email}`);
      return data;
    },
  });

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDelete = (person) =>{
     Swal.fire({
          title: "Are you sure?",
          text: `Do you want to delete ${person?.requested_Person?.name} from here?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/contact-request/${person._id}`);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${person?.requested_Person?.name} has been deleted.`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }
        });
  }
  return (
    <div className="w-11/12 mx-auto py-20">
      {/* title */}
      <p></p>

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
                Status
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Mobile No
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
                  {person?.requested_Person?.name}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.status}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                  {person?.status === 'Approved' && person?.requested_Person?.phone_Number}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                {person?.status === 'Approved' && person?.requested_Person?.email}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-red-600">
                  <button onClick={() => handleDelete(person)}><RiDeleteBinLine className="mx-auto text-lg"></RiDeleteBinLine></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContactRequest;
