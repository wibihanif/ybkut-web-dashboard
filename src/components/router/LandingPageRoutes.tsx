import {
  Accordion,
  // Box,
  // Flex,
  // Image,
  // SimpleGrid,
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
import bunga from '~/assets/Group.svg';
import bunga1 from '~/assets/Group(1).svg';

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
      <div className="">
        <div className="flex justify-between">
          <img className="flex items-start justify-start h-[150px]" src={bunga} />
          <img className="h-24 mt-10" src={ybkutLogo} />
          <img className="rotate-90 flex items-end justify-end h-[150px]" src={bunga} />
        </div>
        <div className="flex justify-center mt-5">
          <div
            style={{ color: 'rgba(50, 118, 138, 1)' }}
            className="text-center font-extrabold text-3xl w-[700px]">
            Selamat Datang di Dashboard Odoo Yayasan Karya Bakti United Tractors (YKBUT)
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12 mt-5">
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                {route.title !== 'LANDING PAGE' ? (
                  <div
                    style={{ backgroundColor: 'rgba(245, 170, 73, 1)' }}
                    className="w-[400px] h-[190px] border border-none rounded-2xl p-5 flex justify-center items-center">
                    <div className="">
                      <Link
                        to={linkEntity[index - 1]}
                        style={{ textDecoration: 'none', color: 'white' }}
                        key={index}>
                        <img className="h-[150px] " src={saveLogo[index - 1]} />
                      </Link>
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-between">
          <img className="flex items-start justify-start h-[150px]" src={bunga1} />
          <div
            style={{ color: 'rgba(50, 118, 138, 1)' }}
            className="text-center font-extrabold text-2xl mt-10">
            Yayasan Karya Bakti United Tractors
          </div>
          <img className=" -rotate-90 flex items-end justify-end h-[150px]" src={bunga1} />
        </div>
      </div>
      // <Flex justify="center" align="center">
      //   <SimpleGrid cols={3} spacing={6} mt={20} sx={{ gap: '40px' }}>
      //     {routes.map((route, index) => {
      //       return (
      //         <React.Fragment key={index}>
      //           {route.title !== 'LANDING PAGE' ? (
      //             <Flex justify="center" align="center">
      //               <Box>
      //                 <Flex h="300px" justify="center" align="center">
      //                   <Box
      //                     sx={{
      //                       backgroundColor: 'rgba(160, 160, 160, 0.577)',
      //                       borderRadius: 8,
      //                       // height: '60%',
      //                       // width: '60%',
      //                       ':hover': {
      //                         cursor: 'pointer',
      //                         backgroundColor: 'rgba(211, 211, 211, 0.577)',
      //                         borderRadius: 8,
      //                       },
      //                     }}
      //                     // key={idx}
      //                     p={10}>
      //                     <Flex h="250px" justify="center" align="center" direction="row">
      //                       <Link
      //                         to={linkEntity[index - 1]}
      //                         style={{ textDecoration: 'none', color: 'white' }}
      //                         key={index}>
      //                         <Image
      //                           sx={{ objectFit: 'cover' }}
      //                           // width="400px"
      //                           // mb={20}
      //                           // height="100px"
      //                           src={saveLogo[index - 1]}
      //                           alt="GSI"
      //                         />
      //                       </Link>
      //                     </Flex>
      //                     {/*
      //                     </Accordion.Item> */}
      //                   </Box>
      //                 </Flex>
      //               </Box>
      //             </Flex>
      //           ) : null}
      //         </React.Fragment>
      //       );
      //     })}
      //   </SimpleGrid>
      // </Flex>
    );
  };

  return <Accordion defaultValue={accordionActiveValue}>{renderAccordion()}</Accordion>;
};
