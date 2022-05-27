import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import GenderOptions from './GenderOptions';

export default function GenderModal(props) {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto shadow-xl"
        open={props.isOpen}
        onClose={props.openModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl bg-violet-800">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-white text-center"
              >
                Selecciona un género
              </Dialog.Title>

              <GenderOptions
                genders={props.genders}
                gender={props.gender}
                setGender={props.setGender}
                closeModal={props.closeModal}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
