<template>
  <div>
    <el-button type="primary" @click="handleConnect">connect</el-button>
  </div>
</template>
<script>
// Required imports
const { ApiPromise, WsProvider } = require('@polkadot/api');

export default {
  methods: {
    async handleConnect() {
      // Initialise the provider to connect to the local node
      const provider = new WsProvider('ws://127.0.0.1:9944');

      // Create the API and wait until ready
      const api = await ApiPromise.create({ provider });
      const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version(),
      ]);
      console.log({
        chain, nodeName, nodeVersion,
      });
    },
  },
};
</script>
