import { State } from "../../models/shared";

const sharedInit = () => Promise.all([
  State.sync({ alter: true }) // alter table if founds any change (only dev)
]);

export default sharedInit; 