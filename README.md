<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->

FitLog — Workout Tracker & Exercise Library

Description =>
FitLog is a workout tracking web application where users can explore different exercises and view detailed information about each workout. Users can save workouts for later, add exercises to their daily plan, and mark completed workouts as done.

The project uses JSON data for the workout information and Next.js dynamic routing for individual workout details.

Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Toastify
- Next.js Dynamic Routing
- JSON
- Context API

Features

1. Workout Library
   Browse different exercises covering various muscle groups.

2. Workout Detail
   View equipment, difficulty, sets, reps, duration, calories, rating, and instructions for each workout.

3. Dynamic Routing
   Each workout has its own details page using `/fitLogs/[id]`.

4. Save for Later  
   Save workouts and access them later from the saved section.

5. Daily Workout Plan
   Add exercises to a personal workout plan.

6. Mark Workout as Done
   Mark planned workouts as completed and remove them from the current plan.

7. Duplicate Prevention  
   Prevent the same workout from being added to the saved list or workout plan more than once.

8. Toast Notifications
   Show notifications when workouts are saved, added to the plan, completed, or removed.

9. Responsive Design
   The layout works across mobile, tablet, and desktop screen sizes.

10. Reusable Components
    The project is divided into reusable components such as workout cards, navbar, buttons, and workout details sections.
