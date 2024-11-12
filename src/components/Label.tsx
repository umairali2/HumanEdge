import { FormLabel } from "@mui/material";

export interface Props {
  children: string;
}

const Label = (props: Props) => {
  const { children } = props;

  return <FormLabel>{children}</FormLabel>;
};

export default Label;
