import { i, __tla as __tla_0 } from "./index-DR6kZcQ0.js";
let r, o, p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  o = async function(n, e) {
    await i("plugin:opener|open_url", {
      url: n,
      with: e
    });
  };
  r = async function(n, e) {
    await i("plugin:opener|open_path", {
      path: n,
      with: e
    });
  };
  p = async function(n) {
    return i("plugin:opener|reveal_item_in_dir", {
      paths: typeof n == "string" ? [
        n
      ] : n
    });
  };
});
export {
  __tla,
  r as openPath,
  o as openUrl,
  p as revealItemInDir
};
