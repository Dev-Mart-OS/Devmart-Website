import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link';  
import { getConfig, getAllPosts } from '@api'
import DefaultLayout from '@layouts/default'

export default function Home(props) {
  return (
    <DefaultLayout title={"DevMart"} description={"DevMart"} posts={props.posts}>
      <div className="max-w-7xl mx-auto select-none">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 xl:inline">Devmart</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Devmart is a developer collective that is dedicated to open source software and teaching others.
                We push the envelope with our collaboration and are always looking for new projects to conquer.
                See for yourself!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="posts">
                    <a
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-grey-800 md:py-4 md:text-lg md:px-10"
                    >
                      Read Our Blog
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md">
                  <a
                    href="#"
                    className="transition duration-200 ease-in-out w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 bg-gray-200 hover:bg-gray-300 md:text-lg md:px-10"
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
  const allPosts = await (await getAllPosts()).slice(0, 2)
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}