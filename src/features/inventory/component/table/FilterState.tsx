import { Center, Menu, ThemeIcon, rem } from '@mantine/core';
import { IconChecks, IconCircleFilled } from '@tabler/icons-react';
import React from 'react';
import { MenuFilter } from '~/components/core/MenuFilter';

interface FilterStateProps {
  filterState: string;
  setFilterState: React.Dispatch<React.SetStateAction<string>>;
}

const filterItems = [
  {
    label: 'Success',
    color: 'rgba(75, 192, 192)',
    state: 'Success',
  },
  {
    label: 'Pending',
    color: 'rgba(255, 206, 86)',
    state: 'Pending',
  },
  {
    label: 'Canceled',
    color: 'rgba(255, 99, 132)',
    state: 'Canceled',
  },
];

export const FilterState: React.FC<FilterStateProps> = ({ filterState, setFilterState }) => {
  const handleFilterValue = (state: string) => {
    if (filterState === state) {
      setFilterState('');
    } else {
      setFilterState(state);
    }
  };

  return (
    <MenuFilter label="Filter by state status:">
      {filterItems.map(item => (
        <Menu.Item
          key={item.state}
          rightSection={
            filterState === item.state ? (
              <Center>
                <ThemeIcon size="xs" color="black">
                  <IconChecks />
                </ThemeIcon>
              </Center>
            ) : null
          }
          icon={<IconCircleFilled style={{ width: rem(14), height: rem(14), color: item.color }} />}
          onClick={() => handleFilterValue(item.state)}>
          {item.label}
        </Menu.Item>
      ))}
    </MenuFilter>
  );
};
