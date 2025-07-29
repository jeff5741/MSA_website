# De Anza MSA Website

A modern, responsive website for the De Anza College Muslim Student Association, inspired by the Berkeley MSA design.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Palestine Solidarity**: Prominent banner showing support for Palestine
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Community Focus**: Sections for involvement, committees, and events
- **Accessibility**: Semantic HTML and keyboard navigation support

## File Structure

```
msa-web/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Local development**: Use a local server for best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Access**: Navigate to `http://localhost:8000` in your browser

## Customization

### Content Updates

1. **School Name**: Replace "De Anza College" with your institution name in `index.html`
2. **Contact Information**: Update links and contact details
3. **Committee Names**: Modify committee tags in the "Join a Committee" section
4. **Social Media Links**: Update Facebook group links and add other social platforms

### Visual Customization

1. **Colors**: Edit the CSS custom properties in `styles.css`:
   ```css
   :root {
     --primary-color: #2c5530;    /* Main green color */
     --secondary-color: #1e3a21;  /* Darker green for hovers */
     --text-color: #333;          /* Main text color */
     --background-color: #fff;    /* Background color */
   }
   ```

2. **Fonts**: Change the font family in the CSS:
   ```css
   body {
     font-family: 'Your-Font', sans-serif;
   }
   ```

3. **Images**: Replace placeholder images by:
   - Adding image files to the project folder
   - Updating the `.placeholder-image` sections in HTML
   - Adding proper `<img>` tags with `src` attributes

### Adding New Sections

1. **HTML Structure**: Add new sections in `index.html`
2. **Navigation**: Update the navigation menu with new links
3. **Styling**: Add corresponding CSS rules in `styles.css`
4. **Functionality**: Add any interactive features in `script.js`

## Sections Overview

### Header
- Palestine solidarity banner
- MSA logo and title
- Navigation menu with dropdown for additional resources

### Hero Section
- Welcome message for new students
- Call-to-action button
- Placeholder for community image

### Community Section
- "How do I get involved?" with four main pathways:
  1. **Membership**: Sign up for updates and benefits
  2. **Social Groups**: Join Facebook/social media groups
  3. **Committees**: Participate in organized activities
  4. **Events**: Attend MSA events and programs

### Footer
- Copyright information
- Disclaimer about student organization independence

## Technical Features

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Collapsible navigation menu
- Touch-friendly interface

### JavaScript Functionality
- Smooth scrolling navigation
- Mobile menu toggle
- Scroll-based header animation
- Fade-in animations for cards
- Notification system for user feedback
- Image loading effects

### Performance
- Optimized CSS with efficient selectors
- Minimal JavaScript for fast loading
- Web font loading optimization
- Responsive images support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access via `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Get instant deployment with custom domain support

### Traditional Web Hosting
1. Upload files via FTP to your web host
2. Ensure `index.html` is in the root directory

## Future Enhancements

- **Event Calendar**: Integration with Google Calendar or custom calendar
- **Prayer Times**: Display local prayer times
- **News/Blog**: Add a news section for announcements
- **Member Portal**: Login system for members
- **Donation Integration**: Payment processing for donations
- **Multi-language Support**: Arabic/other language options
- **Photo Gallery**: Showcase MSA events and activities

## Contributing

To contribute to this website:

1. Fork the repository
2. Make your changes
3. Test thoroughly on different devices
4. Submit a pull request with description of changes

## Support

For questions or support:
- Contact the MSA board
- Create an issue in the repository
- Email the web development team

## License

This project is open source and available under the MIT License.

---

**Assalamu Alaikum** - Welcome to the De Anza MSA community!