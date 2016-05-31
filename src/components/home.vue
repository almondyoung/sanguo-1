<template>
<div class="home">
  <a v-link="'/new'" class="new"></a>
  <a class="back"></a>
  <a class="work"></a>
  <a class="end"></a>
</div>
</template>

<style scoped>
  .home{
    box-sizing: border-box;
    height: 100%;
    padding-top: 25%;
    background:url(../images/300001042527132989872795540_950.jpg);
    background-size: cover;
  }
  a{
    float: left;
    width: 355px;
    height: 105px;
    margin:20px;
    cursor: pointer;
  }
  .back{
    background-image: url(../images/gmback.jpg);
  }
  .end{
    background-image:url(../images/gmend.jpg);
  }
  .new{
    background-image: url(../images/gmnew.jpg);
  }
  .work{
    background-image: url(../images/gmwork.jpg);
  }
</style>
