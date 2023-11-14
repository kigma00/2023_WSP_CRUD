import React from 'react'

export default function AddTopicPage() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 p-4"
      />
      <textarea
        type="text"
        placeholder="Topic description"
        className="border border-slate-500 p-4 h-32"
      />
      <button className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md">
        Add Topic
      </button>
    </form>
  )
}
