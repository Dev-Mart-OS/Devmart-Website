import Head from 'next/head'
import Header from '@includes/header'

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content="We are a developer collective that is dedicated to open source software and teaching others. We push the envelope with our collaboration and are always looking for new projects to conquer. See for yourself!"/>
        <meta property="og:title" content="Devmart" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devmart.org" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/795562442221944843/840219872760037376/unknown.png" />
        <meta property="og:description" content="Devmart is a developer collective that is dedicated to open source software and teaching others. We push the envelope with our collaboration and are always looking for new projects to conquer. See for yourself!" />
        <meta name="theme-color" content="#FFFFFF"/>
      </Head>
      <Header posts={props.posts}/>
      {props.children}
    </main>
  )
}