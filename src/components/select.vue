<style scoped>
  .stage{
    box-sizing: border-box;
    height: 100%;
    padding-top: 40px;
    font-size: 40px;
    font-weight: 900;
    background: url(../images/white.jpg);
  }
  ul{
    box-sizing: border-box;
    float: left;
    width: 3.5em;
    height: 8.5em;
    border:4px solid #B46A29;
    line-height: 1.2;
    margin:60px;
    background: #C69751;
    overflow: auto;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width:6px;
  }

  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius:10px;
    background:rgba(0,0,0,0.1);
    box-shadow:inset 0 0 6px rgba(0,0,0,0.5);
  }

  .me{
      color:#fff;
      background: #3968AE;
    }
  caption{
    line-height: 2;
  }
  table{
    border-spacing: 15px;
    background: url(../images/map.jpg);
    background-size: cover;
  }
  td{
    box-sizing: border-box;
    width:20px;
    height:20px;
    font-size: 0;
  }
  .city{
    background: #fff;
    border: 5px solid #000;
  }
  .my-zone{
    background: #000;
  }

</style>
<template>
  <div class="stage">
    <ul>
      <li v-for="owner in owners" :class="{'me': me===owner}"  @mouseenter = "me=owner" >{{owner.name}}</li>
    </ul>
      <table>
        <caption>势力形势图</caption>
        <tbody>
        <tr v-for="row in cities">
          <td v-for = "city in row" :class="{'city': city,'my-zone':me.site.indexOf(city)>-1}"></td>
        </tr>
        </tbody>
      </table>
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
      me: Owners[0]
    }
  },
  methods: {

  }
}
</script>
