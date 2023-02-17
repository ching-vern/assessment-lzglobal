import { ReactNode, useEffect, useState } from 'react';
import { Pagination } from 'antd';
import Post from '../../types/post';

type PaginatedListProps = {
  data: Post[];
  render: (item: Post) => ReactNode;
  pageSize?: number;
};

const PaginatedList = ({ data, render, pageSize = 10 }: PaginatedListProps) => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState<Post[]>([]);

  useEffect(() => {
    let offset = page * pageSize;
    let pageItems = data.slice(offset - pageSize, offset);
    setCurrentPage([...pageItems]);
  }, [page, data]);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      {currentPage.map((item) => render(item))}
      <div>
        <Pagination
          current={page}
          pageSize={pageSize}
          total={data.length}
          hideOnSinglePage={true}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default PaginatedList;
