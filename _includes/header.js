import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link';  
import { getConfig, getAllPosts } from '@api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChartPieIcon,
    PuzzleIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    XIcon,
    DesktopComputerIcon,
    DatabaseIcon,
    ChipIcon,
} from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid'

const partners = [
    {
      name: 'Pill Software',
      description: 'Fintech + retail automation for the future.',
      href: '#',
      icon: ChartPieIcon,
    },
    {
      name: 'A Solutions',
      description: 'Blazing fast and high scale anitbot solutions.',
      href: '#',
      icon: PuzzleIcon,
    },   
]

const resources = [
    {
        name: 'Frontend',
        description: 'Explore the unique tools available to create your next flashy project.',
        href: '/frontend',
        icon: DesktopComputerIcon,
    },
    {
        name: 'Reverse Engineering',
        description: 'Learn how to break other people\'s code. You know, just for fun.',
        href: '/reverse-engineering',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Backend',
        description: 'Understand the magic that runs the cloud 24/7.',
        href: '/backend',
        icon: DatabaseIcon,
    },
    { 
        name: 'Embedded Programming',
        description: 'Get close to the metal and learn about how the computer really works.',
        href: '/embedded-programming',
        icon: ChipIcon,
    },
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
    const notify = () => toast("You thought it was that easy? Try using your final function key.");
    return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <ToastContainer
          hideProgressBar={true}
          position={"bottom-right"}
          bodyClassName={() => "text-gray-500 p-2"}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  {/* <img
                    className="h-8 w-auto sm:h-10"
                    src="https://media.discordapp.net/attachments/795562442221944843/840219872760037376/unknown.png"
                    alt="devmart"
                  /> */}
                  <a className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 xl:inline text-xl lg:text-2xl font-bold">Devmart</a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                        )}
                      >
                        <span>Partners</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {partners.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                        )}
                      >
                        <span>Blog</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <Link href={item.href}>
                                  <a
                                    key={item.name}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                  Recent Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {props.posts.map(function(post, idx) {
                                    return (
                                      <li key={idx} className="text-base truncate">
                                        <Link href={'/posts/'+post.slug} className="font-medium text-gray-900 hover:text-gray-700">
                                          <a>{post.title}</a>
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <Link href="posts">
                                  <a className="font-medium text-pink-600 hover:text-pink-500">
                                    {' '}
                                    View all posts <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <btn onClick={notify} className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                  Discord
                </btn>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Resources
                </a>
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://media.discordapp.net/attachments/795562442221944843/840219872760037376/unknown.png"
                        alt="devmart"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {partners.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-pink-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="https://discord.gg/cHdZk3vZ5d" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Discord
                    </a>

                    <a href="/resources" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Resources
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}