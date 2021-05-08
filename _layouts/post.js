import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import 'tailwindcss/tailwind.css'

export default function PostLayout(props) {
  return (
    <DefaultLayout title={"DevMart"} description={"DevMart"} posts={props.posts}>
        <Head>
          <title>{props.title} | {props.user}</title>
        </Head>
        <article>
          <div className="container mx-auto p-5 w-4/5">
            <div className="flex flex-auto items-center">
              <h1 className="text-6xl text-left font-extrabold text-gray-900 sm:text-4xl sm:m-1 lg:m-2 lg:text-6xl">{props.title}</h1>
              <div className="flex flex-auto flex-col">
                <h1 className="text-sm text-left font-medium text-gray-400 sm:text-base lg:text-sm">{props.date}</h1>
                <h1 className="text-base text-left font-medium text-gray-400 sm:text-2xl lg:text-base">{props.user}</h1>
              </div>
            </div>
            <div className="container rounded p-5 w-full mx-auto bg-gray-100">
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
            </div>
          </div>
        </article>
    </DefaultLayout>
  )
}