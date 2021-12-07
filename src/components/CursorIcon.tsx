import Image from "next/image";
import styles from "styles/CursorIcon.module.css";

const CursorIcon = (props) => {
  const userData = JSON.parse(props.userInfo);
  return (
    <>
      <Image
        className="avatar"
        src={userData.photoURL}
        width={80}
        height={80}
        alt={"icon"}
      />
      <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
      <div className={styles.username}>{userData.displayName}</div>
    </>
  );
};

export default CursorIcon;
