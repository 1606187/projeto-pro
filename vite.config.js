export default {
    root: "./",
    build: {
      outDir: "./dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: "./index.html",
          about: "./cadastro.html",
        },
      },
    },
  };