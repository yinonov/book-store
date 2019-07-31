import {
    entityDetectorMap,
    EntityDetectorType,
} from '@app/shared/util-state';
import { Dictionary } from '@ngrx/entity';

export const booksDetector = (type: EntityDetectorType) => (
    entities: Dictionary<Book>,
    id?: string,
): boolean => entityDetectorMap[type](entities, id);
