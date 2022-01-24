import { useRealtimeSharedState } from "realtimely";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/react";

const Slide: React.FC = () => {
  //slideの状態
  const [slideState, setSlideState] = useRealtimeSharedState(
    {
      slideNumber: 1,
    },
    "slideState"
  );

  //slideの最大ページ数
  const MaxSlideNumber = 19;

  const goNext = () => {
    slideState.slideNumber += 1;
    if (slideState.slideNumber >= MaxSlideNumber) {
      slideState.slideNumber = MaxSlideNumber;
      setSlideState(slideState);
    } else {
      setSlideState(slideState);
    }
  };

  const goPrevious = () => {
    slideState.slideNumber -= 1;
    if (slideState.slideNumber <= 1) {
      slideState.slideNumber = 1;
      setSlideState(slideState);
    } else {
      setSlideState(slideState);
    }
  };

  // slide Path
  let slidePath = "/slide/" + "slide" + slideState.slideNumber + ".png";

  const slideUrl = "url(" + slidePath + ")";

  return (
    <>
      <Box boxShadow="base">
        <Image src={slidePath} width={600} height={300} alt="slide" />
      </Box>
      <Flex justify="center">
        <Tag colorScheme="blue">{slideState.slideNumber}</Tag>
      </Flex>
      <Flex justify="center">
        <Button onClick={goPrevious} colorScheme="blue" size="sm">
          ＜prev
        </Button>
        <Button onClick={goNext} colorScheme="blue" size="sm">
          next＞
        </Button>
      </Flex>
    </>
  );
};

export default Slide;
