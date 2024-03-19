// const { createApp, h, reactive } = Vue;

// const MyComponent = reactive( {
//   template: `
//       <div class="my-component">
//         <h4>{{ title }}</h4>
//         <img :src="imageUrl" alt="Image">
//         <p>{{ description }}</p>
//         <p>{{ descriptionTwo }}</p>
//         <p>{{ additionalText }}</p>
//       </div>
//     `,
//   data() {
//     return {
//       title: "Let’s Get Solution for Building Construction Work",
//       imageUrl: "./img/Image_bloc1.jpg",
//       description: "Lorem ipsum dolor sit amet...",
//       descriptionTwo: "Embarrassing hidden in the middle of text...",
//       additionalText: "",
//     };
//   },
// });

// const Component1 = {
//   template: "<div>Component 1</div>",
// };

// const Component2 = {
//   template: "<div>Component 2</div>",
// };

// const Component3 = {
//   template: "<div>Component 3</div>",
// };

// const app = createApp({
//   data() {
//     return {
//       currentComponentIndex: 0,
//       components: [MyComponent, Component2, Component3],
//     };
//   },
//   methods: {
//     changeComponent(index) {
//       this.currentComponentIndex = index;
//     },
//   },
//   render() {
//     return h("div", [
//       h("button", { onClick: () => this.changeComponent(0) }, "Kitchen"),
//       h("button", { onClick: () => this.changeComponent(1) }, "Bedroom"),
//       h("button", { onClick: () => this.changeComponent(2) }, "Building"),
//       h("button", { onClick: () => this.changeComponent(0) }, "Architecture"),
//       h(
//         "button",
//         { onClick: () => this.changeComponent(1) },
//         "Kitchen Planning"
//       ),
//       h("button", { onClick: () => this.changeComponent(2) }, "Bedroom"),
//       h("child-component", {
//         currentComponentIndex: this.currentComponentIndex,
//         components: MyComponent,
//       }),
//     ]);
//   },
// });

// app.component("child-component", {
//   props: ["currentComponentIndex", "components"],
//   render() {
//     const componentToRender = this.components[this.currentComponentIndex];
//     return h("div", [componentToRender && h(componentToRender)]);
//   },
// });

// app.mount("#app");
const { createApp, h } = Vue;

const MyComponent = {
    template:"<my-component>ghg</my-component>",
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

const Component1 = {
  template: "<div>Component 1</div>",
};

const Component2 = {
  template: "<div>Component 2</div>",
};

const Component3 = {
  template: "<div>Component 3</div>",
};

const app = createApp({
  data() {
    return {
      currentComponentIndex: 0,
      components: [MyComponent, Component2, Component3],
    };
  },
  methods: {
    changeComponent(index) {
      this.currentComponentIndex = index;
    },
  },
  render() {
    return h("div", [
      h("button", { onClick: () => this.changeComponent(0) }, "Kitchen"),
      h("button", { onClick: () => this.changeComponent(1) }, "Bedroom"),
      h("button", { onClick: () => this.changeComponent(2) }, "Building"),
      h("button", { onClick: () => this.changeComponent(0) }, "Architecture"),
      h("button", { onClick: () => this.changeComponent(1) }, "Kitchen Planning"),
      h("button", { onClick: () => this.changeComponent(2) }, "Bedroom"),
      h("child-component", {
        currentComponentIndex: this.currentComponentIndex,
        components: this.components,
      }),
    ]);
  },
});

// app.component("child-component", {
//     props: ["currentComponentIndex", "components"],
//     render() {
//       const componentToRender = this.components[this.currentComponentIndex];
//       return h("div ", [componentToRender && h(componentToRender)]);
//     },
//   });
app.component("child-component", {
  props: ["currentComponentIndex", "components"],
  render() {
    const componentToRender = this.components[this.currentComponentIndex];
    return h("div", [componentToRender && h(componentToRender, {})]);
  },
});

app.mount("#app");