import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div>
    <Link href="/comming_Soon">
        <div className='sidebar-width text-center flex flex-col items-center text-white'>
            <div className='sidebar-tag'></div>
            <p className='sidebar-text'>home</p>
            </div>
        </Link>
        <Link href="/comming_Soon">
        <div className='sidebar-width text-center flex flex-col items-center text-white'>
            <div className='sidebar-tag'></div>
            <p className='sidebar-text'>home</p>
            </div>
        </Link>
        <Link href="/section">
        <div className='sidebar-width text-center flex flex-col items-center text-white'>
            <div className='sidebar-tag'></div>
            <p className='sidebar-text'>home</p>
            </div>
        </Link>
        <Link href="/comming_Soon">
        <div className='sidebar-width text-center flex flex-col items-center text-white'>
            <div className='sidebar-tag'></div>
            <p className='sidebar-text'>home</p>
            </div>
        </Link>
        <Link href="/comming_Soon">
        <div className='sidebar-width text-center flex flex-col items-center text-white'>
            <div className='sidebar-tag'></div>
            <p className='sidebar-text'>home</p>
            </div>
        </Link>
        <Link href="/comming_Soon">
        <div className='sidebar-width  text-center flex flex-col items-center text-white'>
            <div className='sidebar-tag '></div>
            <p className='sidebar-text'>home</p>
            </div>
        </Link>
    </div>
  )
}
