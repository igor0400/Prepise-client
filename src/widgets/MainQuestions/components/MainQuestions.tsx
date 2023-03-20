import { FC, useEffect, useReducer } from 'react';
import Questions from '../../Questions';
import { reducer } from '../model/store/filtersReducer';
import { initialState } from '../model/store/filtersState';

const MainQuestions: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // сделать фильтры
  useEffect(() => {
    dispatch({ type: 'addFilterItem', payload: { name: 'tags', item: '1' } });
  }, []);

  return (
    <div className="flex w-full">
      <div></div>
      <Questions filters={state} />
    </div>
  );
};

export default MainQuestions;
