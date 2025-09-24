export default () => ({
  blog_post_data: [],
  blog_post_paging: {
    per_page: 10,
    current_page: 1,
    total_pages: 1,
    total_post: 0,
  },

  file: {
    name: "",
    size: "",
    progress: 0,
    uploading: false,
  },

  all_files: [],
});
