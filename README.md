# OZXK.DEV Blog Front-End 🎨

Welcome to the OZXK.DEV blog, where readers can enjoy reading blog posts and interacting with the blog's features. It was built using Next, React, TypeScript, and SCSS.

## Features 🌟

Some of the features included in the front-end are:

- User-friendly interface: The front-end was designed to be easy to use and navigate, with a clean and modern interface.
- Responsive design: The front-end is optimized for various screen sizes, including desktop, tablet, and mobile.
- Blog post display: Readers can browse and read blog posts, which are displayed in a user-friendly and visually appealing format.
- Shareable posts: Each blog post can be shared via a unique URL that can be easily copied and shared on social media or other platforms.
- Search functionality: Readers can search for posts using keywords or phrases.
- Categories and tags: Posts can be organized into categories and tagged with keywords for easier browsing and searching.
- Built-in Content Management System (CMS): The front-end includes a built-in CMS that allows the blog's owner to easily create, edit, and delete blog posts.

![BLOG](https://user-images.githubusercontent.com/47363718/226212955-d8550d63-a067-4adb-b9af-7607e32453cd.png)

## Technologies Used 💫

The front-end of the OZXK.DEV blog was built using the following technologies:

- Next.js: A React framework that provides useful features, such as server-side rendering and static site generation.
- React: A popular JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- SCSS: A CSS preprocessor that adds useful features to CSS, such as variables, mixins, and nesting.

## How to Use 📝

To run this front-end locally, you will need to have Node.js installed on your machine.

1. Clone the GitHub repository to your local machine.
2. Navigate to the frontend directory and run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the development server.
4. You can now access the blog by navigating to `http://localhost:3000` in your web browser.

### Running and Building 🎁

#### Environment Variables 🌎

`API` - The URL of the back-end API.
`NEXT_PUBLIC_CMS_API` - The URL of the back-end API + /general route for public.
`NEXT_PUBLIC_URL` - The URL of the front-end.
`NEXTAUTH_SECRET` - The secret for NextAuth.

```
API=BACKEND_URL/general
NEXT_PUBLIC_CMS_API=BACKEND_URL
NEXT_PUBLIC_URL=YOUR_FRONTEND_URL
NEXTAUTH_SECRET=YOUR_SECRET
```

#### Development 💻

```
npm run dev
```

#### Deployment 🖥️

npm install && npm run build

<hr>

## Contributions 👐

Contributions to the front-end are welcome. Please fork the repository, make your changes, and submit a pull request.

## TO-DO 📝

- [ ] Improve accessibility for users with disabilities
- [ ] Implement a dark mode option
- [ ] Add Github Gists Code Snippets
- [ ] Write tests
- [ ] Add a "like" feature for blog posts
- [ ] Add a "comment" feature for blog posts
- [ ] Add CAPTCHA V3 to the contact form and comment form
- [ ] Add registration form
- [ ] Add forgot password form
- [ ] Add Google Analytics
- [ ] Add Google Login
- [ ] Add 404 page
- [ ] Add live search
- [x] Add loading animations

## Known Issues 🐛

- [ ] Search Page not working in production

## License 📜

This front-end is licensed under the MIT License. See the LICENSE file for more information.
