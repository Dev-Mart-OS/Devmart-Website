import DefaultLayout from '@layouts/default'
import { getConfig, getAllPosts, getPostsByCat } from '@api'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'

export default function PostLayout(props) {
  return (
    <DefaultLayout title={"DevMart"} description={"DevMart"} posts={props.posts}>
        <article>
          <div className="container w-11/12 mx-auto p-5 lg:w-4/5 sm:w-11/12">
            <div className="flex flex-auto items-center">
              <h1 className="text-xl text-left font-extrabold text-gray-900 sm:text-xl sm:m-1 lg:m-2 lg:text-6xl">Embedded Programming</h1>
            </div>
            <div className="container rounded p-5 w-full mx-auto bg-gray-100">
                <ul className="space-y-4">
                    {props.fullPosts.map(function(post, idx) {
                    return (
                        <li key={idx} className="text-base">
                            <Link href={'/posts/'+post.slug}>
                                <a className="font-bold text-lg lg:text-2xl sm:text-lg text-gray-900 hover:text-gray-700">{post.title}</a>
                            </Link>
                            <span className="text-gray-400 text-lg lg:text-2xl sm:text-lg"> - {post.cat}</span>
                            <div dangerouslySetInnerHTML={{__html:post.abstract}} className="text-gray-400 text-sm"/>
                        </li>
                    )
                    })}
                </ul>
            </div>
          </div>
        </article>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
    const config = await getConfig()
    const fullPosts = await (await getPostsByCat("Embedded Programming"))
    const allPosts = await (await getAllPosts()).slice(0, 2)
    return {
    props: {
        fullPosts: fullPosts,
        posts: allPosts,
        title: config.title,
        description: config.description
        }
    }
}