export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';

import RecentPosts from '@/app/components/RecentPosts';

export default async function PostPage({
  params,
}) {
  let post = null;

  try {
    const result = await fetch(
      process.env.URL + '/api/post/get',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          slug: params.slug,
        }),
        cache: 'no-store',
      }
    );

    const data = await result.json();

    post = data.posts[0];
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return (
      <main className='min-h-screen flex items-center justify-center px-4'>
        <h1 className='text-3xl font-bold'>
          Post not found
        </h1>
      </main>
    );
  }

  return (
    <main className='bg-white dark:bg-slate-950 min-h-screen'>
      {/* Hero */}
      <section className='border-b dark:border-slate-800'>
        <div className='max-w-5xl mx-auto px-4 py-12 lg:py-20'>
          {/* Breadcrumb */}
          <div className='flex items-center gap-2 text-sm text-gray-500 mb-6'>
            <Link
              href='/'
              className='hover:text-teal-500'
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href='/docs'
              className='hover:text-teal-500'
            >
              Docs
            </Link>

            <span>/</span>

            <span className='capitalize'>
              {post.category}
            </span>
          </div>

          {/* Category */}
          <div className='mb-5'>
            <Link
              href={`/search?category=${post.category}`}
              className='bg-teal-100 text-teal-700 dark:bg-slate-800 dark:text-teal-400 px-4 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-all'
            >
              {post.category}
            </Link>
          </div>

          {/* Title */}
          <h1 className='text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white max-w-4xl'>
            {post.title}
          </h1>

          {/* Meta */}
          <div className='flex flex-wrap items-center gap-5 mt-8 text-sm text-gray-500'>
            <span>
              Published on{' '}
              {new Date(
                post.createdAt
              ).toLocaleDateString()}
            </span>

            <span>
              {(post?.content?.length / 1000).toFixed(
                0
              )}{' '}
              min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className='max-w-6xl mx-auto px-4 pt-10'>
          <div className='relative w-full h-[250px] sm:h-[400px] lg:h-[550px] rounded-3xl overflow-hidden border dark:border-slate-800 shadow-lg'>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className='object-cover'
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className='max-w-4xl mx-auto px-4 py-14'>
        <article
          className='
            prose 
            prose-lg 
            dark:prose-invert 
            max-w-none

            prose-headings:scroll-mt-24
            prose-headings:font-bold

            prose-p:text-gray-700
            dark:prose-p:text-gray-300

            prose-a:text-teal-500
            hover:prose-a:text-teal-600

            prose-img:rounded-2xl

            prose-pre:bg-slate-900
            prose-pre:text-white
            prose-pre:rounded-2xl

            prose-code:text-pink-500
          '
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </section>

      {/* Bottom CTA */}
      <section className='max-w-5xl mx-auto px-4 pb-16'>
        <div className='rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 p-10 text-white text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Continue Learning SAP Concur
          </h2>

          <p className='max-w-2xl mx-auto opacity-90 mb-6 text-lg'>
            Explore more tutorials,
            workflows, integrations, and
            real-world SAP Concur examples.
          </p>

          <Link
            href='/docs'
            className='inline-block bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all'
          >
            Explore Documentation
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className='max-w-7xl mx-auto px-4 pb-20'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold'>
            More Tutorials
          </h2>

          <Link
            href='/docs'
            className='text-teal-500 hover:underline'
          >
            View all
          </Link>
        </div>

        <RecentPosts limit={3} />
      </section>
    </main>
  );
}