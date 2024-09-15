"use server";
import { redirect } from 'next/navigation';
import { storePost } from '@/lib/posts';

export async function createPost(_state: { errors?: string[] } | undefined, formData: FormData): Promise<{ errors?: string[] } | undefined> {
    const title = formData.get('title') as string | null;
    const image = formData.get('image') as File | null;
    const content = formData.get('content') as string | null;

    const errors: string[] = [];

    //? Server-side validation logic:
    if (!title || title.trim().length === 0) {
      errors.push("Title is required.");
    };

    if (!image || image.size === 0) {
      errors.push("A valid image is required.");
    };

    if (!content || content.trim().length === 0) {
      errors.push("Content is required.");
    };

    if (errors.length > 0) {
      return { errors };
    };

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    });

    redirect('/feed');
  };
  