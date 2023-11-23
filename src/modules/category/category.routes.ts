const categoryRoot = '/category';
export const routesV1 = {
  version: 'v1',
  category: {
    root: categoryRoot,
    resourceById: `${categoryRoot}/:id`,
    deleteById:`${categoryRoot}/:id`
  },
};
