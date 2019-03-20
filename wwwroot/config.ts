let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.plenteum.com/api/',
    mainnetExplorerUrl: "https://",
    testnetExplorerUrl: "https://",
    testnet: false,
    coinUnitPlaces: 3,
    txMinConfirms: 20,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 20, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    addressPrefix: 1524331,
    integratedAddressPrefix: 1524331,
    addressPrefixTestnet: 0,
    integratedAddressPrefixTestnet: 0,
    subAddressPrefix: 0,
    subAddressPrefixTestnet: 0,
    feePerKB: new JSBigInt('100'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    defaultMixin: 0, // default value mixin
    idleTimeout: 30,
    idleWarningDuration: 20,

    coinSymbol: 'GPP',
    openAliasPrefix: "gPp",
    coinName: 'GreenPoweredPayment',
    coinUriPrefix: 'greenpoweredpayment:',
    avgBlockTime: 15,
    maxBlockNumber: 500000000,
};
