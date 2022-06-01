import client from "./client";

export const uploadOpportunityPost = async (formData) => {
  try {
    const { data } = await client.post("/opportunityPost/create", formData);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getOpportunityPosts = async (pageNo, limit) => {
  try {
    const { data } = await client(
      "/opportunityPost/posts?pageNo=" + pageNo + "&limit=" + limit
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

export const uploadOpportunityImage = async (imageFile) => {
  try {
    const { data } = await client.post(
      "/opportunityPost/upload-image",
      imageFile
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

export const updateOpportunityPost = async (postId, formData) => {
  try {
    const { data } = await client.put("/opportunityPost/" + postId, formData);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getOpportunityPost = async (slug) => {
  try {
    const { data } = await client("/opportunityPost/single/" + slug);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const deleteOpportunityPost = async (id) => {
  try {
    const { data } = await client.delete("/opportunityPost/" + id);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const searchOpportunityPost = async (query) => {
  try {
    const { data } = await client("/opportunityPost/search?title=" + query);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
