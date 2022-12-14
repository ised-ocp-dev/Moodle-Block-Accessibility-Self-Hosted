"undefined" == typeof window.AtKit ? (d = document, jf = d.createElement("script"), jf.src = M.cfg.wwwroot+"/blocks/accessibility/js/atkit.js", jf.type = "text/javascript", jf.id = "AtKitLib", d.getElementsByTagName("head")[0].appendChild(jf), window.AtKitLoaded = function() {
    var c = null;
    this.subscribe = function(b) {
        c = b
    };
    this.fire = function(b, e) {
        null != c && c(b, e)
    }
}, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
    __start()
})) : __start();

function __start() {
    var c = window,
        b = AtKit;
    $lib = b.lib();
    var e = "ftw resize fonts spellng dictionary insipio-tts wordprediction css overlay shortcutkeys tooltip".split(" ");
    b.importPlugins(e, function() {
        b.setLogo("https://core.atbar.org/resources/img/atbar.png");
        b.setName("ATBar");
        "undefined" == typeof c.AtKitLanguage ? b.setLanguage("en") : b.setLanguage(c.AtKitLanguage);
        var a;
        a = "Version 2.2.1<p style=\"line-height:120%\">Created by <a href='http://seb.skus.es'>Sebastian Skuse</a>, <a href='http://www.ecs.soton.ac.uk/people/mpw'>Magnus White</a> and the <a href='http://access.ecs.soton.ac.uk'>Accessibility Team</a>. Web and Internet Science, ECS<br> &copy; University of Southampton 2010-2013.<br><br>";
        a += "Fugue Icons &copy; <a href='http://www.pinvoke.com'>pinvoke</a> under Creative Commons licence.<br>";
        a += "Dictionary &copy; <a href='http://en.wiktionary.org'>Wiktionary</a> under Creative Commons licence.<br>";
        a += "<a href='http://famspam.com/facebox/'>Facebox</a> jQuery plugin &copy; Chris Wanstrath under MIT licence<br>";
        a += 'Portions of the spelling engine &copy; <a href="http://brandonaaron.net">Brandon Aaron</a> under MIT licence.<br>';
        a += "Word prediction provided by <a href='http://www.aitype.com/'>AIType</a>.<br>";
        a += "Text-to-Speech provided by <a href='http://www.acapela-group.com/'>Acapela Group</a>.";
        a += "</p>";
        b.setAbout(a);
        $lib.each(e, function(a, c) {
            b.addPlugin(c)
        });
        b.addResetFn("reset-saved", function() {
            b.clearStorage();
            null != typeof localStorage && localStorage.removeItem("ATBarAutoLoad")
        });
        b.addCloseFn("close-saved", function() {
            null != typeof localStorage && localStorage.removeItem("ATBarAutoLoad")
        });
        b.render();
        $lib(".at-btn:first a").focus();
        null != typeof localStorage && localStorage.setItem("ATBarAutoLoad", 1)
    })
};