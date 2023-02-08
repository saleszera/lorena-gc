import { useEffect, useState } from 'react';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Box, PresenceTransition, Text } from 'native-base';

import { NextButton, WelcomeInfo } from '../components';
import { StackNavigationProp } from '../routers/types';

const infos = [
  <WelcomeInfo
    key="first"
    info={`Este App\ntem como objetivo te lembrar\nde quando será a coleta de lixo no seu bairro`}
  />,
  <WelcomeInfo
    key="second"
    info={`Para isso\nprecisaremos saber qual\né o seu bairro 🤗️`}
  />,
];

const Welcome = () => {
  const [index, setIndex] = useState(0);

  const { navigate } = useNavigation<StackNavigationProp>();
  const isFocused = useIsFocused();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (index < 1) {
      timer = setTimeout(() => {
        setIndex((oldIndex) => oldIndex + 1);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  useEffect(() => {
    if (isFocused && index > 0) {
      setIndex(0);
    }
  }, [isFocused]);

  return (
    <Box flex={1} px="4" safeArea>
      <Text fontSize="5xl" adjustsFontSizeToFit>
        Bem vindo!
      </Text>
      <Box flex={1} justifyContent="space-between" py="4">
        <Box flex={1} justifyContent="center">
          {infos[index]}
        </Box>
        {index === 1 && (
          <PresenceTransition
            visible={index === 1}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 350,
              },
            }}
          >
            <NextButton
              alignSelf="flex-end"
              onPress={() => {
                navigate('selectDistrict');
              }}
            />
          </PresenceTransition>
        )}
      </Box>
    </Box>
  );
};

export default Welcome;
