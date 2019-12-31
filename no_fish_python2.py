#!/usr/bin/env python
# coding=utf8

#Python 2版本
#原作者：jejt123 （https://bbs.nga.cn/read.php?tid=19814448&page=10）

import requests
import random
import json

AREA2 = {"%c9%f1%d2%e2%d6%ae%b5%d8":"%c2%bd%d0%d0%c4%f1",
"%bb%c3%d3%b0%c8%ba%b5%ba":"%c2%bd%d0%d0%c4%f1",
"%c0%ad%c5%b5%ce%f7%d1%c7":"%c2%bd%d0%d0%c4%f1",
"%c3%c8%d1%bf%b3%d8":"%c2%bd%d0%d0%c4%f1",
"%ba%ec%d3%f1%ba%a3":"%c2%bd%d0%d0%c4%f1",
"%d3%ee%d6%e6%ba%cd%2%f4":"%c2%bd%d0%d0%c4%f1",
"%ce%d6%cf%c9%ea%d8%c8%be":"%c2%bd%d0%d0%c4%f1",
"%b3%bf%ea%d8%cd%f5%d7%f9":"%c2%bd%d0%d0%c4%f1",
"%b3%b1%b7%e7%cd%a4":"%c4%aa%b9%c5%c1%a6",
"%c9%f1%c8%ad%ba%db":"%c4%aa%b9%c5%c1%a6",
"%b0%d7%d2%f8%cf%e7":"%c4%aa%b9%c5%c1%a6",
"%b0%d7%bd%f0%bb%c3%cf%f3":"%c4%aa%b9%c5%c1%a6",
"%c1%fa%b3%b2%c9%f1%b5%ee":"%c4%aa%b9%c5%c1%a6",
"%c2%c3%c8%cb%d5%bb%c7%c5":"%c4%aa%b9%c5%c1%a6",
"%b7%f7%cf%fe%d6%ae%bc%e4":"%c4%aa%b9%c5%c1%a6",
"%c4%a6%b6%c5%c4%c9":"%c3%a8%d0%a1%c5%d6",
"%be%b2%d3%ef%d7%af%d4%b0":"%c3%a8%d0%a1%c5%d6",
"%d1%d3%cf%c4":"%c3%a8%d0%a1%c5%d6",
"%d7%cf%cb%ae%d5%bb%c7%c5":"%c3%a8%d0%a1%c5%d6",
"%ba%a3%c3%a8%b2%e8%ce%dd":"%c3%a8%d0%a1%c5%d6",
"%c8%e1%b7%e7%ba%a3%cd%e5":"%c3%a8%d0%a1%c5%d6",
"%e7%fa%e7%ea%d4%ad":"%c3%a8%d0%a1%c5%d6"}

phone = ["134","158","172","182"]
url = ["http://hx.ffhuodong.top/tz/%E3%80%801.asp"]
import thread

if __name__=="__main__":
while True:
number = random.randint(10000000, 99999999)
phone_number = str(random.choice(phone)) + str(number)
face = random.choice(AREA2.keys())
data = {"name":phone_number,
"pass":str(number),
"face": face,
"zone":AREA2[face],
"level": "%B3%A9%CB%AC%B8%A3%C0%FB%C0%F1%BA%D0"}
print data
res = requests.post(url, json.dumps(data), headers={"Content-Type": "application/x-www-form-urlencoded"})
print res.status_code
print res.text
