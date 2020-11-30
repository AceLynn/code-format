$(document).ready(function () {
  // 使用jq
  // 获取视图宽度，对比750px宽度的UI设计稿，获取字体比例
  // 设置html的字体大小，其余内容采用rem单位，获取适配大小
  var w = $('body').width();
  var fontSize = (w / 750) * 100;
  $('html').css('font-size', fontSize + 'px');
});
