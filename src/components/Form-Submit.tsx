'use client';
import { useFormStatus } from 'react-dom';

const FormSubmit = () => {
    const status = useFormStatus();

    console.log(`[FormSubmit] status hook details`, status);

    if (status.pending) {
        return <p>Creating post...</p>;
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    )
};

export default FormSubmit;