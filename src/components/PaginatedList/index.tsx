import { ReactNode, useEffect, useState } from 'react';
import { Pagination } from 'antd';
import Post from '../../types/post';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

type PaginatedListProps = {
  data: Post[];
  render: (item: Post) => ReactNode;
  pageSize?: number;
};

const PaginatedList = ({ data, render, pageSize = 10 }: PaginatedListProps) => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState<Post[]>([]);

  useEffect(() => {
    //calculate offset to use in limiting result list
    let offset = page * pageSize;
    let pageItems = data.slice(offset - pageSize, offset);
    setCurrentPage([...pageItems]);
  }, [page, data]);

  const onPageChange = (page: number) => {
    setPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {currentPage.map((item) => render(item))}
      <Container>
        <Pagination
          current={page}
          pageSize={pageSize}
          total={data.length}
          hideOnSinglePage={true}
          onChange={onPageChange}
        />
      </Container>
    </>
  );
};

export default PaginatedList;
