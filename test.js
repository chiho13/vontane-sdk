var Embed;
(() => {
  "use strict";
  var e = {
      n: (t) => {
        var o = t && t.__esModule ? () => t.default : () => t;
        return e.d(o, { a: o }), o;
      },
      d: (t, o) => {
        for (var r in o)
          e.o(o, r) &&
            !e.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  e.r(t), e.d(t, { EmbedWidget: () => a });
  const o = React;
  var r = e.n(o);
  const a = ({ widgetId: e }) => (
    (0, o.useEffect)(() => {
      fetch(`http://localhost:3000/api/widget?id=${e}`)
        .then((e) => e.json())
        .then((e) => {
          console.log(e);
        })
        .catch((e) => {
          console.error("There was an error!", e);
        });
    }, []),
    r().createElement("div", { className: "mt-5 p-4 text-2xl" }, "Hello World")
  );
  Embed = t;
})();
