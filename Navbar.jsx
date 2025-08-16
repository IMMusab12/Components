"use client"
import ThemeToggleButton from "./ui/theme-toggle-button";
import React from 'react'
import Link from 'next/link'
import { useState } from "react";
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
    return (
        <>
<div id="main">
      {/* Navbar */}
      <div
        id="Navbar"
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[80vw] flex justify-between items-center fixed top-10 right-[10vw] rounded-full p-5 px-7 z-50 shadow-lg backdrop-blur-lg"
      >
        {/* Logo */}
        <div id="Logo" className="flex items-center">
          <h1 className="font-bold">
            <span className="text-4xl text-red-800">Meet</span>
            <span className="text-4xl text-black px-2 py-2">Musab</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center text-lg font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/" className="hover:text-white transition-colors">About</Link>
          <Link href="/" className="hover:text-white transition-colors">Portfolio</Link>

          <div className="flex gap-3">
            <button className="bg-gray-400 px-5 py-3 rounded-lg font-bold hover:bg-gray-500 transition">
              Log in
            </button>
            <button className="bg-gray-900 text-white font-bold px-5 py-3 rounded-full hover:bg-black transition">
              Sign up free
            </button>
          </div>
               <div className="inline-flex gap-3">
              <a href="https://github.com/IMMusab12"><img src="/g.png" alt="github" className="w-10 h-10" /></a>
              <a href="https://github.com/IMMusab12" ><img src="/lin.jpg" alt="linkedin" className="h-10 w-10"/></a>
              </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70vw] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6 flex flex-col gap-8`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6 text-lg font-semibold text-white">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Portfolio</Link>
        </nav>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button className="bg-gray-400 px-5 py-3 rounded-lg font-bold hover:bg-gray-500 transition">
            Log in
          </button>
          <button className="bg-gray-900 text-white font-bold px-5 py-3 rounded-full hover:bg-black transition">
            Sign up free
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="inline-flex gap-6">
            <a href="https://github.com/IMMusab12" ><img src="/g.png" alt="github" className="h-10 w-10"/></a>
             <a href="https://github.com/IMMusab12" ><img src="/lin.jpg" alt="linkedin" className="h-10 w-10"/></a>
             </div>
      </div>
    </div>
 
        </>

    )
}

export default Navbar