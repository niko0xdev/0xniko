import { TimelineItem } from '@/libs/data/types';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

export type TimelineProps = HTMLAttributes<HTMLDivElement> & {
  items: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ className, items = [] }) => {
  const topItems = items.slice(0, items.length - 1);
  const lastItem = items[items.length - 1];

  return (
    <div
      className={`flex flex-col items-center justify-between timeline ${
        className || ''
      }`}
    >
      <h3 className="timeline-big">Work experience</h3>
      <p className="timeline-small">
        A small selection about my working experiences.
      </p>

      <ol className="timeline-items">
        {topItems.map((item, idx) => (
          <li key={idx}>
            <div className="flex-start">
              <div className="timeline-item-img">
                <Image
                  src={item.logo || ''}
                  alt={item.company}
                  width={100}
                  height={100}
                  className="timeline-img"
                />
              </div>
              <div className="timeline-item-content">
                <div className="mb-4 flex flex-col justify-between">
                  <h3 className="timeline-company">{item.company} </h3>
                  <h4 className="timeline-title">({item.title})</h4>
                  <div className="timeline-date">
                    <p>
                      {item.from} - {item.to}
                    </p>
                  </div>
                </div>
                <p className="timeline-content">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      {lastItem && (
        <div key={items.length}>
          <div className="flex-start">
            <div className="timeline-item-img">
              <Image
                src={lastItem.logo || ''}
                alt={lastItem.company}
                width={100}
                height={100}
                className="timeline-img"
              />
            </div>
            <div className="timeline-item-content">
              <div className="mb-4 flex flex-col justify-between">
                <h3 className="timeline-company">{lastItem.company} </h3>
                <h4 className="timeline-title">({lastItem.title})</h4>
                <div className="timeline-date">
                  <Image
                    src="/images/calendar-event.png"
                    alt="calendar"
                    width={14}
                    height={14}
                  />
                  <p>
                    {lastItem.from} - {lastItem.to}
                  </p>
                </div>
              </div>
              <p className="timeline-content">{lastItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
