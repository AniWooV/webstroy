module.exports = {
  routes: [
    {
      method: "GET",
      path: "/meta/find-by-slug/:slug",
      handler: "api::meta.meta.findBySlug",
    },
  ],
};
