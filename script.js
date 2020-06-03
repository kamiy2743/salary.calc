$(function() {
  $("#calc-btn").click(function() {
    var data1hour = $("#rest-time-start-hour").val();
    var data1minute = $("#rest-time-start-minute").val();
    var data2hour = $("#rest-time-finish-hour").val();
    var data2minute = $("#rest-time-finish-minute").val();
    var data3hour = $("#calc-start-hour").val();
    var data3minute = $("#calc-start-minute").val();
    var data4hour = $("#calc-finish-hour").val();
    var data4minute = $("#calc-finish-minute").val();
    var salary = $("#salary-input").val();

    var data1 = parseInt(data1hour) + (data1minute / 15 * 0.25);
    var data2 = parseInt(data2hour) + (data2minute / 15 * 0.25);
    var data3 = parseInt(data3hour) + (data3minute / 15 * 0.25);
    var data4 = parseInt(data4hour) + (data4minute / 15 * 0.25);
     if (data3 - data1 > 0) {
       $("#time-count").val(data4 - data3);
       $("#salary-count").val(Math.round((data4 - data3) * salary));
     } else if (data4 - data2 > 0) {
       $("#time-count").val(data1 - data3 + data4 - data2);
       $("#salary-count").val(Math.round((data1 - data3 + data4 - data2) * salary));
     } else {
       $("#time-count").val(data4 - data3);
       $("#salary-count").val(Math.round((data4 - data3) * salary));
     }
  });
});
