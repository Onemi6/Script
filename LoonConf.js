/*****************************************
作者:Onemi6
日期:2024.08.31
到处搜集可用本子
*****************************************/



[Script]
# 爱奇艺签到
cron "0 9 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js,timeout=300, tag=爱奇艺签到
http-request ^https:\/\/passport\.iqiyi\.com\/apis\/user\/ script-path=https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js ,requires-body=true, timeout=10, tag=爱奇艺签到获取token

# 达美乐披萨
cron "30 10 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/6b4da0d367d13790a9fd1d928c82bdf8/raw/dlm.js,timeout=300, tag=达美乐披萨
http-request ^https:\/\/game\.dominos\.com\.cn\/.+\/game\/gameDone script-path=https://gist.githubusercontent.com/Sliverkiss/6b4da0d367d13790a9fd1d928c82bdf8/raw/dlm.js,requires-body=true, timeout=10, tag=达美乐披萨获取token
[Mitm]
hostname= passport.iqiyi.com

hostname =game.dominos.com.cn
