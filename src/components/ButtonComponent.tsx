import { Button } from "@mui/material";

interface IButtonComponent {
  text: string;
  extraClass?: string;
}
const ButtonComponent = (props: IButtonComponent) => {
  const { text, extraClass } = props;
  return (
    <Button variant="contained" className={extraClass || ""}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
