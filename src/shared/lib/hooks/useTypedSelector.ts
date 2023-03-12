import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../../app';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
