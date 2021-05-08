import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import 'tailwindcss/tailwind.css'

export default function PostLayout(props) {
  return (
    <DefaultLayout title={"DevMart"} description={"DevMart"} posts={props.posts}>
        <Head>
            <title>{props.title}</title>
        </Head>
        <article>
            <h1 className="text-3xl m-4 text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:m-2 lg:m-6 lg:text-5xl">{props.title}</h1>
            <div className="container rounded-xl p-5 mx-auto w-4/5 bg-gray-200">
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
            </div>
            <div><Link href='/'><a>Home</a></Link></div> 
        </article>
    </DefaultLayout>
  )
}