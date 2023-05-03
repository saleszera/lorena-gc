import { Button, Box, Text, useTheme, IButtonProps } from 'native-base';
import { BellSimpleSlash, BellRinging } from 'phosphor-react-native';

interface INotificationButton extends IButtonProps {
  enabled: boolean;
  onToggle: () => void;
}

const NotificationButton = ({
  enabled,
  onToggle,
  ...rest
}: INotificationButton) => {
  const {
    colors: { light, gray },
  } = useTheme();

  return (
    <Button
      rounded="full"
      onPress={onToggle}
      borderWidth="1"
      borderColor={enabled ? 'light.100' : 'gray.400'}
      bg={enabled ? 'blue.500' : 'light.100'}
      _pressed={{
        bg: 'blue.600',
      }}
      {...rest}
    >
      <Box flexDirection="row">
        {enabled ? (
          <>
            <BellRinging color={light[100]} weight="duotone" />
            <Text color="light.100" ml="1">
              Desativar notificações
            </Text>
          </>
        ) : (
          <>
            <BellSimpleSlash color={gray[900]} weight="duotone" />
            <Text ml="1">Ativar notificações</Text>
          </>
        )}
      </Box>
    </Button>
  );
};

export default NotificationButton;
