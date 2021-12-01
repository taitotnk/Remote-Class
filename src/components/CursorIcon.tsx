import Image from "next/image";
import styles from "styles/CursorIcon.module.css";

type Props = {
  userInfo: { color: string; avatar: string; name: string };
};

const CursorIcon = (props: Props) => {
  const userInfo = props.userInfo;
  return (
    <>
      <Image
        className="avatar"
        src={userInfo.avatar}
        width={80}
        height={80}
        alt={"icon"}
      />
      <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
      <div className={styles.username} style={{ color: userInfo.color }}>
        {props.userInfo.name}
      </div>
    </>
  );
};

export default CursorIcon;
