import React from 'react'
import Navbar from './Navbar'

export default function layout({children}) {
  return (
    <div className='flex'>
        <Navbar africa='africa' europe='europe' asia='asia' america='america' oceania='oceania'/>
        <section className='relative left-[35%]'>
            {children}
        </section>
    </div>
  )
}
