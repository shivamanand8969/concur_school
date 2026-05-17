'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  HiChevronDown,
  HiChevronRight,
  HiMenu,
  HiX,
} from 'react-icons/hi';

export default function DocsSidebarClient({
  groupedPosts,
  currentSlug,
}) {
  const [openSections, setOpenSections] =
    useState({});

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const toggleSection = (category) => {
    setOpenSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className='lg:hidden sticky top-0 z-40 bg-white dark:bg-slate-950 border-b dark:border-slate-800 px-4 py-3 flex items-center justify-between'>
        <h2 className='font-bold text-lg'>
          SAP Concur Docs
        </h2>

        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          className='p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
        >
          {mobileOpen ? (
            <HiX size={24} />
          ) : (
            <HiMenu size={24} />
          )}
        </button>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40 lg:hidden'
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          

          fixed lg:sticky top-0 left-0 z-50
    h-screen w-[85%] sm:w-80 lg:w-72 shrink-0

          border-r dark:border-slate-800
          bg-white dark:bg-slate-950
          overflow-y-auto
          transition-transform duration-300

          ${
            mobileOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }

          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className='p-5 border-b dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-950 z-20'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-bold'>
                SAP Concur Docs
              </h2>

              <p className='text-sm text-gray-500 mt-1'>
                Learning Documentation
              </p>
            </div>

            {/* Mobile Close */}
            <button
              onClick={() =>
                setMobileOpen(false)
              }
              className='lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
            >
              <HiX size={22} />
            </button>
          </div>

          {/* Search */}
          <input
            type='text'
            placeholder='Search docs...'
            className='mt-4 w-full rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500'
          />
        </div>

        {/* Categories */}
        <div className='p-4 flex flex-col gap-5'>
          {Object.entries(groupedPosts).map(
            ([category, categoryPosts]) => {
              const isOpen =
                openSections[category] ?? true;

              return (
                <div key={category}>
                  {/* Category */}
                  <button
                    onClick={() =>
                      toggleSection(category)
                    }
                    className='w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all'
                  >
                    <span className='text-sm font-semibold uppercase tracking-wide text-teal-500'>
                      {category}
                    </span>

                    {isOpen ? (
                      <HiChevronDown className='text-gray-500' />
                    ) : (
                      <HiChevronRight className='text-gray-500' />
                    )}
                  </button>

                  {/* Links */}
                  {isOpen && (
                    <div className='mt-2 flex flex-col gap-1 pl-2 border-l-2 border-slate-200 dark:border-slate-800'>
                      {categoryPosts.map((post) => (
                        <Link
                          key={post._id}
                          href={`/docs/${post.slug}`}
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className={`group relative px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                            currentSlug ===
                            post.slug
                              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:translate-x-1'
                          }`}
                        >
                          <span className='line-clamp-2'>
                            {post.title}
                          </span>

                          {currentSlug ===
                            post.slug && (
                            <div className='absolute left-0 top-2 bottom-2 w-1 bg-white rounded-r-full' />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </aside>
    </>
  );
}