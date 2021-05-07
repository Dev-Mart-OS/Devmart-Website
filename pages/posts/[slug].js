import PostLayout from '@layouts/post'
import { getPostBySlug, getAllPosts } from "@api"

export default function Post(props) {
  return <PostLayout title={props.info.title} content={props.info.content} posts={props.posts}/>
}

export async function getStaticPaths() {
  let paths = await getAllPosts()
  paths = paths.map(post => ({
    params: { slug:post.slug }
  }));
  return {
    paths: paths,
    fallback: false
  }
};

export async function getStaticProps(context) {
  const allPosts = await getAllPosts()
  const data = await getPostBySlug(context.params.slug)
  return {
    props: {
      posts: allPosts,
      info: data
    }
  }
}