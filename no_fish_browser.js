/**
浏览器运行版本
原作者：maplerecall （https://bbs.nga.cn/read.php?tid=19814448）
**/

var zoneList = [
  {
    name: "%c2%bd%d0%d0%c4%f1",
    servers: [
      "%c9%f1%d2%e2%d6%ae%b5%d8",
      "%bb%c3%d3%b0%c8%ba%b5%ba",
      "%c0%ad%c5%b5%ce%f7%d1%c7",
      "%c3%c8%d1%bf%b3%d8",
      "%ba%ec%d3%f1%ba%a3",
      "%d3%ee%d6%e6%ba%cd%d2%f4",
      "%ce%d6%cf%c9%ea%d8%c8%be",
      "%b3%bf%ea%d8%cd%f5%d7%f9"
    ]
  },
  {
    name: "%c4%aa%b9%c5%c1%a6",
    servers: [
      "%b3%b1%b7%e7%cd%a4",
      "%c9%f1%c8%ad%ba%db",
      "%b0%d7%d2%f8%cf%e7",
      "%b0%d7%bd%f0%bb%c3%cf%f3",
      "%c1%fa%b3%b2%c9%f1%b5%ee",
      "%c2%c3%c8%cb%d5%bb%c7%c5",
      "%b7%f7%cf%fe%d6%ae%bc%e4"
    ]
  },
  {
    name: "%c3%a8%d0%a1%c5%d6",
    servers: [
      "%c4%a6%b6%c5%c4%c9",
      "%be%b2%d3%ef%d7%af%d4%b0",
      "%d1%d3%cf%c4",
      "%d7%cf%cb%ae%d5%bb%c7%c5",
      "%ba%a3%c3%a8%b2%e8%ce%dd",
      "%c8%e1%b7%e7%ba%a3%cd%e5",
      "%e7%fa%e7%ea%d4%ad"
    ]
  }
];

var emailList = [
  "@qq.com",
  "@163.com",
  "@126.com",
  "@foxmail.com",
  "@gmail.com",
  "@outlook.com",
  "@hotmail.com",
  "@live.com"
];

var getRandInt = max => (Math.random() * max) | 0;

var getRandStr = (length, numOnly) => Math.random().toString(numOnly ? 10 : 36).substring(2, 2 + length);

var getRand = isAccount => {
  let numOnly = !getRandInt(3);
  let string = getRandStr(8, numOnly) + getRandStr(getRandInt(numOnly ? 4 : 9), numOnly);
  isAccount && getRandInt(2) && (string += emailList[numOnly ? 0 : getRandInt(emailList.length)]);
  return string;
};

var start = true;
var count = 0;
var error = 0;
var url = document.querySelector("form").action;

for (let i = 0; i < 6; i++) {
  (async () => {
    while (start) {
      let n = getRand(1);
      let p = getRand();
      let z = zoneList[getRandInt(zoneList.length)];
      let s = z.servers[getRandInt(z.servers.length)];
      count++;
      count % 100 || console.clear();
      console.log(count, n, p);
      await fetch(url , {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `name=${n}&pass=${p}&face=${z.name}&zone=${s}&level=%B3%A9%CB%AC%B8%A3%C0%FB%C0%F1%BA%D0`
      }).then(r=>(r&&r.status===200)?true:Promise.reject()).catch(() => {++error > 100 && (start = console.log("Error > 100, End."))});
    }
  })();
}
