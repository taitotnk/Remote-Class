import { useRealtimeUserAction, useRealtimeSharedState } from "realtimely";
import { useState } from "react";
import { Button, Wrap, WrapItem } from "@chakra-ui/react";

export const EmojiExp: React.FC = () => {
  const [goodState, setGoodState] = useRealtimeSharedState(
    { count: 0 },
    `goodState`
  );

  const [OKState, setOKState] = useRealtimeSharedState({ count: 0 }, `OKState`);

  const [NGState, setNGState] = useRealtimeSharedState({ count: 0 }, `NGState`);

  const [funnyState, setFunnyState] = useRealtimeSharedState(
    { count: 0 },
    `funnyState`
  );

  const [sadState, setSadState] = useRealtimeSharedState(
    { count: 0 },
    `sadState`
  );

  const onClick = (emoji: string) => {
    if (emoji === "👍") {
      setGoodState({ count: goodState.count + 1 });
    } else if (emoji === "🆗") {
      setOKState({ count: OKState.count + 1 });
    } else if (emoji === "🆖") {
      setNGState({ count: NGState.count + 1 });
    } else if (emoji === "😂") {
      setFunnyState({ count: funnyState.count + 1 });
    } else if (emoji === "😢") {
      setSadState({ count: sadState.count + 1 });
    }
  };

  const clear = () => {
    setGoodState({ count: 0 });
    setOKState({ count: 0 });
    setNGState({ count: 0 });
    setFunnyState({ count: 0 });
    setSadState({ count: 0 });
  };

  return (
    <>
      <Wrap spacing="30px" justify="center">
        {goodState.count < 10 && (
          <Button colorScheme="blue" size="sm" onClick={() => onClick("👍")}>
            👍 {goodState.count}
          </Button>
        )}
        {goodState.count >= 10 && goodState.count < 20 && (
          <Button colorScheme="blue" size="md" onClick={() => onClick("👍")}>
            👍 {goodState.count}
          </Button>
        )}
        {goodState.count >= 20 && (
          <Button colorScheme="blue" size="lg" onClick={() => onClick("👍")}>
            👍 {goodState.count}
          </Button>
        )}

        {OKState.count < 10 && (
          <Button colorScheme="green" size="sm" onClick={() => onClick("🆗")}>
            🆗 {OKState.count}
          </Button>
        )}
        {OKState.count >= 10 && OKState.count < 20 && (
          <Button colorScheme="green" size="md" onClick={() => onClick("🆗")}>
            🆗 {OKState.count}
          </Button>
        )}
        {OKState.count >= 20 && (
          <Button colorScheme="green" size="lg" onClick={() => onClick("🆗")}>
            🆗 {OKState.count}
          </Button>
        )}

        {NGState.count < 10 && (
          <Button colorScheme="red" size="sm" onClick={() => onClick("🆖")}>
            🆖 {NGState.count}
          </Button>
        )}
        {NGState.count >= 10 && NGState.count < 20 && (
          <Button colorScheme="red" size="md" onClick={() => onClick("🆖")}>
            🆖 {NGState.count}
          </Button>
        )}
        {NGState.count >= 20 && (
          <Button colorScheme="red" size="lg" onClick={() => onClick("🆖")}>
            🆖 {NGState.count}
          </Button>
        )}

        {funnyState.count < 10 && (
          <Button colorScheme="yellow" size="sm" onClick={() => onClick("😂")}>
            😂 {funnyState.count}
          </Button>
        )}
        {funnyState.count >= 10 && funnyState.count < 20 && (
          <Button colorScheme="yellow" size="md" onClick={() => onClick("😂")}>
            😂 {funnyState.count}
          </Button>
        )}
        {funnyState.count >= 20 && (
          <Button colorScheme="yellow" size="lg" onClick={() => onClick("😂")}>
            😂 {funnyState.count}
          </Button>
        )}

        {sadState.count < 10 && (
          <Button colorScheme="purple" size="sm" onClick={() => onClick("😢")}>
            😢 {sadState.count}
          </Button>
        )}
        {sadState.count >= 10 && sadState.count < 20 && (
          <Button colorScheme="purple" size="md" onClick={() => onClick("😢")}>
            😢 {sadState.count}
          </Button>
        )}
        {sadState.count >= 20 && (
          <Button colorScheme="purple" size="lg" onClick={() => onClick("😢")}>
            😢 {sadState.count}
          </Button>
        )}

        {/* <Button colorScheme="blue" onClick={() => onClick("👍")}>
          👍 {goodState.count}
        </Button>
        <Button colorScheme="green" onClick={() => onClick("🆗")}>
          🆗 {OKState.count}
        </Button>
        <Button colorScheme="red" onClick={() => onClick("🆖")}>
          🆖 {NGState.count}
        </Button>
        <Button colorScheme="yellow" onClick={() => onClick("😂")}>
          😂 {funnyState.count}
        </Button>
        <Button colorScheme="purple" onClick={() => onClick("😢")}>
          😢 {sadState.count}
        </Button> */}
        <Button colorScheme="blackAlpha" onClick={clear}>
          Clear
        </Button>
      </Wrap>
    </>
  );
};
