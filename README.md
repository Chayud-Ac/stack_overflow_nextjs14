# Modern StackOverflow

**Description**:  
Modern StackOverflow is a full-stack web application built with **Next.js** and **MongoDB**, designed to replicate the core functionalities of the popular Q&A platform, StackOverflow. This project is part of the "Ultimate NextJS14" course provided by [JS Mastery](https://www.jsmastery.pro/ultimate-next-course). It serves as a hands-on learning experience for building scalable web applications using Next.js, focusing on modern features like SSR (Server-Side Rendering), API routes, and MongoDB for data storage.

**Live Demo**:  
Check out the live demo [here](https://stack-overflow-nextjs13-one-woad.vercel.app/collection).

## Key Features

- **User Authentication**: Sign up, log in, and authenticate users using clerk thrid party service
- **Ask and Answer Questions**: Users can ask technical questions and provide answers as well as generate an answer using AI (using api from edenai) not integrated ai model
- **Real-Time Updates**: Experience instant updates to questions and answers.
- **Tagging System**: Organize questions by relevant tags for easy filtering.
- **Profile Management**: Users can manage their profiles, including avatars and personal details.
- **Upvote & Downvote**: Like and dislike answers to influence the visibility of content.
- **Search Functionality**: Global search across questions, tags, and users.
- **Comment System**: Engage with answers and questions via a commenting system.

## Tech Stack

- **Frontend**: Next.js 14 (React framework)
- **Backend**:  Next.js API routes
- **Database**: MongoDB (NoSQL)
- **Authentication**: Clerk auth
- **Hosting**: Vercel 

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/modern-stackoverflow.git
   ```
2. cd modern-stackoverflow
   ```bash
   git clone https://github.com/your-username/modern-stackoverflow.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables: Create a .env.local file in the root of your project and add the following environment variables: modern-stackoverflow.env.local
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxxx setting in clerk
   CLERK_SECRET_KEY=xxxxx setting in clerk
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/
   NEXT_PUBLIC_TINY_EDITOR_API_KEY=xxxxx setting in Tiny editor
   MONGODB_URL=xxxxxx // create your collection and provided url here
   WEBHOOK_SECRET=// WEBHOOK_SECRET from Clerk Dashboard
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000 // replace this with actual url when deploy in vercel
   EDENAI_API_KEY=xxxxxxxx set up api key of edenai and place it here
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
