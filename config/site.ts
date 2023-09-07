export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.Nav',
  description: 'A VSCode extension for easily navigating and creating routes, folders, and files in Next.js applications.',
  
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/oslabs-beta/Next-Nav',
    twitter: 'https://twitter.com/nextjs_nav',
    linkedin: 'https://linkedin.com/company/next-nav-extension',
    store: 'https://marketplace.visualstudio.com/items?itemName=NextNav.NextNav',
  },
};
