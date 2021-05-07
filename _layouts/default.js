import Head from 'next/head'
import Header from '@includes/header'

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
      </Head>
      <Header posts={props.posts}/>
      {props.children}
    </main>
  )
}