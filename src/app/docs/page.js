export const dynamic = 'force-dynamic';

import DocsSidebar from '@/app/components/DocsSidebar';
import Image from 'next/image';

export default async function DocsPage({ params }) {
  const { slug } = await params;

  let post = null;

  try {
    const result = await fetch(process.env.URL + '/api/post/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
      cache: 'no-store',
    });

    const data = await result.json();
    console.log("data",data)
    post = data.posts[0];
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>Post not found</h1>
      </div>
    );
  }

  return (
    <div className='block lg:flex bg-white dark:bg-slate-950'>
      {/* Sidebar */}
      <DocsSidebar/>

      {/* Main Content */}
      <main className='flex-1 min-h-screen'>
        <div className='max-w-4xl mx-auto px-5 py-10'>
          {/* Breadcrumb */}
          <div className='flex items-center gap-2 text-sm text-gray-500 mb-6'>
            <span>Docs</span>
            <span>/</span>
            <span className='capitalize'>{post.category}</span>
          </div>

          {/* Category */}
          <div className='mb-4'>
            <span className='bg-teal-100 text-teal-700 dark:bg-slate-800 dark:text-teal-400 px-4 py-1 rounded-full text-sm font-medium'>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className='text-4xl lg:text-5xl font-bold leading-tight mb-5 text-gray-900 dark:text-white'>
            {post.title}
          </h1>

          {/* Date */}
          <div className='flex items-center gap-3 text-sm text-gray-500 mb-8'>
            <span>
              Updated on{' '}
              {new Date(post.updatedAt).toLocaleDateString()}
            </span>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className='relative w-full h-[400px] mb-10 rounded-3xl overflow-hidden border dark:border-slate-700'>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className='object-cover'
              />
            </div>
          )}

          {/* Content */}
          <article
            className='prose prose-lg dark:prose-invert max-w-none prose-img:rounded-2xl prose-pre:bg-slate-900 prose-pre:text-white'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom Navigation */}
          {/* <div className='mt-16 border-t dark:border-slate-700 pt-8 flex items-center justify-between'>
            <button className='px-5 py-3 rounded-xl border dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all'>
              ← Previous
            </button>

            <button className='px-5 py-3 rounded-xl bg-teal-500 text-white hover:bg-teal-600 transition-all'>
              Next Tutorial →
            </button>
          </div> */}
        </div>
      </main>
    </div>
  );
}
