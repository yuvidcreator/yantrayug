import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaStore, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="md:text-6xl text-3xl font-bold">
          Welcome to{' '}
          <a className="text-red-600" href="https://wa.me/919890687777/">
            Yantrayug!
          </a>
        </h1>
        
        <p className="mt-4 md:text-lg text-sm font-medium">
          We are Launching E-store App soon{' '}
        </p>
        <code className="rounded bg-blue-500 text-white p-1 mt-2 text-sm">
          Application under Development
        </code>

        <div className="p-4">
          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a
              href="#"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:border-blue-600"
            >
              <h3 className="text-xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-md">
                Find in-depth information about Yantrayug Automobile App features and its API.
              </p>
            </a>

            <a
              href="#"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:border-blue-600"
            >
              <h3 className="text-xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-md">
                Learn about Yantrayug Automobiles with our Dedicated Support Team!
              </p>
            </a>

            <a
              href="#"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:border-blue-600"
            >
              <h3 className="text-xl font-bold">Locate us &rarr;</h3>
              <p className="mt-4 text-md">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <div
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:border-blue-600"
            >
              <h3 className="text-xl font-bold">Follow us &rarr;</h3>
              <p className="mt-4 text-md">
                <a href="https://www.facebook.com/yantrayug.automobiles/" type="button" className="rounded-full border-2 border-blue-800 text-blue-800 leading-normal uppercase hover:bg-white hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <FaFacebook className="ml-2 mt-2 mx-auto" />
                </a>

                <a href="https://www.instagram.com/#/" type="button" className="rounded-full border-2 border-fuchsia-600 text-fuchsia-600 leading-normal uppercase hover:bg-white hover:border-fuchsia-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <FaInstagram className="ml-2 mt-2 mx-auto" />
                </a>

                <a href="https://wa.me/919890687777/" type="button" className="rounded-full border-2 border-green-600 text-green-600 leading-normal uppercase hover:bg-white hover:border-green-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <FaWhatsapp className="ml-2 mt-2 mx-auto" />
                </a>

                <a href="https://twitter.com/#/" type="button" className="rounded-full border-2 border-blue-400 text-blue-400 leading-normal uppercase hover:bg-white hover:border-blue-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <FaTwitter className="ml-2 mt-2 mx-auto" />
                </a>

                <a href="https://goo.gl/maps/1gkcTdC2t44Busf37/" type="button" className="rounded-full border-2 border-green-500 text-green-500 leading-normal uppercase hover:bg-white hover:border-green-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <FaStore className="ml-2 mt-2 mx-auto" />
                </a>

                <a href="#!" type="button" className="rounded-full border-2 border-blue-600 text-blue-600 leading-normal uppercase hover:bg-white hover:border-blue-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <FaLinkedinIn className="ml-2 mt-2 mx-auto" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
}

export default Home
