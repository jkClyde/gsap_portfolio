'use client'

import React from 'react'
import { TextParallaxContentExample } from '@/components/Features'
import { div } from 'framer-motion/client'

const page = () => {
  return (
    <div className="my-[25px]">
      <div className='max-w-[1600px] mx-auto '>
        <TextParallaxContentExample />
      </div>
    </div>
  )
}

export default page