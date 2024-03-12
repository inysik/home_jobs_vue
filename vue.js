var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'кнопка!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  
  var app4 = new Vue({
    el: '#app-4',
    messages:'',
    data: {
      
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' }
      ]
    },
    methods:{
pushMessage:function(){
    this.messages = this.todos.push({text:`${this.messages}`})
}


    }
  })