# Tailwind CSS Purge Issues with Dynamic Content in Next.js/Nuxt.js

This repository demonstrates a common issue when using Tailwind CSS with frameworks like Next.js or Nuxt.js: classes not being applied to dynamically generated content due to issues with PurgeCSS.

## Bug Description:

The `bug.js` file showcases a Next.js/Nuxt.js component that renders content dynamically.  Due to how PurgeCSS works, the dynamically added classes may not be included in the final CSS bundle leading to unstyled elements.

## Solution:

The solution, found in `bugSolution.js`, demonstrates a couple of approaches to resolve this:

1. **Explicitly include the classes:** Adding the classes used to the `tailwind.config.js` file's `purge` section (if using PurgeCSS) ensures they are not removed during the build process.
2. **Using `@apply` directives:** Applying utility classes directly to your components helps Tailwind correctly identify the required styles.
3. **Using a different PurgeCSS strategy (if applicable):** Consider alternative PurgeCSS strategies which are better suited for dynamic content. 

## Setup:

1. Clone the repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Run the application: `npm run dev` or `yarn dev`.