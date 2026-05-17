'use client';

import { Footer } from 'flowbite-react';
import Link from 'next/link';
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer
      container
      className='border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950'
    >
      <div className='w-full max-w-7xl mx-auto py-8'>
        {/* Top Section */}
        <div className='grid gap-10 md:grid-cols-4'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <Link
              href='/'
              className='flex items-center gap-2 text-2xl font-bold'
            >
              <span className='px-3 py-1 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white'>
                Anand&apos;s
              </span>

              <span className='dark:text-white'>
                Concur Docs
              </span>
            </Link>

            <p className='mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 max-w-md'>
              Learn SAP Concur with practical tutorials,
              workflows, audit rules, integrations,
              expense management, invoice processing,
              and real-world implementation examples.
            </p>
          </div>

          {/* Docs */}
          <div>
            <Footer.Title title='Documentation' />

            <Footer.LinkGroup col>
              <Link
                href='/docs/introduction-to-sap-concur'
                className='hover:text-teal-500 text-sm'
              >
                Getting Started
              </Link>

              <Link
                href='/search'
                className='hover:text-teal-500 text-sm'
              >
                All Tutorials
              </Link>

              <Link
                href='/search?category=api'
                className='hover:text-teal-500 text-sm'
              >
                APIs & Integration
              </Link>

              <Link
                href='/search?category=expense'
                className='hover:text-teal-500 text-sm'
              >
                Expense Module
              </Link>
            </Footer.LinkGroup>
          </div>

          {/* Resources */}
          <div>
            <Footer.Title title='Resources' />

            <Footer.LinkGroup col>
            

              <Link
                href='/privacy-policy'
                className='hover:text-teal-500 text-sm'
              >
                Privacy Policy
              </Link>

              <Link
                href='/terms'
                className='hover:text-teal-500 text-sm'
              >
                Terms & Conditions
              </Link>
            </Footer.LinkGroup>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider className='my-6' />

        {/* Bottom */}
        <div className='flex flex-col gap-4 sm:flex-row items-center justify-between'>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            © {new Date().getFullYear()} Anand&apos;s Concur Docs.
            All rights reserved.
          </p>

          <div className='flex gap-5'>
            <a
              href='https://github.com'
              target='_blank'
              className='text-gray-500 hover:text-teal-500 transition-all'
            >
              <BsGithub size={18} />
            </a>

            <a
              href='https://linkedin.com'
              target='_blank'
              className='text-gray-500 hover:text-teal-500 transition-all'
            >
              <BsLinkedin size={18} />
            </a>

            <a
              href='https://twitter.com'
              target='_blank'
              className='text-gray-500 hover:text-teal-500 transition-all'
            >
              <BsTwitterX size={18} />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}