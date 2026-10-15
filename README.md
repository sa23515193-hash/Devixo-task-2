# Al-Matiri Fiber Glass — Premium Business Website

A modern, responsive, and interactive business website designed for **Al-Matiri Fiber Glass**. This project focuses on presenting business services, product categories, gallery content, and contact information through a clean, professional, and user-friendly web experience.

The website is developed using **HTML5, CSS3, and Vanilla JavaScript**, with an emphasis on responsive layouts, accessible navigation, interactive components, and maintainable code.

## 🌐 Live Website

**Live Demo:** [Al-Matiri Fiber Glass Website](https://sa23515193-hash.github.io/Al-Matiri-Fiber-Glass/)

> If you deploy this redesigned version to a different repository, replace the link above with the new GitHub Pages URL.

## 📌 Project Overview

The Al-Matiri Fiber Glass Premium Website is a front-end business website created to provide visitors with a clear overview of the company, its solutions, product offerings, and visual portfolio.

The interface uses a premium visual direction with dark navy, gold, and off-white tones to create a consistent business identity. The layout is organized into distinct sections so visitors can navigate the website, explore products, view gallery images, and access the contact section.

The project also demonstrates practical front-end development skills, including responsive design, JavaScript-based interactions, DOM manipulation, form validation, theme switching, and reusable styling patterns.

## 🎯 Project Objectives

- Create a professional online presence for a fiber glass business.
- Present company information and product categories in a structured layout.
- Build a responsive interface for desktop, tablet, and mobile devices.
- Improve user experience with interactive navigation and visual components.
- Demonstrate front-end development using standard web technologies.
- Maintain a simple and organized project structure.
- Provide a foundation for future backend integration and additional business features.

## ✨ Features

### 1. Modern Homepage

- Premium hero section with a strong visual presentation.
- Clear introductory content and calls to action.
- Consistent typography, spacing, and color palette.
- Responsive layout designed for different screen sizes.

### 2. About Section

- Dedicated area for introducing the business.
- Organized content layout for company information.
- Visual styling consistent with the overall website design.

### 3. Solutions and Products

- Structured sections for presenting business solutions.
- Product cards arranged in a responsive grid.
- Product filtering interaction using JavaScript.
- Clear visual hierarchy for browsing product categories.

### 4. Interactive Gallery

- Image-based gallery for presenting visual content.
- Lightbox-style image viewing interaction.
- Responsive gallery layout.
- Image presentation designed to improve product discovery.

### 5. Responsive Navigation

- Mobile-friendly navigation menu.
- JavaScript-powered menu interaction.
- Navigation links to the main website sections.
- Layout adjustments for smaller screens.

### 6. FAQ Accordion

- Expandable and collapsible FAQ items.
- Interactive behavior powered by JavaScript.
- Compact layout that helps visitors browse common questions.

### 7. Contact Form Validation

- Contact form interface for collecting visitor inquiries.
- Client-side validation for required fields.
- Validation feedback to help users correct incomplete inputs.
- Structured form layout for a clearer user experience.

**Important:** The current front-end form does not automatically send messages to a business email or database. A backend service or form provider must be configured to enable real message delivery.

### 8. Dark and Light Theme

- Theme toggle for switching the visual appearance.
- JavaScript-based theme management.
- Saved theme preference using browser local storage.
- Consistent styling across the main website sections.

### 9. Scroll-to-Top Control

- Convenient control for returning to the top of the page.
- Useful on longer pages and mobile screens.
- Enhances navigation and browsing convenience.

### 10. Scroll Reveal Animations

- Subtle reveal effects for selected page elements.
- Improved visual presentation as users navigate the page.
- Animation behavior implemented on the front end.

### 11. Responsive Design

- Flexible layouts for desktop, tablet, and mobile.
- Responsive product and gallery grids.
- Mobile-friendly navigation and spacing.
- CSS media queries for different viewport sizes.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and semantic content |
| CSS3 | Styling, responsive layouts, transitions, and animations |
| Vanilla JavaScript | Interactive components and DOM manipulation |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Static website deployment |

## 📁 Project Structure

```text
Al-Matiri-Fiber-Glass-Premium-Website/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

### File Responsibilities

**`index.html`**
- Defines the website structure.
- Contains the main page sections.
- Connects the stylesheet and JavaScript file.
- Provides the content and interface elements.

**`css/style.css`**
- Defines the visual design and color palette.
- Controls layouts, spacing, typography, and component styling.
- Implements responsive behavior and visual transitions.

**`js/script.js`**
- Controls interactive navigation.
- Handles product filtering and gallery interactions.
- Implements FAQ accordion behavior.
- Provides client-side form validation.
- Manages theme switching and other interface interactions.

**`README.md`**
- Documents the project, its features, technologies, setup, and deployment.

## 🚀 Getting Started

This is a static front-end website. It does not require Node.js, npm, or a package installation to run in a browser.

### Option 1: Run Locally in a Browser

1. Download or clone the repository.
2. Extract the ZIP file if you downloaded it.
3. Open the project folder.
4. Locate `index.html`.
5. Double-click the file to open the website in your browser.

### Option 2: Run with Visual Studio Code

1. Open the extracted project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The website will open in your default browser.

### Option 3: Run with Python

If Python is installed, open a terminal inside the project folder and run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Press `Ctrl + C` in the terminal to stop the local server.

## 💻 Installation and Setup

No package installation is required.

```bash
git clone https://github.com/sa23515193-hash/Al-Matiri-Fiber-Glass-Premium-Website.git

cd Al-Matiri-Fiber-Glass-Premium-Website
```

After cloning, open `index.html` in a browser or use a local development server.

> The repository URL above assumes the suggested repository name. If your actual repository name differs, replace the URL accordingly.

## 🌍 Deployment with GitHub Pages

You can publish this static website using GitHub Pages.

1. Create a GitHub repository.
2. Upload `index.html`, the `css` folder, the `js` folder, and `README.md`.
3. Make sure `index.html` is in the repository root.
4. Open the repository's **Settings**.
5. Select **Pages** from the sidebar.
6. Under the build and deployment settings, select **Deploy from a branch** if that option is available.
7. Choose the `main` branch and the `/ (root)` folder.
8. Save the settings.
9. Wait for GitHub Pages to complete deployment.
10. Open the published URL provided by GitHub.

The final URL will normally follow this format:

```text
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

If the site does not load correctly, check that the entry file is named `index.html` and that the CSS and JavaScript paths are correct.

## 📱 Responsive Compatibility

The website is designed to adapt to different screen sizes, including:

- Desktop computers
- Laptops
- Tablets
- Android smartphones
- iPhones and other mobile browsers

Actual rendering may vary depending on the browser, viewport dimensions, and image availability.

## 🔒 Form and Data Handling

The current implementation is a front-end project. Client-side validation improves the form experience, but it is not a substitute for server-side validation or secure data processing.

For production use, consider integrating:

- A secure backend API.
- A form submission provider.
- Server-side input validation.
- Spam prevention and rate limiting.
- Appropriate privacy and data-handling notices.

Do not place passwords, API secrets, database credentials, or other private configuration values in client-side JavaScript.

## 🖼️ Images and External Assets

The website references image assets for the hero section, product cards, and gallery. Ensure that the image paths and URLs remain accessible after deployment.

If an image does not appear:

1. Check the image URL or relative path.
2. Verify capitalization in the filename.
3. Confirm that the asset exists in the deployed repository or hosting location.
4. Check the browser console and network panel for loading errors.
5. Replace unavailable external images with properly licensed local assets where appropriate.

External image URLs may change or become unavailable, so locally managed assets are preferable for long-term production reliability.

## 🔮 Future Improvements

Potential enhancements include:

- Backend-powered contact form submissions.
- Email notifications for business inquiries.
- Product detail pages.
- Search and advanced product filtering.
- Content management for updating products and gallery images.
- Search engine optimization improvements.
- Social media integration.
- Analytics integration with appropriate privacy controls.
- Performance optimization and image compression.
- Accessibility testing and keyboard-navigation improvements.
- Automated deployment checks.

These are possible future enhancements and should not be considered implemented unless they are added to the codebase.

## 🎓 Skills Demonstrated

This project demonstrates practical experience with:

- Semantic HTML structure.
- Modern CSS styling and responsive design.
- JavaScript event handling.
- DOM manipulation.
- Interactive UI components.
- Client-side form validation.
- Browser local storage.
- Front-end debugging.
- GitHub repository management.
- Static website deployment.
- User interface and user experience principles.

## 👩‍💻 Developer

**Sawaira Ijaz**

Computer Science Undergraduate & Researcher

GitHub: [sa23515193-hash](https://github.com/sa23515193-hash)

Portfolio: [View Portfolio](https://sa23515193-hash.github.io/MY-CV-portfolio/)

## 📄 License

This project is intended for educational, portfolio, and demonstration purposes. Before redistributing or using third-party images, fonts, or other assets, verify that their licenses permit the intended use.

A specific open-source license has not been declared. Add a `LICENSE` file if you want to formally grant permissions for reuse and redistribution.

---

**Project:** Al-Matiri Fiber Glass — Premium Business Website  
**Category:** Front-End Web Development  
**Core Stack:** HTML5, CSS3, Vanilla JavaScript  
**Deployment:** GitHub Pages compatible  
**Status:** Front-end website project
