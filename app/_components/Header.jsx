import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className='flex justify-between p-5 shadow-sm'>
        <Image className='' src={'/course generator.png'} width={300} height={300}/>
        <Link href={'/dashboard'}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
    
  )
}

export default Header
