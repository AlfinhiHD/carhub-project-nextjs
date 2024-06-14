import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { CarDialogProps } from "@/app/types";

const CarDialog: React.FC<CarDialogProps> = ({ isOpen, onClose, car }) => {
  
  const formattedMake = car.make
  ? car.make
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  : "";
const formattedModel = car.model
  ? car.model
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  : "";
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  type="button"
                  className="absolute text-[2.5rem] -top-[0.6rem] right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  &times;
                </button>
                <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                {formattedMake} {formattedModel}
                </DialogTitle>
                <div className="mt-3 flex flex-wrap gap-4">
                  {Object.entries(car).map(([key, value]) => (
                    <div className="flex justify-between gap-5 w-full text-right" key={key}>
                      <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                      <p className="text-black-100 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDialog;