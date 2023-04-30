import Image from 'next/image';
import React, { HTMLAttributes } from 'react';
import { Contact, SocialVendor } from '@/libs/data/types';
import styles from './Summary.module.scss';

export type SummaryProps = HTMLAttributes<HTMLDivElement> & {
  contact: Contact;
};

const Summary: React.FC<SummaryProps> = ({ className, contact }) => {
  const { name, title, profileImg, intro, social } = contact;
  const links: SocialVendor[] = Object.keys(social) as any[];

  return (
    <div
      className={`flex flex-col items-center justify-between summary ${
        className || ''
      }`}
    >
      <Image
        src={profileImg}
        alt={name}
        width={180}
        height={37}
        priority
        className="summary-profile-img"
      />

      <h2 className="summary-name">{name}</h2>
      <h4 className="summary-title">{title}</h4>

      <p className="summary-intro">{intro}</p>

      <div className="summary-links">
        {links.map((link) => (
          <a
            key={link}
            href={social[link]?.url || ''}
            target="_blank"
            rel="noreferrer"
            className="summary-link"
          >
            <Image
              src={social[link]?.icon || ''}
              alt={link}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Summary;
