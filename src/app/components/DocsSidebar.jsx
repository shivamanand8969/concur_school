import DocsSidebarClient from './DocsSidebarClient';

export default async function DocsSidebar({
  currentSlug,
}) {
  let posts = [];

  try {
    const result = await fetch(
      process.env.URL + '/api/post/get',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
        cache: 'no-store',
      }
    );

    const data = await result.json();

    posts = data.posts || [];
  } catch (error) {
    console.log(error);
  }

  // Group posts by category
  const groupedPosts = posts.reduce(
    (acc, post) => {
      const category =
        post.category || 'Uncategorized';

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(post);

      return acc;
    },
    {}
  );

  return (
    <DocsSidebarClient
      groupedPosts={groupedPosts}
      currentSlug={currentSlug}
    />
  );
}