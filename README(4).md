# Golden Park College Website

A responsive front-end college website for **Golden Park College, Biratnagar** built with HTML, CSS, and JavaScript.

## Project Overview

This project provides a simple college website with:

- Responsive homepage and navigation
- Course information
- Admission form
- Faculty page
- Student sign-in / sign-up interface
- Contact form
- Mobile side navigation
- College banner and favicon
- External links for Facebook, course information, and location

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Project Structure

```text
.
├── index.html
├── index.css
├── index.js
├── admissions.html
├── Faculty.html
├── contact.html
├── login.html
├── fevicon-gpc.jpg
├── gpc Banner.jpg
├── README.md
└── .gitignore
```

> **Note:** If your repository currently contains `index(9).html`, rename it to `index.html` before deployment so it can work as the default homepage and match the internal links used by the project.

## Main Pages

### Home
The homepage contains the main navigation, college banner, course overview, sign-up section, contact information, and footer.

### Admission
The admission page contains a form for:

- Full name
- Email address
- Phone number
- Course selection

The form includes basic client-side validation.

### Faculty
Displays faculty/course sections using responsive cards.

### Student Login
Provides an animated sign-in and sign-up interface with social-media icon placeholders.

> The current login page is a front-end interface only. It is not connected to a backend authentication system or database.

### Contact
Contains a contact form with basic front-end validation for name, email, and message.

## Courses Shown in the Project

The project currently references courses including:

- Computer Engineering
- Civil Engineering
- Mechanical Engineering
- Architecture Engineering
- Health Assistant
- Lab-related / medical programs

## Run Locally

No build process is required.

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Open the project folder:

```bash
cd <repository-folder>
```

3. Open `index.html` in your browser.

For a better development workflow, you can also use a local development server such as the **Live Server** extension in Visual Studio Code.

## Deployment

Because this is a static website, it can be deployed on:

- GitHub Pages
- Hostinger
- Netlify
- Vercel
- Any standard static web hosting service

Before deployment, make sure:

- The homepage is named `index.html`
- Image paths match the actual filenames
- All navigation links point to existing files
- Any future backend forms use secure server-side validation

## Current Limitations

- Admission and contact forms do not submit data to a real backend.
- Student login/sign-up is UI-only.
- Social login icons are placeholders.
- Faculty content includes sample names and repeated placeholder sections.
- Some content and file naming can be cleaned up before production deployment.

## Suggested Improvements

Future versions could add:

- Backend authentication
- Student dashboard
- Online admission submission
- Database integration
- Admin panel
- Faculty data management
- Form email notifications
- Better SEO metadata
- Accessibility improvements
- More consistent responsive styling
- Production-ready content and validation

## Assets

The project includes:

- `fevicon-gpc.jpg` — website favicon/logo asset
- `gpc Banner.jpg` — college banner image

## Developer

**Pream Shah**

---

If you use this project publicly, review the college information, faculty data, external links, and form behavior before production deployment.
