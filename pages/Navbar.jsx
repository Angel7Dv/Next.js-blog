import Link from 'next/link'


export default function Navbar() {
  return (
    <nav>
        <Link href="/">
        <a> inicio</a>
        </Link>
        <Link href="/about">
        <a> about</a>
        </Link>
        <Link href="/posts">
        <a> posts</a>
        </Link>
        <Link href="/componente/anidado">
        <a> anidado</a>
        </Link>


    </nav>
  )
}
