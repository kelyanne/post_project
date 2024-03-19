const PostStore = (set) => ({
  id: 3,
  setId: () => set((state) => ({ id: state.id + 1 })),
});

export default PostStore;
