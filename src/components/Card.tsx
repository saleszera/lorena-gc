import { useMemo } from 'react';

import { Box, Heading, Text, useDisclose } from 'native-base';

import { daysOfTheWeek } from '../utils';
import NotificationButton from './NotificationButton';

interface ICard {
  district: string;
  details: string;
  daysOfWeek: number[];
}

const Card = ({ district, details, daysOfWeek }: ICard) => {
  const { isOpen: isEnabled, onToggle } = useDisclose();

  const week = useMemo(
    () =>
      daysOfWeek.reduce((accWeek, currentDay, index) => {
        const day =
          daysOfTheWeek[currentDay] +
          (![0, 6].includes(currentDay) ? '-feira' : '');

        if (index < daysOfWeek.length - 1) {
          return accWeek + `${day}, `;
        }

        return accWeek + day;
      }, ''),
    [daysOfTheWeek, daysOfWeek],
  );

  return (
    <Box
      borderColor="coolGray.300"
      borderWidth="1"
      p="4"
      rounded="lg"
      w="100%"
      maxW={320}
      overflow="hidden"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'gray.50',
      }}
    >
      <Heading size="md" lineHeight="2xl">
        {district}
      </Heading>
      <Box>
        <Text fontSize="sm" fontWeight="bold">
          Detalhes:
        </Text>
        <Text adjustsFontSizeToFit>{details}</Text>
      </Box>
      {Boolean(week.length) && (
        <Box>
          <Text fontSize="sm" fontWeight="bold">
            Dias da semana:
          </Text>
          <Text adjustsFontSizeToFit>{week}</Text>
        </Box>
      )}
      <NotificationButton enabled={isEnabled} onToggle={onToggle} mt="4" />
    </Box>
  );
};

export default Card;
