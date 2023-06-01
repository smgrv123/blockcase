import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SignInButton, useUser, UserButton } from '@clerk/nextjs';
import CustomConnectWalletBtn from '../components/customConnectWalletBtn';

function walletConnect() {
  const { user } = useUser();

  console.log('user', user);

  return (
    <div>
      <div>{user?.fullName}</div>
      <div>{user?.primaryEmailAddress?.emailAddress}</div>
      <ConnectButton.Custom>
        {(props) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = props.mounted && props.authenticationStatus !== 'loading';
          const connected = ready && props.account && props.chain && (!props.authenticationStatus || props.authenticationStatus === 'authenticated');

          return (
            <CustomConnectWalletBtn {...props} ready={ready} connected={connected} />
          );
        }}
      </ConnectButton.Custom>
      <UserButton />
    </div>
  );
}

export default walletConnect;
