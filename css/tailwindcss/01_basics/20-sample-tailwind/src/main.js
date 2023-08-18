import { loadAll } from "./results.js";
import initMenu from "./menu";
import initDialog from "./dialog";

document.addEventListener("DOMContentLoaded", async (e) => {
  initMenu();
  initDialog();
  await loadAll();
});
