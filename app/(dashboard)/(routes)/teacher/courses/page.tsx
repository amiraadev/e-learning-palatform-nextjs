import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CoursesPage = () => {
  return (
    <div className='p-6' >
      <Link href='/teacher/create'>create course</Link>
      <Button>
        New Course
      </Button>
    </div>
  )
}

export default CoursesPage