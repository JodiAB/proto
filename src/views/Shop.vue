<template>
<body>
    <nav id="nav">
        <div class="navTop">
            <div class="navItem">
                <div class="search">
                    <input type="text" placeholder="Search..." class="searchInput">
                </div>
            </div>
            <div class="navItem">
                <span class="limitedOffer">Up to 30% off!</span>
            </div>
        </div>
    </nav>

    <div class="product" id="product">
        <img src="/src/img/air.png" alt="" class="productImg">
        <div class="productDetails">
            <h1 class="productTitle">Tuxedo</h1>
            <h2 class="productPrice">R1200</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">S</div>
                <div class="size">M</div>
                <div class="size">L</div>
            </div>
            <button class="productButton">BUY NOW!</button>
        </div>
        <div class="payment">
            <h1 class="payTitle">Personal Information</h1>
            <label>Name and Surname</label>
            <input type="text" placeholder="John Doe" class="payInput">
            <label>Phone Number</label>
            <input type="text" placeholder="+1 234 5678" class="payInput">
            <label>Address</label>
            <input type="text" placeholder="Elton St 21 22-145" class="payInput">
            <h1 class="payTitle">Card Information</h1>
            <div class="cardIcons">
                <img src="/src/img/visa.png" width="40" alt="" class="cardIcon">
                <img src="/src/img/master.png" alt="" width="40" class="cardIcon">
            </div>
            <input type="password" class="payInput" placeholder="Card Number">
            <div class="cardInfo">
                <input type="text" placeholder="mm" class="payInput sm">
                <input type="text" placeholder="yyyy" class="payInput sm">
                <input type="text" placeholder="cvv" class="payInput sm">
            </div>
            <button class="payButton">Checkout!</button>
            <span class="close">X</span>
        </div>
    </div>
    <div class="gallery">
        <div class="galleryItem">
            <h1 class="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg">
        </div>
        <div class="galleryItem">
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg">
            <h1 class="galleryTitle">This is the First Day of Your New Life</h1>
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg">
        </div>
    </div>
    <div class="newSeason">
        <div class="nsItem">
            <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="nsImg">
        </div>
        <div class="nsItem">
            <h3 class="nsTitleSm">WINTER NEW ARRIVALS</h3>
            <h1 class="nsTitle">New Season</h1>
            <h1 class="nsTitle">New Collection</h1>
            <a href="#nav">
                <button class="nsButton">CHOOSE YOUR STYLE</button>
            </a>
        </div>
        <div class="nsItem">
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="nsImg">
        </div>
    </div>
</body>
</template>
<script>
export default {};
</script>

<style scoped>
body{
  position: fixed;
  width: 100%;
  top: 20%;
  overflow: scroll;
  background-color: transparent;
  color: white;
}

nav {
  color: white;
}

.navTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  display: flex;
  align-items: center;
  background-color: gray;
  padding: 10px 20px;
  border-radius: 10px;
}

.searchInput {
  border: none;
  background-color: transparent;
}

.searchInput::placeholder {
  color: lightgray;
}

.limitedOffer {
  font-size: 20px;
  border-bottom: 2px solid green;
  cursor: pointer;
}

.navBottom {
  display: flex;
  align-items: center;
  justify-content: center;
}

.features {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.featureIcon {
  width: 50px;
  height: 50px;
}

.featureTitle {
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
}

.featureDesc {
  color: gray;
  width: 50%;
  height: 100px;
}

.product {
  height: 100vh;
  color: white;
  position: relative;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
}

.payment {
  width: 500px;
  height: 500px;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10px 50px;
  display: none;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
}

.payTitle {
  font-size: 20px;
  color: lightgray;
}

label {
  font-size: 14px;
  font-weight: 300;
}

.payInput {
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border-bottom: 1px solid gray;
}

.payInput::placeholder {
  color: rgb(163, 163, 163);
}

.cardIcons {
  display: flex;
}

.cardIcon {
  margin-right: 10px;
}

.cardInfo {
  display: flex;
  justify-content: space-between;
}

.sm {
  width: 30%;
}

.payButton {
  position: absolute;
  height: 40px;
  bottom: -40;
  width: 100%;
  left: 0;
  -webkit-box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
  background-color: #369e62;
  color: white;
  border: none;
  cursor: pointer;
}

.close {
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: gray;
  color: white;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2px;
}

.productImg {
  width: 50%;
}

.productDetails {
  position: absolute;
  top: 10%;
  right: 0;
  width: 40%;
  padding: 50px;
}

.productTitle {
  font-size: 75px;
  font-weight: 900;
}

.productDesc {
  font-style: 24px;
  color: darkgoldenrod;
}

.colors,
.sizes {
  display: flex;
  margin-bottom: 20px;
}

.color {
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-color: black;
  border: 1px solid white;
  margin-right: 10px;
  cursor: pointer;
}

.size {
  padding: 5px 20px;
  border: 1px solid white;
  color: darkgoldenrod;
  margin-right: 10px;
  cursor: pointer;
  font-size: 20px;
}

.productButton {
  float: right;
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.productButton:hover {
  background-color: white;
  color: black;
}

.gallery {
  padding: 50px;
  display: flex;
}

.galleryItem {
  flex: 1;
  padding: 50px;
}

.galleryImg {
  width: 100%;
}

.newSeason {
  display: flex;
}

.nsItem {
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.nsImg {
  width: 100%;
  height: 500px;
}

.nsTitle {
  font-size: 40px;
}

.nsButton {
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
}

@media screen and (max-width:480px) {
  nav{
    padding: 20px;
  }

  .search{
    display: none;
  }

  .navBottom{
    flex-wrap: wrap;
  }

  .menuItem{
    margin: 20px;
    font-weight: 700;
    font-size: 20px;
  }

  .slider{
    clip-path: none;
  }

  .sliderImg{
    width: 90%;
  }

  .sliderBg{
    width: 100%;
    height: 100%;
  }

  .sliderTitle{
    display: none;
  }

  .sliderPrice{
    top: unset;
    bottom: -50;
    left: 0;
    background-color: lightgrey;
  }

  .buyButton{
    right: 0;
    top: 0;
  }

  .features{
    flex-direction: column;
  }

  .product{
    clip-path: none ;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .productImg{
    width: 80%;
  }

  .productDetails{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    top: 0;
  }

  .productTitle{
    font-size: 50px;
    margin: 0;
  }

  .gallery{
    display: none;
  }

  .newSeason{
    flex-direction: column;
  }

  .nsItem:nth-child(2){
    padding: 50px;
  }

  footer{
    flex-direction: column;
    align-items: center;
  }

  .footerLeft{
    padding: 20px;
    width: 90%;
  }

  .footerRight{
    padding: 20px;
    width: 90%;
    align-items: center;
    background-color: whitesmoke;
  }

  .payment{
    width: 90%;
    padding: 20px;
  }
}
</style>