const initialStaleTime: number = 1000 * 60 * 5;
export const reactQueryConfig = {
  defaultOptions: {
    queries: {
      gcTime: 60000,
      staleTime: initialStaleTime,
      retry: 2,
    },
    mutations: {
      onError: (error: any) => {
        alert(error.message);
      },
    },
  },
};
