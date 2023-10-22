import { Accordion, Box, Flex, Text, ThemeIcon, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { routes } from '~/routes';

export const AccordionRoutes = () => {
  const theme = useMantineTheme();

  const renderAccordion = () => {
    return routes.map((route, index) => {
      return (
        <>
          <Box key={index}>
            <Text>{route.title}</Text>
          </Box>
          {route.subTitleItems.map(subTitle => {
            return (
              <>
                <Accordion.Item value={subTitle.subTitle} key={subTitle.key}>
                  <Accordion.Control>
                    <Flex gap={10}>
                      <ThemeIcon variant="light">{subTitle.icon}</ThemeIcon>
                      <Text fw="bold">{subTitle.subTitle}</Text>
                    </Flex>
                  </Accordion.Control>
                  {subTitle.routeItems.map(routeItem => {
                    return (
                      <Link to={routeItem.path} style={{ textDecoration: 'none', color: 'black' }}>
                        <Accordion.Panel
                          sx={{
                            paddingLeft: 30,
                            ':hover': { cursor: 'pointer', backgroundColor: theme.colors.blue[2] },
                          }}
                          key={routeItem.key}>
                          <Text>{routeItem.title}</Text>
                        </Accordion.Panel>
                      </Link>
                    );
                  })}
                </Accordion.Item>
              </>
            );
          })}
        </>
      );
    });
  };

  return <Accordion variant="filled">{renderAccordion()}</Accordion>;
};
