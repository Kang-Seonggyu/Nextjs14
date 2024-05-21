'use client' // usePathname 사용하기 위해서는 CSR 이어야 가능.

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const path = usePathname()

  console.log(path)

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home {path === '/' ? '💥' : ''}</Link>
        </li>
        <li>
          <Link href="/about_me">
            About Me {path === '/about_me' ? '💥' : ''}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
