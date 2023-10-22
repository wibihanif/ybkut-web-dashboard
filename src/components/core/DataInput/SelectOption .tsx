import { NativeSelect } from '@mantine/core';

interface SelectItem {
  value: string;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  group?: string;
  [key: string]: any;
}

interface DataInputTextProps {
  label: string;
  placeholder?: string;
  data: (string | SelectItem)[];
  value: string;
  rightSection?: React.ReactNode;
  onChange?: (param: any) => void;
}

export const SelectOption: React.FC<DataInputTextProps> = ({
  label,
  placeholder,
  data,
  value,
  rightSection,
  onChange,
}) => {
  return (
    <NativeSelect
      label={label}
      placeholder={placeholder}
      data={data}
      onChange={onChange}
      rightSection={rightSection}
      value={value}
      miw="340px"
      mr="lg"
    />
  );
};
