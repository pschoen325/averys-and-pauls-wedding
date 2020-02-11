<template>
  <div>
    <ul class="timer-list">
      <li><div id="days">{{days}}</div> Days</li>
      <li><div id="hours">{{hours}}</div> Hours</li>
      <li><div id="minutes">{{minutes}}</div> Minutes</li>
      <li><div id="seconds">{{seconds}}</div> Seconds</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    },
    mounted() {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        comp = this;

      let countDown = new Date('2021-10-16T17:30:00-0500').getTime()
      setInterval(function () {

        let now = new Date().getTime(),
          distance = countDown - now;

        comp.days = Math.floor(distance / (day)),
        comp.hours = Math.floor((distance % (day)) / (hour)),
        comp.minutes = Math.floor((distance % (hour)) / (minute)),
        comp.seconds = Math.floor((distance % (minute)) / second);

        }, second)
    }
  } 
</script>

<style>
  .timer-list {
    list-style: none;
    display: flex;
    flex-flow:row wrap;
  }

  .timer-list li {
    flex: 1 1 0;
    min-width: 40%;
    font-size: 48px;
    font-family: 'Great Vibes', cursive;    
  }

  .timer-list div {
    font-family: 'Cabin', sans-serif;
    font-size: 72px;
  }

  @media only screen and (min-width: 769px) {
    .timer-list li {
      font-size: 48px;
      flex: 1 1 0;
      min-width: 25%;  
    }
  }
</style>