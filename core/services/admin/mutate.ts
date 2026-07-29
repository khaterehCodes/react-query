import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePost, SendData, UpdatePost } from "./api";
import { PostsKey } from "./key";

export const useSendPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => SendData(data),
    onSuccess: () => {
      queryClient.invalidateQueries(PostsKey as any);
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => DeletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries(PostsKey as any);
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      UpdatePost({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries(PostsKey as any);
    },
  });
};
