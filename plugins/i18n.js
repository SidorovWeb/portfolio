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
        h2About1: "Привет",
        h2About2: "я Александр",
        aboutText:
          "Мне 31, г.Москва .Я целеустремленный, увлеченный, самостоятельный и всегда развивающийся начинающий разработчик.Слежу за новостями на youtube-каналах. Читаю статьи на Хабре и Медиуме.Стремлюсь к полной занятости.",
        h2Portfolio1: "Мои",
        h2Portfolio2: "Работы",
        portfolioBtn: "Посмотреть все работы",
        h2Skills1: "Навыки и",
        h2Skills2: "опыт",
        skillsText:
          "Адаптивная верстка с использованием flexbox и медиа запросов. Оптимальное отображение сайта во всех современных браузерах. Оптимизация сайта: проверка скорость загрузки сайта, оптимизация сайта для лучшей индексации поисковыми системами, HTML и CSS валидация.",
        tools: "Инструменты",
        methodology: "Методология",
        bem: "БЭМ",
        h2Contacts1: "Связаться",
        h2Contacts2: "со мной",
        contactsText:
          "Меня интересуют фрилансерские возможности либо работа в офисе. Однако, если у вас есть другой вопрос, обращаться ко мне, используя форму или социальные сети.",
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
        message: " Спасибо, я свяжусь с вами.",
        invalid: "Неверный пароль или логин.",
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
        h2About1: "Hi",
        h2About2: "I'm Aleksandr",
        aboutText:
          "I am 31 year passionate and always developing starting developer from Moscow. I follow the news on youtube channels. I read articles on Habra and Medium. I aspire to full employment.",
        h2Portfolio1: "My",
        h2Portfolio2: "works",
        portfolioBtn: "View all works",
        h2Skills1: "Skills &",
        h2Skills2: "Experience",
        skillsText:
          "Adaptive layout using flexbox and media queries. An optimal display of the website in all modern browsers. Website optimization: check website loading speed, website optimization for better indexing by searching engines, HTML and CSS validation.",
        tools: "Tools",
        methodology: "Methodology",
        bem: "BEM",
        h2Contacts1: "Contact",
        h2Contacts2: "me",
        contactsText:
          "I am interested in freelancing opportunities or a job in the office. However, if you have another questions, contact me using the form or social media.",
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
        message: "Thanks, I'll сontact you.",
        invalid: "Invalid password or login.",
        myWorks: "My works",
        certificate: "Certificate",
        all: "All",
        html: "html"
      }
    }
  });
};
