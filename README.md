# Foodtuck - Restaurant Website

## Overview
Foodtuck is a modern restaurant website built with Next.js 14, offering a seamless dining experience with features like online ordering, chef profiles, and menu management.

## Version History

### Current Version: 1.0.0

## Tech Stack
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **Payment Processing:** Stripe
- **Image Storage:** Cloudinary
- **State Management:** Zustand

## Features
- 🍽️ Online Food Ordering
- 👨‍🍳 Chef Profiles
- 🛒 Shopping Cart
- 💳 Secure Payment Processing
- 📱 Responsive Design
- 🔐 User Authentication
- ⚡ Real-time Order Updates
- 📊 Admin Dashboard

## Project Structure

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



foodtuck/
├── src/
│ ├── app/
│ │ ├── Chefs/
│ │ │ ├── [slug]/
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ │ ├── Shop/
│ │ │ ├── [slug]/
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ ├── components/
│ ├── lib/
│ └── utils/
├── public/
└── next.config.js



## Setup Instructions

### Prerequisites
- Node.js 18.0 or higher
- MongoDB database
- Cloudinary account
- Stripe account

### Installation
1. Clone the repository

git clone https://github.com/yourusername/foodtuck.git

2. Install dependencies

npm install

3. Create environment file

cp .env.example .env

4. Configure environment variables

Edit the .env file with your own values:

MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

5. Start the development server

npm run dev

6. Open http://localhost:3000 in your browser to see the result

7. Build for production

npm run build

8. Start the production server

npm run start

9. Deploy to Vercel

vercel --prod --prebuilt

10. Access the live site

https://your-project-name.vercel.app




## Contributing

1. Fork the repository

2. Create a new branch

git checkout -b feature-branch

3. Make your changes and commit them

git add .
git commit -m "Add feature X"

4. Push your changes

git push origin feature-branch

5. Create a pull request

https://github.com/yourusername/foodtuck/pull/new/feature-branch



## API Routes

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/[id]` - Get specific menu item
- `POST /api/menu` - Add new menu item (Admin only)
- `PUT /api/menu/[id]` - Update menu item (Admin only)
- `DELETE /api/menu/[id]` - Delete menu item (Admin only)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/[id]` - Get specific order
- `PUT /api/orders/[id]` - Update order status (Admin only)

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Maintenance

### Regular Updates
- Check for Next.js updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Backup database regularly

### Troubleshooting
Common issues and solutions:
1. Database Connection Issues
   - Check MongoDB connection string
   - Verify network connectivity
   - Ensure proper authentication

2. Image Upload Problems
   - Verify Cloudinary credentials
   - Check file size limits
   - Ensure proper format support

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Contact
- Website: [your-website.com](https://your-website.com)
- Email: your.email@example.com
- Issue Tracker: [GitHub Issues](https://github.com/yourusername/foodtuck/issues)

## Acknowledgments
- Next.js team for the amazing framework
- All contributors who have helped with the project
- Special thanks to the open-source community

---
Last Updated: [Current Date]