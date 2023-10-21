 console.log(
        `Welcome to:\n%cYlan·blog:%c https://adunm.top%c\nThis site has been running stably for %c ${Math.round(((new Date).getTime() - new Date("2021/09/09 00:00:00").getTime()) / 864e5)} %c days`,
        "border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#4976f5;margin:10px 0",
        "border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;",
        "",
        "color:#4976f5",
        ""
    );
// 星空背景
function dark(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var t,i,e,s,n=.05,h=document.getElementById("universe"),a=!0,o="226,225,224",r=[];function d(){t=window.innerWidth,i=window.innerHeight,e=.216*t,h.setAttribute("width",t),h.setAttribute("height",i)}function c(){s.clearRect(0,0,t,i);for(var e=r.length,n=0;n<e;n++){var h=r[n];h.move(),h.fadeIn(),h.fadeOut(),h.draw()}}function f(){this.reset=function(){this.giant=u(3),this.comet=!this.giant&&!a&&u(10),this.x=m(0,t-10),this.y=m(0,i),this.r=m(1.1,2.6),this.dx=m(n,6*n)+(this.comet+1-1)*n*m(50,120)+.1,this.dy=-m(n,6*n)-(this.comet+1-1)*n*m(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=m(.2,1-.4*(this.comet+1-1)),this.do=m(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>t||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(s.beginPath(),this.giant)s.fillStyle="rgba(180,184,240,"+this.opacity+")",s.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){s.fillStyle="rgba("+o+","+this.opacity+")",s.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)s.fillStyle="rgba("+o+","+(this.opacity-this.opacity/20*t)+")",s.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),s.fill()}else s.fillStyle="rgba(226,225,142,"+this.opacity+")",s.rect(this.x,this.y,this.r,this.r);s.closePath(),s.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>t-t/4||this.y<0)&&(this.fadingOut=!0)},setTimeout((function(){a=!1}),50)}function u(t){return Math.floor(1e3*Math.random())+1<10*t}function m(t,i){return Math.random()*(i-t)+t}d(),window.addEventListener("resize",d,!1),function(){s=h.getContext("2d");for(var t=0;t<e;t++)r[t]=new f,r[t].reset();c()}(),function t(){"dark"==document.getElementsByTagName("html")[0].getAttribute("data-theme")&&c(),window.requestAnimationFrame(t)}()}dark();
// 和风天气
WIDGET={"CONFIG":{"modules":"01234","background":"5","tmpColor":"4A86E8","tmpSize":"16","cityColor":"FF9900","citySize":"16","aqiColor":"4A86E8","aqiSize":"16","weatherIconSize":"24","alertIconSize":"18","padding":"0px 0px 0px 0px","shadow":"0","language":"auto","fixed":"true","vertical":"center","horizontal":"center","left":"150","top":"16","key":"a7a71c1e145d4822ad5d3b67418c7093"}}
//公告栏欢迎
//get请求
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'V5FBZ-MICEU-SH2VE-4433X-XLJL7-A7BUY',
        output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        ipLocation = res;
    }
})
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(109.14,30.06 ,  ipLocation.result.location.lng, ipLocation.result.location.lat); //这里记得换成自己的经纬度
    let pos = ipLocation.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipLocation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            pos = ipLocation.result.ad_info.province + " " + ipLocation.result.ad_info.city + " " + ipLocation.result.ad_info.district;
            ip = ipLocation.result.ip;
            switch (ipLocation.result.ad_info.province) {
                case "北京市":
                    posdesc = "北——京——欢迎你~~~";
                    break;
                case "天津市":
                    posdesc = "讲段相声吧";
                    break;
                case "河北省":
                    posdesc = "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                    break;
                case "山西省":
                    posdesc = "展开坐具长三尺，已占山河五百余";
                    break;
                case "内蒙古自治区":
                    posdesc = "天苍苍，野茫茫，风吹草低见牛羊";
                    break;
                case "辽宁省":
                    posdesc = "我想吃烤鸡架！";
                    break;
                case "吉林省":
                    posdesc = "状元阁就是东北烧烤之王";
                    break;
                case "黑龙江省":
                    posdesc = "很喜欢哈尔滨大剧院";
                    break;
                case "上海市":
                    posdesc = "众所周知，中国只有两个城市";
                    break;
                case "江苏省":
                    switch (ipLocation.result.ad_info.city) {
                        case "南京市":
                            posdesc = "这是我挺想去的城市啦";
                            break;
                        case "苏州市":
                            posdesc = "上有天堂，下有苏杭";
                            break;
                        default:
                            posdesc = "散装是必须要散装的";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "东风渐绿西湖柳，雁已还人未南归";
                    break;
                case "河南省":
                    switch (ipLocation.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "豫州之域，天地之中";
                            break;
                        case "南阳市":
                            posdesc = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                            break;
                        case "驻马店市":
                            posdesc = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                            break;
                        case "开封市":
                            posdesc = "刚正不阿包青天";
                            break;
                        case "洛阳市":
                            posdesc = "洛阳牡丹甲天下";
                            break;
                        default:
                            posdesc = "可否带我品尝河南烩面啦？";
                            break;
                    }
                    break;
                case "安徽省":
                    posdesc = "蚌埠住了，芜湖起飞";
                    break;
                case "福建省":
                    posdesc = "井邑白云间，岩城远带山";
                    break;
                case "江西省":
                    posdesc = "落霞与孤鹜齐飞，秋水共长天一色";
                    break;
                case "山东省":
                    posdesc = "遥望齐州九点烟，一泓海水杯中泻";
                    break;
                case "湖北省":
                    switch (ipLocation.result.ad_info.city) {
                        case "黄冈市":
                            posdesc = "红安将军县！辈出将才！";
                            break;
                        case "武汉市":
                            posdesc = "邀游武汉感恩有您。";
                            break;
                        case "恩施土家族苗族自治州":
                            posdesc = "欢迎来到我的故乡，仙居恩施 天上人间。";
                            break;
                        default:
                            posdesc = "天上九头鸟，地上湖北佬。";
                            break;
                    }
                    break;
                case "湖南省":
                    posdesc = "74751，长沙斯塔克";
                    break;
                case "广东省":
                    switch (ipLocation.result.ad_info.city) {
                        case "广州市":
                            posdesc = "看小蛮腰，喝早茶了嘛~";
                            break;
                        case "深圳市":
                            posdesc = "今天你逛商场了嘛~";
                            break;
                        case "阳江市":
                            posdesc = "阳春合水！博主家乡~ 欢迎来玩~";
                            break;
                        default:
                            posdesc = "来两斤福建人~";
                            break;
                    }
                    break;
                case "广西壮族自治区":
                    posdesc = "桂林山水甲天下";
                    break;
                case "海南省":
                    posdesc = "朝观日出逐白浪，夕看云起收霞光";
                    break;
                case "四川省":
                    posdesc = "康康川妹子";
                    break;
                case "贵州省":
                    posdesc = "茅台，学生，再塞200";
                    break;
                case "云南省":
                    posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天";
                    break;
                case "西藏自治区":
                    posdesc = "躺在茫茫草原上，仰望蓝天";
                    break;
                case "陕西省":
                    posdesc = "来份臊子面加馍";
                    break;
                case "甘肃省":
                    posdesc = "羌笛何须怨杨柳，春风不度玉门关";
                    break;
                case "青海省":
                    posdesc = "牛肉干和老酸奶都好好吃";
                    break;
                case "宁夏回族自治区":
                    posdesc = "大漠孤烟直，长河落日圆";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风";
                    break;
                case "台湾省":
                    posdesc = "我在这头，大陆在那头";
                    break;
                case "香港特别行政区":
                    posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉";
                    break;
                case "澳门特别行政区":
                    posdesc = "性感荷官，在线发牌";
                    break;
                default:
                    posdesc = "带我去你的城市逛逛吧！";
                    break;
            }
            break;
        default:
            posdesc = "带我去你的国家逛逛吧";
            break;
    }

    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>早上好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>中午好，记得午休喔~</span>";
    else if (date.getHours() >= 13 && date.getHours() < 17) timeChange = "<span>下午好，饮茶先啦！</span>";
    else if (date.getHours() >= 17 && date.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好，夜生活嗨起来！</span>";
    else timeChange = "夜深了，早点休息，少熬夜";

// 新增ipv6显示为指定内容
//     if (ip.includes(":")) {
//         ip = "<br>好复杂，咱看不懂~(ipv6)";
//     }

    try {
        //自定义文本和需要放的位置
        document.getElementById("welcome-info").innerHTML =
       `欢迎来自<span>${pos}</span>的小伙伴，${timeChange}<br>
        你距离Ylan约有<span>${dist}</span>公里，${posdesc}`
//        <br>您的IP地址为：<span>${ip}</span>
;
    } catch (err) {
        console.log("Pjax无法获取元素")
    }
}
window.onload = showWelcome;
// 如果使用了pjax在加上下面这行代码
document.addEventListener('pjax:complete', showWelcome);

// 友链保存/读取友链数据的功能实现
var flink_random = {
    saveData: (e,t)=>{
        localStorage.setItem(e, JSON.stringify({
            time: Date.now(),
            data: t
        }))
    },
    loadData: (e,t)=>{
        let n = JSON.parse(localStorage.getItem(e));
        if (n) {
            let e = Date.now() - n.time;
            if (e < 60 * t * 1e3 && e > -1)
                return n.data
        }
        return 0
    },
    randomLink: ()=>{
        let e = flink_random.loadData("links", 30);
        if (e) {
            let t = document.querySelectorAll("#friend-links-in-footer .footer-item");
            if (!t.length)
                return;
            for (let n = 0; n < 5; n++) {
                let o = parseInt(Math.random() * e.length);
                t[n].innerText = e[o].name,
                    t[n].href = e[o].link,
                    e.splice(o, 1)
            }
        } else{
            fetch("/link.json").then((e=>e.json())).then((e=>{
                    flink_random.saveData("links", e.link_list),
                        flink_random.randomLink()
                }
            ))
        }
    },
}
flink_random.randomLink();

 <!-- 在模板文件中添加 JavaScript 代码 -->

     (async function() {
     async function getIpInfo() {
         var fetchUrl = "https://api.qjqq.cn/api/Local";
         try {
             var response = await fetch(fetchUrl);
             var json = await response.json();

             var ip = json.ip;
             var continent = json.data.continent;
             var country = json.data.country;
             var prov = json.data.prov;
             var city = json.data.city;
             var district = json.data.district;
             var radius = json.data.radius;
             var isp = json.data.isp;
             var zipcode = json.data.zipcode;

             document.getElementById("userAgentIp").innerHTML = ip;
             document.getElementById("userAgentState").innerHTML = continent;
             document.getElementById("userAgentCountry").innerHTML = country;
             document.getElementById("userAgentProv").innerHTML = prov;
             document.getElementById("userAgentCity").innerHTML = city;
             document.getElementById("userAgentDistrict").innerHTML = district;
             document.getElementById("userAgentRadius").innerHTML = radius;
             document.getElementById("userAgentISP").innerHTML = isp;
             document.getElementById("userAgentZipcode").innerHTML = zipcode;

             var uaInfo = navigator.userAgent;
             document.getElementById("userAgentDevice").innerHTML = uaInfo;
         } catch (error) {

         }
     }

     await getIpInfo();
 })();

 function switchPostChart () {
     // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
     let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4C4948' : 'rgba(255,255,255,0.7)'
     if (document.getElementById('posts-chart') && postsOption) {
         try {
             let postsOptionNew = postsOption
             postsOptionNew.title.textStyle.color = color
             postsOptionNew.xAxis.nameTextStyle.color = color
             postsOptionNew.yAxis.nameTextStyle.color = color
             postsOptionNew.xAxis.axisLabel.color = color
             postsOptionNew.yAxis.axisLabel.color = color
             postsOptionNew.xAxis.axisLine.lineStyle.color = color
             postsOptionNew.yAxis.axisLine.lineStyle.color = color
             postsOptionNew.series[0].markLine.data[0].label.color = color
             postsChart.setOption(postsOptionNew)
         } catch (error) {
             console.log(error)
         }
     }
     if (document.getElementById('tags-chart') && tagsOption) {
         try {
             let tagsOptionNew = tagsOption
             tagsOptionNew.title.textStyle.color = color
             tagsOptionNew.xAxis.nameTextStyle.color = color
             tagsOptionNew.yAxis.nameTextStyle.color = color
             tagsOptionNew.xAxis.axisLabel.color = color
             tagsOptionNew.yAxis.axisLabel.color = color
             tagsOptionNew.xAxis.axisLine.lineStyle.color = color
             tagsOptionNew.yAxis.axisLine.lineStyle.color = color
             tagsOptionNew.series[0].markLine.data[0].label.color = color
             tagsChart.setOption(tagsOptionNew)
         } catch (error) {
             console.log(error)
         }
     }
     if (document.getElementById('categories-chart') && categoriesOption) {
         try {
             let categoriesOptionNew = categoriesOption
             categoriesOptionNew.title.textStyle.color = color
             categoriesOptionNew.legend.textStyle.color = color
             if (!categoryParentFlag) { categoriesOptionNew.series[0].label.color = color }
             categoriesChart.setOption(categoriesOptionNew)
         } catch (error) {
             console.log(error)
         }
     }
 }
 document.getElementById("darkmode").addEventListener("click", function () { setTimeout(switchPostChart, 100) })