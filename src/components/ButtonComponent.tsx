import { Button } from "@mui/material";

interface IButtonComponent {
  text: string;
  extraClass?: string;
  onSubmit: any;
}
const ButtonComponent = (props: IButtonComponent) => {
  const { text, extraClass, onSubmit } = props;
  return (
    <Button variant="contained" className={extraClass || ""} onClick={onSubmit}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
