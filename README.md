# BEAM Environment & Conservation Trust

A Next.js website for BEAM Environment & Conservation Trust, featuring city-based conservation projects, donation integration, and community engagement.

## Features

- **City-based Conservation Projects**: Showcase tree planting, parks, and climate projects
- **Stripe Donation Integration**: Secure payment processing for donations
- **Fundraising Thresholds**: Unlock new environmental services as funding goals are met
- **Community Node Integration**: Support specific neighborhood/community areas
- **Supabase Integration**: Real-time data and fund tracking
- **Responsive Design**: Mobile-first approach with modern UI/UX

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Payment**: Stripe
- **Database**: Supabase
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd beam-environment-trust
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── FeaturedProjects.tsx # Project showcase
│   ├── FundraisingProgress.tsx # Progress tracking
│   ├── DonationSection.tsx # Donation interface
│   └── Footer.tsx         # Site footer
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Add environment variables in Vercel dashboard

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@beamtrust.org or create an issue in this repository.
