"use client";

import { useGetPosts } from "@/core/services/admin/query";

function Posts() {
  const { data, isPending, isError } = useGetPosts();
  console.log(data);

  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-center gap-3 p-5">
      {isPending && <p className="text-2xl font-bold">Loading ...</p>}
      {isError && (
        <p className="text-2xl font-bold text-red-600 animate-pulse">Oops!</p>
      )}
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="w-50 h-40 bg-indigo-200 rounded-md shadow-2xl flex items-center justify-center p-3"
        >
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
