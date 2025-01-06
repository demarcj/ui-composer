import type { ElementModel } from '~/models';
import { v4 as uuidv4 } from 'uuid';

export const use_select = (): Ref<ElementModel | null> => useState(`select`, () => null)