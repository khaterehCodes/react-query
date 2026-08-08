"use client";

import { useDeletePost } from "@/core/services/admin/mutate";

function DeletePosts() {
  const { mutate, isPending, isError, isSuccess } = useDeletePost();
  const deleteHandler = () => {
    mutate(20);
  };
  return (
    <div className="w-full h-130 flex items-center justify-center flex-col gap-10">
      <button
        onClick={deleteHandler}
        disabled={isPending}
        className="w-50 h-10 rounded-xl cursor-pointer bg-indigo-400 text-white"
      >
        {isPending ? "Deloeting ..." : "Delete"}
      </button>
      {isSuccess && (
        <p className="text-2xl text-green-600">Post deleted successfully</p>
      )}
      {isError && (
        <p className="text-2xl text-red-600">something went wrong!</p>
      )}
    </div>
  );
}

export default DeletePosts;
