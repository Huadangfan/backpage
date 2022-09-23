import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/zhangxzh/ZXZ/Mypage/vuepress-starter/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "D:/zhangxzh/ZXZ/Mypage/vuepress-starter/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});