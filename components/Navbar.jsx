import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex bg-red-900 justify-between px-8 py-3 items-center">
      <Link href="/" className="text-white text-lg font-bold">
        MongoDB CRUD
      </Link>
      <Link
        className="bg-yellow-200 text-lg font-bold px-4 py-2 rounded-md"
        href="/addTopic"
      >
        Add Topic
      </Link>
    </nav>
  )
}
