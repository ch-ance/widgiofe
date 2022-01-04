interface LabeledInputProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default (props: LabeledInputProps) => (
  <>
    <label
      id={`${props.name}-label`}
      title={props.name}
      aria-label={props.name}
    >
      {props.name}
    </label>
    <input
      aria-labelledby={`${props.name}-label`}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      type={props.name}
    />
  </>
);
