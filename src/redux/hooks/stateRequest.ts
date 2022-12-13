//Redux
import { useSelector,TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../../redux/store';

export const stateRequestSelecto:TypedUseSelectorHook<RootState>=useSelector;


