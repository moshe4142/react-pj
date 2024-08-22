import React from 'react'
import Header from '../componants/Header'
import Footer from '../componants/Footer'
import Button from '../componants/Button'
import Map from '../componants/Map'

const Maps = () => {
  return (
    <>
      <Header bgColor="purple-100" titleColor="gray-900" title="Branches" />
      <div className='bg-gradient-to-r from-green-50 via-purple-50 to-gray-50'>
        <div className='py-[180px] w-[1200px] m-auto shadow-lg bg-white'>
          <div className='text-center p-[20px]'>
            <div className='text-4xl p-[40px]'>
              <h2>Our branches: </h2>
            </div>
            <div className='text-xl'>
              <ul>
                <li className='m-5'>~ 19 Yaari Meir St., Tel Aviv-Yafo, Tel Aviv-Yafo ~</li>
                <li className='m-5'> ~ The artisans 203, Nativot, Nativot ~ </li>
                <li className='m-5'> ~ 5 Sderot Yitzhak Rabin, Neve Rabin, Or Yehuda, Or Yehuda ~ </li>
                <li className='m-5'> ~ 1 Raphael Eitan, Kiryat Ono, Kiryat Ono ~ </li>
              </ul>
            </div>
          </div>

          <div className='m-[auto] my-8 text-center text-4xl'>
            <h2 className='m-[auto] '>Maps</h2>
          </div>
          <Map />

        </div>

      </div>


      <Footer />
    </>
  )
}

export default Maps