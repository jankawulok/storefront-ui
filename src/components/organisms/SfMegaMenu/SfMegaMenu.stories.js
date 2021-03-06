import { storiesOf } from "@storybook/vue";

import SfMegaMenu from "./SfMegaMenu.vue";

storiesOf("Organisms|MegaMenu", module).add(
  "Basic",
  () => ({
    components: { SfMegaMenu },
    template: "<sf-mega-menu>Hello Mega-Menu</sf-mega-menu>"
  }),
  {
    info: true
  }
);
