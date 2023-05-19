export enum SocialVendor {
  GITHUB = 'github',
  TWITTER = 'twitter',
  LINKEDIN = 'linkedin',
  BLOG = 'blog',
  TELEGRAM = 'telegram',
}

export type Social = {
  [key in SocialVendor]?: {
    label: string;
    url: string;
    icon: string;
  };
};

export type Contact = {
  profileImg: string;
  name: string;
  title: string;
  email: string;
  intro: string;
  social: Social;
};

export type TimelineItem = {
  logo: string;
  company: string;
  title: string;
  description: string;
  to: string;
  from: string;
};
