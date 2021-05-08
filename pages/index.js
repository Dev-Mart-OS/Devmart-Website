import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link';  
import { getConfig, getAllPosts } from '@api'
import DefaultLayout from '@layouts/default'

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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home(props) {
  return (
    <DefaultLayout title={"DevMart"} description={"DevMart"} posts={props.posts}>
      <div className="max-w-7xl mx-auto">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Test Post</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 xl:inline">Devmart</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Devmart is a developer collective that is dedicated to open source software and teaching others.
                We push the envelope with our collaboration and are always looking for new projects to conquer.
                See for yourself!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-grey-800 md:py-4 md:text-lg md:px-10"
                  >
                    Read Our Blog
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 bg-gray-200 hover:bg-gray-300 md:text-lg md:px-10"
                  >
                    Check out our projects
                  </a>
                </div>
              </div>
            </div>
        </main>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}