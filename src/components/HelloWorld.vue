<template>
  <div>
    <nav class="container navbar navbar-expand navbar-custom ">
      <a class="navbar-brand navbar-custom-text" >OGI WEATHER</a>

      <div class="navbar-custom-search">
        <input placeholder="Search" v-model="query" @keypress="fetchWeather" class="form-control  ">
      </div>

    </nav>
    <div class="container ">

          <div class="table mx-auto" v-if="typeof weather.main != 'undefined'">
            <div class="table-head">
              <a class="table-head-day">{{ currentWeekDay() }}</a>
              <a class="table-head-degree">{{Math.round(weather.main.temp)}}°C</a>
            </div>

            <div>
              <IconSun v-if="weather.main.temp > 16"/>
              <IconCold v-else/>
            </div>

            <div class="group">
              <a class="table-date-day">{{ currentDay() }} </a>
              <a class="table-date-month">{{ currentMonth() }} </a>
              <a class="table-date-year">{{ currentYear() }}</a>
            </div>

            <a class="table-country">{{ weather.name }} {{weather.sys.country}}</a>
            <!--<a class="table-status">{{weather.weather[0].main}}</a>-->
          </div>
      </div>

  </div>


</template>

<script>

import IconSun from "@/icons/sun-icon.svg";
import IconCold from "@/icons/cold-icon.svg";


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
  components:{
    IconSun,
    IconCold,
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

    currentDay(){
      let d = new Date();
      let date = d.getDate();
      return ` ${date}`;
    },

    currentMonth() {
      let d = new Date();
      let months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "September", "OCTOBER", "NOVEMBER", "DECEMBER",];
      let month = months[d.getMonth()];
      return `${month}`;
    },

    currentYear(){
      let d = new Date();
      let year = d.getFullYear();
      return `${year}`;
    },

    currentWeekDay(){
      let d = new Date();
      let days = ["SUNDAY","MONDAY","TUESDAY","THURSDAY","FRIDAY","SATURDAY"];
      let day  = days[d.getDay()];
      return `${day}`;
    },
  },
}
</script>

<style scoped>

.table {
  margin-top: 20px;
  display: flex;
  border-radius: 2px;
  background-color: #131B23;
  min-height: 500px;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  padding-bottom: 20px;

  &-head{
      display: flex;
      flex-direction: column;
      align-items: center;

      &-day {
        font-family: saira;
        font-size: 38px;
        color: white;
        margin-top: 20px;
        text-decoration: none;
      }

      &-degree{
        font-size:120px;
        font-family: saira;
        color: #2DCAD2;
        text-decoration: none;
      }
    }

    &-date{
      display: flex;
      flex-direction: row;

      &-day {
        font-family: saira;
        font-size: 38px;
        color: white;
        text-decoration: none;
      }
      &-month {
        text-decoration: none;
        color: white;
        font-size: 38px;
        font-family: saira;
      }
      &-year {
        text-decoration: none;
        color: white;
        font-size: 38px;
        font-family: saira;margin-top: 50px;
      }
    }
  &-country {
    text-decoration: none;
    color: white;
    font-size: 22px;
    font-family: saira;
  }
  &-status {
    font-size: 25px;
    font-family: saira;
    color: #2DCAD2;
  }



}
.group{
  margin-top: auto;

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
    width: 1080px;
    margin: auto ;
    justify-content: center;
  }
}
</style>
