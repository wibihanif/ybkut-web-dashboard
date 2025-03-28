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
import ybkutLogo from '~/assets/ykbut-logo.png';
import dcareLogo from '~/assets/ut-dcare-logo.png';
import schoolLogo from '~/assets/ut-school-logo.png';

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
          {route.title !== 'LANDING PAGE' &&
          (parsedNowLocation === 'purchase' ||
            parsedNowLocation === 'purchase/total-purchase' ||
            parsedNowLocation === 'purchase/total-rfq' ||
            parsedNowLocation === 'purchase/pending-pr' ||
            parsedNowLocation === 'purchase/pending-pr' ||
            parsedNowLocation === 'purchase/pending-po' ||
            parsedNowLocation === 'purchase/pending-received' ||
            parsedNowLocation === 'purchase/quantity-category' ||
            parsedNowLocation === 'purchase/quantity-amount' ||
            parsedNowLocation === 'purchase/to-approve' ||
            parsedNowLocation === 'inventory' ||
            parsedNowLocation === 'inventory/total-product' ||
            parsedNowLocation === 'inventory/total-inventory' ||
            parsedNowLocation === 'inventory/pending-receipt' ||
            parsedNowLocation === 'inventory/pending-transfer' ||
            parsedNowLocation === 'inventory/total-category' ||
            parsedNowLocation === 'inventory/current-stock' ||
            parsedNowLocation === 'asset' ||
            parsedNowLocation === 'asset/pending-purchase-request' ||
            parsedNowLocation === 'asset/pending-purchase-order' ||
            parsedNowLocation === 'asset/pending-purchase-received' ||
            parsedNowLocation === 'asset/total-equipment' ||
            parsedNowLocation === 'asset/total-asset' ||
            parsedNowLocation === 'asset/running-depreciation' ||
            parsedNowLocation === 'asset/done-depreciation' ||
            parsedNowLocation === 'asset/pending-depreciation' ||
            parsedNowLocation === 'asset/total-scrap-product' ||
            parsedNowLocation === 'asset/equipment-category-1' ||
            parsedNowLocation === 'asset/equipment-category-2' ||
            parsedNowLocation === 'fat') ? (
            <Box key={index}>
              {/* <Text color={route.color} fz="xs" fw="bold" pb={10}>
                {route.title}
              </Text> */}
              {route.title === 'YKBUT'
                ? route.subTitleItems.map((subTitle, index) => {
                    return (
                      <Box key={index}>
                        <img className="w-[100%]" src={ybkutLogo} />
                        <Accordion.Item value={subTitle.subTitle} style={{ borderRadius: 8 }}>
                          <Accordion.Control
                            className="rounded-lg"
                            sx={{
                              ':hover': {
                                cursor: 'pointer',
                                backgroundColor: ' #dae3fe',
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
                                    paddingTop: 5,
                                    borderRadius: 8,
                                    ':hover': {
                                      cursor: 'pointer',
                                      backgroundColor: ' rgba(59, 130, 246, 1)',
                                      borderRadius: 8,
                                    },
                                    backgroundColor: isActive ? 'rgba(59, 130, 246, 1)' : 'none',
                                    // opacity: isActive ? 0.7 : 0.5,
                                  }}>
                                  <Text fz="13px" color="#070000" fw="bold">
                                    {routeItem.title}
                                  </Text>
                                </Accordion.Panel>
                              </Link>
                            );
                          })}
                        </Accordion.Item>
                      </Box>
                    );
                  })
                : null}
            </Box>
          ) : route.title !== 'LANDING PAGE' &&
            (parsedNowLocation === 'daycare' || parsedNowLocation === 'daycare/revenue-list') ? (
            <Box key={index}>
              {route.title === 'UT DAYCARE'
                ? route.subTitleItems.map((subTitle, index) => {
                    return (
                      <Box key={index}>
                        <img className="w-[100%]" src={dcareLogo} />
                        <Accordion.Item value={subTitle.subTitle} style={{ borderRadius: 8 }}>
                          <Accordion.Control
                            className="rounded-lg"
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
                                    paddingTop: 5,
                                    borderRadius: 8,
                                    ':hover': {
                                      cursor: 'pointer',
                                      backgroundColor: 'rgba(160, 160, 160, 0.592)',
                                      borderRadius: 8,
                                    },
                                    backgroundColor: isActive
                                      ? 'rgba(160, 160, 160, 0.877)'
                                      : 'none',
                                    // opacity: isActive ? 0.7 : 0.5,
                                  }}>
                                  <Text fz="13px" color="#070000" fw="bold">
                                    {routeItem.title}
                                  </Text>
                                </Accordion.Panel>
                              </Link>
                            );
                          })}
                        </Accordion.Item>
                      </Box>
                    );
                  })
                : null}
            </Box>
          ) : route.title !== 'LANDING PAGE' &&
            (parsedNowLocation === 'nusantara-dashboard' ||
              parsedNowLocation === 'kipl' ||
              parsedNowLocation === 'kipl/demand' ||
              parsedNowLocation === 'kipl/project' ||
              parsedNowLocation === 'kipl/quotation' ||
              parsedNowLocation === 'kipl/po-spk' ||
              parsedNowLocation === 'kipl/status-close' ||
              parsedNowLocation === 'kipl/reporting' ||
              parsedNowLocation === 'kipl/ar-performance' ||
              parsedNowLocation === 'kipl/customer-coverage' ||
              parsedNowLocation === 'kipl/non-regular-students' ||
              parsedNowLocation === 'akademik/semua-lulusan' ||
              parsedNowLocation === 'akademik/lulusan-regular' ||
              parsedNowLocation === 'akademik/lulusan-non-regular' ||
              parsedNowLocation === 'akademik/lulusan-csr' ||
              parsedNowLocation === 'akademik/siswa-regular-do' ||
              parsedNowLocation === 'akademik/jumlah-siswa' ||
              parsedNowLocation === 'akademik/jumlah-alumni' ||
              parsedNowLocation === 'akademik') ? (
            <Box key={index}>
              {/* <Text color={route.color} fz="xs" fw="bold" pb={10}>
                {route.title}
              </Text> */}
              {route.title === 'UT-SCHOOL'
                ? route.subTitleItems.map((subTitle, index) => {
                    return (
                      <Box key={index}>
                        <img className="w-[100%]" src={schoolLogo} />
                        <Accordion.Item value={subTitle.subTitle} style={{ borderRadius: 8 }}>
                          <Accordion.Control
                            className="rounded-lg"
                            sx={{
                              ':hover': {
                                cursor: 'pointer',
                                backgroundImage:
                                  'linear-gradient(90deg, rgba(253, 224, 71, 1), rgba(234, 179, 8, 1))',
                              },
                            }}>
                            <Flex gap={10}>
                              <ThemeIcon variant="light" radius="sm" size="sm" color={route.color}>
                                {subTitle.icon}
                              </ThemeIcon>
                              <Text
                                fz="sm"
                                fw={activeSubtitle === subTitle.subTitle ? '1000' : '800'}
                                color={
                                  parsedNowLocation === 'nusantara-dashboard'
                                    ? '#ffffff'
                                    : route.color
                                }>
                                {subTitle.subTitle}
                              </Text>
                            </Flex>
                          </Accordion.Control>
                          {subTitle.routeItems.map((routeItem, index) => {
                            const isActive = parsedNowLocation === routeItem.path;
                            return (
                              <Link
                                to={routeItem.path}
                                style={{
                                  textDecoration: 'none',
                                  color:
                                    parsedNowLocation === 'nusantara-dashboard' ? 'white' : 'black',
                                }}
                                key={index}>
                                <Accordion.Panel
                                  sx={{
                                    paddingLeft: 30,
                                    paddingTop: 5,
                                    borderRadius: 8,
                                    ':hover': {
                                      cursor: 'pointer',
                                      backgroundColor:
                                        'linear-gradient(90deg, rgba(253, 224, 71, 1), rgba(234, 179, 8, 1))',
                                      borderRadius: 8,
                                    },
                                    backgroundColor: isActive ? 'rgba(253, 224, 71, 1)' : 'none',
                                    // opacity: isActive ? 0.7 : 0.5,
                                  }}>
                                  {parsedNowLocation === 'nusantara-dashboard' ? (
                                    <Text fz="13px" color="#ffffff" fw="bold">
                                      {routeItem.title}
                                    </Text>
                                  ) : (
                                    <Text fz="13px" color="#070000" fw="bold">
                                      {routeItem.title}
                                    </Text>
                                  )}
                                </Accordion.Panel>
                              </Link>
                            );
                          })}
                        </Accordion.Item>
                      </Box>
                    );
                  })
                : null}
            </Box>
          ) : (route.title !== 'LANDING PAGE' && parsedNowLocation === 'poliklinik') ||
            parsedNowLocation === 'poliklinik-analytic' ? (
            <Box key={index}>
              {/* <Text color={route.color} fz="xs" fw="bold" pb={10}>
              {route.title}
            </Text> */}
              {route.title === 'Poliklinik'
                ? route.subTitleItems.map((subTitle, index) => {
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
                                    paddingTop: 5,
                                    borderRadius: 8,
                                    ':hover': {
                                      cursor: 'pointer',
                                      backgroundColor: 'rgba(160, 160, 160, 0.592)',
                                      borderRadius: 8,
                                    },
                                    backgroundColor: isActive
                                      ? 'rgba(160, 160, 160, 0.877)'
                                      : 'none',
                                    // opacity: isActive ? 0.7 : 0.5,
                                  }}>
                                  <Text fz="13px" color="#070000" fw="bold">
                                    {routeItem.title}
                                  </Text>
                                </Accordion.Panel>
                              </Link>
                            );
                          })}
                        </Accordion.Item>
                      </Box>
                    );
                  })
                : null}
            </Box>
          ) : undefined}
        </>
      );
    });
  };

  return (
    <Accordion
      p={10}
      // sx={{ backgroundColor: 'rgb(238, 238, 238)', borderRadius: 8 }}
      defaultValue={accordionActiveValue}>
      {renderAccordion()}
    </Accordion>
  );
};
