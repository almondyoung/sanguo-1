<template>
<div class="new">
  <a v-link="'/select'" class="first"></a>
  <a class="second"></a>
  <a class="third"></a>
  <a class="fourth"></a>
</div>
</template>

<style scoped>
  .new{
    box-sizing: border-box;
    height: 100%;
    padding-top: 15%;
    background:url(../images/ce91c82a6059252d6a6476eb349b033b5ab5b952.jpg);
    background-size: cover;
  }
  a{
    float: left;
    width: 350px;
    height: 145px;
    margin:20px;
    cursor: pointer;
    background-size: cover;
  }
  .first{
    background-image: url(../images/_1dznq.jpg);

  }
  .second{
    background-image:url(../images/_2ccjq.jpg);
  }
  .third{
    background-image: url(../images/_3cbzz.jpg);
  }
  .fourth{
    background-image: url(../images/_4sgdl.jpg);
  }
</style>
