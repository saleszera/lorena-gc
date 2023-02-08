/* eslint-disable @typescript-eslint/no-misused-promises */
import { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { LocationGeocodedAddress, LocationObject } from 'expo-location';
import {
  Box,
  Button,
  Select,
  Spinner,
  Stack,
  Text,
  useDisclose,
  useTheme,
} from 'native-base';
import { MapPin } from 'phosphor-react-native';

import { NextButton } from '../components';
import { useLocation } from '../hooks';
import { StackNavigationProp } from '../routers/types';
import { neighbour } from '../utils';

const SelectDistrict = () => {
  const [neightbourhood, setNeighbourhood] = useState<string | undefined>(
    undefined,
  );

  const { getCurrentLocation, getAdrress } = useLocation();
  const { navigate } = useNavigation<StackNavigationProp>();

  const {
    colors: { light },
  } = useTheme();

  const {
    isOpen: isLoading,
    onOpen: onStartLoading,
    onClose: onEndLoading,
  } = useDisclose();

  const districts = neighbour.map(({ name }) => name).sort();

  const getCurrentDistrict = useCallback(async () => {
    try {
      onStartLoading();

      const location = await getCurrentLocation();
      const { coords } = (location as LocationObject) ?? {};
      const { latitude, longitude } = coords;

      if (latitude !== null && longitude !== null) {
        const address = await getAdrress({ latitude, longitude });
        const { district } = (address as LocationGeocodedAddress) ?? {};

        if (district !== null) {
          const districtName = neighbour.find(({ name }) =>
            name.includes(district),
          );
          setNeighbourhood(districtName?.name ?? '');
        }
      }
    } catch (error) {
      return error;
    } finally {
      onEndLoading();
    }
  }, [getCurrentLocation, getAdrress, neighbour, onStartLoading, onEndLoading]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      timer = setTimeout(() => {
        onEndLoading();
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <Box flex={1} px="4" safeArea>
      <Text fontSize="5xl" adjustsFontSizeToFit lineHeight="lg">
        Para sabermos{'\n'}o seu bairro
      </Text>

      <Box flex={1} justifyContent="space-between" py="4">
        <Box flex={0.8} justifyContent="center">
          <Stack direction="row" space={2}>
            <Box flex={1}>
              <Select
                accessibilityLabel="choose district"
                onValueChange={(value) => {
                  setNeighbourhood(value);
                }}
                placeholder="Selecione o bairro"
                selectedValue={neightbourhood}
              >
                {districts.map((district, index) => (
                  <Select.Item
                    key={`${index}-${district}`}
                    label={district}
                    value={district}
                  />
                ))}
              </Select>
            </Box>
            <Button
              accessibilityLabel="find location"
              onPress={getCurrentDistrict}
              w="12"
            >
              {isLoading ? (
                <Spinner color={light[100]} />
              ) : (
                <MapPin color={light[100]} />
              )}
            </Button>
          </Stack>
        </Box>
        {neightbourhood !== undefined && (
          <NextButton
            alignSelf="flex-end"
            onPress={() => {
              navigate('dashboard', { district: neightbourhood });
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default SelectDistrict;
