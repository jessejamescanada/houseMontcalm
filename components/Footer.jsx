import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
    <div>
      <div className='w-full mt-8 bg-neutral-500 py-10'>
        <div className='flex flex-col items-center lg:flex lg:flex-row  lg:justify-evenly lg:px-[5rem] lg:w-[1100px] lg:m-auto'>
          <div className='flex flex-col p-3 text-neutral-50 order-2 lg:order-1 sm:w-72'>
            <h3 className='font-semibold text-2xl text-center lg:text-left'>
              Montcalm Property
              <div>
                <h3 className='text-center mb-2 lg:text-left'>Management</h3>
              </div>
            </h3>
            <div className='text-center lg:text-left'>
              <p>55 Catherine Street, Unit A</p>
              <p>St. Catharines, Ontario</p>
              <p>L2R 5E9</p>

              <div>
                <p>
                  Contact:{' '}
                  <span className='font-semibold'>montcalmpm@gmail.com</span>
                </p>
                <p>
                  Direct: <span className='font-semibold'>289 820 0200</span>
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row lg:order-2'>
            <div className='flex flex-col items-center order-3 mb-10 md:mb-1 lg:order-2 sm:flex-row '>
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
            </div>
            <div className='order-1 lg:order-3 sm:w-72'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-2 bg-[#737373]'>
        2023 website design by{' '}
        <Link
          className='pointer text-blue-700'
          href={'https://www.developer-jesseg.com/'}
        >
          Jesse G
        </Link>
      </p>
    </div>
  )
}

export default Footer
