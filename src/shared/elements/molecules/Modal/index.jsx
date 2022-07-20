import { Fragment } from 'react';

import Icon from '@elements/atoms/Icon';
import { Dialog, Transition } from '@headlessui/react';

export const Modal = ({ isOpen, onClose, children, className }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-primary-lightBlue-100 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="h-screen">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-y-auto rounded-[10px] rounded-b-[0] bg-primary-grey-900 shadow-xl transition-all md:rounded-b-[10px] ${className}`}
                >
                  <div className="sticky top-0 left-0 z-10 w-full border-b border-primary-grey-600 bg-primary-grey-900 p-6 lg:absolute lg:border-none lg:bg-transparent lg:py-7">
                    <button className="grid" onClick={onClose}>
                      <Icon
                        name="icClose"
                        className="icon-color-inherit fill-primary-grey-500"
                      />
                    </button>
                  </div>
                  <div className="overflow-y-auto px-6 pt-6 pb-10">
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
