'use client';

import { useActionState } from "react";
import FormSubmit from '@/components/Form-Submit';

// type CreatePostAction = (
//     formData: FormData
// ) => Promise<{ errors: string[] } | void>;

type ActionState = { errors?: string[] } | undefined;

type CreatePostAction = (
    state: ActionState,
    formData: FormData
) => Promise<ActionState>;

interface actionProps {
    action: CreatePostAction;
};

const PostForm = ({ action }: actionProps) => {

    const [state, formAction] = useActionState<ActionState, FormData>(
        action,
        undefined
    );

    return (
        <>
            <h1>Create a new post</h1>
            <form action={formAction}>
                <p className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </p>
                <p className="form-control">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                    />
                </p>
                <p className="form-control">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows={5} />
                </p>
                <p className="form-actions">
                    <FormSubmit />
                </p>
            </form>
        </>
    )
};

export default PostForm;