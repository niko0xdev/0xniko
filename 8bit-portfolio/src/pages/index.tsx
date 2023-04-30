import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getContactData } from '@/libs/data/contact';
import { NextPage } from 'next';
import { Contact } from '@/libs/data/types';
import Summary from '@/components/Summary';

const inter = Inter({ subsets: ['latin'] });

const HomePage: NextPage<{
  contact: Contact;
}> = ({ contact }) => {
  console.log(contact);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Summary contact={contact || {}} />
      HOho
    </main>
  );
};

export const getStaticProps = () => {
  const contact = getContactData();

  return {
    props: {
      contact
    }
  };
};

export default HomePage;
