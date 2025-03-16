import React, { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import StoryModal from "../../../../componenets/modal/StoryModal";

const Story = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (story) => {
    setSelectedRow(story);
    setIsOpen(true);
  };
  const closeModal = () => {
    setSelectedRow(null);
    setIsOpen(false);
  };
  
  const { data: stories = [], isPending: loading } = useQuery({
    queryKey: ["success_couple_story"],
    queryFn: async () => {
      const { data } = await axiosSecure("/user-married-story");
      return data;
    },
  });
  return (
    <div className="w-11/12 mx-auto py-10">
      {/* title */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-maroon-color text-2xl font-semibold">All Users</p>
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
                Male Biodata Id
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Female Biodata Id
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 border-[#f5e7e4] text-maroon-color bg-[#f5e7e4]"
              >
                Action
              </th>
            </tr>
            {/* {loading && } */}
            {!loading &&
              stories?.map((story, index) => (
                <tr key={story._id}>
                  <th
                    scope="row"
                    className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600"
                  >
                    {index + 1}
                  </th>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                    {story?.selfBiodataId}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                    {story?.partnerBiodataId}
                  </td>
                  <td className="h-12 px-6 text-xs transition duration-300 border-t border-l first:border-l-0 border-[#f5e7e4] text-slate-600">
                    <span
                      onClick={() => openModal(story)}
                      className="relative cursor-pointer inline-block bg-gold-color hover:bg-[#f5e7e4] hover:text-maroon-color text-white px-4 py-1 rounded-lg  transition-all duration-300"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">View Story</span>
                      {/* Modal */}
                      <StoryModal
                        closeModal={closeModal}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        selectedRow={selectedRow}
                      ></StoryModal>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Story;
