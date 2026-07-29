import { useQuery } from "@tanstack/react-query";
import { PostsKey } from "./key";
import { GetPosts } from "./api";

export const useGetPosts = () => {
  return useQuery({
    queryKey: PostsKey(),
    queryFn: () => GetPosts(),
  });
};
