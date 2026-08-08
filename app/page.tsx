"use client";
import { useGetPosts } from "@/core/services/admin/query";

export default function Home() {
  const { data } = useGetPosts();
  return (
    <div className="w-full h-auto bg-amber-600">
      <p>Get Post</p>
      {data?.map((item: any) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
}
