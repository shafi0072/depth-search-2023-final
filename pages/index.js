import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/src/Components/app/Home/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}
