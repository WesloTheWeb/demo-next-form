'use client';
import { useFormStatus } from 'react-dom';

const FormSubmit = () => {
    const status = useFormStatus();

    console.log(`[FormSubmit] status hook details`, status);

    if (status.pending) {
        return <div>Creating post...</div>;
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button type="submit">Create Post</button>
        </>
    )
};

export default FormSubmit;