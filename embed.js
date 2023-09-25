var s =
  "!!!!=mjol!sfm>#tuzmftiffu#!isfg>#iuuqt;00deo/wpoubof/dpn0tuzmft/dtt#!0?!!!!=tdsjqu!!!!!!dspttpsjhjo!!!!!!tsd>#iuuqt;00voqlh/dpn0sfbduA290vne0sfbdu/qspevdujpo/njo/kt#!!!!?=0tdsjqu?!!!!=tdsjqu!!!!!!dspttpsjhjo!!!!!!tsd>#iuuqt;00voqlh/dpn0sfbdu.epnA290vne0sfbdu.epn/qspevdujpo/njo/kt#!!!!?=0tdsjqu?!!!!=tdsjqu!tsd>#iuuqt;00deo/ubjmxjoedtt/dpn#?=0tdsjqu?!!!!=tdsjqu!tsd>#iuuqt;00deo/wpoubof/dpn0xjehfu/kt#!efgfs?=0tdsjqu?";
var m = "";
for (var i = 0; i < s.length; i++)
  m += String.fromCharCode(s.charCodeAt(i) - 1);
document.write(m);

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("my-widget-container");
  const widgetId = element.getAttribute("data-widget");
  ReactDOM.render(
    React.createElement(Embed.EmbedWidget, { widgetId: widgetId }),
    element
  );
});
