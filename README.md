# Weekday Candidate Application Platform

In this website I made a web-app in reference with weekdays main website and UI part with an image, given in their assignment page. The website I made allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience. The platform provides responsive and user-friendly interface for viewing and applying to jobs.

My project contains features like:--

1. Job Cards: Each job listing displays as a card containing the followinle
   b.) Location
   c.) Job desg information:
   a.) Job titcription (limited to a certain number of characters with an option to expand)
   d.) Experience required
   e.) Apply button
   f.) Referal ask button

2. Filters: Implemented filters to allow users to refine the job listings based on:
   a.) Min experience
   b.) Role
   c.) Min base pay

3. Infinite Scroll: Implemented infinite scroll to load additional job listings as the user scrolls down the page. The platform fetchs and display more jobs automtaically.

4. Responsive Design: Ensured that the platform is responsive and works well on different screen sizes, including mobile devices.

## Installation

At first we have to make a directory/folder inside which we are going to pull the project, so to do that firstly we have to initialize git in that folder through git bash/terminal:--

```bash
  git init
```

Then we have to pull all the files required to run this project, so to do that run :--

```bash
  git pull https://github.com/Kaushik2105/Candidates-Profile.git
```

Now all the files are installed. In next step we have to install the required node modules used in this project, to do that run :--

```bash
  npm install
```

Wait for few seconds to install all the packages, when done then our final command will start the project, which is :--

```bash
  npm run dev
```

After running this command you will get few links which will leads you to my project.

Notice : In my project one row contains three cards due to the variation in display size of laptops it can appear less like 2 cards in a row so to manage that you can zoom out your browser to see the complete view of my project and there's no issue with anything else.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
