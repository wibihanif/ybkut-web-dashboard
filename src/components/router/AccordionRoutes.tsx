import {
  Accordion,
  Box,
  Flex,
  Text,
  ThemeIcon,
  //  useMantineTheme
} from '@mantine/core';
import React from 'react';
import { Link, Location } from 'react-router-dom';
import { routes } from '~/routes';

interface AccordionRoutesProps {
  location: Location;
}

export const AccordionRoutes: React.FC<AccordionRoutesProps> = ({ location }) => {
  // const theme = useMantineTheme();
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
        <>
          {route.title !== 'LANDING PAGE' ? (
            <Box key={index} p={10}>
              {/* <Text color={route.color} fz="xs" fw="bold" pb={10}>
                {route.title}
              </Text> */}
              {route.subTitleItems.map((subTitle, index) => {
                return (
                  <Box key={index}>
                    <Accordion.Item value={subTitle.subTitle} style={{ borderRadius: 8 }}>
                      <Accordion.Control
                        sx={{
                          ':hover': {
                            cursor: 'pointer',
                            backgroundColor: 'rgba(160, 160, 160, 0.577)',
                          },
                        }}>
                        <Flex gap={10}>
                          <ThemeIcon variant="light" radius="sm" size="sm" color={route.color}>
                            {subTitle.icon}
                          </ThemeIcon>
                          <Text
                            fz="sm"
                            fw={activeSubtitle === subTitle.subTitle ? '1000' : '800'}
                            color={route.color}>
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
                                borderRadius: 8,
                                ':hover': {
                                  cursor: 'pointer',
                                  backgroundColor: route.color,
                                  borderRadius: 8,
                                },
                                backgroundColor: isActive ? route.color : 'none',
                                opacity: isActive ? 0.7 : 0.5,
                              }}>
                              <Text fz="sm" color="#ffffff" fw="bold">
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
          ) : undefined}
        </>
      );
    });
  };

  return (
    <Accordion
      sx={{ backgroundColor: 'rgba(160, 160, 160, 0.577)', borderRadius: 8 }}
      defaultValue={accordionActiveValue}>
      {renderAccordion()}
    </Accordion>
  );
};
