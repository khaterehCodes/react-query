"use client";
import { useSendPost } from "@/core/services/admin/mutate";

function SendPosts() {
  const { mutate, isPending, isError, isSuccess, data } = useSendPost();
  const sendHandler = () => {
    mutate({
      title: "use axios instance",
      body: "react query",
      userId: 3,
    });
  };
  return (
    <div className="w-full h-130 flex items-center justify-center flex-col gap-10">
      <button
        onClick={sendHandler}
        disabled={isPending}
        className="w-50 h-10 rounded-xl cursor-pointer bg-indigo-400 text-white"
      >
        {isPending ? "Sending ..." : "Send"}
      </button>
      {isSuccess && (
        <p className="text-2xl text-green-600">Post sent successfully</p>
      )}
      {/* {isSuccess && (
        <>
          <p>{data.title}</p>
          <p>{data.userId}</p>
        </>
      )} */}
      {isError && (
        <p className="text-2xl text-red-600">something went wrong!</p>
      )}
    </div>
  );
}

export default SendPosts;
