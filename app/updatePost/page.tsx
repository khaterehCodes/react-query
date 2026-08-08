"use client";
import { useUpdatePost } from "@/core/services/admin/mutate";

function UpdatePosts() {
  const { mutate, isPending, isError, isSuccess } = useUpdatePost();
  const updateHandler = () => {
    mutate({
      id: 4,
      data: {
        title: "use axios instance",
        body: "react query",
      },
    });
  };
  return (
    <div className="w-full h-130 flex items-center justify-center flex-col gap-10">
      <button
        onClick={updateHandler}
        disabled={isPending}
        className="w-50 h-10 rounded-xl cursor-pointer bg-indigo-400 text-white"
      >
        {isPending ? "Updating ..." : "Update"}
      </button>
      {isSuccess && (
        <p className="text-2xl text-green-600">Post up to date successfully</p>
      )}
      {isError && (
        <p className="text-2xl text-red-600">something went wrong!</p>
      )}
    </div>
  );
}

export default UpdatePosts;
