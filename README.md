# Lab2Market Website

A modern, animated React website for Lab2Market - student-powered market validation for Twente's deep tech research ecosystem.

## Features

- **Modern UI/UX**: Glassmorphism design with smooth animations using Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Expandable service cards, animated bridge visual, TRL gap visualization
- **Educational Content**: Comprehensive explanation of deep tech validation challenges with statistics
- **Contact Form**: Ready-to-integrate form with validation
- **Social Proof**: Testimonials section with star ratings
- **Brand Colors**: Custom Tailwind theme with Lab2Market's color palette

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling functionality

### 3. Set Up Contact Form Email

The contact form is currently set up with a placeholder. To enable real email sending:

#### Option A: EmailJS (Recommended)

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create an email template
4. Update `src/components/forms/ContactForm.jsx`:

```jsx
import emailjs from '@emailjs/browser';

const onSubmit = async (data) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      data,
      'YOUR_PUBLIC_KEY'
    );
    setSubmitStatus('success');
    reset();
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

#### Option B: Web3Forms

1. Get a free access key at [Web3Forms](https://web3forms.com/)
2. Add the access key to your form submission

### 4. Add Your Logo

Replace the placeholder logo in:
- `src/components/layout/Navbar.jsx` (line 42)
- `src/components/layout/Footer.jsx` (line 8)

You can either:
- Keep the "L2M" text badge
- Replace with an image: `<img src="/logo.png" alt="Lab2Market" className="h-10" />`

### 5. Update Social Links

Edit `src/components/sections/Contact.jsx` and `src/components/layout/Footer.jsx`:

```jsx
<a href="https://linkedin.com/company/lab2market" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

### 6. Customize Colors

Your brand colors are already configured in `tailwind.config.js`. To modify:

```js
colors: {
  primary: {
    50: '#CAD2C5',  // Lightest
    100: '#84A98C',
    500: '#52796F', // Main brand color
    700: '#354F52',
    900: '#2F3E46'  // Darkest
  }
}
```

### 7. Add Analytics

Add Google Analytics or other tracking to `index.html`:

```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

### 8. Modify Content

All content is in the components under `src/components/sections/`:

- **Hero.jsx** - Main headline and tagline
- **Services.jsx** - Service descriptions
- **WhyValidation.jsx** - Why market validation is needed (TRL gap, challenges, benefits)
- **Difference.jsx** - Comparison points
- **VisionMission.jsx** - Vision and mission statements
- **Process.jsx** - Process steps
- **Testimonials.jsx** - Client testimonials
- **Contact.jsx** - Contact information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Other Hosting

Build the project and upload the `dist` folder to any static hosting service.

## Project Structure

```
Lab2Market/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   └── ContactForm.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── Contact.jsx
│   │   │   ├── Difference.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Services.jsx
│   │   │   └── VisionMission.jsx
│   │   └── ui/
│   │       ├── AnimatedBridge.jsx
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── ServiceCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Support

For questions or issues, please contact the development team or create an issue in the repository.

## License

© 2024 Lab2Market. All rights reserved.
