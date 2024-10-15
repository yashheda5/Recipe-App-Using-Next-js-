import React from 'react'
import Link from 'next/link'
export default function notfound() {
  return (
    <div>
        <h1>Page Not Found </h1>
        <Link href={"/"}>got to home page</Link>
    </div>
  )
}
