import sharedInit from "./shared.init";

const dbInit = () => Promise.all([
  sharedInit()
]);

export default dbInit;