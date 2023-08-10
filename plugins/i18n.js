import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: "ru",
    fallbackLocale: "en",
    silentTranslationWarn: true,
    messages: {
      ru: {
        dev: "Сидоров Александр",
        portfolio: "Портфолио",
        nav: {
          about: "Обо мне",
          portfolio: "Портфолио",
          skills: "Навыки",
          contacts: "Контакты"
        },
        h2About1: "Привет!",
        h2About2: "я Александр",
        aboutText:
          "Занимаюсь версткой, и делаю это хорошо. Почему стоит обратиться ко мне? Я не пропадаю ни во время заказа, ни после. Всегда на связи. Я не увеличиваю обговоренную заранее стоимость заказа, даже если он оказался сложнее чем я сперва оценил. Всегда сдаю проекты вовремя. Пишите мне! Буду рад ответить на ваши вопросы.",
        h2Portfolio1: "Мои",
        h2Portfolio2: "Работы",
        portfolioBtn: "Нажмите для перехода к работам",
        h2Skills1: "Навыки и",
        h2Skills2: "опыт",
        tools: "Инструменты",
        methodology: "Методология",
        bem: "БЭМ",
        h2Contacts1: "Связаться",
        h2Contacts2: "со мной",
        contactsText:
          "Меня интересуют фрилансерские возможности либо работа в офисе. Однако, если у вас есть другой вопрос, обращаться ко мне, используя форму или социальные сети.",
        contactsFB:
          "Вы также можете со мной связаться через биржу фриланс-услуг",
        send: "Отправить",
        plhName: "Ваше имя",
        plhTelegram: "Имя пользователя: @Aleksandr",
        plhEmail: "Ваш email",
        plhText: "Введите текст",
        required: "Это обязательно",
        errorTextName: "Имя должно иметь как минимум",
        errorTextEmail: "Email не правильный!",
        errorTextText: "Текст должен иметь как минимум",
        Password: "Пароль",
        message: " Скоро с вами свяжусь",
        messageError: " Заполните обязательные поля",
        invalid: "Неверный пароль или логин",
        myWorks: "Мои работы",
        certificate: "Сертификат",
        all: "Все",
        html: "Верстка"
      },
      us: {
        dev: "Aleksandr Sidorov",
        portfolio: "Portfolio",
        nav: {
          about: "About me",
          portfolio: "Portfolio",
          skills: "skills",
          contacts: "Сontacts"
        },
        h2About1: "Hi!",
        h2About2: "I'm Aleksandr",
        aboutText:
          "I do the layout and I do it well. Why would you mess with me? I do not disappear either during the order or after. Always in touch. You can always ask a question of interest. I do not increase the pre-agreed cost of the order, even if it turned out to be more complicated than I originally thought. I always deliver projects on time. Write me! I will be glad to answer your questions.",
        h2Portfolio1: "My",
        h2Portfolio2: "works",
        portfolioBtn: "Click to go to work.",
        h2Skills1: "Skills &",
        h2Skills2: "Experience",
        tools: "Tools",
        methodology: "Methodology",
        bem: "BEM",
        h2Contacts1: "Contact",
        h2Contacts2: "me",
        contactsText:
          "I am interested in freelancing opportunities or a job in the office. However, if you have another questions, contact me using the form or social media.",
        contactsFB: "You can also contact me through the freelance exchange",
        send: "Send",
        sendToEmail: "to mail",
        plhName: "Your name",
        plhTelegram: "Username: @Aleksandr",
        plhEmail: "Your email",
        plhText: "Enter text",
        required: "This is required",
        errorTextName: "Name must have at least",
        errorTextEmail: "Email is not correct!",
        errorTextText: "Text must have at least",
        Password: "Password",
        message: " I will contact you soon",
        messageError: " Fill in required fields",
        invalid: "Invalid password or login",
        myWorks: "My works",
        certificate: "Certificate",
        all: "All",
        html: "html"
      }
    }
  });
};
