import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useUser, UserButton } from '@clerk/nextjs';
import CustomConnectWalletBtn from '../components/customConnectWalletBtn';

import { Flex } from '@chakra-ui/react';
import ParentWrapper from '../components/parentWrapper';
import Link from 'next/link';

function WalletConnect() {
  const { user } = useUser();

  console.log('user', user);

  return (
    <ParentWrapper>
      <Flex flexDirection={'column'}>
        <ConnectButton.Custom>
          {(props) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready =
              props.mounted && props.authenticationStatus !== 'loading';
            const connected =
              ready &&
              props.account &&
              props.chain &&
              (!props.authenticationStatus ||
                props.authenticationStatus === 'authenticated');

            return (
              <CustomConnectWalletBtn
                {...props}
                ready={ready}
                connected={connected}
              />
            );
          }}
        </ConnectButton.Custom>
        <UserButton />
        <Link href={'/screens/kyc'} >Complete Kyc</Link>
      </Flex>
    </ParentWrapper>
  );
}

export default WalletConnect;
