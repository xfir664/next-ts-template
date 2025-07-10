import createBaseClassName from "@/app/scripts/createBaseClassName";
import input from "./input.module.scss";

type MyInputType = Readonly<{
  name: string;
  id?: string;
  inputType: string;
  inputVariant?: string;
  value?: string;
  className?: string;
  children?: any;
  placeholder?: string;
  onClick?: () => any;
  onChange?: (event: any) => any;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
}>;


export default function MyInput(props: MyInputType) {
  const {
    id,
    className,
    value,
    name,
    children,
    inputType,
    onChange,
    onClick,
    placeholder,
    isDisabled,
    isRequired,
    isChecked,
    inputVariant,
  } = props;

  const iconClass = [
    input["input"],
    input[inputType],
    inputVariant ? input[inputVariant] : null,
    className || null,
  ];

  const baseClassName = createBaseClassName(iconClass);

  return (
    <label className={baseClassName}>
      <div className="input-wrapper">
        <input
          id={id}
          onChange={onChange}
          onClick={onClick}
          type={inputType}
          className="input-action"
          name={name}
          value={value}
          disabled={isDisabled}
          placeholder={placeholder}
          required={isRequired}
          checked={isChecked}
        />
        <div className="input-container">{children}</div>
      </div>
    </label>
  );
}
