import Vue from "vue"

// Controls
import Message from "@/components/UI/Message.vue"
import PostsList from "@/components/Posts/PostsList.vue"

// UI
import AppHamburger from "@/components/UI/Controls/Hamburger.vue"
import AppButton from "@/components/UI/Controls/Button.vue"
import AppInput from "@/components/UI/Controls/Input.vue"
import AppRadio from "@/components/UI/Controls/Radio.vue"
import AppTextArea from "@/components/UI/Controls/TextArea.vue"
import Form from "@/components/UI/Forms/Form.vue"
import SocialButton from "@/components/UI/SocialButton.vue"

// Badges
import Badges from "@/components/Badges.vue"

// Headline
import Headline from "@/components/Headline.vue"

// Overlay-route
import Overlay from "@/components/Overlay.vue"

// Plugins
import Vuelidate from "vuelidate"
import { ResizeObserver } from "vue-resize"

// UI
Vue.component("Message", Message)
Vue.component("PostsList", PostsList)
Vue.component("Form", Form)
Vue.component("SocialButton", SocialButton)

//  Controls
Vue.component("AppHamburger", AppHamburger)
Vue.component("AppButton", AppButton)
Vue.component("AppInput", AppInput)
Vue.component("AppRadio", AppRadio)
Vue.component("AppTextArea", AppTextArea)

// Badges
Vue.component("Badges", Badges)

// Headline
Vue.component("Headline", Headline)

// Overlay-route
Vue.component("Overlay", Overlay)

// Plugins
Vue.use(Vuelidate)
Vue.component("resize-observer", ResizeObserver)
