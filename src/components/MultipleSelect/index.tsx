import { useEffect, useState } from 'react';

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

  const selectItem = (item: string) => {
    setOptions({ ...options, [item]: !options[item] });
  };

  return (
    <div>
      {Object.keys(options).map((key) => (
        <div
          onClick={() => {
            selectItem(key);
          }}
        >
          {key} {options[key] ? 'true' : 'false'}
        </div>
      ))}
    </div>
  );
};

export default MultipleSelect;
