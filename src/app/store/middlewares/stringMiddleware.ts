const stringMiddleware =
  () => (next: Function) => (action: string | object) => {
    if (typeof action === 'string') {
      return next({
        type: action,
      });
    }

    return next(action);
  };

export default stringMiddleware;
