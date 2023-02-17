import { useEffect, useMemo, useState } from 'react';
import MultipleSelect from '../../components/MultipleSelect';
import PaginatedList from '../../components/PaginatedList';
import PostCard from '../../components/PostCard';
import Post from '../../types/post';
import { Collapse, Row, Col } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  padding: 25px;
`;

const PageTitle = styled.div`
  font-size: 25px;
  margin: 5px 15px 15px 15px;
  font-weight: bold;
`;

const FilterTypeTitle = styled.div`
  color: #1677ff;
  font-weight: 600;
  font-size: 13px;
`;

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
    <Container>
      <PageTitle>Trending Posts</PageTitle>

      <Row>
        <Col xs={{ span: 24 }} md={{ span: 6, order: 2 }}>
          <Collapse
            ghost
            defaultActiveKey={window.innerWidth < 576 ? '0' : '1'}
          >
            <Collapse.Panel
              key="1"
              header={<FilterTypeTitle>Filter By Category</FilterTypeTitle>}
            >
              <MultipleSelect
                data={categories}
                onChange={(options) => {
                  onCategoryChange(options);
                }}
              />
            </Collapse.Panel>
          </Collapse>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 18, order: 1 }}>
          <PaginatedList
            data={filteredPosts}
            render={(item) => <PostCard key={item.id} post={item} />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
