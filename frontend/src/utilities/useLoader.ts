import { useState } from "react";

type LoaderOptions<T> = {
  successMessage?: string;
  errorMessage?: string;
  onSuccess?: (result: T) => void;
  onError?: (error: unknown) => void;
};

export function useLoader() {
  const [loadingKey, setLoadingKey] = useState<string | null>(null);

  const withLoader = <T,>(
    key: string,
    request: () => Promise<T>,
    options?: LoaderOptions<T>
  ) => {
    return async (): Promise<T> => {
      setLoadingKey(key);

      try {
        const result = await request();

        options?.onSuccess?.(result);

        if (options?.successMessage) {
          console.log(options.successMessage);
        }

        return result;
      } catch (error) {
        options?.onError?.(error);

        if (options?.errorMessage) {
          console.error(options.errorMessage);
        }

        throw error;
      } finally {
        setLoadingKey(null);
      }
    };
  };

  return {
    withLoader,
    isLoading: loadingKey !== null,
    loadingKey,
  };
}