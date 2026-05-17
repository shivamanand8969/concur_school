export const dynamic = 'force-dynamic';

import Link from 'next/link';
import RecentPosts from './components/RecentPosts';

export default async function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='max-w-7xl mx-auto px-4 py-16 lg:py-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='flex flex-col gap-6'>
            <div>
              <span className='bg-teal-100 text-teal-700 dark:bg-slate-800 dark:text-teal-400 px-4 py-1 rounded-full text-sm font-medium'>
                SAP Concur Learning Platform
              </span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white'>
              Learn{' '}
              <span className='text-teal-500'>SAP Concur</span> with
              easy-to-follow guides
            </h1>

            <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl'>
              Master SAP Concur step by step with practical tutorials,
              workflows, audit rules, expense management, invoice processing,
              APIs, SQL queries, and real-world implementation examples.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Link
                href='/docs'
                className='bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-medium transition-all'
              >
                Start Learning
              </Link>

              <Link
                href='/docs'
                className='border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 px-6 py-3 rounded-xl font-medium transition-all'
              >
                Browse Topics
              </Link>
            </div>

            {/* Quick Stats */}
            <div className='flex gap-8 pt-4'>
              <div>
                <h3 className='text-2xl font-bold'>50+</h3>
                <p className='text-gray-500 text-sm'>Tutorials</p>
              </div>

              <div>
                <h3 className='text-2xl font-bold'>Beginner</h3>
                <p className='text-gray-500 text-sm'>Friendly</p>
              </div>

              {/* <div>
                <h3 className='text-2xl font-bold'>Real</h3>
                <p className='text-gray-500 text-sm'>Projects</p>
              </div> */}
            </div>
          </div>

          {/* Right Side */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border dark:border-slate-700'>
              <h3 className='font-semibold text-lg mb-2'>
                Expense Management
              </h3>
              <p className='text-sm text-gray-500'>
                Learn reports, approvals, policies, and workflows.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border dark:border-slate-700 mt-8'>
              <h3 className='font-semibold text-lg mb-2'>Invoice Processing</h3>
              <p className='text-sm text-gray-500'>
                Understand invoice workflows and configurations.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border dark:border-slate-700'>
              <h3 className='font-semibold text-lg mb-2'>Audit Rules</h3>
              <p className='text-sm text-gray-500'>
                Validation, custom, and random audit rule examples.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border dark:border-slate-700 mt-8'>
              <h3 className='font-semibold text-lg mb-2'>Concur APIs</h3>
              <p className='text-sm text-gray-500'>
                Integration tutorials with practical API examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className='max-w-7xl mx-auto px-4 py-10'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold'>Learning Paths</h2>

          <Link
            href='/docs'
            className='text-teal-500 hover:underline'
          >
            View all
          </Link>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Link
            href='/docs'
            className='p-6 rounded-2xl border dark:border-slate-700 hover:shadow-lg transition-all bg-white dark:bg-slate-800'
          >
            <h3 className='font-semibold text-xl mb-2'>
              Beginner Guide
            </h3>
            <p className='text-sm text-gray-500'>
              Start from basics of SAP Concur.
            </p>
          </Link>

          <Link
            href='/docs'
            className='p-6 rounded-2xl border dark:border-slate-700 hover:shadow-lg transition-all bg-white dark:bg-slate-800'
          >
            <h3 className='font-semibold text-xl mb-2'>
              Expense Module
            </h3>
            <p className='text-sm text-gray-500'>
              Expense reports, workflows, and approvals.
            </p>
          </Link>

          <Link
            href='/docs'
            className='p-6 rounded-2xl border dark:border-slate-700 hover:shadow-lg transition-all bg-white dark:bg-slate-800'
          >
            <h3 className='font-semibold text-xl mb-2'>
              Invoice Module
            </h3>
            <p className='text-sm text-gray-500'>
              Invoice processing and payment workflows.
            </p>
          </Link>

          <Link
            href='/docs'
            className='p-6 rounded-2xl border dark:border-slate-700 hover:shadow-lg transition-all bg-white dark:bg-slate-800'
          >
            <h3 className='font-semibold text-xl mb-2'>API & Integration</h3>
            <p className='text-sm text-gray-500'>
              Learn APIs and third-party integrations.
            </p>
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      {/* <section className='max-w-7xl mx-auto px-4 py-12'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold'>Latest Tutorials</h2>

          <Link
            href='/docs'
            className='text-teal-500 hover:underline'
          >
            View all posts
          </Link>
        </div>

        <RecentPosts limit={9} />
      </section> */}

      {/* CTA */}
      <section className='max-w-7xl mx-auto px-4 py-16'>
        <div className='bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-10 text-center text-white'>
          <h2 className='text-3xl font-bold mb-4'>
            Become SAP Concur Ready
          </h2>

          <p className='max-w-2xl mx-auto text-lg opacity-90 mb-6'>
            Learn practical SAP Concur skills with real implementation
            examples, workflows, and project-based tutorials.
          </p>

          <Link
            href='/docs'
            className='bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold inline-block hover:scale-105 transition-all'
          >
            Explore Tutorials
          </Link>
        </div>
      </section>
    </div>
  );
}