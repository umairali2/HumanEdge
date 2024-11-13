import Label from "./Label";

interface TextAreaComponentProps {
  handleChange: (event: any, id: string) => void;
  label: string;
}
const TextAreaComponent = (props: TextAreaComponentProps) => {
  const { handleChange, label } = props;
  return (
    <>
      <Label>{label}</Label>
      <textarea
        color="primary"
        rows={10}
        placeholder="Enter your thoughts, if any"
        style={{ width: "100%", marginTop: "10px" }}
        onChange={(e) => handleChange(e, "thoughts")}
      />
    </>
  );
};

export default TextAreaComponent;
