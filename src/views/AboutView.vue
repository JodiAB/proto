<template>
  <div class="copy-box">
    <div class="inner">
      <div class="line right">
        <div class="scanner"></div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quo asperiores commodi iure officia ipsam, provident ratione architecto neque expedita? Illo, sit unde. Nostrum magni laudantium magnam amet aspernatur doloribus asperiores ipsam ex sunt, perspiciatis sit neque nemo! Id laborum, repudiandae pariatur ducimus animi ipsa est eveniet recusandae hic aut tempora aspernatur nulla aliquid exercitationem saepe commodi veritatis velit quo unde ullam? Laborum nulla maiores, omnis impedit repudiandae doloribus quos dolore tempora recusandae vel fugit quibusdam unde soluta, illo voluptatum. Animi repudiandae aut eum officia et, cupiditate facilis, accusantium eaque nihil optio corrupti veniam saepe illum sunt aperiam illo in.
    </div>
  </div>
  

</template>
<style>
body {
  background-color: black;
  text-align: center;
  height: 100vh;
}
.copy-box 
{
  position: relative;
  display: flex;
  margin: 100px;
  width: 312px;
  background-color: #111111;
  color: beige;
  font-family: sans-serif;
  padding: 20px 100px;
}
.copy-box .line
{
  position: absolute;
  background-color: aqua;
  box-shadow: 0px 0px 12px aqua;
  width: 6px;
  height: calc(100% - 20px);
  top: 10px;
  left: 108px;
  border-radius: 50%;
  overflow: hidden;
}

.copy-box .line .scanner 
{
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 20px;
  border-radius: 50%;
  animation: scanner-loop 3s ease-in-out infinite;
}


@keyframes scanner-loop
{
  0% 
  {
    top: 0;
  }
  50%
  {
    top: 100%;
  }
  100%
  {
    top: 0;
  }
}
.copy-box .inner 
{
  padding: 30px;
}
</style>