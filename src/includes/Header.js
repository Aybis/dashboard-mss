import { Menu, Popover, Transition } from '@headlessui/react';
import {
  BellIcon,
  FireIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon, ViewGridIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userLogout } from '../redux/actions/user';

const user = {
  name: 'Fauzi Hanif Jr',
  email: 'fauzi.hanif@pins.co.id',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon, current: true },
  {
    name: 'Back to Apps',
    href: 'http://apps.pins.co.id/login',
    icon: FireIcon,
    current: false,
  },
];

const userNavigation = [{ name: 'Sign out', href: '/dashboard' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const USER = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem('session');
    window.location.reload();
  };

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-white shadow-sm lg:static lg:overflow-y-visible ',
          )
        }>
        {({ open }) => (
          <>
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/dashboard">
                      <img
                        className="block h-8 w-auto"
                        src="http://apps.pins.co.id/assets/keen/assets/img/pins.png"
                        alt="Workflow"
                      />
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <a
                    href="/dashboard"
                    className="ml-5 flex-shrink-0 bg-white rounded p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                    <span className="sr-only">View apps</span>
                    <ViewGridIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a
                    href="/dashboard"
                    className="ml-5 flex-shrink-0 bg-white rounded p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                  {/* Profile dropdown */}
                  <Menu as="div" className="flex-shrink-0 relative ml-5">
                    <div>
                      <Menu.Button className="bg-white rounded flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-md"
                          src={
                            USER.profile.image_url ??
                            `https://ui-avatars.com/api/?background=F3f3f3&color=000&name=${USER.profile.name}`
                          }
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <button
                                onClick={handlerLogout}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block py-2 px-4 text-sm text-gray-700 w-full text-left',
                                )}>
                                {item.name}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-medium',
                    )}>
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={(event) => handlerLogout(event)}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
