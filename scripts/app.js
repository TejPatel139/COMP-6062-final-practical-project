new Vue({
    el: '#app',
    data: {
      user: {
        name: '',
        age: '',
        picture: ''
      },
      weatherQuery: {
        city: 'London',
        province: 'Ontario',
        country: 'Canada'
      },
      weather: {
        temp: '',
        wind: '',
        description: ''
      },
      word: '',
      definition: {
        word: '',
        phonetic: '',
        definition: ''
      }
    },
    methods: {
      getUser() {
        fetch("http://comp6062.liamstewart.ca/random-user-profile")
          .then(res => res.json())
          .then(data => {
            this.user.name = `${data.first_name} ${data.last_name}`;
            this.user.age = data.age;
            this.user.picture = data.profile_picture;
          });
      },
      getWeather() {
        const { city, province, country } = this.weatherQuery;
        const url = `http://comp6062.liamstewart.ca/weather-information?city=${city}&province=${province}&country=${country}`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.weather.temp = data.temperature;
            this.weather.wind = data.wind;
            this.weather.description = data.description;
          });
      },
      getDefinition() {
        fetch(`https://comp6062.liamstewart.ca/define?word=${this.word}`)
          .then(res => res.json())
          .then(data => {
            this.definition.word = data.word;
            this.definition.phonetic = data.phonetic;
            this.definition.definition = data.definition;
          });
      }
    },
    mounted() {
      this.getUser();
      this.getWeather();
    }
  });