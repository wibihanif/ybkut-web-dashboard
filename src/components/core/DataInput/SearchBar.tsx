import { TextInput } from '@mantine/core';

interface DataInputTextProps {
  label: string;
  placeholder: string;
  value: string;
  rightSection?: React.ReactNode;
  onChange?: (param: any) => void;
}

export const SearchBar: React.FC<DataInputTextProps> = ({
  label,
  placeholder,
  value,
  rightSection,
  onChange,
}) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      rightSection={rightSection}
      value={value}
      miw="340px"
      mr="lg"
    />
  );
};
