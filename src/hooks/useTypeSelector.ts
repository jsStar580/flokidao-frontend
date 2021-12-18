import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/reducers/combine';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;