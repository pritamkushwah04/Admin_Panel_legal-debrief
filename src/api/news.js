import client from "./client";

export const uploadNewsPost = async (formData) => {
  try {
    const { data } = await client.post("/newsPost/create", formData);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getNewsPosts = async (pageNo, limit) => {
  try {
    const { data } = await client(
      "/newsPost/posts?pageNo=" + pageNo + "&limit=" + limit
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const uploadNewsImage = async (imageFile) => {
  try {
    const { data } = await client.post("/newsPost/upload-image", imageFile);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const updateNewsPost = async (postId, formData) => {
  try {
    const { data } = await client.put("/newsPost/" + postId, formData);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getNewsPost = async (slug) => {
  try {
    const { data } = await client("/newsPost/single/" + slug);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const deleteNewsPost = async (id) => {
  try {
    const { data } = await client.delete("/newsPost/" + id);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const searchNewsPost = async (query) => {
  try {
    const { data } = await client("/newsPost/search?title=" + query);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
