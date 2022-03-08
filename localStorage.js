const app = Vue.createApp({
    data() {
      return {
        name: '',
        age: 0,
        items: [{name: "derp"}, {name: "herp"}]
      }
    },
    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name;
      }
      if (localStorage.age) {
        this.age = localStorage.age;
      }
      if (localStorage.items) {
        this.items = localStorage.items;
      }
    },
    methods: {
      persist() {
        localStorage.name = this.name;
        localStorage.age = this.age;
        let savingItems;
        for (let index = 0; index < 4; index++) {
          savingItems.push({name: this.name});
        }
        console.log('now pretend I did more stuff...');
      }
    }
  }).mount('#app');