
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut } from '@/auth'


interface Props {
  session: any
}

const NavbarClient: React.FC<Props> = ({ session }) => {


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-blue-600">MySite</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

            {session?.user ? (
              <>
                <Link href="/startup/create" className="text-gray-700 hover:text-blue-600">Create</Link>
                <form action={async() =>{
                    "use server" 
                    await signOut({redirectTo: '/'})
                    
                    }} className="text-gray-700 hover:text-red-600">

                        <button type="submit" className="text-gray-700 hover:text-red-600">Logout</button>
                    </form>
                <Link href={`/user/${session.user.id}`} className="text-gray-700 hover:text-blue-600">
                  {session.user.name}
                </Link>
              </>
            ) : (

                <form action={async () => {
                    "use server"
                    await signIn('github')
                  }}>
                    <button type="submit" className="text-gray-700 hover:text-blue-600">Login</button>
                  </form>
              
            )}
          </div>

        
        </div>
      </div>

 
    </nav>
  )
}

export default NavbarClient
