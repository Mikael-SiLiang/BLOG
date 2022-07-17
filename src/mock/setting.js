import Mock from "mockjs";
import qqQrCode from "@/assets/QQcode.jpeg";
import weixinQrCode from "@/assets/WechatCode.jpeg";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic%2Ff1%2Fa1%2F5c%2Ff1a15c5551df78571c986ea3b50969b4_1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656215080&t=07d4db0614a30855c300ecd7036c0892",
        siteTitle: "Mikael's BLOG",
        githubName: "Mikael-SiLiang",
        github: "https://github.com/Mikael-SiLiang",
        qq: "953084287",
        qqQrCode: qqQrCode,
        weixin: "17603320356",
        weixinQrCode: weixinQrCode,
        mail: "qiyin0625@gmail.com",
        icp: "京ICP备12345678号",
        favicon: "http://www.guodegang.org/css/img/favicon.ico",
    }
})