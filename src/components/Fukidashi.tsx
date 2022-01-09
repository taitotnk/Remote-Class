import style from "styles/fukidashi.module.css";
import Image from "next/image";

interface Props {
  text: string;
  avator: string;
  name: string;
  color: string;
}

const Fukidashi = (props: Props) => {
  const chatValue = JSON.parse(props.text || "{}");
  return (
    <div className={style.fukidashi_container}>
      <Image src={chatValue.img} width={40} height={40} alt={"chat_icon"} />
      <div style={{ color: "black" }}>{chatValue.name}</div>
      <div className={style.arrow_box}>
        {chatValue.text}
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
      ></div>
    </div>
  );
};

export default Fukidashi;
