import { useToast } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { errorHandler } from '../api/handlers';

export const useRequestHandler = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(false);
  const toast = useToast();

  const request = useCallback(async (request: Function, ...args: any[]) => {
    setLoading(true);

    try {
      const data = await request(...args);
      return data;
    } catch (e: any) {
      errorHandler(e, toast);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, request };
};
