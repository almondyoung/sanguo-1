<template>
<div class="new">
  <a v-link="'/select'"></a>
  <a></a>
  <a></a>
  <a></a>
</div>
</template>

<style scoped>
  .new{
    box-sizing: border-box;
    height: 100%;
    padding-top: 15%;
    background:url(../images/ce91c82a6059252d6a6476eb349b033b5ab5b952.jpg);
    background-size: cover;
    text-align: center;
  }
  a{
    display: inline-block;
    width: 350px;
    height: 145px;
    margin:20px;
    cursor: pointer;
    background-size: cover;
  }
  a:nth-child(1){
    background-image: url(../images/_1dznq.jpg);
  }
  a:nth-child(2){
    background-image:url(../images/_2ccjq.jpg);
  }
  a:nth-child(3){
    background-image: url(../images/_3cbzz.jpg);
  }
  a:nth-child(4){
    background-image: url(../images/_4sgdl.jpg);
  }
</style>
