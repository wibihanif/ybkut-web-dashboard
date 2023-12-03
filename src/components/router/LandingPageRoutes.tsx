import {
  Accordion,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  //  useMantineTheme
} from '@mantine/core';
import React from 'react';
import { Link, Location } from 'react-router-dom';
import { routes } from '~/routes';
import ybkutLogo from '~/assets/ykbut-logo.png';
import dcareLogo from '~/assets/ut-dcare-logo.png';
import schoolLogo from '~/assets/ut-school-logo.png';

interface AccordionRoutesProps {
  location: Location;
}

export const LandingPageRoutes: React.FC<AccordionRoutesProps> = ({ location }) => {
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

  const saveLogo = [ybkutLogo, dcareLogo, schoolLogo];

  const renderAccordion = () => {
    return (
      <SimpleGrid cols={3} spacing={6} mt={20}>
        {routes.map((route, index) => {
          return (
            <React.Fragment key={index}>
              {route.title !== 'LANDING PAGE' ? (
                <Flex justify="center">
                  <Box p={10}>
                    <Flex justify="center">
                      {route.subTitleItems.map((subTitle, idx) => (
                        <Box
                          sx={{
                            backgroundColor: 'rgba(160, 160, 160, 0.577)',
                            borderRadius: 8,
                            height: '60%',
                            width: '60%',
                            ':hover': {
                              cursor: 'pointer',
                              backgroundColor: 'rgba(211, 211, 211, 0.577)',
                              borderRadius: 8,
                            },
                          }}
                          key={idx}
                          p={10}>
                          <Flex justify="center" align="center" direction="row">
                            <Image
                              sx={{ objectFit: 'cover', height: '150px' }}
                              width="100%"
                              mb={20}
                              src={saveLogo[index - 1]}
                              alt="GSI"
                            />
                          </Flex>
                          <Accordion.Item value={subTitle.subTitle} style={{ borderRadius: 8 }}>
                            <Accordion.Control
                              sx={{
                                ':hover': {
                                  backgroundColor: 'rgba(255, 255, 255, 0.577)',
                                  borderRadius: 8,
                                },
                              }}>
                              <Flex gap={10} align="center">
                                <ThemeIcon
                                  variant="light"
                                  radius="sm"
                                  size="xl"
                                  color={route.color}>
                                  {subTitle.icon}
                                </ThemeIcon>

                                <Text
                                  fz="lg"
                                  fw={activeSubtitle === subTitle.subTitle ? 'bold' : 'bold'}
                                  sx={{ justifyContent: 'center' }}
                                  // color={activeSubtitle === subTitle.subTitle ? 'black' : 'white'}
                                >
                                  {route.title}
                                </Text>
                              </Flex>
                            </Accordion.Control>
                            {subTitle.routeItems.map((routeItem, index) => {
                              // const isActive = parsedNowLocation === routeItem.path;
                              return (
                                <Link
                                  to={routeItem.path}
                                  style={{ textDecoration: 'none', color: 'white' }}
                                  key={index}>
                                  <Accordion.Panel
                                    sx={{
                                      paddingLeft: 30,
                                      paddingTop: 7,
                                      // ':hover': {
                                      //   //   cursor: 'pointer',
                                      //   //   backgroundColor: 'black',
                                      //   opacity: 0.5,
                                      //   //   color: 'white',
                                      // },
                                      // color: 'white',
                                      // backgroundColor: isActive ? route.color : 'none',
                                    }}>
                                    <Text
                                      sx={{ cursor: 'pointer', ':hover': { color: 'white' } }}
                                      fz="md"
                                      color="black"
                                      fw="bold">
                                      {routeItem.title}
                                    </Text>
                                  </Accordion.Panel>
                                </Link>
                              );
                            })}
                          </Accordion.Item>
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              ) : null}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
    );
  };

  return <Accordion defaultValue={accordionActiveValue}>{renderAccordion()}</Accordion>;
};
