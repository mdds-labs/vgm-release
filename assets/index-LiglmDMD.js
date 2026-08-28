import { i as a, __tla as __tla_0 } from "./index-DR6kZcQ0.js";
let i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  i = async function(t) {
    return await a("plugin:web-auth|authenticate", {
      payload: t
    });
  };
});
export {
  __tla,
  i as authenticate
};
