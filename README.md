# About
This is for Secion 6 of Mutating Data.

I am doing this a little differently. The last project was in regular JavaScript and explored data fetching.
I decided to start this with TypeScript.

I just did an initial commit of the files and converted to TypeScript. I want to practice in a TS environment more.

## What is covered:
This project will cover Mutating Data, Next Server Actions/

## Neat things

"use server" does not mean or guarantee that the code will only execute on the server! Whilst that will be the case for server actions, you can't rely on the usage of "use server" to "hide code" from the client!

If you have code that must never end up on the client-side (no matter if it's a server action or not), you should instead use the server-only package as described here.

Example Flow (Image uploads):
User uploads an image through the front-end React component using a file input.
The front-end makes an API call to the back-end (Next.js API route) with the image file.
The back-end uploads the image to Cloudinary or S3 using an SDK or API.
The cloud service returns a URL for the uploaded image, which is stored in the database alongside other user information.
When displaying the profile, the app retrieves the URL from the database and uses it to display the image in the front-end.
This method ensures:

Efficient storage of large media files.
Scalability, as cloud providers are designed to handle high volumes of traffic for image hosting.
Database remains light and optimized for querying strings (the image paths).


### Server Actions
- Able to use server actions in NextJS that are essentially functions ran on the server, that can fetch and post.