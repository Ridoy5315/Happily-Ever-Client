import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
const StoryModal = ({ closeModal, isOpen, setIsOpen, selectedRow }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-2xl font-bold text-center text-maroon-color font-fontHeading"
                >
                  Shared Story
                </DialogTitle>
                <div className="mt-2 flex flex-col justify-center items-center gap-4">
                    <div className="w-56 h-56">
                         <img className="w-full h-full object-cover rounded-xl" src={selectedRow?.coupleImage} alt="" />
                    </div>
                  <p className="text-sm text-gray-700">
                    ----- {selectedRow?.successStoryReview}
                  </p>
                </div>
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gold2-color px-4 py-2 text-sm font-medium text-maroon-color hover:bg-maroon-color hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default StoryModal;
