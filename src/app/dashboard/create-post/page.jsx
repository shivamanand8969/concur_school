'use client';

import { useUser } from '@clerk/nextjs';
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
// https://dev.to/a7u/reactquill-with-nextjs-478b
import 'react-quill-new/dist/quill.snow.css';

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '@/firebase';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CreatePostPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const router = useRouter();
  console.log(formData);

 const handleUpdloadImage = async () => {
  try {
    if (!file) {
      setImageUploadError('Please select an image');
      return;
    }

    setImageUploadError(null);
    setImageUploadProgress(0);

    const data = new FormData();
    data.append('file', file);

    data.append('upload_preset', 'concur-blog');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dvly9amrf/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const uploadedImageURL = await res.json();

    if (!res.ok) {
      setImageUploadError('Image upload failed');
      return;
    }

    setImageUploadProgress(null);

    setFormData({
      ...formData,
      image: uploadedImageURL.secure_url,
    });
  } catch (error) {
    console.log(error);
    setImageUploadError('Image upload failed');
    setImageUploadProgress(null);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userMongoId: user.publicMetadata.userMongoId,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        router.push(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn && user.publicMetadata.isAdmin) {
    return (
      <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>
          Create a post
        </h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='text'
              placeholder='Title'
              required
              id='title'
              className='flex-1'
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <Select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value='uncategorized'>Select a category</option>
              <option value='Expense'>Expense</option>
<option value='Invoice'>Invoice</option>
<option value='Request'>Request</option>
<option value='Travel'>Travel</option>
            </Select>
          </div>
          <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
            <FileInput
              type='file'
              accept='image/*'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Button
              type='button'
              gradientDuoTone='purpleToBlue'
              size='sm'
              outline
              onClick={handleUpdloadImage}
              disabled={imageUploadProgress}
            >
              {imageUploadProgress ? (
                <div className='w-16 h-16'>
                  <CircularProgressbar
                    value={imageUploadProgress}
                    text={`${imageUploadProgress || 0}%`}
                  />
                </div>
              ) : (
                'Upload Image'
              )}
            </Button>
          </div>

          {imageUploadError && (
            <Alert color='failure'>{imageUploadError}</Alert>
          )}
          {formData.image && (
            <img
              src={formData.image}
              alt='upload'
              className='w-full h-72 object-cover'
            />
          )}

         <div className='flex flex-col gap-4'>
  {/* Rich Text Editor */}
  <ReactQuill
    theme='snow'
    placeholder='Write something...'
    className='h-72 mb-12'
    onChange={(value) => {
      setFormData({
        ...formData,
        content: value,
      });
    }}
  />

  {/* HTML Editor */}
  <textarea
    placeholder='Or paste raw HTML here...'
    className='w-full min-h-[300px] rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 text-sm'
    value={formData.content || ''}
    onChange={(e) =>
      setFormData({
        ...formData,
        content: e.target.value,
      })
    }
  />
</div>
          <Button type='submit' gradientDuoTone='purpleToPink'>
            Publish
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <h1 className='text-center text-3xl my-7 font-semibold'>
        You are not authorized to view this page
      </h1>
    );
  }
}
