//index.js
//获取应用实例
const app = getApp()

Page({
    data:{

      // 标题数据
      title:'鑫铭汽车',
      barBg:'#f8f8f8',
      colorTitle:'#000000',
      phone1: '13788607771',
      phone2: '18878658778',
      imgUrls: [
      'https://www.youcku.com/Public/images/mobile/index_img/banner/gzh_banner.png', 'https://www.youcku.com/Public/images/mobile/index_img/banner/20190107114701.png',
      ],
      indicatorDots: true,
      autoplay: true, 
      circular: true,
      interval: 5000,
      duration: 1000,
      color: 'rgba(0, 0, 0, 0.4)',
      tipsColor:'#fff',
      imgTitle:'https://www.youcku.com/Public/images/mobile/version3_images/rightax.png',
      title11:"资产管理服务",
      title22:'最新车型',
      serveArr:[
        {
        url:'https://www.youcku.com/Public/images/mobile/version3_images/caigouax.png',
        title:'新车采购咨询'
        },
        {
          url: 'https://www.youcku.com/Public/images/mobile/version3_images/canzhiyuce2x.png',
          title: '车辆残值预测'
        },
        {
          url:'https://www.youcku.com/Public/images/mobile/version3_images/3a2x.png',
          title:'残值锁定回购'
        },
        {
          url:'https://www.youcku.com/Public/images/mobile/version3_images/4a2x.png',
          title:'车辆处置服务',
        } 
      ],
      carsArr:[
        {
          add_time: "1555984856",
          car_config_id: "5040",
          describe: "朗逸 2013款 改款经典 1.6L 自动风尚版，上牌时间2018年，赶快来选购",
          environmental_standards: "国五",
          id: "69",
          is_new_car: "准新车",
          is_new_shift: "最新上架",
          is_usage: "非营运",
          kilometre: "4.2",
          license_reg_date: "2018",
          low_price: "88000",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000069/00000069/img_pic_1-1555987446.jpg",
          seo_desc: "",
          seo_keywords: "",
          seo_title: "",
          shift_time: "1555984856",
          sort: "48",
          status: "1",
          type: "1",
          type_name: "朗逸 2013款 改款经典 1.6L 自动风尚版",
        },
        {
          add_time: "1554951974",
          car_config_id: "25276",
          describe: "现代悦动2017款1.6L自动悦值版GLS",
          environmental_standards: "国五",
          id: "68",
          is_new_car: "准新车",
          is_new_shift: "最新上架",
          is_usage: "非营运",
          kilometre: "1-3",
          license_reg_date: "2017",
          low_price: "83000",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000068/00000068/img_pic_1-1555567249.jpg",
          seo_desc: "",
          seo_keywords: "",
          seo_title: "",
          shift_time: "1555567308",
          sort: "47",
          status: "1",
          type: "1",
          type_name: "悦动 2017款 1.6L 自动悦值版GLS",
        },
        {
          add_time: "1552987518",
          car_config_id: "3827",
          describe: "车况良好，手续齐全，全国范围就近提车，欢迎车商朋友在线咨询！",
          environmental_standards: "国五",
          id: "47",
          is_new_car: "准新车",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "4",
          license_reg_date: "2017",
          low_price: "55000",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000047/00000047/img_pic_1-1552988305.jpg",
          seo_desc: "",
          seo_keywords: "",
          seo_title: "",
          shift_time: "1552987518",
          sort: "23",
          status: "1",
          type: "1",
          type_name: "凯越 2015款 1.5L 自动经典型",
        },
        {
          add_time: "0",
          car_config_id: "24649",
          describe: "车况精品，手续齐全，武汉、南京、成都现车供应",
          environmental_standards: "国五",
          id: "29",
          is_new_car: "准新车",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "2.5",
          license_reg_date: "2017",
          low_price: "76800",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000029/00000029/img_pic_1-1525746033.jpg",
          seo_desc: "",
          seo_keywords: "",
          seo_title: "",
          shift_time: "0",
          sort: "44",
          status: "1",
          type: "1",
          type_name: "英朗 2017款 15N 自动进取型",  
        },
        {
          add_time: "0",
          car_config_id: "14219",
          describe: "批发！全国可提，手续齐全，欢迎车商朋友在线咨询！",
          environmental_standards: "国五",
          id: "34",
          is_new_car: "",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "8",
          license_reg_date: "2015",
          low_price: "76800",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000034/00000034/img_pic_1-1540439109.jpg",
          seo_desc: "",
          seo_keywords: "",
          seo_title: "",
          shift_time: "0",
          sort: "43",
          status: "1",
          type: "1",
          type_name: "锐腾 2015款 1.5TGI TST精英版",
        },
        {
          add_time: "0",
          car_config_id: "14222",
          describe: "批发！全国可提，手续齐全，欢迎车商朋友在线咨询！",
          environmental_standards: "国五",
          id: "13",
          is_new_car: "",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "6",
          license_reg_date: "2015",
          low_price: "79800",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000013/00000013/img_pic_1-1514258348.jpg",
          seo_desc: "",
          seo_keywords: "",
          seo_title: "",
          shift_time: "0",
          sort: "42",
          status: "1",
          type: "1",
          type_name: "锐腾 2015款 2.0TGI TST豪华版",
        },
        {
          add_time: "1548405835",
          car_config_id: "25349",
          describe: "货源充足 全国可提",
          environmental_standards: "国五",
          id: "46",
          is_new_car: "准新车",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "2.5",
          license_reg_date: "2017",
          low_price: "91000",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000046/00000046/img_pic_1-1548407381.jpg",
          seo_desc: "",
          seo_keywords: "",
          seo_title: "",
          shift_time: "0",
          sort: "41",
          status: "1",
          type: "1",
          type_name: "宝来 2017款 1.6L 自动时尚型",
        },
        {
          add_time: "1545284554",
          car_config_id: "5040",
          describe: "车况精品，手续齐全，全国区域就近提车",
          environmental_standards: "国五",
          id: "41",
          is_new_car: "准新车",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "2.5",
          license_reg_date: "2017",
          low_price: "88000",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000041/00000041/img_pic_1-1545285190.jpg",
          seo_desc: "朗逸 2013款 改款经典 1.6L 自动风尚版￥8.8 万起 1.6L 110马力 L4 手动标配 2017年上牌，行驶2.5万公里，车辆通过优车库315项双重检测，优质批发二手车就上优车库二手车。",
          seo_keywords: "朗逸2013款 朗逸改款经典 朗逸朗逸2013款1.6L 朗逸2013款自动风尚版 二手朗逸2013款1.6L自动风尚版",
          seo_title: "朗逸 2013款 改款经典 1.6L 自动风尚版_￥8.8万起 优车库二手车",
          shift_time: "0",
          sort: "40",
          status: "1",
          type: "1",
          type_name: "朗逸 2013款 改款经典 1.6L 自动风尚版",
        },
        {
          add_time: "0",
          car_config_id: "22884",
          describe: "精品车况，手续齐全，全国多地现货批发供应",
          environmental_standards: "国五",
          id: "32",
          is_new_car: "准新车",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "2.5",
          license_reg_date: "2017",
          low_price: "112800",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000032/00000032/img_pic_1-1542008403.jpg",
          seo_desc: "高尔夫·嘉旅 2016款 1.6L 自动舒适型 ￥11.28 万起 两厢车 自然吸气 2017年上牌 行驶2.5万公里 车辆通过优车库315项双重检测，优质批发二手车就上优车库二手车。",
          seo_keywords: "高尔夫·嘉旅 高尔夫·嘉旅2016款 高尔夫·嘉旅1.6L 高尔夫·嘉旅自动舒适型 高尔夫·嘉旅2016款￥11.28 万起",
          seo_title: "高尔夫·嘉旅 2016款 1.6L 自动舒适型,高尔夫·嘉旅 2016款 1.6L 自动舒适型 ￥11.28 万起",
          shift_time: "0",
          sort: "39",
          status: "1",
          type: "1",
          type_name: "高尔夫·嘉旅 2016款 1.6L 自动舒适型",
        },
        {
          add_time: "0",
          car_config_id: "22362",
          describe: "精品车况，手续齐全，全国多地现货批发供应",
          environmental_standards: "国五",
          id: "33",
          is_new_car: "准新车",
          is_new_shift: "",
          is_usage: "非营运",
          kilometre: "2.6",
          license_reg_date: "2017",
          low_price: "88800",
          pic: "https://www.youcku.com/Public/UPLOADS/wholesale/00000033/00000033/img_pic_1-1540436325.jpg",
          seo_desc: "领动 2016款 1.6L 自动智炫·精英型￥8.88 万起 领动 2016款 1.6L排放标准国五，上牌年份2017年，排量1.6L，行驶平均公里数2.6万公里，车辆通过优车库315项双重检测，优质批发二手车就上优车库二手车。",
          seo_keywords: "领动2016款 领动1.6L自动智炫·精英型 领动自动智炫·精英型 二手领动2016款1.6L自动智炫·精英型",
          seo_title: "领动 2016款 1.6L 自动智炫·精英型_￥8.88 万起 优车库二手车批发",
          shift_time: "0",
          sort: "38",
          status: "1",
          type: "1",
          type_name: "领动 2016款 1.6L 自动智炫·精英型",
        },
      ]
    },
     

  bindViewTap:function(){
    wx.navigateTo({
      url:'../map/map'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  to_call: function (event) {
    var $this = this;
    console.log(event.currentTarget.dataset.phonenum)
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.phonenum 
    })
  },

  gotomap:function(){
    wx.navigateTo({
      url: "pages/map/map"
    })
  }

})
