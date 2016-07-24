<style  scoped>
.main{
  float: left;
  width:720px;
  height: 100%;
  background: url(../images/map.jpg);
  background-size: cover;
  position: relative;
}
table{
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}
td{
  background-repeat: no-repeat;
  background-position: center;
}
.city{
  background-image: url(../images/city_hiscity.jpg);
}
.my-zone{
  background-image: url(../images/city_mycity.jpg);
}
.aside{
  float: right;
  width:130px;
  height: 100%;
  background: url(../images/right.jpg);
}
.arrow{
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(../images/arrow.png);
  left: 70px;
  top:20px;
}
button{
  border:0;
}
</style>

<template>
<div class="main">
  <table>
    <tr v-for="row in cities">
      <td v-for = "city in row" :class="{'city': city,'my-zone':me.site.indexOf(city)>-1}"></td>
    </tr>
  </table>
  <button class="arrow"></button>
</div>
<div class="aside">
</div>


</template>

<script>
  import City from './map.js'
  import Owners from './owner.js'
  export default {
    data () {
      return {
        cities: City,
        owners: Owners,
        me: Owners[this.$route.params.index]
      }
    },
    methods: {
    },
    ready () {
      document.onkeydown = function (event) {
        let target = document.querySelector('.arrow')
        let td = document.querySelector('td')
        let table = document.querySelector('table')
        let w = td.offsetWidth
        let h = td.offsetHeight
        let tw = table.offsetWidth
        let th = table.offsetHeight
        switch (event.keyCode) {
          case 37:
            if (target.offsetLeft >= w) {
              target.style.left = target.offsetLeft - w + 'px'
            }
            break
          case 38:
            if (target.offsetTop >= h) {
              target.style.top = target.offsetTop - h + 'px'
            }
            break
          case 39:
            if (target.offsetLeft < tw - w) {
              target.style.left = target.offsetLeft + w + 'px'
            }
            break
          case 40:
            if (target.offsetTop < th - h) {
              target.style.top = target.offsetTop + h + 'px'
            }
            break
        }
      }
    }
  }
</script>
