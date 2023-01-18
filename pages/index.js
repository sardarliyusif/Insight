import Head from 'next/head'
import Link from 'next/link'
import { Provider } from 'react-redux'
import { store } from '../redux/store'


export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='text-6xl font-bold text-blue-900'>WELCOME</h1>
      <h1 className='text-5xl font-bold text-red-700'>⬇⬇ Click below to see Insight Page ⬇⬇</h1>
      <Link href='/dashboard/insight' className='text-4xl font-bold text-green-700'>➡ To Insight ⬅</Link>
      </div>
    </Provider>
  )
}
