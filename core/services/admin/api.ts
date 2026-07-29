import { baseURL } from "../baseUrl";

export const GetPosts = async () => {
  try {
    const response = await baseURL.get("/posts");
    const posts = await response.data;
    return posts;
  } catch (error: any) {
    throw error;
  }
};

export const SendData = async (data: any) => {
  try {
    const response = await baseURL.post("/posts", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeletePost = async (id: number) => {
  try {
    const response = await baseURL.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UpdatePost = async ({ id, data }: { id: number; data: any }) => {
  try {
    const response = await baseURL.put(`/posts/${id}`, data);
  } catch (error) {
    throw error;
  }
};
