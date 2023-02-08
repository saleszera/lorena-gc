import { Button, useTheme, IButtonProps } from 'native-base';
import { ArrowRight } from 'phosphor-react-native';

const NextButton = (props: IButtonProps) => {
  const {
    colors: { light },
  } = useTheme();

  return (
    <Button rounded="full" w="1/2" {...props}>
      <ArrowRight color={light[100]} />
    </Button>
  );
};

export default NextButton;
