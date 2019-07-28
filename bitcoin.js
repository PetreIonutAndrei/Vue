var app = new Vue({
    el: '#app',
    data: {
      rate: ''
    },
    mounted() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => ( this.rate = response.data.bpi.USD.rate )); //asta e un mod de a scrie o functie
    }
  });
