import {
  addBlockQuestion,
  addBlockTest,
  deleteBlockQuestion,
  deleteBlockTest,
  resetBlockQuestions,
  resetBlockTests,
  setBlockQuestions,
  setBlockTests,
} from '../../model/store/creationSlice';

const getEntityName = (type: 'question' | 'test') =>
  type === 'question' ? 'blockQuestions' : 'blockTests';

export const addBlockEntityWithLS = (
  dispatch: Function,
  type: 'question' | 'test',
  entity: any,
) => {
  const entityName = getEntityName(type);
  const blockEntities = localStorage.getItem(entityName);

  if (type === 'question') {
    dispatch(addBlockQuestion(entity));
  } else {
    dispatch(addBlockTest(entity));
  }

  if (blockEntities) {
    localStorage.setItem(
      entityName,
      JSON.stringify([...JSON.parse(blockEntities), entity]),
    );
  } else {
    localStorage.setItem(entityName, JSON.stringify([entity]));
  }
};

export const deleteBlockEntityWithLS = (
  dispatch: Function,
  type: 'question' | 'test',
  id: string,
) => {
  const entityName = getEntityName(type);
  const blockEntities = localStorage.getItem(entityName);

  if (type === 'question') {
    dispatch(deleteBlockQuestion(id));
  } else {
    dispatch(deleteBlockTest(id));
  }

  if (blockEntities) {
    const filteredEntities = JSON.parse(blockEntities).filter(
      (item: { title: string; id: string }) => item.id !== id,
    );

    localStorage.setItem(entityName, filteredEntities);
  }
};

export const resetBlockEntitiesWithLS = (
  dispatch: Function,
  type: 'question' | 'test',
) => {
  if (type === 'question') {
    dispatch(resetBlockQuestions());
  } else {
    dispatch(resetBlockTests());
  }

  localStorage.removeItem(getEntityName(type));
};

export const setBlockEntitiesWithLS = (
  dispatch: Function,
  type: 'question' | 'test',
) => {
  const blockEntities = localStorage.getItem(getEntityName(type));

  if (blockEntities) {
    if (type === 'question') {
      dispatch(setBlockQuestions(JSON.parse(blockEntities)));
    } else {
      dispatch(setBlockTests(JSON.parse(blockEntities)));
    }
  }
};
