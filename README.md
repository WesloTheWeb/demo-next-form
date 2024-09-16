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


### Server Actions
- Able to use server actions in NextJS that are essentially functions ran on the server, that can fetch and post.