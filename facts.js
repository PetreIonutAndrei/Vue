var app = new Vue({
    el: '#app',
    data: {
      fact: ''
    },
    methods: {
      getFact: function() {
        axios.get('http://api.icndb.com/jokes/random')
        .then(response => ( this.fact = response.data.value.joke ))
      }
    },
    mounted() {
      this.getFact()
    }
  });
