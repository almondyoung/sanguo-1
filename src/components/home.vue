<template>
<div class="home">
 <a v-link="'/new'"></a>
<a ></a>
<a></a>
<a></a>
</div>
</template>

<style scoped>
  .home{
    box-sizing: border-box;
    height: 100%;
    padding-top: 25%;
    background:url(../images/300001042527132989872795540_950.jpg);
    background-size: cover;
    text-align: center;
  }

  a{
    display: inline-block;
    width: 355px;
    height: 105px;
    cursor: pointer;
    margin:15px;
  }
  a:nth-child(1){
    background-image: url(../images/gmnew.jpg);
  }
  a:nth-child(2){
    background-image: url(../images/gmback.jpg);
  }
  a:nth-child(3){
    background-image: url(../images/gmwork.jpg);
  }
  a:nth-child(4){
    background-image:url(../images/gmend.jpg);
  }
</style>
