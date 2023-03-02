import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className='w-full mt-8 bg-neutral-500 py-10'>
        <div className='flex flex-col items-center lg:flex lg:flex-row  lg:justify-evenly lg:px-[5rem] lg:w-[1100px] lg:m-auto'>
          <div className='flex flex-col p-3 text-neutral-50 order-2 sm:order-1 sm:w-72'>
            <h3 className='font-semibold text-2xl text-center md:text-left'>
              Montcalm Property
              <div>
                <h3 className='text-center mb-2 md:text-left'>Management</h3>
              </div>
            </h3>
            <div className='text-center md:text-left'>
              <p>55 Catherine Street, Unit A</p>
              <p>St. Catharines, Ontario</p>
              <p>L2R 5E9</p>
              <div className='my-3'>
                <h4 className='font-semibold'>Office Business Hours</h4>
                <p>Open 24 hours</p>
              </div>
              <div>
                <p>
                  Contact:{' '}
                  <span className='font-semibold'>montcalmpm@gmail.com</span>
                </p>
                <p>
                  Direct: <span className='font-semibold'>289 820 0200</span>
                </p>
                <p>
                  Fax: <span className='font-semibold'>905 682 6353</span>
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center order-3 mb-10 md:mb-1 sm:order-2 sm:flex-row '>
            <div className='flex flex-col items-center  sm:w-72 '>
              <h2 className='text-2xl my-4 text-neutral-50 md:my-2'>
                Partners
              </h2>
              <Link href={'http://hamdani.ca/'}>
                <Image
                  src={'/p1.png'}
                  alt='partners'
                  width={150}
                  height={150}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </Link>

              <Link href={'http://hamdaniparalegal.ca/'}>
                <Image
                  src={'/p2.png'}
                  alt='partners'
                  width={100}
                  height={100}
                  className='m-0'
                />
              </Link>
            </div>
            <div className='order-1 sm:order-3 sm:w-72'>
              <div id='contact'>
                <form className='w-full max-w-sm'>
                  <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                      <label className='block text-neutral-50 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        Name
                      </label>
                    </div>
                    <div className='md:w-2/3'>
                      <input
                        className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id='inline-full-name'
                        type='text'
                        placeholder='Jane Doe'
                      />
                    </div>
                  </div>
                  <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                      <label className='block text-neutral-50 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        Email
                      </label>
                    </div>
                    <div className='md:w-2/3'>
                      <input
                        className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id='inline-password'
                        type='email'
                        placeholder='jane@doe.com'
                      />
                    </div>
                  </div>
                  <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                      <label className='block text-neutral-50 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        Message
                      </label>
                    </div>
                    <div className='md:w-2/3'>
                      <textarea
                        className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id='inline-password'
                        type='textarea'
                        placeholder='Your message'
                      />
                    </div>
                  </div>
                  <div className='md:flex md:items-center'>
                    <div className='md:w-1/3'></div>
                    <div className='md:w-2/3 text-center'>
                      <button
                        className='shadow bg-stone-200 hover:bg-stone-400 hover:text-neutral-50 focus:shadow-outline focus:outline-none text-neutral-600 font-bold py-2 px-4 rounded'
                        type='button'
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
