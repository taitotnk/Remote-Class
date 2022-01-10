import style from "styles/fukidashi.module.css";
import Image from "next/image";
import { HStack } from "@chakra-ui/react";

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
      <HStack spacing="5px">
        <Image
          src={chatValue.img}
          className="chat_icon"
          width={30}
          height={30}
          alt={"chat_icon"}
        />
        <div style={{ color: "black" }}>{chatValue.name}</div>
      </HStack>
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
      <style jsx global>{`
        .chat_icon {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Fukidashi;
