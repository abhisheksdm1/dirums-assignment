import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
         <div className='sidebar min-h-screen bg-black'>
          <Sidebar/>
         </div>
          </main>
  )
}
