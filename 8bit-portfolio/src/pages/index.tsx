import Summary from '@/components/Summary';
import Timeline from '@/components/Timeline';
import { getContactData } from '@/libs/data/contact';
import { getTimelineData } from '@/libs/data/timeline';
import { Contact, TimelineItem } from '@/libs/data/types';
import { NextPage } from 'next';

const HomePage: NextPage<{
  contact: Contact;
  timelines: TimelineItem[];
}> = ({ contact, timelines }) => {
  console.log(timelines);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Summary contact={contact || {}} />

      <Timeline items={timelines || []} />
    </main>
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
