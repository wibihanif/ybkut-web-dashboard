import { Accordion, Box, Flex, Text, ThemeIcon, useMantineTheme } from '@mantine/core';
import { Link, Location } from 'react-router-dom';
import { routes } from '~/routes';

interface AccordionRoutesProps {
  location: Location;
}

export const AccordionRoutes: React.FC<AccordionRoutesProps> = ({ location }) => {
  const theme = useMantineTheme();
  const parsedNowLocation = location.pathname.split('/')[1];

  let accordionActiveValue;

  routes.forEach(route => {
    route.subTitleItems.forEach(subTitleItem => {
      subTitleItem.routeItems.forEach(routeItem => {
        const matchRoute = routeItem.path === parsedNowLocation;

        if (matchRoute) {
          accordionActiveValue = subTitleItem.subTitle;
        }
      });
    });
  });

  const renderAccordion = () => {
    return routes.map((route, index) => {
      return (
        <Box key={index}>
          <Text>{route.title}</Text>
          {route.subTitleItems.map((subTitle, index) => {
            return (
              <Box key={index}>
                <Accordion.Item value={subTitle.subTitle}>
                  <Accordion.Control>
                    <Flex gap={10}>
                      <ThemeIcon variant="light">{subTitle.icon}</ThemeIcon>
                      <Text fw="bold">{subTitle.subTitle}</Text>
                    </Flex>
                  </Accordion.Control>
                  {subTitle.routeItems.map((routeItem, index) => {
                    const isActive = parsedNowLocation === routeItem.path;

                    return (
                      <Link
                        to={routeItem.path}
                        style={{ textDecoration: 'none', color: 'black' }}
                        key={index}>
                        <Accordion.Panel
                          sx={{
                            paddingLeft: 30,
                            ':hover': { cursor: 'pointer', backgroundColor: theme.colors.blue[2] },
                            backgroundColor: isActive ? theme.colors.blue[2] : 'none',
                          }}>
                          <Text>{routeItem.title}</Text>
                        </Accordion.Panel>
                      </Link>
                    );
                  })}
                </Accordion.Item>
              </Box>
            );
          })}
        </Box>
      );
    });
  };

  return (
    <Accordion variant="filled" defaultValue={accordionActiveValue}>
      {renderAccordion()}
    </Accordion>
  );
};
