import Summary from '@/components/Summary';
import Timeline from '@/components/Timeline';
import { getContactData } from '@/libs/data/contact';
import { getTimelineData } from '@/libs/data/timeline';
import { Contact, TimelineItem } from '@/libs/data/types';
import { NextPage } from 'next';
import Head from 'next/head';

type HomePageProps = {
  contact: Contact;
  timelines: TimelineItem[];
};

const HomePage: NextPage<HomePageProps> = ({ contact, timelines }) => {
  return (
    <>
      <Head>
        <title>Niko Home | Senior Software Engineering, DevOps Engineer</title>
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <Summary contact={contact || {}} />

        <Timeline items={timelines || []} />
      </main>
    </>
  );
};

export const getStaticProps = () => {
  const contact = getContactData();
  const timelines = getTimelineData();

  return {
    props: {
      contact,
      timelines
    }
  };
};

export default HomePage;
