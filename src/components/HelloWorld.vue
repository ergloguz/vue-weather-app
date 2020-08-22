<template>
  <div>
    <nav class="navbar navbar-expand navbar-custom ">
      <a class="navbar-brand navbar-custom-text" >Weather App</a>

      <div class="navbar-custom-search">
        <input v-model="query" @keypress="fetchWeather" class="form-control  ">
      </div>

    </nav>
    <div class="container">
          <div class="table mx-auto " v-if="typeof weather.main != 'undefined'">
            <a class="degree">{{Math.round(weather.main.temp)}}°C</a>
            <a class="day">{{ dateBuilder() }}</a>
            <a class="day">{{ weather.name }} {{weather.sys.country}}</a>
            <a class="status">{{weather.weather[0].main}}</a>
          </div>
      </div>
    </div>


</template>

<script>



export default {
  name: 'HelloWorld',
  data () {
    return {
      api_key :"12c83e0612fd8576d2002363bbfc9d81",
      url_base :"https://api.openweathermap.org/data/2.5/",
      query:"",
      weather:{},
    }
  },
  methods:{
    fetchWeather(e) {
      if(e.key == "Enter") {
        fetch
            (
            `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let days = ["SUNDAY","MONDAY","TUESDAY","THURSDAY","FRIDAY","SATURDAY"];

      let day  = days[d.getDay()];
      let date = d.getDate();
      return `${day} ${date}`;
    }

  },

}
</script>

<style scoped>
.table {
  margin-top: 20px;
  display: flex;
  border-radius: 2px;
  background-color: #131B23;
  padding-left: 10px;
  padding-right: 30px;
  padding-top: 10px;
  min-height: 400px;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
}

.day {
  font-family: saira;
  font-size: 22px;
  color: white;
  text-decoration: none;

}

.degree{
  font-size: 80px;
  font-family: saira;
  color: #2DCAD2;

  text-decoration: none;
}
.status {
  font-size: 25px;
  font-family: saira;
  color: #2DCAD2;
}
.navbar-custom{
  display: flex;
  background-color:#1B262C;
  &-text{
    color: white;
    font-size: 32px;
    font-family: saira;
  }
  &-search {
    max-width: 500px;

  }
}
</style>
