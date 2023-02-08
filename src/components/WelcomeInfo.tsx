import { PresenceTransition, View, Text } from 'native-base';

interface IWelcomeInfo {
  info: string;
}

const WelcomeInfo = ({ info }: IWelcomeInfo) => (
  <PresenceTransition
    visible
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
      transition: {
        duration: 250,
      },
    }}
  >
    <View justifyContent="center">
      <Text fontSize="2xl" lineHeight="lg" letterSpacing="lg">
        {info}
      </Text>
    </View>
  </PresenceTransition>
);

export default WelcomeInfo;
