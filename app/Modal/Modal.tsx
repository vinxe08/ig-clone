"use client";
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import AddPost from './AddPost'
import { modalState } from '../../atoms/postAtom'
import { useRecoilState } from 'recoil'
import { loginModalState } from '../../atoms/loginAtom';
import LoginModal from './LoginModal';

function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  const [modalType, setModalType] = useRecoilState(loginModalState)

  const setModal = () => {
    setIsOpen(false)
  }

  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={setModal}
        open={isOpen}
      >
        <div className='flex items-start justify-center min-h-screen text-center mt-[7.28rem] '>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave="ease-in duration-200"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave="ease-in duration-200"
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block bg-white rounded-xl  shadow-xl transform transition-all w-[21.65rem]'>
              {modalType === "Post" ? <AddPost /> : <LoginModal />}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal