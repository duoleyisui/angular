import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  change = "message";
  list1 = {
    span1: "资产包转让",
    span2: "FB001",
    img: "assets/images/a1.png",
    info1: "地区",
    info11: "北京",
    info2: "来源",
    info21: "银行",
    info3: "资产包类型",
    info31: "抵押",
    mes1: "500万",
    mes11: "总金额",
    mes2: "300万",
    mes21: "转让价"
  }
  
  list2 = {
    span1: "催收机构",
    span2: "PV1001",
    img: "assets/images/a2.png",
    info1: "地区",
    info11: "北京",
    info2: "状态",
    info21: "以诉讼",
    info3: "类型",
    info31: "个人",
    mes1: "100",
    mes11: "金额",
    mes2: "30%",
    mes21: "佣金比例"
  }
}