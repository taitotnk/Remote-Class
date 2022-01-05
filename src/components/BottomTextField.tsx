import { printIntrospectionSchema } from "graphql";
import style from "styles/textfield.module.css";

interface Props {
  onChange: (text: string) => void;
  value: string;
}

const BottomTextField = (props: Props) => {
  const chatValue = JSON.parse(props.value || "{}");

  return (
    <div className={style.textfield_container}>
      <input
        onChange={(e) => props.onChange(e.target.value)}
        value={chatValue.text}
        className={style.textbox}
        type="text"
        name="q"
        placeholder="文字を入力してください"
        autoComplete="off"
        maxLength={20}
      />
    </div>
  );
};

export default BottomTextField;
