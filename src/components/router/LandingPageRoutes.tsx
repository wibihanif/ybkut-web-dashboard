import {
  Accordion,
  Box,
  Flex,
  Image,
  SimpleGrid,
  // Text,
  // ThemeIcon,
  //  useMantineTheme
} from '@mantine/core';
import React from 'react';
import { Link, Location } from 'react-router-dom';
import { routes } from '~/routes';
import ybkutLogo from '~/assets/ykbut-logo.png';
import dcareLogo from '~/assets/ut-dcare-logo.png';
import schoolLogo from '~/assets/ut-school-logo.png';
import poliLogo from '~/assets/logo_poli.png';

interface AccordionRoutesProps {
  location: Location;
}

export const LandingPageRoutes: React.FC<AccordionRoutesProps> = ({ location }) => {
  const parsedNowLocation = location.pathname.split('/').slice(1).join('/');

  let accordionActiveValue: string | undefined;
  // let activeSubtitle: string | undefined;

  if (!accordionActiveValue) {
    accordionActiveValue = routes[0].subTitleItems[0].subTitle;
  }

  routes.forEach(route => {
    route.subTitleItems.forEach(subTitleItem => {
      subTitleItem.routeItems.forEach(routeItem => {
        const matchRoute = routeItem.path === parsedNowLocation;

        if (matchRoute) {
          accordionActiveValue = subTitleItem.subTitle;
          // activeSubtitle = subTitleItem.subTitle;
        }
      });
    });
  });

  const saveLogo = [ybkutLogo, dcareLogo, schoolLogo, poliLogo];
  const linkEntity = ['purchase', 'daycare', 'nusantara-dashboard', 'poliklinik-analytic'];

  const renderAccordion = () => {
    return (
      <Flex justify="center" align="center">
        <SimpleGrid cols={3} spacing={6} mt={20} sx={{ gap: '40px' }}>
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                {route.title !== 'LANDING PAGE' ? (
                  <Flex justify="center" align="center">
                    <Box>
                      <Flex h="100%" justify="center" align="center">
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
                          // key={idx}
                          p={10}>
                          <Flex justify="center" align="center" direction="row">
                            <Link
                              to={linkEntity[index - 1]}
                              style={{ textDecoration: 'none', color: 'white' }}
                              key={index}>
                              <Image
                                sx={{ objectFit: 'cover' }}
                                width="100%"
                                // mb={20}
                                // height="100%"
                                src={saveLogo[index - 1]}
                                alt="GSI"
                              />
                            </Link>
                          </Flex>
                          {/* 
                          </Accordion.Item> */}
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                ) : null}
              </React.Fragment>
            );
          })}
        </SimpleGrid>
      </Flex>
    );
  };

  return <Accordion defaultValue={accordionActiveValue}>{renderAccordion()}</Accordion>;
};
