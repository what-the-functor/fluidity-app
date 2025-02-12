// Copyright 2022 Fluidity Money. All rights reserved. Use of this
// source code is governed by a GPL-style license that can be found in the
// LICENSE.md file.

import { useChainContext } from "hooks/ChainContext";
import {
  Display,
  Text,
  numberToMonetaryString,
  GeneralButton,
  useViewport,
  Video,
} from "@fluidity-money/surfing";
import styles from "./Demo.module.scss";

const Demo = () => {
  const { apiState } = useChainContext();
  const { onChainData } = apiState;

  const { width } = useViewport();
  const breakpoint = 620;

  const weeklyAvailableRewards = onChainData.data?.ethPool/52

  const handleConnectWallet = () =>
    (window.location.href = "https://app.fluidity.money/wtf");
  const handleLaunchFluidity = () =>
    (window.location.href = "https://app.fluidity.money/");

  return (
    <>
      <div className={`${styles.container} bg-light`}>
        <Video
          src={"/assets/videos/FluidityOpportunityB.mp4"}
          type={"none"}
          loop={true}
        />

        <div className={styles.inner} id="demo">
          {!!onChainData.data && (
            <>
              <Display size={width > breakpoint ? "lg" : "sm"}>
                {numberToMonetaryString(weeklyAvailableRewards)}
              </Display>
              <Display size={width > breakpoint ? "xs" : "xxs"} color={"gray"}>
                Weekly available Fluid Rewards.
              </Display>
            </>
          )}
          <Text size={width > breakpoint ? "xl" : "lg"}>
            Connect your wallet to see what you could make.
          </Text>
          <section>
            <GeneralButton
              type={"primary"}
              size={"large"}
              handleClick={handleConnectWallet}
            >
              Connect Wallet
            </GeneralButton>
            <GeneralButton
              type={"secondary"}
              size={width > breakpoint ? "large" : "small"}
              handleClick={handleLaunchFluidity}
            >
              Launch Fluidity
            </GeneralButton>
          </section>
        </div>
      </div>
    </>
  );
};

export default Demo;
