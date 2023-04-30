import timelineData from '@data/timeline.json';
import { TimelineItem } from './types';

export function getTimelineData() {
  return timelineData.items as TimelineItem[];
}
