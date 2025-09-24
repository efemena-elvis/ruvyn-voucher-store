import $api from "@/services/service-api";
import {
  VESICASH_API_URL,
  VESICASH_PRIVATE_KEY_TOKEN,
  VESICASH_PUBLIC_KEY_TOKEN,
  VESICASH_AUTH_TOKEN,
} from "@/utilities/constant";

const routes = {
  location: "https://ip2c.org/s",
  upload_file: "/upload/file",
  contact_url: "/auth/contact-us",
  status_url: "status-check",
  blog_url: "https://blog.vesicash.com/wp-json/wp/v2/posts",
};

export default {
  // ==============================
  // GET CURRENT USER LOCATION
  // ==============================
  async getMyLocation() {
    return await $api.fetchRaw(routes.location);
  },

  // ==================================
  // HANDLE CONTACT FORM PROCESSING
  // ==================================
  async handleContactUs(_, payload) {
    return await $api.push(routes.contact_url, { payload });
  },

  // ==================================
  // FETCH MICRO-SERVICES STATUS
  // ==================================
  async getServiceStatus(_, service) {
    return await $api.fetch(`/${service}/${routes.status_url}`);
  },

  // ==============================
  // GET ALL BLOG POST
  // ==============================
  async loadBlogPost({ commit }, { page = 1 }) {
    let response = await $api.fetchRaw(
      `${routes.blog_url}?page=${page}&_embed`,
      {
        resolve: false,
      }
    );

    let { status, data, headers } = response;

    if (status === 200) {
      commit("UPDATE_BLOG_POST", {
        data,
        paging: {
          current_page: page,
          total_pages: Number(headers["x-wp-totalpages"] ?? 1),
          total_post: Number(headers["x-wp-total"] ?? 0),
        },
      });
    }
    return data;
  },

  // ==============================
  // GET SINGLE BLOG POST
  // ==============================
  async getSingleBlogPost(_, post_id) {
    return await $api.fetchRaw(`${routes.blog_url}/${post_id}?_embed`, {
      resolve: false,
    });
  },

  // ================================
  // UPLOAD FILE ATTACHMENT
  // ================================
  async uploadFile(_, payload) {
    formData.append("files[0]", payload);
    return await $api.push(routes.upload_file, { formData, is_attach: true });
  },

  // ======================================
  // UPLOAD FILE TO DIGITAL SPACE
  // ======================================
  async uploadToSpace({ commit }, { file, formatted_size }) {
    const authUserToken = getStorage(VESICASH_AUTH_TOKEN) || null;

    formData.append("files[0]", file);

    try {
      const response = await axios.post(
        `${VESICASH_API_URL}${routes.upload_file}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authUserToken}`,
            "Content-Type": "multipart/form-data",
            "V-PUBLIC-KEY": VESICASH_PUBLIC_KEY_TOKEN,
            "V-PRIVATE-KEY": VESICASH_PRIVATE_KEY_TOKEN,
          },
          onUploadProgress: function (progressEvent) {
            let progress_count = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );

            commit("UPDATE_FILE_PROGRESS", {
              name: file.name,
              size: formatted_size,
              progress: progress_count,
              uploading: true,
            });
          }.bind(this),

          cancelToken: axiosSource.token,
        }
      );

      // UPDATE FILE STATE

      if (response.data.code === 200) {
        commit(
          "transactions/UPDATE_TRANSACTION_ATTACHMENT",
          [
            {
              name: file.name,
              url: response?.data?.data?.urls[0],
            },
          ],
          { root: true }
        );

        commit("UPDATE_FILE_PROGRESS", {
          name: file.name,
          size: formatted_size,
          progress: 0,
          uploading: false,
        });
      } else {
        commit("UPDATE_FILE_PROGRESS", {
          name: "",
          size: "",
          progress: 0,
          uploading: false,
        });
      }

      return response.data;
    } catch (error) {
      return error;
    }
  },

  // ======================================
  // UPLOAD FILE TO DIGITAL CLOUD [MULTIPLE FILES]
  // ======================================
  async uploadToCloud({ commit }, { files, id }) {
    const authUserToken = getStorage(VESICASH_AUTH_TOKEN) || null;

    let form_data = new FormData();

    files.forEach((file, index) => {
      form_data.append(`files[${index}]`, file);
    });

    try {
      const response = await axios.post(
        `${VESICASH_API_URL}${routes.upload_file}`,
        form_data,
        {
          headers: {
            Authorization: `Bearer ${authUserToken}`,
            "Content-Type": "multipart/form-data",
            "V-PUBLIC-KEY": VESICASH_PUBLIC_KEY_TOKEN,
            "V-PRIVATE-KEY": VESICASH_PRIVATE_KEY_TOKEN,
          },

          onUploadProgress: function (progressEvent) {
            let progress_count = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );

            const updated_files_state = files.map((file) => {
              return {
                name: file.name,
                size: file.formatted_size,
                progress: progress_count,
                uploading: true,
              };
            });

            commit("UPDATE_ALL_FILES_PROGRESS", {
              id,
              files: updated_files_state,
            });
          }.bind(this),

          cancelToken: axiosSource.token,
        }
      );

      // UPDATE FILE STATE

      if (response.data.code === 200) {
        const updated_files_state = files.map((file, index) => {
          const formatted_file = {
            name: file.name,
            size: file.formatted_size,
            progress: 0,
            uploading: false,
            url: response.data.data.urls[index],
          };
          return formatted_file;
        });

        commit("UPDATE_ALL_FILES_PROGRESS", { id, files: updated_files_state });
      } else {
        commit("UPDATE_ALL_FILES_PROGRESS", { id, files: [] });
      }

      return response.data;
    } catch (error) {
      return error;
    }
  },

  // ======================================
  // CLEAR OUT UPLOAADED  FILE ATTACHMENT
  // =======================================
  clearAttachedFile({ commit }) {
    commit("transactions/UPDATE_TRANSACTION_ATTACHMENT", [], { root: true });
    commit("UPDATE_FILE_PROGRESS", {
      name: "",
      size: "",
      progress: 0,
      uploading: false,
    });
  },

  // ======================================
  // CLEAR OUT ALL FILES ATTACHMENT
  // =======================================
  clearAllAttachedFiles({ commit }) {
    commit("UPDATE_ALL_FILES_PROGRESS", [
      {
        name: "",
        size: "",
        progress: 0,
        uploading: false,
      },
    ]);
  },
};
