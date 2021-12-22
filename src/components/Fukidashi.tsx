import style from "styles/fukidashi.module.css";

interface Props {
  text: string;
  avator: string;
  name: string;
  color: string;
}

const Fukidashi = (props: Props) => {
  return (
    <div className={style.fukidashi_container}>
      <div className={style.arrow_box}>
        {props.text}
        <div className={style.arrow_box_after}></div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: 40,
          marginTop: 20,
          fontSize: 40,
        }}
      >
        <div style={{ fontSize: "12px" }}>{props.name}</div>
      </div>
    </div>
  );
};

export default Fukidashi;
