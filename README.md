# E-Learning Platform
![Screenshot](/public/e-learning-screenshot.png)

## Overview

Welcome to the E-Learning Platform, a robust solution that caters to both students and teachers, fostering a seamless educational experience. Users can effortlessly browse, filter, and purchase courses, while teachers enjoy an enhanced "Teacher Mode" for course creation and management.

### Teacher Mode Trial Account

To learn more and gain firsthand experience, we've created a designated Teacher Mode trial account:

- **Email:** teacher_mode@outlook.com
- **Password:** teacher2024

## Demo
Check out the live demo here : https://e-learning-palatform-nextjs-v0.vercel.app/

## Key Features

- **Browse & Filter Courses:** Users can easily browse and filter available courses based on their preferences.

- **Purchase Courses using Stripe:** Seamless integration with Stripe for secure course purchases.

- **Mark Chapters as Completed/Uncompleted:** Students can track their progress by marking chapters as completed or uncompleted.

- **Progress Calculation:** The system calculates and displays the progress of each enrolled course.

- **Student Dashboard:** Personalized dashboard for students to manage their courses and track progress.

- **Teacher Mode:** Teachers have access to additional features, enabling them to create and manage courses.

- **Create New Courses:** Teachers can create new courses with rich text descriptions, thumbnails, and attachments.

- **Create New Chapters:** Easy chapter creation with drag-and-drop reordering.

- **Upload Media:** Integration with UploadThing for uploading thumbnails, attachments, and videos.

- **Video Processing with Mux:** Video processing capabilities using Mux for efficient multimedia handling.

- **HLS Video Player using Mux:** Integration of Mux for HLS video playback, ensuring a smooth viewing experience.

- **Rich Text Editor:** Teachers can use a rich text editor for creating detailed chapter descriptions.

- **Authentication using Clerk:** Secure authentication provided by Clerk for user management.

- **ORM using Prisma:** Object-Relational Mapping (ORM) facilitated by Prisma for efficient database interactions.

- **MySQL Database using Planetscale:** Reliable MySQL database powered by Planetscale for robust data storage.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Postgres Database
- Stripe Account
- Uploadthing Account
- Mux Account : Due to current limitations(free trial), videos uploaded in this preview version are subject to automatic deletion after 
                24 hours and cannot exceed 10 seconds in length.
- Clerk Account
- Planetscale Account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-learning-platform.git
   cd e-learning-platform
   npm i 
   ```
2. .env:
   ```bash
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
      CLERK_SECRET_KEY=

      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/


      POSTGRES_URL=
      POSTGRES_PRISMA_URL=
      POSTGRES_URL_NON_POOLING=
      POSTGRES_USER=
      POSTGRES_HOST=
      POSTGRES_PASSWORD=
      POSTGRES_DATABASE=

      UPLOADTHING_SECRET=

      MUX_TOKEN_ID=
      MUX_TOKEN_SECRET=

      STRIPE_API_KEY=
      NEXT_PUBLIC_APP_URL=http://localhost:3000
      STRIPE_WEBHOOK_SECRET=

      NEXT_PUBLIC_TEACHER_IDS=user_1,user_2,user_3,user_4,user_5
   ```

   ```bash
    npm run dev
     ```
 ```bash
  stripe listen --forward-to localhost:3000/api/webhook
   ```


