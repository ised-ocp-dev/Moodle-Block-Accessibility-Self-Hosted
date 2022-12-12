(function(e, u) {
    var a = function() {
        function v(g) {
            this.name = g;
            this.supportedLanguages = [];
            this.aboutDialog = "";
            this.settings = {};
            this.version = 0;
            var m = d.$;
            this.onRender = function() {};
            this.onRun = function() {};
            this.register = function() {
                a.registerPlugin(this.name, this)
            };
            this.run = function() {
                this.onRun(m)
            };
            this.render = function() {
                this.onRender(m)
            }
        }

        function n() {
            h("waitForLib invoked");
            a.internal.__loadAttempts == a.internal.__maxLoadAttempts ? (h("Max load count reached: stopping execution."), bar = document.getElementById("sbarGhost"),
                bar.innerHTML = d.__templates.barFailed, setTimeout(function() {
                    body = document.getElementsByTagName("body");
                    bar = document.getElementById("sbarGhost");
                    body[0].removeChild(bar)
                }, a.internal.__errorMessageTimeout)) : "undefined" == typeof e.jQuery || null == e.jQuery ? (h("waitForLib: jQuery undefined."), setTimeout(function() {
                n()
            }, 100), a.internal.__loadAttempts++) : (d.$ = e.jQuery.noConflict(!0), "undefined" != typeof e._jQuery && (e.jQuery = e._jQuery), "undefined" != typeof e._$ && (e.$ = e._$), d.$(document).ready(function() {
                q()
            }))
        }

        function q() {
            h("broadcastLoaded fired.");
            e.AtKit = d;
            "undefined" != typeof e.AtKitLoaded && e.AtKitLoaded.fire(null, {
                version: a.internal.__version
            })
        }

        function r(g) {
            h("renderButton fired for ident " + g + ".");
            var a = d.__templates.button,
                a = a.replace(/\(ID\)/ig, g),
                a = a.replace(/\(TITLE\)/ig, d.__env.buttons[g].tooltip),
                a = a.replace(/\(SRC\)/ig, d.__env.buttons[g].icon),
                a = a.replace(/\(CLASS\)/ig, d.__env.buttons[g].cssClass),
                a = d.$(a);
            a.children("a").bind("click touchend", {
                button: d.__env.buttons[g]
            }, function(a) {
                try {
                    d.__env.buttons[g].action(a.data.button.dialogs,
                        a.data.button.functions), d.send_analytics_event({
                        hitType: "event",
                        eventCategory: "Plugin." + g,
                        eventAction: "invoked"
                    })
                } catch (m) {
                    h(m), d.send_analytics_event({
                        hitType: "event",
                        eventCategory: "Plugin." + g,
                        eventAction: "error"
                    })
                }
                a.preventDefault()
            });
            a.children("a").bind("focus", function() {
                d.$(this).attr("style", d.$(this).attr("style") + d.__CSS[".at-btn a:active"])
            });
            a.children("a").bind("focusout", function() {
                d.$(this).attr("style", d.__CSS[".at-btn a"])
            });
            d.__env.buttons[g].HTML = a;
            return d.__env.buttons[g].HTML
        }

        function j(g) {
            g = "undefined" == typeof g ? d.__CSS : g;
            for (c in g)
                if (!(/:active/.test(c) || 0 == d.$(c).length)) try {
                    var a = g[c];
                    if (d.settings.isRightToLeft)
                        if (-1 != a.indexOf("float:left")) var e = /float:left/gi,
                            a = a.replace(e, "float:right");
                        else - 1 != a.indexOf("float:right") && (e = /float:right/gi, a = a.replace(e, "float:left"));
                    d.$(c).attr("style", a)
                } catch (j) {
                    h(j.description)
                }
        }

        function h(d) {
            a.internal.__debug && (null != a.internal.debugCallback ? a.internal.debugCallback(d) : "undefined" != typeof console && console.log(d))
        }

        function l() {
            barGhost =
                document.createElement("div");
            barGhost.id = "sbarGhost";
            barGhost.innerHTML = d.__templates.barGhost;
            if (null != document.body) document.body.insertBefore(barGhost, document.body.firstChild);
            else var a = setInterval(function() {
                null != document.body && (document.body.insertBefore(barGhost, document.body.firstChild), clearInterval(a))
            }, 100)
        }

        function t(d, a) {
            var e = document.createElement("script");
            e.src = a;
            e.type = "text/javascript";
            e.id = d;
            document.getElementsByTagName("head")[0].appendChild(e)
        }
        a.internal = a.prototype = {
            __version: 1.6,
            __build: 2,
            __APIVersion: 1,
            __baseURL: "https://core.atbar.org/",
            __APIURL: "http://a.atbar.org/",
            __pluginURL: "https://plugins.atbar.org/",
            __faceboxURL: "https://core.atbar.org/resources/js/facebox.dev.js",
            __libURL: "https://core.atbar.org/resources/jquery/1.8/jquery.min.js",
            __responsiveCssURL: "https://core.atbar.org/resources/css/responsive.css",
            __channel: "atkit",
            __invoked: !1,
            __debug: !1,
            __loadAttempts: 0,
            __maxLoadAttempts: 30,
            __errorMessageTimeout: 2E3,
            __localStorageNamespace: "AtKit_",
            __protocol: null,
            plugins: {},
            localisations: {
                en: {
                    exit: "Exit",
                    reset: "Reset webpage",
                    help: "Help & instructions",
                    collapse: "Collapse and uncollapse plugins"
                },
                ar: {
                    exit: "&#1582;&#1585;&#1608;&#1580;",
                    reset: "&#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1605;&#1580;&#1583;&#1583;&#1575;",
                    help: "&#1605;&#1587;&#1575;&#1593;&#1583;&#1577; &#1608; &#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578; &#1575;&#1590;&#1575;&#1601;&#1610;&#1577;",
                    collapse: "&#1593;&#1585;&#1590; &#1571;&#1608; &#1573;&#1582;&#1601;&#1575;&#1569; &#1575;&#1604;&#1604;&#1575;&#1574;&#1581;&#1577;"
                }
            },
            templates: {
                global: {
                    buttons: {},
                    dialogs: {},
                    storage: {},
                    fn: {},
                    unloadFn: {},
                    helpFn: {},
                    resetFn: {},
                    closeFn: {}
                }
            },
            debugCallback: null,
            language: "en",
            defaultLanguage: "en"
        };
        a.internal.__resourceURL = a.internal.__baseURL;
        a.internal.__channelURL += a.internal.__channel;
        a.internal.__assetURL = a.internal.__baseURL + "resources/";
        a.internal.versionString = "v" + a.internal.__version.toFixed(1) + "." + a.internal.__build + " (" + a.internal.__channel + " release channel)";
        a.internal.__aboutDialog = {
            CSS: {
                "#ATKFBAbout": "font-family:Helvetica, Verdana, Arial, sans-serif; font-size:12px; color:#364365; direction: ltr; text-align:left",
                "#ATKFBAbout h2": "border-bottom:1px solid #DDD; font-size:16px; margin-bottom:5px; margin-top:10px; padding-bottom:5px; direction: ltr; text-align:left",
                "#ATKFBAbout p#ATKFBAboutFooter": "border-top:1px solid #DDD;p adding-top:10px; margin-top:25px;"
            }
        };
        a.external = a.prototype = {
            transport: "JSONP",
            window: e,
            global: a.internal.templates.global,
            buttons: {},
            languageMap: {},
            siteFixes: []
        };
        default_css = "-webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; height:initial; width:initial; margin:0px; padding:0; border:0; vertical-align:baseline; font-size: initial; font: inherit; float:none; line-height:initial; color:initial; background:initial;";
        var d = {
            __env: a.external,
            __templates: {
                barGhost: '<center><img src="' + a.internal.__assetURL + 'img/loading.gif" style="margin-top:10px;" /></center>',
                barFailed: "<center>library loading failed</center>",
                button: '<div id="at-btn-(ID)" title="(TITLE)" class="at-btn (CLASS)"><a title="(TITLE)" id="at-lnk-(ID)" href="#ATBarLink"><img src="(SRC)" alt="(TITLE)" height="16" width="16" border="0" /></a></div>',
                spacer: '<div class="at-spacer"></div>',
                separator: '<div class="at-separator at-separator-(ID)"></div>'
            },
            __CSS: {
                "#sbarGhost, #sbar": default_css,
                "#sbarGhost *, #sbar *": default_css,
                "#sbarlogo": default_css + "float:left",
                "#sbarlogo img": default_css + "margin-top:10px; vertical-align:middle;",
                "#sbar": default_css + "height:40px; left:0; line-height:40px; margin-left:auto; margin-right:auto; position:fixed; top:0;width:100%; z-index:2147483646; padding:0 5px; background:url(" + a.internal.__assetURL + "img/background.png) repeat-x #EBEAED;",
                "#sbarGhost": default_css + "height:40px; width:100%;",
                "#at-collapse": "",
                ".at-spacer": default_css +
                    "display:block; height:40px; width:40px; float:left",
                ".at-separator": default_css + "display:block; height:25px; border-left:2px solid #a9a9a9; margin:7px 1px 4px 7px; float:left;",
                ".at-btn": default_css + "height:28px; width:28px; line-height:14px; text-align:center; color:#FFF; clear:none; margin:5px 0 0 5px;background:url(" + a.internal.__assetURL + "img/button_background.png) no-repeat; float:left;",
                ".at-btn a": default_css + "display:block; height:28px; width:28px; background:transparent; position:inherit;",
                ".at-btn a:active": default_css + "font-size: 100%; font: inherit; border:yellow solid 2px;",
                ".at-btn img": default_css + "padding:6px; default_css + border:none; background:none;",
                ".no-float": "float: none !important;",
                "#at-btn-atkit-reset, #at-btn-atkit-unload, #at-btn-atkit-help, #at-btn-atkit-toggle": default_css + "height:28px; width:28px; line-height:14px; text-align:center; color:#FFF; clear:none; float:right; margin:5px 10px 0 0; background:url(" + a.internal.__assetURL + "img/button_background.png) no-repeat;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-footer": default_css + "border-top-width: 1px; border-top-style: solid; border-top-color: rgb(221, 221, 221); padding-top:5px; margin-top:10px; display:block; text-align:left;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-footer > a ": default_css + "float: left;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-footer > a > img ": default_css + "float: left;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content > .user-dialog > h1": default_css +
                    "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size:18pt; font-weight:bold; color:black; display:block; margin:10px 0px 10px 0px;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content h1": default_css + "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size:18pt; font-weight:bold; color:black; display:block; margin:10px 0px 10px 0px;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content h2": default_css + "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size:16pt; font-weight:bold; color:black; display:block; margin:5px 0px 5px 0px;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content p": default_css + "display:block;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content > .user-dialog > p": default_css + "display:block;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content button": default_css + "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; height:26px; margin:10px; padding:5px; color:white; background-color:#0064CD; border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25); text-shadow:0 -1px 0 rgba(0,0,0,0.25); background-image: -webkit-linear-gradient(top, #049cdb, #0064cd); border-radius:4px;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content label": default_css + "float:left; display:block; margin:0px; margin-right:5px;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content select": default_css + "border:1px solid black; float:left; display:block;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content input": default_css + "border:1px solid black; float:left; display:block;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content select#spellchecksuggestions": default_css +
                    "border:1px solid black; float:none; display:block;width:360px;",
                "#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content select#spellcheckmistakes": default_css + "border:1px solid black; float:none; display:block;width:360px;"
            },
            settings: {
                noiframe: !0,
                allowclose: !0,
                allowreset: !0,
                allowhelp: !0,
                isRightToLeft: !1,
                logoURL: "",
                name: "",
                about: ""
            },
            htmlTags: "a abbr acronym address applet area article aside audio b base basefont bdi bdo big blockquote body br button canvas caption center cite code col colgroup command datalist dd del details dfn dir div dl dt em embed fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link map mark menu meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr".split(" "),
            version: a.internal.__APIVersion,
            $: "",
            plugin: function(d) {
                return new v(d)
            },
            getVersion: function() {
                return a.internal.__version.toFixed(1) + "." + a.internal.__build
            },
            isRendered: function() {
                return a.internal.__invoked
            },
            g: function() {
                return a.internal.__resourceURL
            },
            getResourceURL: function() {
                return a.internal.__resourceURL
            },
            getChannelURL: function() {
                return a.internal.__channelURL
            },
            getPluginURL: function() {
                return a.internal.__pluginURL
            },
            setName: function(a) {
                d.settings.name = a
            },
            setAbout: function(a) {
                d.settings.about =
                    a
            },
            setLogo: function(a) {
                d.settings.logoURL = a
            },
            setIsRightToLeft: function(a) {
                d.settings.isRightToLeft = a
            },
            setCSS: function(a, e) {
                d.__CSS[a] = e
            },
            getHtmlTags: function() {
                return d.htmlTags
            },
            setIsRightToLeft: function(a) {
                d.settings.isRightToLeft = a
            },
            setLanguage: function(d) {
                a.internal.language = d
            },
            getLanguage: function() {
                return a.internal.language
            },
            addLocalisation: function(d, e, h) {
                a.internal.localisations[d][e] = h
            },
            addLocalisationMap: function(g, e) {
                a.internal.localisations[g] = d.$.extend(!0, a.internal.localisations[g],
                    e)
            },
            localisation: function(d) {
                return "undefined" == typeof a.internal.localisations[a.internal.language] ? a.internal.localisations[a.internal.defaultLanguage][d] : "undefined" == typeof a.internal.localisations[a.internal.language][d] ? "{no value set for key " + d + " in language " + a.internal.language + "}" : a.internal.localisations[a.internal.language][d]
            },
            addFix: function(a, e) {
                d.__env.siteFixes.push({
                    regex: a,
                    f: e
                })
            },
            addScript: function(a, e) {
                "undefined" != typeof d.$ ? 0 < d.$('script[src="' + a + '"]').length || d.$.getScript(a,
                    e) : t("", a)
            },
            addStylesheet: function(a, e) {
                d.$("head").append(d.$("<link>", {
                    rel: "stylesheet",
                    href: a,
                    type: "text/css",
                    id: e
                }))
            },
            addFn: function(a, e) {
                d.__env.global.fn[a] = e
            },
            addCloseFn: function(a, e) {
                d.__env.global.closeFn[a] = e
            },
            addResetFn: function(a, e) {
                d.__env.global.resetFn[a] = e
            },
            addHelpFn: function(a, e) {
                d.__env.global.helpFn[a] = e
            },
            addDialog: function(a, e, h) {
                d.__env.global.dialogs[a] = {
                    title: e,
                    body: h
                }
            },
            addButton: function(g, e, h, k, n, q, l) {
                "undefined" == typeof d.__env.buttons[g] && (d.__env.buttons[g] = {
                    icon: h,
                    tooltip: e,
                    action: k,
                    dialogs: n,
                    functions: q
                }, null != l && (d.__env.buttons[g] = d.$.extend(!0, d.__env.buttons[g], l)), a.internal.__invoked && (d.$(r(g)).appendTo("#at-collapse"), j()))
            },
            removeButton: function(g) {
                delete d.__env.buttons[g];
                a.internal.__invoked && (h("remove button " + g), d.$("#at-btn-" + g).remove())
            },
            addSpacer: function(a) {
                "undefined" == typeof a && d.$(d.__templates.spacer).appendTo("#sbar");
                if (!isNaN(a))
                    for (i = 0; i < a; i++) d.$(d.__templates.spacer).appendTo("#sbar");
                j()
            },
            addSeparator: function(a) {
                "undefined" == typeof a &&
                    (a = "separator" + Math.floor(999 * Math.random() + 1));
                var e = d.__templates.separator,
                    e = e.replace(/\(ID\)/ig, a),
                    e = d.$(e);
                e.appendTo("#at-collapse");
                j()
            },
            removeSeparator: function(e) {
                a.internal.__invoked && (h("remove separator " + e), d.$(".at-separator-" + e).each(function() {
                    this.remove()
                }))
            },
            importPlugins: function(e, h) {
                var j = e instanceof Array ? e.join(",") : e;
                d.addScript(a.internal.__pluginURL + j + ".js", h)
            },
            addPlugin: function(d) {
                a.internal.plugins[d].payload()
            },
            registerPlugin: function(d, e, h) {
                a.internal.plugins[d] = {
                    payload: e,
                    metadata: h
                }
            },
            listPlugins: function() {
                var d = [];
                for (p in a.internal.plugins) d.push(p);
                return d
            },
            getPluginMetadata: function(d) {
                return a.internal.plugins[d].metadata
            },
            show: function(a, e) {
                a = d.$("<div>", {
                    "class": "userDialog"
                }).append(d.$("<h2>", {
                    html: a.title
                }), d.$("<p>", {
                    html: a.body
                }));
                d.$("body").find(".facebox_hide").remove();
                d.$.facebox(a);
                j();
                "null" != typeof e && "undefined" != typeof e && e()
            },
            message: function(a, e) {
                d.$("body").find(".facebox_hide").remove();
                d.$.facebox(a);
                j();
                "null" != typeof e && "undefined" !=
                    typeof e && e()
            },
            hideDialog: function() {
                d.$(e.document).trigger("close.facebox")
            },
            call: function(a, e) {
                return d.__env.global.fn[a](e)
            },
            set: function(a, e) {
                d.__env.global.storage[a] = e
            },
            get: function(a) {
                return d.__env.global.storage[a]
            },
            storageAvailable: function() {
                return typeof e.localStorage ? !0 : !1
            },
            storage: function(g, h) {
                if (!d.storageAvailable()) return !1;
                var j = a.internal.__localStorageNamespace + d.settings.name + "_" + g;
                if ("undefined" == typeof h) return e.localStorage.getItem(j);
                e.localStorage.setItem(j, h);
                return !0
            },
            clearStorage: function() {
                if (d.storageAvailable()) {
                    var g = RegExp("^" + (a.internal.__localStorageNamespace + d.settings.name) + ".*");
                    for (s in e.localStorage) s.match(g) && e.localStorage.removeItem(s)
                }
            },
            setDebugger: function(d) {
                a.internal.debugCallback = d
            },
            lib: function() {
                return "function" == typeof d.$ ? d.$ : "string" == typeof d.$ && "function" == typeof e.jQuery ? e.jQuery : !1
            },
            render: function() {
                "undefined" == typeof d.$.facebox && d.addScript(a.internal.__faceboxURL);
                //d.bootstrap_analytics("UA-24512836-5");
                if (!a.internal.__invoked) {
                    0 ==
                        d.$("#sbarGhost").length && l();
                    d.$(d.$("<div>", {
                        id: "sbar"
                    })).insertAfter("#sbarGhost");
                    var e = d.settings.isRightToLeft ? "right" : "left";
                    d.$(d.$("<a>", {
                        id: "sbarlogo",
                        click: function() {
                            a.internal.__aboutDialog.HTML = "<h2>About " + d.settings.name + "</h2>";
                            a.internal.__aboutDialog.HTML += "<p id='ATKFBUserSpecifiedAbout'>" + d.settings.about + "</p>";
                            a.internal.__aboutDialog.HTML += "<p id='ATKFBAboutFooter'>Powered by AtKit " + a.internal.versionString;
                            var e = d.listPlugins();
                            0 < e.length && (a.internal.__aboutDialog.HTML +=
                                "<br /> Registered plugins: ", e.map(function(d) {
                                    a.internal.__aboutDialog.HTML += "<button class='pluginLink'>" + d + "</button>"
                                }));
                            a.internal.__aboutDialog.HTML += "</p>";
                            a.internal.__aboutDialog.HTML = d.$("<div>", {
                                id: "ATKFBAbout"
                            }).append(a.internal.__aboutDialog.HTML);
                            d.message(a.internal.__aboutDialog.HTML);
                            j(a.internal.__aboutDialog.CSS)
                        }
                    }).append(d.$("<img>", {
                        src: d.settings.logoURL,
                        align: e,
                        border: "0",
                        title: d.settings.name + "Logo",
                        alt: d.settings.name + "Logo",
                        style: "margin-top:10px;float:" + e
                    }
					))).appendTo("#sbar");
					// No longer need to record external stat pixels with self hosting
                    // d.$("<img>", {
                        // src: "https://misc.services.atbar.org/stats/stat.php?channel=" + a.internal.__channel + "-" + d.settings.name + "&version=" + a.internal.__version.toFixed(1) + "." + a.internal.__build,
                        // alt: " "
                    // }).appendTo("#sbar");
                    d.settings.allowclose && d.addButton("atkit-unload", d.localisation("exit"), a.internal.__assetURL + "img/close.png", function() {
                        d.close()
                    }, null, null, {
                        cssClass: "fright"
                    });
                    d.settings.allowreset && d.addButton("atkit-reset", d.localisation("reset"), a.internal.__assetURL + "img/reset.png", function() {
                            d.reset()
                        },
                        null, null, {
                            cssClass: "fright"
                        });
                    d.settings.allowhelp && d.addButton("atkit-help", d.localisation("help"), a.internal.__assetURL + "img/help.png", function() {
                        d.help()
                    }, null, null, {
                        cssClass: "fright"
                    });
                    d.$(d.$("<div>", {
                        id: "at-collapse"
                    })).appendTo("#sbar");
                    d.addButton("atkit-toggle", d.localisation("collapse"), a.internal.__assetURL + "img/collapse.gif", function() {
                        $("#at-collapse").is(":visible") ? $("#at-collapse").slideUp("fast", function() {
                                $("#at-collapse").addClass("at-hidden");
                                $("#at-collapse").removeClass("at-visible")
                            }) :
                            $("#at-collapse").slideDown("fast", function() {
                                $("#at-collapse").addClass("at-visible");
                                $("#at-collapse").removeClass("at-hidden")
                            })
                    }, null, null, {
                        cssClass: "fright"
                    });
                    for (b in d.__env.buttons) "fright" == d.__env.buttons[b].cssClass ? d.$(r(b)).appendTo("#sbar") : d.$(r(b)).appendTo("#at-collapse");
                    j();
                    h("siteFixes fired. Running fixes.");
                    if (0 != d.__env.siteFixes.length)
                        for (fix in d.__env.siteFixes) e = d.__env.siteFixes[fix], e.regex.test() && e.f();
                    "msie" == d.$.browser && 6 == d.$.browser.version ? d.$("#sbarGhost").remove() :
                        d.$("#sbarGhost").html("&nbsp;");
                    a.internal.__invoked = !0;
                    d.__env.global.unloadFn["default"] = function() {
                        d.$("#sbarGhost, #sbar").remove();
                        d.$("body > div.tooltip").remove()
                    };
                    d.__env.global.resetFn["default"] = function() {
                        location.reload(!0)
                    };
                    d.$("body").trigger("AtKitRenderComplete")
                }
            },
            close: function() {
                for (f in d.__env.global.unloadFn) d.__env.global.unloadFn[f]();
                a.internal.language = a.internal.defaultLanguage;
                a.internal.debugCallback = null;
                d.__env.global = a.internal.templates.global;
                d.__env.buttons = {};
                d.__env.languageMap = {};
                d.__env.siteFixes = [];
                a.internal.plugins = {};
                a.internal.__invoked = !1
            },
            reset: function() {
                for (f in d.__env.global.resetFn) d.__env.global.resetFn[f]();
                a.internal.__invoked = !1
            },
            help: function() {
                e.open("https://www.atbar.org/instructions", "_blank")
            },
			// No longer need to get external Google Analytics for these guys, we are self hosted now
            // analytics_tracker_name: "atkit",
            // bootstrap_analytics: function(a) {
                // h("bootstrapping GA");
                // e.GoogleAnalyticsObject === u ? (h("making new GA"), e.GoogleAnalyticsObject = "ga", e[e.GoogleAnalyticsObject] = function() {
                    // (e[e.GoogleAnalyticsObject].q =
                        // e[e.GoogleAnalyticsObject].q || []).push(arguments)
                // }, e[e.GoogleAnalyticsObject].ga = +new Date, d.$.ajax({
                    // dataType: "script",
                    // cache: !0,
                    // url: "https://www.google-analytics.com/analytics.js"
                // })) : h("using existing GA");
                // e[e.GoogleAnalyticsObject](function() {
                    // e[e.GoogleAnalyticsObject]("create", a, "auto", d.analytics_tracker_name);
                    // h("initialised GA for " + a)
                // });
                // d.send_analytics_event({
                    // hitType: "event",
                    // eventCategory: "ATKit",
                    // eventAction: "loaded"
                // })
            // },
            // send_analytics_event: function(a) {
                // a.referrer = e.location;
                // h("Queueing event:");
                // h(a);
                // e[e.GoogleAnalyticsObject](function() {
                    // h("Sending event with " + d.analytics_tracker_name + ".send:");
                    // h(a);
                    // e[e.GoogleAnalyticsObject](d.analytics_tracker_name + ".send", a)
                // })
            // }
        };
        h("bootstrapping AtKit " + a.internal.versionString + "...");
        if (null == document.getElementById("sbar") && !a.internal.__invoked && !(d.settings.noiframe && e != e.top)) {
            "undefined" != typeof e.AtKitLoaded && l();
            "undefined" == typeof unsafeWindow ? a.external.window = e : (a.external.window = unsafeWindow, a.external.transport = "GM-XHR");
            b: {
                h("loadLibrary called");
                var w = a.internal.__responsiveCssURL,
                    k = document.createElement("link");k.href = w;k.rel = "stylesheet";k.type = "text/css";k.id = "atkit-responsive-css";document.getElementsByTagName("head")[0].appendChild(k);
                if ("undefined" != typeof e.jQuery) try {
                    jQversion = parseFloat(e.jQuery().jquery.match(/\d\.\d/));
                    h("jQuery already loaded, v" + jQversion);
                    if (1.5 < jQversion) {
                        h("loaded version acceptable, using.");
                        d.$ = e.jQuery;
                        q();
                        break b
                    }
                    e._jQuery = e.jQuery;
                    e.jQuery = null
                } catch (x) {} else "undefined" != typeof e.$ && (e._$ = e.$);a.internal.__debug &&
                (newVersion = parseFloat(a.internal.__libURL.match(/\d\.\d/)), h("jQuery not loaded, loading " + newVersion));t("atkit-jquery", a.internal.__libURL);n()
            }
        }
        return d
    };
    e.AtKit = new a
})(window);