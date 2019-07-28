var app = new Vue({
    el: '#app',
    data: {
    count: 0
    },
    methods: {
      click: function() {
        this.count++;
      },
      reset: function() {
        this.count = 0;
      }
    }
});
