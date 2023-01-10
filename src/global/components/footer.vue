<template>
  <footer>
    <div class="g-container">
      <div class="f-content">
        <div class="f-content-left">
          <div class="g-col-2-5" v-for="item in footer" :key="item">
            <h6>{{item.title}}</h6>
            <ul>
              <li v-for="f in item.content" :key="f"><a class="g-white-link" :href="f.link">{{f.text}}</a></li>
            </ul>
          </div>
          <div class="g-col-2-5">
            <h6>系列社群網站</h6>
            <ul>
              <li><a class="g-white-link" href="#"><i class="fa-brands fa-instagram"></i> Go美廉IG帳號</a></li>
              <li><a class="g-white-link" href="#"><i class="fa-brands fa-facebook"></i> 美廉社FB粉絲團</a></li>
              <li><a class="g-white-link" href="#"><i class="fa-brands fa-instagram"></i> 美廉社官方IG帳號</a></li>
              <li><a class="g-white-link" href="#"><i class="fa-brands fa-line"></i> 美廉社官方Line好友</a></li>
            </ul>
          </div>
        </div>
        
        <div class="f-content-right">
          <span>加入美廉社Line好友</span>
          <div class="f-qrcode">
            <img src="https://img.magiclen.org/albums/qr-code-scanner/qrcode-two.png" alt="">
          </div>
        </div>
      </div>
      <div class="f-copyright">
        Copyright © 2016 三商家購股份有限公司 All Rights Reserved.統一編號：54164937客服專線：0800-42-6666服務時間：週一至週日 8:30-24:00 (含國定假日)手機另撥 02-2792-0501
        
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterCom',

    data() {
      return {
        footer:[{
          title:"關於我們",
          content:[{
            link:"#",
            text:"Go美廉"
          },
          {
            link:"#",
            text:"美廉社"
          },{
            link:"#",
            text:"三商家購股份有限公司"
          },]
        },
        {
          title:"購物幫手",
          content:[{
            link:"#",
            text:"優惠券說明"
          },
          {
            link:"#",
            text:"會員點數說明"
          },{
            link:"#",
            text:"美廉幣說明"
          },
          {
            link:"#",
            text:"電子票券商品說明"
          },
          {
            link:"#",
            text:"會員申辦說明"
          },
          {
            link:"#",
            text:"訂購祕技"
          },
          {
            link:"#",
            text:"退貨流程"
          },]
          
        },
        {
          title:"會員服務",
          content:[{
            link:"#",
            text:"訂單相關查詢/修改"
          },
          {
            link:"#",
            text:"會員資料查詢/修改"
          },{
            link:"#",
            text:"追蹤商品清單"
          },
          {
            link:"#",
            text:"常見問題"
          },
          {
            link:"#",
            text:"會員申辦說明"
          },
          {
            link:"#",
            text:"會員申辦說明"
          },
          {
            link:"#",
            text:"聯絡我們"
          },]
          
        },
        {
          title:"會員權益",
          content:[{
            link:"#",
            text:"Go美廉會員隱私權政策"
          },
          {
            link:"#",
            text:"Go美廉會員購物服務條款"
          },{
            link:"#",
            text:"防詐騙宣導"
          },
          {
            link:"#",
            text:"美廉社會員權益"
          },
          {
            link:"#",
            text:"美廉社會員義務與責任規定"
          }]
          
        }
      ]}
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../global/scss/footer.scss';
</style>