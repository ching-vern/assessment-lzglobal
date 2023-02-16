import { useEffect, useMemo, useState } from 'react';
import MultipleSelect from '../../components/MultipleSelect';
import PaginatedList from '../../components/PaginatedList';
import PostCard from '../../components/PostCard';
import Post from '../../types/post';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json.posts));

    fetch('/api/categories')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  const onCategoryChange = (options: string[]) => {
    setSelectedCategories(options);
  };

  const filterPosts = () => {
    if (selectedCategories.length === 0) {
      return posts;
    }

    return posts.filter((post) =>
      post.categories.some((category) =>
        selectedCategories.includes(category.name)
      )
    );
  };

  const filteredPosts: Post[] = useMemo(filterPosts, [
    selectedCategories,
    posts,
  ]);

  return (
    <div>
      <div>Welcome to posts page</div>

      <MultipleSelect
        data={categories}
        onChange={(options) => {
          onCategoryChange(options);
        }}
      />

      <div>
        <PaginatedList
          data={filteredPosts}
          render={(item) => <PostCard key={item.id} post={item} />}
        />
      </div>
    </div>
  );
};

export default Home;
