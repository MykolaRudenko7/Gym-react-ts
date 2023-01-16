import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
//
import useMediaQuery from '@/hooks/useMediaQuery';
import { ActionButton } from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import { Link } from './Link';
//
import Logo from '@/assets/Logo.png';
import { HomeProps } from '../Home';
//
//
//
//
//
interface NavbarProps extends HomeProps{
  selectedPage: SelectedPage;
  isTopOfPage: boolean;
}

//
export const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: NavbarProps) => {
  // часто використовувані стилі
  const flexBetween = "flex items-center justify-between";
  // хук для медіазапросів (true or false)
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  // значок бургеру
  const [isMenuToggled, setIsMenuToggled] = React.useState<boolean>(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>


          <div className={`${flexBetween} w-full gap-16`}>

            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ?
              (<div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton
                    setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>)
              : (
                <button
                  className='rounded-full bg-secondary-500 p-2'
                  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className='h-6 w-6 text-white' />
                </button>)}
          </div>
        </div>
      </div>


      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* burger icon */}
          <div className='flex justify-end p-12'>
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>

          {/* menu element */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
