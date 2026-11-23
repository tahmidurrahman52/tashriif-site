/* Shared page motion for tashriif.com.
   Usage: <script src="/assets/motion.js" data-reveal=".card,.hero" data-grow=".bar" data-count=".num" defer></script>
   - data-reveal: elements that fade up as they scroll into view (siblings are staggered)
   - data-grow:   bars that grow from zero width
   - data-count:  numbers that count up from zero (keeps any suffix such as "+" or "%") */
(function () {
  var me = document.currentScript;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('motion');

  function start() {
    var reveal = (me && me.dataset.reveal) || '';
    var grow = (me && me.dataset.grow) || '';
    var count = (me && me.dataset.count) || '';

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('rv-in');
        if (e.target.__count) e.target.__count();
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    if (reveal) {
      var seen = [];
      document.querySelectorAll(reveal).forEach(function (el) {
        // Skip anything already inside a revealed element, so nothing animates twice.
        for (var p = el.parentElement; p; p = p.parentElement) if (p.classList.contains('rv')) return;
        el.classList.add('rv');
        var parent = el.parentElement, i = 0;
        for (var k = 0; k < seen.length; k++) if (seen[k].parentElement === parent) i++;
        el.style.setProperty('--rv-d', Math.min(i, 6) * 90 + 'ms');
        seen.push(el);
        io.observe(el);
      });
    }
    if (grow) document.querySelectorAll(grow).forEach(function (el) { el.classList.add('rv-grow'); io.observe(el); });

    if (count && !reduce) document.querySelectorAll(count).forEach(function (el) {
      var m = (el.textContent || '').trim().match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      var pre = m[1], target = parseFloat(m[2]), suf = m[3], dec = (m[2].split('.')[1] || '').length;
      el.__final = el.textContent;
      el.textContent = pre + (0).toFixed(dec) + suf;
      el.__count = function () {
        var t0 = performance.now(), dur = 1200;
        (function tick(t) {
          var x = Math.min(1, (t - t0) / dur), v = target * (1 - Math.pow(1 - x, 3));
          el.textContent = pre + v.toFixed(dec) + suf;
          if (x < 1) requestAnimationFrame(tick); else el.textContent = el.__final;
        })(t0);
      };
      io.observe(el);
    });

    // Before printing, show everything at once.
    window.addEventListener('beforeprint', function () {
      document.querySelectorAll('.rv,.rv-grow').forEach(function (el) { el.classList.add('rv-in'); });
      document.querySelectorAll(count || '_').forEach(function (el) { if (el.__final) el.textContent = el.__final; });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
