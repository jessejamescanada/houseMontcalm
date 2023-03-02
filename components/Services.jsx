import ServicesSingle from './ServicesSingle'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Services = () => {
  return (
    <div
      className='w-full'
      id='services'
    >
      <div className='relative w-full h-[20rem] '>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/services.png'}
            width={500}
            height={300}
            className='opacity-50 lg:ml-[10%] py-10 px-3'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className='absolute flex m-auto left-0 right-0 top-[60%] sm:top-[15%] w-auto mt-5 sm:justify-end lg:w-[60rem]'
        >
          <h2 className='text-zinc-500 text-4xl text-white text-center  font-serif sm:m-0 sm:text-5xl sm:w-[300px]'>
            Montcalm Property Management Services
          </h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='flex flex-col md:flex-col md:justify-between lg:mx-[5rem]'
      >
        <div className='flex flex-col md:flex-row'>
          <ServicesSingle
            bg={'bg-slate-300'}
            title={'Silver'}
            list1={
              'Unit filling charge of one months rent, includes unlimited showings, minor updates to rental unit'
            }
            list2={'Move in inspection reports with photos'}
            list3={
              'Monthly rent collection with detailed monthly financial statements'
            }
            list4={'Receive all emergency calls'}
            list5={'Receive all maintenance requests'}
            list6={
              'Serve annual rent increases, ensuring you receive top dollar'
            }
            list7={'Yearly inspection of rental unit in Spring with report'}
            list8={
              'Immediately serve Tenant with legal notice for late rent payments'
            }
            list9={'Move out inspection reports with photos'}
            list10={'Property inspections/check-ups when vacant'}
          />
          <ServicesSingle
            bg={'bg-stone-300'}
            title={'Gold'}
            excerpt={'Everything in Silver Package included plus:'}
            list1={
              'Inspection of rental unit(s) and surrounding property in Spring and Fall with report, and pictures'
            }
            list2={
              'Reduced legal fees for attendance at Landlord and Tenant Board, for Landlord Applications (Ministry of Finance Fee extra)'
            }
            list3={
              'Reduced Management Fee of gross monthly rent when unit is vacant'
            }
            list4={'Asset inventory and inspections of entire property'}
            list5={'Payment and management of utilities (if applicable)'}
          />
        </div>
        <div className='flex flex-col md:flex-row'>
          <ServicesSingle
            bg={'bg-stone-300'}
            title={'Platinum'}
            excerpt={'Everything in Silver and Gold Packages included plus:'}
            list1={
              'Reduced rent fill charge to half a month’s rent, unlimited showings, minor updates to rental unit'
            }
            list2={
              'Reduced Management Fee of gross monthly rent when unit is vacant'
            }
            list3={
              'Discounted snow removal and grass cutting from preferred vendor'
            }
            list4={
              'Payment and management of utilities (if applicable) and Municipal Taxes'
            }
            list5={
              'Quarterly inspection of rental unit(s) and surrounding property in Spring, Summer, Fall, and Winter, with report and pictures'
            }
            list6={
              'Annual dryer vent cleaning, and washer/dry maintenance check up'
            }
            list7={
              'Replace furnace filter quarterly to maximize longevity of furnace and efficiency of equipment'
            }
          />
          <ServicesSingle
            bg={'bg-slate-300'}
            title={'Tenant Management'}
            list1={
              'Unit filling charge of one months rent, includes unlimited showings, professional pictures, advertisement on our website and social media'
            }
            list2={
              'New tenant credit checks, reference confirmation, and proper vetting procedures'
            }
            list3={
              'Monthly rent collection with detailed monthly financial statements'
            }
            list4={
              'Receive emergency and maintenance calls, and dispatch accordingly'
            }
            list5={
              'Send all letters and legal notices on behalf on Landlord, ensuring compliance with R.T.A., and maintaining professionalism throughout the Tenancy'
            }
            list6={'Serve annual rent increases, on time, every year'}
          />
        </div>
      </motion.div>
      <div className='ml-3 sm:ml-24 font-semibold'>
        Download our 2023 Tenant Application{' '}
        <span className='text-red-600 pointer'>
          <Link href={'/tenant'}>here</Link>
        </span>
      </div>
    </div>
  )
}

export default Services
