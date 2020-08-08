import Vue from "vue";

// Controls
import vNotification from "@/components/UI/v-notification.vue";
import vPostsList from "@/components/Posts/v-posts-list.vue";

// UI
import vHamburger from "@/components/UI/Controls/v-hamburger.vue";
import vButton from "@/components/UI/Controls/v-button.vue";
import vInput from "@/components/UI/Controls/v-input.vue";
import vRadio from "@/components/UI/Controls/v-radio.vue";
import vTextArea from "@/components/UI/Controls/v-textArea.vue";
import vForm from "@/components/UI/Forms/v-form.vue";
import vSocialButton from "@/components/UI/v-social-button.vue";

// Headline
import vHeadline from "@/components/v-headline.vue";

// Plugins
import Vuelidate from "vuelidate";
import { ResizeObserver } from "vue-resize";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

// UI
Vue.component("v-notification", vNotification);
Vue.component("v-posts-list", vPostsList);
Vue.component("v-form", vForm);
Vue.component("v-social-button", vSocialButton);

//  Controls
Vue.component("v-hamburger", vHamburger);
Vue.component("v-button", vButton);
Vue.component("v-input", vInput);
Vue.component("v-radio", vRadio);
Vue.component("v-textArea", vTextArea);

// v-headline
Vue.component("v-headline", vHeadline);

// Plugins
Vue.use(Vuelidate);
Vue.component("resize-observer", ResizeObserver);
Vue.component("simplebar", simplebar);
