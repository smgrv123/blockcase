import React from 'react';

function CustomConnectWalletBtn({
  account,
  chain,
  openAccountModal,
  openChainModal,
  openConnectModal,
  ready,
  connected,
}: {
  ready: boolean;
  connected: boolean;
  account: any;
  chain: any;
}): React.JSX.Element {
  return (
    <div
      {...(!ready && {
        'aria-hidden': true,
        style: {
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        },
      })}
    >
      {(() => {
        if (!connected) {
          return (
            <button onClick={openConnectModal} type="button">
              Connect Wallet
            </button>
          );
        }

        if (chain.unsupported) {
          return (
            <button onClick={openChainModal} type="button">
              Wrong network
            </button>
          );
        }

        return (
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={openChainModal} style={{ display: 'flex', alignItems: 'center' }} type="button">
              {chain.hasIcon && (
                <div
                  style={{
                    background: chain.iconBackground,
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    overflow: 'hidden',
                    marginRight: 4,
                  }}
                >
                  {/* {chain.iconUrl && <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 12, height: 12 }} />} */}
                </div>
              )}
              {chain.name}
            </button>

            <button onClick={openAccountModal} type="button">
              {account.displayName}
              {account.displayBalance ? ` (${account.displayBalance})` : ''}
            </button>
          </div>
        );
      })()}
    </div>
  );
}

export default CustomConnectWalletBtn;
