const { ApiPromise, WsProvider } = require('@polkadot/api');

export default class Wallet {
  constructor() {
    this.api = null;
  }

  async connect() {
    const provider = new WsProvider('ws://127.0.0.1:9944');
    const api = await ApiPromise.create({ provider });
    this.api = api;
    const chain = await api.rpc.system.chain();
    console.log({ chain });
  }
}
