# Deployment Guide

This guide will help you deploy the BEAM Environment Trust website to Vercel and set up automatic deployments from GitHub.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Supabase project (free tier available)
- Stripe account (for payment processing)

## Step 1: GitHub Setup

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: BEAM Environment Trust website"
   git push origin main
   ```

2. **Repository Settings**
   - Go to your GitHub repository
   - Ensure the repository is public or you have Vercel Pro for private repos

## Step 2: Supabase Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Database Setup**
   - Go to SQL Editor in your Supabase dashboard
   - Copy and paste the contents of `supabase-schema.sql`
   - Execute the SQL to create tables and sample data

3. **API Keys**
   - Go to Settings > API in Supabase
   - Copy your project URL and anon key

## Step 3: Stripe Setup

1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com)
   - Create an account and verify your business

2. **Get API Keys**
   - Go to Developers > API keys
   - Copy your publishable key and secret key

## Step 4: Vercel Deployment

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Project Configuration**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Environment Variables**
   Add these in the Vercel dashboard:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_SUPABASE_URL=https://...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   SUPABASE_SERVICE_ROLE_KEY=eyJ...
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

## Step 5: Automatic Deployments

1. **GitHub Integration**
   - Vercel automatically sets up webhooks
   - Every push to `main` branch triggers a new deployment
   - Preview deployments are created for pull requests

2. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

## Step 6: Post-Deployment

1. **Test Functionality**
   - Test donation flow (Stripe test mode)
   - Verify Supabase data connections
   - Check mobile responsiveness

2. **Monitor Performance**
   - Use Vercel Analytics (free tier)
   - Monitor Core Web Vitals
   - Check build logs for any issues

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |

## Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation

### Environment Variables
- Ensure all required variables are set in Vercel
- Check variable names match exactly
- Restart deployment after adding variables

### Database Connection
- Verify Supabase URL and keys
- Check Row Level Security policies
- Test API endpoints manually

## Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)
- **Stripe**: [stripe.com/docs](https://stripe.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

## Cost Estimation

- **Vercel**: Free tier includes 100GB bandwidth/month
- **Supabase**: Free tier includes 500MB database
- **Stripe**: 2.9% + 30¢ per successful transaction
- **Domain**: ~$10-15/year (optional)

## Security Notes

- Never commit `.env.local` files
- Use environment variables for all secrets
- Enable Row Level Security in Supabase
- Use HTTPS (automatic with Vercel)
- Regularly update dependencies
