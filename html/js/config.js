var config = {
    apiUrl: "https://wallet.scp1310.jp:1984/",
    mainnetExplorerUrl: "http://explorer.scp1310.jp:8081/",
    testnetExplorerUrl: "https://testnet.sinchain.com/",
    stagenetExplorerUrl: "http://162.210.173.150:8083/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Scp1310jp1
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Scp1310jp1
    coinSymbol: 'SIN',
    openAliasPrefix: "sin",
    coinName: 'Scp1310jp1',
    coinUriPrefix: 'scp1310jp1:',
    addressPrefix: 0x5d99,
    integratedAddressPrefix: 0xd208,
    subAddressPrefix: 0x359288,
    addressPrefixTestnet: 53,
    integratedAddressPrefixTestnet: 54,
    subAddressPrefixTestnet: 63,
    addressPrefixStagenet: 24,
    integratedAddressPrefixStagenet: 25,
    subAddressPrefixStagenet: 36,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 6, // minimum mixin for hardfork v7 is 6 (ring size 7)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
