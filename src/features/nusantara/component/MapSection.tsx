import { Box, Paper, SimpleGrid, Text } from '@mantine/core';
import { Maps } from '../../../components/map/Map';
import { useGetSchoolLocations } from '../api/useGetSchoolLocations';

export const MapSection = () => {
  const { data: schoolLocations } = useGetSchoolLocations();

  return (
    <SimpleGrid cols={1}>
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 10,

          backgroundColor: 'transparent',
          border: '1px solid #31313d',
          // transition: 'transform 0.3s ease-in-out',
        }}
        // sx={{
        //   ':hover': {
        //     cursor: 'pointer',
        //     transform: 'scale(1.02)',
        //   },
        // }}
      >
        <Text color="#ffffff" fw="bold" fz="sm" pb={2}>
          UT SCHOOL LOCATIONS
        </Text>
        <Box>
          <Maps schoolLocations={schoolLocations} />
          <div className="flex text-white gap-4">
            <Box mt={10} className="legend-container">
              <div className="info legend" style={{ fontSize: '12px', color: '#ffffff' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '5px',
                  }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'green',
                      display: 'inline-block',
                    }}></span>
                  Full Class
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '5px',
                  }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'yellow',
                      display: 'inline-block',
                    }}></span>
                  Partially Available Class
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'red',
                      display: 'inline-block',
                    }}></span>
                  Available Class
                </div>
              </div>
            </Box>

            {/* Flag Legend Manual */}
            <Box mt={10} className="legend-container">
              <div className="info legend" style={{ fontSize: '12px', color: '##ffffff' }}>
                <div
                  className="flex"
                  style={{ alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                  <svg width="10" height="10">
                    <polygon points="2,8 8,5 2,2" fill="green" />
                  </svg>{' '}
                  No AR
                </div>
                <div
                  className="flex"
                  style={{ alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                  <svg width="10" height="10">
                    <polygon points="2,8 8,5 2,2" fill="yellow" />
                  </svg>{' '}
                  AR
                </div>
                <div className="flex" style={{ alignItems: 'center', gap: '8px' }}>
                  <svg width="10" height="10">
                    <polygon points="2,8 8,5 2,2" fill="red" />
                  </svg>{' '}
                  No Transaction
                </div>
              </div>
            </Box>
          </div>
        </Box>
      </Paper>
    </SimpleGrid>
  );
};
