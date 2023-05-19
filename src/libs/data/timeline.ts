import { TimelineItem } from './types';

const timelineData = require('@data/timeline.json');

export function getTimelineData() {
  return timelineData.items as TimelineItem[];
}
