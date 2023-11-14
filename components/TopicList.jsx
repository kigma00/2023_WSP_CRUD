import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

export default function TopicList() {
  return (
    <>
      <div className="border border-slate-300 p-4 flex justify-between gap-5 bg-slate-100 items-start my-3">
        <div>
          <h2 className="text-2xl font-bold">Topic Title</h2>
          <div>Ropic description</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  )
}
