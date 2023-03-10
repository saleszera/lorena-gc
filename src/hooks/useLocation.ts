import { useCallback, useEffect, useState } from 'react';

import * as Location from 'expo-location';

interface IGetAdrress {
  latitude: number;
  longitude: number;
}

interface IGetGeoLocation {
  address: string;
}

const useLocation = () => {
  const [permission, setPermission] = useState<Location.PermissionStatus>();

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      setPermission(status);
    };

    void getPermission();
  }, []);

  const getCurrentLocation = useCallback(async () => {
    try {
      if (permission !== 'granted') {
        throw new Error('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync();

      return location;
    } catch (error) {
      return error;
    }
  }, [Location, permission]);

  const getGeoLocation = useCallback(
    async ({ address }: IGetGeoLocation) => {
      try {
        if (permission !== 'granted') {
          throw new Error('Permission to access location was denied');
        }

        const [location] = await Location.geocodeAsync(address);

        return location;
      } catch (error) {
        return error;
      }
    },
    [Location, permission],
  );

  const getAdrress = useCallback(
    async ({ latitude, longitude }: IGetAdrress) => {
      try {
        if (permission !== 'granted') {
          throw new Error('Permission to access location was denied');
        }

        const [address] = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        return address;
      } catch (error) {
        return error;
      }
    },
    [Location, permission],
  );

  return {
    getCurrentLocation,
    getGeoLocation,
    getAdrress,
  };
};

export default useLocation;
