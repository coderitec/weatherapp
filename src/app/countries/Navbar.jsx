import Link from 'next/link'
import React from 'react'

export default function Navbar({africa, europe, asia, oceania, america}) {
  return (
    <nav>
        <ul className='flex flex-col h-screen fixed w-[30%] bg-gray-700 text-white gap-y-16'>
            <Link href={`/countries/${africa}`}>
            <li>africa</li>
            </Link>
            
            <Link href={`/countries/${europe}`}>
            <li>europe</li>
            </Link>
            
            <Link href={`/countries/${america}`}>
            <li>america</li>
            </Link>
            
            <Link href={`/countries/${asia}`}>
            <li>asia</li>
            </Link>
            
            <Link href={`/countries/${oceania}`}>
            <li>oceania</li>
            </Link>
        </ul
        >
    </nav>
  )
}
