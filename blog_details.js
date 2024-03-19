// Определяем компонент banner
const banner = {
  props: ["src"],
  template: '<img :src="src" alt="#" style="width:100%" srcset="">',
};

// Создаем экземпляр Vue
const app = Vue.createApp({
  data() {
    return {
      imageUrl: "./img/Banner_blog_details.jpg", // URL изображения
    };
  },
});

// Регистрируем компонент
app.component("banner", banner);

// Монтируем приложение на элементе с id "app"
const vm = app.mount("#appOne");

const { createApp, h } = Vue;

const ButtonComponent = {
  props: ["text", "clickHandler"],
  template: "<button @click='clickHandler'>{{ text }}</button>",
};

const MyButtons = {
  data() {
    return {
      title: "Tags",
      buttons: [
        { id: 1, text: "Kitchen", handler: this.showFirstComponent },
        { id: 2, text: "Bedroom" },
        { id: 3, text: "Building" },
        { id: 4, text: "Architecture" },
        { id: 5, text: "Kitchen Planning", handler: this.showSecondComponent },
        { id: 6, text: "Bedroom" },
      ],
      currentComponent: 1,
    };
  },
  methods: {
    showFirstComponent() {
      // this.currentComponent = 1;
      this.currentComponent = "MyComponent";
    },
    showSecondComponent() {
      // this.currentComponent = 2;
      this.currentComponent = "MyComponentTwo";
    },
  },
  render() {
    return h("div", { class: "app-buttons" }, [
      h("h3", this.title),
      this.buttons.map((button) =>
        h(ButtonComponent, {
          key: button.id,
          text: button.text,
          clickHandler: button.handler ? button.handler.bind(this) : null,
        })
      ),
      h(this.currentComponent),
    ]);
  },
};

const MyComponent = {
  data() {
    return {
      title: "Let’s Get Solution for Building Construction Work",
      imageUrl: "./img/Image_bloc1.jpg",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      descriptionTwo:
        "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      additionalText: "",
    };
  },
  render() {
    return h("div", { class: "my-component" }, [
      h("h4", this.title),
      h("img", { src: this.imageUrl, alt: "Image" }),
      h("p", this.description),
      h("p", this.descriptionTwo),
      h("p", this.additionalText),
    ]);
  },
};

const MyComponentTwo = {
  render() {
    return h("div", { class: "my-component-two" }, [
      h("h4", "Design sprints are great"),
      h(
        "p",
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. "
      ),
      h("ol", [
        h(
          "li",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
        ),
        h(
          "li",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
        ),
        h(
          "li",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
        ),
      ]),
      h("img", { src: "./img/Image_blog2.jpg", alt: "Image" }),
      h(
        "p",
        " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
      ),
    ]);
  },
};

// Создаем экземпляры приложений
const appBloc = createApp({
  components: {
    "my-component": MyComponent,
  },
});
const appButtons = createApp({
  components: {
    "my-buttons": MyButtons,
  },
});
const appTwo = createApp({
  components: {
    "my-component-two": MyComponentTwo,
  },
});

// Монтируем экземпляры на соответствующих контейнерах
appBloc.mount("#app-bloc");
appButtons.mount("#app-buttons");
appTwo.mount("#app-two");

const articals = createApp({
  data() {
    return {
      components: [appBloc, appTwo], // Массив компонентов
      currentComponentIndex: 0, // Индекс текущего компонента в массиве
    };
  },
  methods: {
    changeComponent(index) {
      // Изменяем индекс текущего компонента
      this.currentComponentIndex = index;
    },
  },
  computed: {
    currentComponent() {
      // Возвращаем текущий компонент на основе индекса
      return this.components[this.currentComponentIndex];
    },
  },
  render() {
    return h("div", [
      h("button", { onClick: () => this.changeComponent(0) }, "app-bloct"),
      h("button", { onClick: () => this.changeComponent(1) }, "app-two"),
      // h('button', { onClick: () => this.changeComponent(2) }, 'Component 3'),
      h(this.currentComponent), // Рендерим текущий компонент
    ]);
  },
});

// Монтируем приложение на элементе с id "app"
app.mount("#articals");
