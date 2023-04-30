export enum SocialVendor {
  GITHUB = 'github',
  TWITTER = 'twitter',
  LINKEDIN = 'linkedin',
  BLOG = 'blog'
}

export type Social = {
  [key in SocialVendor]?: {
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
