import { useOnlineUsers } from "realtimely";

const RealtimeHeader = () => {
  const { onlineUserList } = useOnlineUsers();
  return (
    <header>
      {onlineUserList.map((user: any) => (
        <div key={user.SK}>{user.name}</div>
      ))}
    </header>
  );
};

export default RealtimeHeader;
