import { TimelineCapShape } from '../../enums/timelineCapShape';
import { TimelineCursorType } from '../../enums/timelineCursorType';
import { TimelineStyle } from '../styles/timelineStyle';

export const defaultTimelineStyle = {
  width: 2,
  marginTop: 15,
  marginBottom: 0,
  strokeColor: '#FFFFFF',
  fillColor: '#FFFFFF',
  capStyle: {
    width: 4,
    height: 10,
    /**
     * Draw timeline rectangular cap.
     */
    capType: TimelineCapShape.Rect,
    strokeColor: '#FFFFFF',
    fillColor: '#FFFFFF',
  },
  cursor: TimelineCursorType.EWResize,
} as TimelineStyle;
