"use client"
import "./globals.css";
import Link from "next/link";
import Counter from "@/components/Counter";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <header className="site-header flex justify-between items-center">
          <h3 className="font-bold text-[lime]">LOGO</h3>
          <ul className="flex">
            <li>
              <Link className={`text-white ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
            </li>
            <li>
              <Link className={`text-white ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
            </li>
            <li>
              <Link className={`text-white ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <div className="mainContent h-[calc(100vh-186px)]">
          <div className="container mx-auto">{children}</div>
        </div>
        <footer className="site-footer">
          <p>Our footer</p>
          <nav>
            <ul className="flex justify-end items-center">
              <li>
                <Link className="text-white" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-white" href="/about">About Us</Link>
              </li>
              <li>
                <Link className="text-white" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <Counter styleCounter="bg-[red] p-[10px] rounded mt-[10px]" />
        </footer>
      </body>
    </html>
  );
}
