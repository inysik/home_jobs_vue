var app6 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'tomato',price: 100 },
        { text: 'cucumber',price:220 },
        { text: 'potato',price:200 }
      ]
    },
    methods:{
      sortPriceAsc:function(){
      
        this.todos=this.todos.sort(((a, b) => a.price - b.price))
      },
      sortPriceDesc:function(){
        this.todos=this.todos.sort(((a, b) => b.price - a.price ))
      }
    }
  })