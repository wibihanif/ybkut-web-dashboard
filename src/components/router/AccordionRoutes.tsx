import { Accordion, Box, Flex, Text, ThemeIcon, useMantineTheme } from '@mantine/core';
import { Link, Location } from 'react-router-dom';
import { routes } from '~/routes';

interface AccordionRoutesProps {
  location: Location;
}

export const AccordionRoutes: React.FC<AccordionRoutesProps> = ({ location }) => {
  const theme = useMantineTheme();
  const parsedNowLocation = location.pathname.split('/').slice(1).join('/');

  let accordionActiveValue: string | undefined;
  let activeSubtitle: string | undefined;

  if (!accordionActiveValue) {
    accordionActiveValue = routes[0].subTitleItems[0].subTitle;
  }

  routes.forEach(route => {
    route.subTitleItems.forEach(subTitleItem => {
      subTitleItem.routeItems.forEach(routeItem => {
        const matchRoute = routeItem.path === parsedNowLocation;

        if (matchRoute) {
          accordionActiveValue = subTitleItem.subTitle;
          activeSubtitle = subTitleItem.subTitle;
        }
      });
    });
  });

  const renderAccordion = () => {
    return routes.map((route, index) => {
      return (
        <Box key={index} p={10}>
          <Text color={theme.colors.blue[5]} fz="xs" fw="bold" pb={10}>
            {route.title}
          </Text>
          {route.subTitleItems.map((subTitle, index) => {
            return (
              <Box key={index}>
                <Accordion.Item value={subTitle.subTitle} style={{ borderRadius: 8 }}>
                  <Accordion.Control>
                    <Flex gap={10}>
                      <ThemeIcon variant="gradient" size="sm" color="gray">
                        {subTitle.icon}
                      </ThemeIcon>
                      <Text fz="sm" fw={activeSubtitle === subTitle.subTitle ? 'bold' : 'normal'}>
                        {subTitle.subTitle}
                      </Text>
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
                            paddingTop: 7,
                            ':hover': { cursor: 'pointer', backgroundColor: theme.colors.blue[3] },
                            backgroundColor: isActive ? theme.colors.blue[2] : 'none',
                          }}>
                          <Text fz="sm" color="#7D7C7C" fw="bold">
                            {routeItem.title}
                          </Text>
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
