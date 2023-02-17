import { useEffect, useState } from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  .ant-tag-checkable {
    background-color: white;
    margin: 3px;
    padding: 3px 9px;
  }

  .ant-tag-checkable-checked {
    background-color: #1677ff;
  }
`;

type MultipleSelectProps = {
  data: string[];
  onChange: (options: string[]) => void;
};

const MultipleSelect = ({ data, onChange }: MultipleSelectProps) => {
  const [options, setOptions] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    let optionMap = {} as any;

    data.map((item) => {
      optionMap[item] = false;
    });

    setOptions(optionMap);
  }, [data]);

  useEffect(() => {
    let selectedOptions = Object.keys(options).filter((key) => {
      return !!options[key];
    });
    onChange(selectedOptions);
  }, [options]);

  //handle change in the selected options
  const selectItem = (item: string) => {
    setOptions({ ...options, [item]: !options[item] });
  };

  return (
    <Container>
      {Object.keys(options).map((key) => (
        <Tag.CheckableTag
          key={key}
          checked={options[key]}
          onChange={() => selectItem(key)}
        >
          {key}
        </Tag.CheckableTag>
      ))}
    </Container>
  );
};

export default MultipleSelect;
