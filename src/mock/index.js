import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return data;
    });

    this.get('/categories', () => {
      let flattenedCategories = data.posts
        .map((post) => post.categories)
        .flat();

      return [...new Set(flattenedCategories.map((category) => category.name))];
    });
  },
});
