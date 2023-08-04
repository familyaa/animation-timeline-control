import { TimelineKeyframeShape } from '../../enums/timelineKeyframeShape';
import { TimelineKeyframeStyle } from '../styles/timelineKeyframeStyle';

export const defaultTimelineKeyframeStyle = {
  /**
   * keyframe fill color.
   */
  fillColor: '#FFFFFF',
  shape: TimelineKeyframeShape.Rhomb,
  /**
   * Selected keyframe fill color.
   */
  selectedFillColor: '#FFEE32',
  strokeColor: 'black',
  selectedStrokeColor: 'black',
  strokeThickness: 0.2,
  height: 'auto',
  width: 'auto',
} as TimelineKeyframeStyle;
