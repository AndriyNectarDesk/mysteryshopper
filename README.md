# Ottawa Mystery Shoppers Website

A professional one-page website for an Ottawa-based Mystery Shopping business. The website is designed to attract both potential clients (businesses that need mystery shopping services) and individuals who want to become mystery shoppers.

## Features

- Modern, responsive design that works on all devices
- Professionally structured sections showcasing services and benefits
- Interactive elements including smooth scrolling and animations
- Contact form for potential clients and shoppers to express interest
- Optimized for search engines with proper meta tags

## Project Structure

```
mystery-shopper-ottawa/
├── index.html         # Main HTML file
├── css/               # CSS styles
│   └── styles.css     # Main stylesheet
├── js/                # JavaScript files
│   └── main.js        # Main JavaScript functionality
├── images/            # Image assets (to be added)
└── README.md          # Project documentation
```

## Setup Instructions

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/mystery-shopper-ottawa.git
   cd mystery-shopper-ottawa
   ```

2. Open `index.html` in your browser to view the website locally.

3. For development with live reloading, you can use a simple HTTP server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.

### Deployment Instructions

#### Deploying to GitHub Pages

1. Push your code to a GitHub repository:
   ```
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to your GitHub repository settings and enable GitHub Pages from the main branch.

#### Deploying to Vercel

1. Sign up for a [Vercel account](https://vercel.com/signup) if you don't have one.

2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

3. Deploy your project:
   ```
   vercel
   ```

4. Follow the prompts to complete the deployment.

#### Deploying to Render

1. Sign up for a [Render account](https://render.com/signup) if you don't have one.

2. Create a new Static Site service in Render.

3. Connect your GitHub repository and configure the build settings:
   - Build Command: (Leave empty for static HTML site)
   - Publish Directory: `.`

4. Click "Create Static Site" to deploy.

## Customization

### Changing Colors

The website uses CSS variables for easy color customization. Edit the `:root` section in `css/styles.css` to change the color scheme:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e67e22;
    /* other variables */
}
```

### Adding Images

1. Place your image files in the `images/` directory.
2. Update the hero background image in `css/styles.css`:
   ```css
   .hero {
       background-image: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('../images/your-image.jpg');
   }
   ```

### Updating Content

All website content can be edited in the `index.html` file. The sections are clearly marked with comments for easy identification.

## Contact Form

The contact form is currently set up for frontend validation only. To make it fully functional, you'll need to:

1. Set up a server to handle form submissions, or
2. Use a form submission service like Formspree, Netlify Forms, or GetForm.

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- Default background image: [Unsplash](https://unsplash.com/) 