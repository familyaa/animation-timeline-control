import { TimelineSelectionEventSource } from '../../enums/timelineSelectionEventSource';
import { TimelineKeyframe } from '../../models/timelineKeyframe';
import { TimelineGroup } from '../../models/timelineGroup';
export declare class TimelineSelectedEvent {
    /**
     * Selected Keyframes list.
     */
    selected: TimelineKeyframe[];
    /**
     * Changed selection.
     */
    changed: TimelineKeyframe[];
    /**
     * Selection mode.
     */
    mode: TimelineSelectionEventSource;
    drag: TimelineGroup[];
}
