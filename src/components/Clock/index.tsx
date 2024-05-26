import { useState, useEffect } from "react";

import { getCurrentTime } from "@/lib/adaptors/dateTime";
import { Txt } from "@/components/Txt";

import { s } from "./Clock.style";

const SECONDS_10 = 10_000;

interface State {
  hours: string;
  minutes: string;
  seconds: string;
}

export const Clock = (): JSX.Element => {
  const [time, setTime] = useState<State>(() => getCurrentTime());

  const { hours, minutes } = time;

  useEffect(() => {
    let isMounted = true;

    const interval = setInterval(() => {
      if (isMounted) {
        setTime(getCurrentTime());
      }
    }, SECONDS_10);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Txt style={s.time}>{`${hours}:${minutes}`}</Txt>
    </>
  );
};
