(function() {
    var e = function() {
        $lib = AtKit.lib();
        AtKit.addLocalisationMap("en", {
            css_title: "Change Styles",
            css_changeColour: "Change colour settings",
            css_changeToolbar: "Change Toolbar colour",
            css_changeText: "Change text and link colours",
            css_changePage: "Change page style",
            css_changeATbar: "Change ATbar colour",
            css_changeBackground: "Background colour",
            css_set: "Set",
            css_black: "Black",
            css_white: "White",
            css_grey: "Grey",
            css_random: "Random",
            css_reset_defaults: "Reset to Defaults",
            css_change_linktext: "Change text and link colours",
            css_textcolour: "Text Colour:",
            css_colour_original: "Original",
            css_colour_red: "Red",
            css_colour_blue: "Blue",
            css_colour_green: "Green",
            css_colour_yellow: "Yellow",
            css_colour_orange: "Orange",
            css_linkColour: "Link Colour:",
            css_apply: "Apply",
            css_change_page: "Change Page Styles",
            css_black_white: "Black on White",
            css_white_black: "White on Black",
            css_yellow_black: "Yellow on Black",
            css_black_yellow: "Black on Yellow",
            css_white_grey: "White on Grey"
        });
        AtKit.addLocalisationMap("ar", {
            css_title: "&#1575;&#1604;&#1578;&#1581;&#1603;&#1605; &#1601;&#1610; &#1605;&#1592;&#1607;&#1585; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;  &#1575;&#1604;&#1581;&#1575;&#1604;&#1610;&#1577;",
            css_changeColour: "&#1573;&#1593;&#1583;&#1575;&#1583;&#1575;&#1578; &#1578;&#1594;&#1610;&#1610;&#1585; &#1575;&#1604;&#1571;&#1604;&#1608;&#1575;&#1606;",
            css_changeToolbar: "&#1578;&#1594;&#1610;&#1610;&#1585; &#1604;&#1608;&#1606; &#1588;&#1585;&#1610;&#1591; &#1575;&#1604;&#1571;&#1583;&#1608;&#1575;&#1578;",
            css_changeText: "&#1578;&#1594;&#1610;&#1610;&#1585; &#1571;&#1604;&#1608;&#1575;&#1606; &#1575;&#1604;&#1606;&#1589;&#1608;&#1589; &#1608;&#1575;&#1604;&#1585;&#1608;&#1575;&#1576;&#1591;",
            css_changePage: "&#1578;&#1594;&#1610;&#1610;&#1585; &#1606;&#1605;&#1591; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;",
            css_changeATbar: "&#1578;&#1594;&#1610;&#1610;&#1585; &#1604;&#1608;&#1606;  ATbar",
            css_changeBackground: "&#1604;&#1608;&#1606; &#1575;&#1604;&#1582;&#1604;&#1601;&#1610;&#1577;",
            css_set: "&#1578;&#1591;&#1576;&#1610;&#1602;",
            css_black: "&#1571;&#1587;&#1608;&#1583;",
            css_white: "&#1571;&#1576;&#1610;&#1590;",
            css_grey: "&#1585;&#1605;&#1575;&#1583;&#1610;",
            css_random: "&#1593;&#1588;&#1608;&#1575;&#1574;&#1610;",
            css_reset_defaults: "&#1575;&#1587;&#1578;&#1593;&#1575;&#1583;&#1577; &#1575;&#1604;&#1608;&#1590;&#1593; &#1575;&#1604;&#1571;&#1589;&#1604;&#1610;",
            css_change_linktext: "&#1578;&#1594;&#1610;&#1610;&#1585; &#1571;&#1604;&#1608;&#1575;&#1606; &#1575;&#1604;&#1582;&#1591;&#1608;&#1591; &#1608;&#1575;&#1604;&#1585;&#1608;&#1575;&#1576;&#1591;",
            css_textcolour: "&#1604;&#1608;&#1606; &#1575;&#1604;&#1606;&#1589;",
            css_colour_original: "&#1575;&#1604;&#1571;&#1589;&#1604;&#1610;",
            css_colour_red: "&#1571;&#1581;&#1605;&#1585;",
            css_colour_blue: "&#1571;&#1586;&#1585;&#1602;",
            css_colour_green: "&#1571;&#1582;&#1590;&#1585;",
            css_colour_yellow: "&#1571;&#1589;&#1601;&#1585;",
            css_colour_orange: "&#1576;&#1585;&#1578;&#1602;&#1575;&#1604;&#1610;",
            css_linkColour: "&#1604;&#1608;&#1606; &#1575;&#1604;&#1585;&#1608;&#1575;&#1576;&#1591;",
            css_apply: "&#1578;&#1591;&#1576;&#1610;&#1602;",
            css_change_page: "&#1578;&#1594;&#1610;&#1610;&#1585; &#1606;&#1605;&#1591; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;",
            css_black_white: "&#1571;&#1587;&#1608;&#1583; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1576;&#1610;&#1590;&#1575;&#1569;",
            css_white_black: "&#1571;&#1576;&#1610;&#1590; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1587;&#1608;&#1583;&#1575;&#1569;",
            css_yellow_black: "&#1571;&#1589;&#1601;&#1585; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1587;&#1608;&#1583;&#1575;&#1569;",
            css_black_yellow: "&#1571;&#1587;&#1608;&#1583; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1589;&#1601;&#1585;&#1575;&#1569;",
            css_white_grey: "&#1571;&#1576;&#1610;&#1590; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1585;&#1605;&#1575;&#1583;&#1610;&#1577;"
        });
        var c = '<option value="original">--' + AtKit.localisation("css_colour_original") + '--</option><option value="B80028">' + AtKit.localisation("css_colour_red") + '</option><option value="194E84">' + AtKit.localisation("css_colour_blue") + '</option><option value="60BB22">' + AtKit.localisation("css_colour_green") + '</option><option value="FDB813">' + AtKit.localisation("css_colour_yellow") + '</option><option value="F17022">' + AtKit.localisation("css_colour_orange") + '</option><option value="000000">' + AtKit.localisation("css_black") +
            '</option><option value="A8B1B8">' + AtKit.localisation("css_grey") + '</option><option value="FFFFFF">' + AtKit.localisation("css_white") + "</option>",
            c = {
                main: {
                    title: AtKit.localisation("css_changeColour"),
                    body: '<button id="sbColourChange"> ' + AtKit.localisation("css_changeToolbar") + '</button> <br /><button id="sbChangeSiteColours"> ' + AtKit.localisation("css_changeText") + '</button><br /> <button id="sbAttachCSSStyle">' + AtKit.localisation("css_changePage") + "</button>"
                },
                toolbar: {
                    title: AtKit.localisation("css_changeATbar"),
                    body: '<label for="sbbackgroundcolour">' + AtKit.localisation("css_changeBackground") + '</label><input type="text" name="sbbackgroundcolour" id="sbbackgroundcolour"> <button id="sbSetColour">' + AtKit.localisation("css_set") + "</button> <br /> <p><button onclick=\"document.getElementById('sbbackgroundcolour').value = 'black';\">" + AtKit.localisation("css_black") + "</button> <button onclick=\"document.getElementById('sbbackgroundcolour').value = 'white';\">" + AtKit.localisation("css_white") + "</button> <button onclick=\"document.getElementById('sbbackgroundcolour').value = 'grey';\">" +
                        AtKit.localisation("css_grey") + '</button></p> <br /> <button id="sbRandomColour"> ' + AtKit.localisation("css_random") + '</button> <button id="sbColourReset">' + AtKit.localisation("css_reset_defaults") + "</button>"
                },
                siteColours: {
                    title: AtKit.localisation("css_change_linktext"),
                    body: '<label for="sbtextcolour" style="display:block">' + AtKit.localisation("css_textcolour") + '</label><select id="sbtextcolour" name="sbtextcolour">' + c + '</select><br /><br /><label for="sblinkcolour" style="display:block">' + AtKit.localisation("css_linkColour") +
                        '</label><select id ="sblinkcolour">' + c + '</select> <br /><br /><button id="applyPageColours">' + AtKit.localisation("css_apply") + "</button>"
                },
                CSSStyles: {
                    title: AtKit.localisation("css_change_page"),
                    body: '<button id="sbApplyCSS-wb">' + AtKit.localisation("css_black_white") + '</button><br /> <button id="sbApplyCSS-wbw">' + AtKit.localisation("css_white_black") + '</button><br /> <button id="sbApplyCSS-yb">' + AtKit.localisation("css_yellow_black") + '</button><br /> <button id="sbApplyCSS-by">' + AtKit.localisation("css_black_yellow") +
                        '</button><br /> <button id="sbApplyCSS-gw">' + AtKit.localisation("css_white_grey") + "</button>"
                }
            };
        CSSFunctions = {
            changeToolbar: function() {
                $lib("#sbbackgroundcolour").focus();
                $lib("#sbRandomColour").click(function() {
                    AtKit.call("setColour", "rand")
                });
                $lib("#sbSetColour").click(function() {
                    AtKit.call("setColour", $lib("#sbbackgroundcolour").val())
                });
                $lib("#sbColourReset").click(function() {
                    AtKit.call("setColour", "#EBEAED")
                })
            },
            siteColours: function() {
                $lib("#applyPageColours").click(function() {
                    "undefined" != $lib("#sbtextcolour").val() &&
                        "original" != $lib("#sbtextcolour").val() && $lib("*").css("color", "#" + $lib("#sbtextcolour").val());
                    "undefined" != $lib("#sblinkcolour").val() && "original" != $lib("#sblinkcolour").val() && $lib("a").css("color", "#" + $lib("#sblinkcolour").val())
                });
                $lib("#sblinkcolour").keypress(function(b) {
                    13 == b.keyCode && ("undefined" != $lib("#sbpagebackgroundcolour").val() && $lib("body").css("backgroundColor", $lib("#sbpagebackgroundcolour").val()), "undefined" != $lib("#sbtextcolour").val() && "original" != $lib("#sbtextcolour").val() &&
                        $lib("body").css("color", "#" + $lib("#sbtextcolour").val()), "undefined" != $lib("#sblinkcolour").val() && "original" != $lib("#sblinkcolour").val() && $lib("a").css("color", "#" + $lib("#sblinkcolour").val()), $lib(document).trigger("close.facebox"))
                });
                $lib("#sbtextcolour").focus()
            },
            CSSStyles: function() {
                $lib("#sbApplyCSS-yb").click(function() {
                    $lib(document).trigger("close.facebox");
                    $lib("link[rel=stylesheet]").remove();
                    AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-yo.css", "highvis-yo");
                    "ar" ==
                    AtKit.getLanguage() && AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-rtl.css", "high-rtl-yo")
                });
                $lib("#sbApplyCSS-wb").click(function() {
                    $lib(document).trigger("close.facebox");
                    $lib("link[rel=stylesheet]").remove();
                    AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-wb.css", "highvis-wb");
                    "ar" == AtKit.getLanguage() && AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-rtl.css", "high-rtl-wb")
                });
                $lib("#sbApplyCSS-wbw").click(function() {
                    $lib(document).trigger("close.facebox");
                    $lib("link[rel=stylesheet]").remove();
                    AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-bw.css", "highvis-wbw");
                    "ar" == AtKit.getLanguage() && AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-rtl.css", "high-rtl-wbw")
                });
                $lib("#sbApplyCSS-by").click(function() {
                    $lib(document).trigger("close.facebox");
                    $lib("link[rel=stylesheet]").remove();
                    AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-by.css", "highvis-by");
                    "ar" == AtKit.getLanguage() && AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-rtl.css",
                        "high-rtl-by")
                });
                $lib("#sbApplyCSS-gw").click(function() {
                    $lib(document).trigger("close.facebox");
                    $lib("link[rel=stylesheet]").remove();
                    AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-gw.css", "highvis-by");
                    "ar" == AtKit.getLanguage() && AtKit.addStylesheet("https://styles.services.atbar.org/css/css/high-rtl.css", "high-rtl-by")
                });
                $lib("#sbApplyCSS-wb").focus()
            }
        };
        AtKit.addFn("setColour", function(b) {
            "rand" == b ? (colour = "#" + Math.floor(16777215 * Math.random()).toString(16), $lib("#sbbackgroundcolour").val(colour)) :
                colour = b;
            $lib("#sbar").css("background-color", colour)
        });
        AtKit.addButton("css", AtKit.localisation("css_title"), AtKit.getPluginURL() + "images/palette.png", function(b, d) {
            AtKit.show(b.main);
            $lib("#sbColourChange").click(function() {
                AtKit.show(b.toolbar);
                d.changeToolbar()
            });
            $lib("#sbChangeSiteColours").click(function() {
                AtKit.show(b.siteColours);
                d.siteColours()
            });
            $lib("#sbAttachCSSStyle").click(function() {
                AtKit.show(b.CSSStyles);
                d.CSSStyles()
            })
        }, c, CSSFunctions)
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded =
        function() {
            var c = null;
            this.subscribe = function(b) {
                c = b
            };
            this.fire = function(b, d) {
                null != c && c(b, d)
            }
        }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
            AtKit.registerPlugin("css", e)
        })) : AtKit.registerPlugin("css", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        AtKit.addLocalisationMap("en", {
            dictionary_title: "Dictionary",
            dictionary_definition: "Dictionary definition for",
            dictionary_use: "To use the dictionary select a word on the page and click the dictionary button"
        });
        AtKit.addLocalisationMap("ar", {
            dictionary_title: "&#1575;&#1604;&#1605;&#1593;&#1580;&#1605;",
            dictionary_definition: "&#1578;&#1593;&#1585;&#1610;&#1601; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605; &#1604;",
            dictionary_use: "&#1604;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605; &#1581;&#1583;&#1583; &#1603;&#1604;&#1605;&#1577; &#1593;&#1604;&#1609; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577; &#1579;&#1605; &#1575;&#1590;&#1594;&#1591; &#1586;&#1585; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605;"
        });
        AtKit.addFn("getSelectedText", function(c) {
            var b = "";
            document.selection && "Control" != document.selection.type ? b = document.selection.createRange().text : window.getSelection ? b = window.getSelection().toString() : document.getSelection && (b = document.getSelection());
            return !0 === c ? String(b).replace(/([\s]+)/ig, "") : String(b)
        });
        AtKit.addButton("dictionary", AtKit.localisation("dictionary_title"), AtKit.getPluginURL() + "images/book_open.png", function() {
            var c = AtKit.call("getSelectedText"),
                b = AtKit.get("DictionaryText");
            "" ==
            c && "" != b && (c = b);
            c = eval('"' + c.split(" ").slice(0, 1) + '";');
            "" != c ? ($lib("#at-lnk-dictionary").children("img").attr("src", AtKit.getPluginURL() + "images/loading.gif"), $lib.getJSON("https://spell.services.atbar.org/dictionary/xmlhttp/remote.php?titles=" + encodeURI(c.toLowerCase()) + "&v=2&l=" + AtKit.getLanguage() + "&callback=?", function(b) {
                ro = b;
                for (var c in ro.query.pages)
                    if (-1 < c) var f = eval('ro.query.pages["' + c + '"].revisions[0]["*"];'),
                        h = eval('ro.query.pages["' + c + '"].title;');
                    else f = "Unknown word", h = eval('ro.query.pages["-1"].title;');
                AtKit.message("<h2>" + AtKit.localisation("dictionary_definition") + ' "' + h + '"</h2><div style="height:300px; overflow-x:scroll">' + f + "</div>");
                $lib("#at-lnk-dictionary").children("img").attr("src", AtKit.getPluginURL() + "images/book_open.png")
            })) : (AtKit.message("<h2>" + AtKit.localisation("dictionary_title") + "</h2><p>" + AtKit.localisation("dictionary_use") + "</p>"), $lib("#at-lnk-dictionary").children("img").attr("src", AtKit.getPluginURL() + "images/book_open.png"))
        }, null, null);
        $lib("#at-btn-dictionary").mouseover(function() {
            AtKit.set("DictionaryText",
                AtKit.call("getSelectedText"))
        })
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c = b
        };
        this.fire = function(b, d) {
            null != c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("dictionary", e)
    })) : AtKit.registerPlugin("dictionary", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        AtKit.addLocalisationMap("en", {
            fonts_dialogTitle: "Page font settings",
            fonts_fontFace: "Font Face",
            fonts_lineSpacing: "Line Spacing",
            fonts_apply: "Apply"
        });
        AtKit.addLocalisationMap("ar", {
            fonts_dialogTitle: "&#1575;&#1604;&#1578;&#1581;&#1603;&#1605; &#1601;&#1610; &#1606;&#1608;&#1593; &#1575;&#1604;&#1582;&#1591;",
            fonts_fontFace: "&#1606;&#1608;&#1593; &#1575;&#1604;&#1582;&#1591;",
            fonts_lineSpacing: "&#1575;&#1604;&#1605;&#1587;&#1575;&#1601;&#1575;&#1578; &#1576;&#1610;&#1606; &#1575;&#1604;&#1571;&#1587;&#1591;&#1585;",
            fonts_apply: "&#1578;&#1591;&#1576;&#1610;&#1602;"
        });
        var c = {
            main: "<h1>" + AtKit.localisation("fonts_dialogTitle") + '</h1><label for="sbfontface">' + AtKit.localisation("fonts_fontFace") + ':</label> <select id="sbfontface"><option value="sitespecific">--Site Specific--</option><option value="arial">Arial</option><option value="courier">Courier</option><option value="cursive">Cursive</option><option value="fantasy">Fantasy</option><option value="georgia">Georgia</option><option value="helvetica">Helvetica</option><option value="impact">Impact</option><option value="monaco">Monaco</option><option value="monospace">Monospace</option><option value="sans-serif">Sans-Serif</option><option value="tahoma">Tahoma</option><option value="times new roman">Times New Roman</option><option value="trebuchet ms">Trebuchet MS</option><option value="verdant">Verdana</option></select><br /><br /> <label for="sblinespacing">' +
                AtKit.localisation("fonts_lineSpacing") + '</label> <input type="text" name="sblinespacing" id="sblinespacing" maxlength="3" size="3" value="100">%<br /><br /><button id="ATApplyFont">' + AtKit.localisation("fonts_apply") + "</a></div>"
        };
        AtKit.addFn("changeFont", function(b) {
            var d = AtKit.getHtmlTags();
            if ("--Site Specific--" != b.fontFace) {
                for (var c = 0; c < d.length; c++) $lib(d[c]).css("font-family", b.fontFace);
                for (c = 0; c < d.length; c++) $lib(d[c]).css("line-height", b.lineHeight + "%");
                $lib("#sbar").find("div").css("line-height",
                    "0%")
            }
        });
        AtKit.addButton("fontSettings", AtKit.localisation("fonts_dialogTitle"), AtKit.getPluginURL() + "images/font.png", function(b) {
            AtKit.message(b.main);
            $lib("#ATApplyFont").click(function() {
                AtKit.call("changeFont", {
                    fontFace: $lib("#sbfontface").val(),
                    lineHeight: $lib("#sblinespacing").val()
                })
            });
            $lib("#sbfontface").focus()
        }, c, null)
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
            var c = null;
            this.subscribe = function(b) {
                c = b
            };
            this.fire = function(b, d) {
                null != c && c(b, d)
            }
        }, window.AtKitLoaded =
        new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
            AtKit.registerPlugin("fonts", e)
        })) : AtKit.registerPlugin("fonts", e)
})();
(function() {
    var e = function() {
        AtKit.addLocalisationMap("en", {
            ftw_title: "Create a fix the web report about this page (opens in a popup window)"
        });
        AtKit.addButton("ftw", AtKit.localisation("ftw_title"), AtKit.getPluginURL() + "images/FTW.png", function() {
                loc = window.location.toString();
                loc = loc.replace(window.location.hash.toString(), "");
                var c = window.open("https://www.gov.uk/reporting-accessibility-problem-public-sector-website");
                window.focus && c.focus();
                c.document.all["edit-field-report-url"].focus()
            }, null,
            null)
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c = b
        };
        this.fire = function(b, d) {
            null != c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("ftw", e)
    })) : AtKit.registerPlugin("ftw", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        AtKit.addLocalisationMap("en", {
            tts_title: "Text to Speech",
            tts_ssapi_select_text: "Select some text and press the TTS button to read it.",
            tts_options: "Text to Speech Options",
            tts_converting: "Text to Speech conversion is taking place.",
            tts_timeremaining: "Time Remaining:",
            tts_pleasewait: "Please wait...",
            tts_playpause: "Play / Pause",
            tts_rewind: "Rewind",
            tts_stop: "Stop & Close TTS",
            tts_error: "Error",
            tts_overloaded: "The server is currently over capacity for text to speech conversions. Please try again later.",
            tts_problem: "Something went wrong while we were converting this page to speech. Please try again shortly.",
            tts_servererror: "An error occurred on the server. Please try again later.",
            tts_seconds: "seconds",
            tts_explain: "To use the text to speech feature with selected text, please first select the text on this page that you would like to convert. After you have done this, click the Text to Speech button, and select the 'selected text' option.",
            tts_select_voice: "Highlight text and select a voice",
            tts_male: "Male",
            tts_female: "Female"
        });
        AtKit.addLocalisationMap("ar", {
            tts_title: "&#1578;&#1581;&#1608;&#1610;&#1604; &#1575;&#1604;&#1606;&#1589;&#1608;&#1589; &#1575;&#1604;&#1610; &#1605;&#1575;&#1583;&#1577; &#1605;&#1587;&#1605;&#1608;&#1593;&#1577;",
            tts_options: "&#1582;&#1610;&#1575;&#1585;&#1575;&#1578; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;",
            tts_converting: "&#1580;&#1575;&#1585;&#1610;&#1577; &#1581;&#1575;&#1604;&#1610;&#1575;&#1611; &#1593;&#1605;&#1604;&#1610;&#1577; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;",
            tts_timeremaining: "&#1575;&#1604;&#1608;&#1602;&#1578; &#1575;&#1604;&#1605;&#1578;&#1576;&#1602;&#1610;",
            tts_pleasewait: "&#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1575;&#1606;&#1578;&#1592;&#1575;&#1585;...",
            tts_playpause: "&#1578;&#1588;&#1594;&#1610;&#1604;/&#1573;&#1610;&#1602;&#1575;&#1601; &#1605;&#1572;&#1602;&#1578;",
            tts_rewind: "&#1573;&#1593;&#1575;&#1583;&#1577;",
            tts_stop: "&#1573;&#1610;&#1602;&#1575;&#1601;",
            tts_error: "&#1582;&#1591;&#1571;",
            tts_overloaded: "&#1601;&#1575;&#1602;&#1578; &#1593;&#1605;&#1604;&#1610;&#1575;&#1578; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;&#1608;&#1589; &#1587;&#1593;&#1577; &#1575;&#1604;&#1582;&#1575;&#1583;&#1605;. &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1604;&#1575;&#1581;&#1602;&#1575;&#1611;.",
            tts_problem: "&#1581;&#1583;&#1579; &#1582;&#1591;&#1571; &#1571;&#1579;&#1606;&#1575;&#1569; &#1593;&#1605;&#1604;&#1610;&#1577; &#1606;&#1591;&#1602; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;. &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1576;&#1593;&#1583; &#1602;&#1604;&#1610;&#1604;.",
            tts_servererror: "&#1581;&#1583;&#1579; &#1582;&#1591;&#1571; &#1601;&#1610; &#1575;&#1604;&#1582;&#1575;&#1583;&#1605;. &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1604;&#1575;&#1581;&#1602;&#1575;&#1611;.",
            tts_seconds: "&#1579;&#1608;&#1575;&#1606;&#1613;",
            tts_explain: "&#1604;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1582;&#1575;&#1589;&#1610;&#1577; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;&#1548; &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1578;&#1581;&#1583;&#1610;&#1583; &#1575;&#1604;&#1606;&#1589; &#1575;&#1604;&#1605;&#1585;&#1575;&#1583; &#1578;&#1581;&#1608;&#1610;&#1604;&#1607; &#1593;&#1604;&#1609; &#1607;&#1584;&#1607; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;. &#1576;&#1593;&#1583; &#1584;&#1604;&#1603; &#1575;&#1590;&#1594;&#1591; &#1586;&#1585; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;&#1548; &#1608;&#1575;&#1590;&#1594;&#1591; &#1582;&#1610;&#1575;&#1585; &quot;&#1575;&#1604;&#1606;&#1589; &#1575;&#1604;&#1605;&#1581;&#1583;&#1583;&quot;.",
            tts_select_voice: "&#1602;&#1605; &#1576;&#1578;&#1592;&#1604;&#1610;&#1604; &#1575;&#1604;&#1606;&#1589; &#1608;&#1575;&#1582;&#1578;&#1610;&#1575;&#1585; &#1575;&#1604;&#1589;&#1608;&#1578;",
            tts_male: "&#1605;&#1584;&#1603;&#1585;",
            tts_female: "&#1605;&#1572;&#1606;&#1579;"
        });
        var c = {
            TTSSpeechSynthesisAPIRequiresSelection: {
                title: AtKit.localisation("tts_options"),
                body: AtKit.localisation("tts_ssapi_select_text")
            },
            options: {
                title: AtKit.localisation("tts_options"),
                body: AtKit.localisation("tts_select_voice") +
                    ' <br /><button id="sbStartInsipioTTSSelectionMale"> ' + AtKit.localisation("tts_male") + '</button> <button id="sbStartInsipioTTSSelectionFemale"> ' + AtKit.localisation("tts_female") + "</button>"
            },
            jssapi_options: {
                title: AtKit.localisation("tts_options"),
                body: AtKit.localisation("tts_select_voice") + "<div id='sbJssapiVoiceOptions'></div>"
            },
            starting: {
                title: AtKit.localisation("tts_title"),
                body: "<center>" + AtKit.localisation("tts_converting") + " <br /><img src='" + AtKit.getPluginURL() + "images/loadingbig.gif' /><br />" +
                    AtKit.localisation("tts_timeremaining") + " <div id='sbttstimeremaining'>...</div><br />" + AtKit.localisation("tts_pleasewait") + " </center>"
            }
        };
        AtKit.addFn("getSelectedTextInsipioTTS", function(b) {
            var d = AtKit.call("getSelectedTextInElementInsipio");
            null == d && (d = "", document.selection && "Control" != document.selection.type && "" != document.selection.createRange().text ? d = document.selection.createRange().text : window.getSelection && "" != window.getSelection().toString() ? d = window.getSelection().toString() : document.getSelection &&
                (d = document.getSelection()));
            return !0 === b ? String(d).replace(/([\s]+)/ig, "") : String(d)
        });
        AtKit.addFn("getSelectedTextInElementInsipio", function() {
            var b = document.activeElement;
            return ("selectionStart" in b && function() {
                return b.value.substr(b.selectionStart, b.selectionEnd - b.selectionStart)
            } || document.selection && function() {
                var d = $lib(b).prop("nodeName");
                if ("input" != d && "textarea" != d) return null;
                b.focus();
                d = document.selection.createRange();
                if (null === d) return null;
                var c = b.createTextRange(),
                    f = c.duplicate();
                c.moveToBookmark(d.getBookmark());
                f.setEndPoint("EndToStart", c);
                return d.text
            } || function() {
                return null
            })()
        });
        AtKit.addFn("b64", function(b) {
            for (var d = "", c, f, h, e, j, k, n = 0, b = AtKit.call("utf8_encode", b); n < b.length;) c = b.charCodeAt(n++), f = b.charCodeAt(n++), h = b.charCodeAt(n++), e = c >> 2, c = (c & 3) << 4 | f >> 4, j = (f & 15) << 2 | h >> 6, k = h & 63, isNaN(f) ? j = k = 64 : isNaN(h) && (k = 64), d = d + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-=".charAt(c) +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-=".charAt(j) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-=".charAt(k);
            return d
        });
        AtKit.addFn("utf8_encode", function(b) {
            for (var b = b.replace(/\r\n/g, "\n"), d = "", c = 0; c < b.length; c++) {
                var f = b.charCodeAt(c);
                128 > f ? d += String.fromCharCode(f) : (127 < f && 2048 > f ? d += String.fromCharCode(f >> 6 | 192) : (d += String.fromCharCode(f >> 12 | 224), d += String.fromCharCode(f >> 6 & 63 | 128)), d += String.fromCharCode(f & 63 | 128))
            }
            return d
        });
        AtKit.addFn("TTSSpeechSynthesisAPICheckSupport",
            function(b) {
                if (void 0 == window.SpeechSynthesisUtterance) return !1;
                b = AtKit.call("TTSSpeechSynthesisAPIGetStringLang", b);
                return 0 < AtKit.call("TTSSpeechSynthesisFindVoiceForLanguage", {
                    language: b
                }).length
            });
        AtKit.addFn("TTSSpeechSynthesisAPIGetStringLang", function(b) {
            return /[\u0600-\u06FF]/.test(b) ? "ar" : $lib("html").attr("lang") || "en"
        });
        AtKit.addFn("TTSSpeechSynthesisAPIBeginReadText", function(b) {
            if (!AtKit.call("TTSSpeechSynthesisAPICheckSupport", b)) throw {
                code: 501,
                message: "Your browser does not support text-to-speech. Upgrade your browser to use this feature"
            };
            !0 != AtKit.jssapi_voices_ready && typeof speechSynthesis;
            var d = AtKit.call("TTSSpeechSynthesisAPIGetStringLang", b),
                d = AtKit.call("TTSSpeechSynthesisFindVoiceForLanguage", {
                    language: d
                });
            AtKit.show(c.jssapi_options);
            var g = $lib("#sbJssapiVoiceOptions").attr("style", "overflow-y: scroll;     max-height: 200px; margin-top: 5px; border: 1px solid #EFEFEF; padding: 5px;");
            $lib.each(d, function(d, c) {
                name = c.name;
                null != name.match(/Microsoft (.+) (?:Mobile)? - /) && (name = name.match(/Microsoft (.+) (?:Mobile)? - /)[1]);
                g.append($lib("<button>").html(name + "<br/><span style='color: gray'>" + c.lang + "</span>").attr("data-voice-uri", c.voiceURI).attr("style", "padding: 5px; margin: 0 5px 5px 0; min-width: 48%; border: 1px solid #AFAFAF; background-color: #ECECEC;").click(function() {
                    AtKit.call("TTSSpeechSynthesisAPIReadText", {
                        text: b,
                        voiceURI: $lib(this).attr("data-voice-uri")
                    })
                }))
            })
        });
        AtKit.addFn("TTSSpeechSynthesisAPIReadText", function(b) {
            for (var d = 0, c = speechSynthesis.getVoices().length; d < c; d++)
                if (speechSynthesis.getVoices()[d].voiceURI ==
                    b.voiceURI) {
                    var f = speechSynthesis.getVoices()[d];
                    break
                } b = new SpeechSynthesisUtterance(b.text);
            b.voice = f;
            window.speechSynthesis.speak(b);
            return b
        });
        AtKit.addFn("TTSSpeechSynthesisFindVoiceForLanguage", function(b) {
            b.language = b.language.toLowerCase();
            var d = window.speechSynthesis.getVoices(),
                c = [];
            $lib.each(d, function(d, h) {
                b.language == h.lang.toLowerCase() && c.push(h)
            });
            $lib.each(d, function(d, h) {
                b.language != h.lang.toLowerCase() && b.language.substr(0, 2) == h.lang.toLowerCase().substr(0, 2) && c.push(h)
            });
            return c
        });
        void 0 !== window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = function() {
            AtKit.jssapi_voices_ready = !0
        });
        AtKit.addFn("sendInsipioTTSChunk", function(b) {
            var d = 1 == b.block ? 0 : 400 * b.block,
                d = b.fullData.substring(d, d + 400 > b.fullData.length ? b.fullData.length : d + 400),
                d = "https://speech.services.atbar.org/insipio-tts/request.php?rt=tts&v=2&i=1&l=" + AtKit.getLanguage() + "&voice=" + b.voice + "&id=" + b.reqID + "&data=" + d + "&chunkData=" + b.totalBlocks + "-" + b.block;
            b.block == b.totalBlocks - 1 && (d += "&page=" + encodeURIComponent(window.location));
            $lib.getJSON(d + "&callback=?", function(d) {
                $lib("#compactStatus").html(b.block + " / " + b.totalBlocks);
                var f = "<h2>" + AtKit.localisation("tts_error") + "</h2>";
                b.block == b.totalBlocks ? (AtKit.show(c.starting), "encoding" == d.status ? AtKit.call("countdownInsipioTTS", {
                    timeLeft: d.est_completion / d.chunks,
                    id: d.ID
                }) : "failure" == d.status && "overcapacity" == d.reason ? AtKit.message(f + "<p>" + AtKit.localisation("tts_overloaded") + "</p>") : "failure" == d.status && "" === d.message ? AtKit.message(f + "<p>" + AtKit.localisation("tts_problem") +
                    "</p>") : AtKit.message(f + "<p>" + d.reason + " " + d.data.message + "</p>")) : "ChunkSaved" == d.data.message ? AtKit.call("sendInsipioTTSChunk", {
                    fullData: b.fullData,
                    block: b.block + 1,
                    totalBlocks: b.totalBlocks,
                    reqID: b.reqID
                }) : AtKit.message(f + "<p>" + AtKit.localisation("tts_servererror") + "</p>")
            })
        });
        AtKit.addFn("countdownInsipioTTS", function(b) {
            isNaN(b.timeLeft) ? AtKit.message("<h2>" + AtKit.localisation("tts_error") + "</h2> <p>" + AtKit.localisation("tts_problem") + "</p>") : 0 == b.timeLeft ? ("msie" != $lib.browser ? a.canPlayType &&
                    a.canPlayType("audio/mpeg").replace(/no/, "") ? (chunkUrls = [], $lib.getJSON("https://speech.services.atbar.org/cache/request.php?id=" + b.id + "&callback=?").done(function(b) {
                        index = 0;
                        $lib.isArray(b.trackList.track) ? $lib.each(b.trackList.track, function(b, d) {
                            audioURL = d.location;
                            chunkUrls.push(audioURL)
                        }) : chunkUrls.push(b.trackList.track.location);
                        AtKit.call("playChunksHtml5", {
                            chunkUrls: chunkUrls,
                            index: 0
                        })
                    }).fail(function() {
                        console.log("error")
                    })) : ($lib("body").append($lib('<div id="flashContent"><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="1" height="1" id="audioe"> <PARAM name=movie value="https://speech.services.atbar.org/lib/player/player-licensed.swf"></PARAM> <PARAM name=flashvars value="file=https://speech.services.atbar.org/cache/' +
                            b.id + '.xml&autostart=true&playlist=bottom&repeat=list&playerready=playerReady&id=audioo"><PARAM name=allowscriptaccess value="always" /><embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="https://speech.services.atbar.org/lib/player/player-licensed.swf" width="1" height="1" allowscriptaccess="always" allowfullscreen="false" flashvars="file=https://speech.services.atbar.org/cache/' + b.id + '.xml&autostart=true&playlist=bottom&repeat=list&playerready=playerReady" name="audioe" /> </OBJECT></div>')),
                        AtKit.call("setupInsipioTTSListeners")) : ($lib("<div />", {
                        id: "flashContent"
                    }).prependTo("body"), swfobject.embedSWF("https://speech.services.atbar.org/lib/player/player-licensed.swf", "flashContent", "1", "1", "9.0.0", "expressInstall.swf", !1, {
                        flashvars: "file=https://speech.services.atbar.org/cache/" + b.id + ".xml&autostart=true&playlist=bottom&repeat=list&playerready=playerReady&id=audioo",
                        allowscriptaccess: "always"
                    }, {
                        id: "audioo",
                        name: "audioo"
                    }, function() {
                        AtKit.call("setupInsipioTTSListeners")
                    })), AtKit.hideDialog()) :
                ($lib("#sbttstimeremaining").html(b.timeLeft + " " + AtKit.localisation("tts_seconds")), window.setTimeout(function() {
                    AtKit.call("countdownInsipioTTS", {
                        timeLeft: b.timeLeft - 1,
                        id: b.id
                    })
                }, 1E3))
        });
        AtKit.addFn("setupInsipioTTSListeners", function() {
            !0 != AtKit.get("TTS_Listeners_setup") && (window.playerReady = function(b) {
                AtKit.set("ATAudioPlayerID", b.id);
                AtKit.set("TTS_position", 0);
                AtKit.set("TTS_playingItem", 0);
                b = swfobject.getObjectById(b.id);
                "msie" != $lib.browser && (b = window.document.audioe);
                b.addModelListener("STATE",
                    "ATBarAudioStateListener");
                b.addModelListener("TIME", "ATBarAudioTimeMonitor");
                b.addControllerListener("ITEM", "ATBarAudioItemMonitor")
            }, window.ATBarAudioTimeMonitor = function(b) {
                AtKit.set("TTS_position", b.position)
            }, window.ATBarAudioItemMonitor = function(b) {
                AtKit.set("TTS_playingItem", b.index)
            }, window.ATBarAudioStateListener = function(b) {
                var d = b.newstate,
                    b = swfobject.getObjectById(b.id);
                "msie" != $lib.browser && (b = window.document.audioe);
                "COMPLETED" == d && AtKit.get("TTS_playingItem") + 1 == b.getPlaylist().length &&
                    AtKit.call("TTSRemoveControlBox");
                "IDLE" == d || "PAUSED" == d ? ($lib("#at-lnk-ttsPlay").children("img").attr("src", AtKit.getPluginURL() + "images/control.png"), $lib("#at-btn-tts").children("img").attr("src", AtKit.getPluginURL() + "images/sound.png").css("padding-top", "6px")) : !1 == AtKit.get("TTS_clickEnabled") && ($lib("#at-lnk-ttsPlay").children("img").attr("src", AtKit.getPluginURL() + "images/control-pause.png"), $lib("#at-btn-tts").children("img").attr("src", AtKit.getPluginURL() + "images/loading.gif").css("padding-top",
                    "8px"))
            }, AtKit.set("TTS_Listeners_setup", !0))
        });
        AtKit.addFn("TTSRemoveControlBox", function() {
            AtKit.removeButton("ttsPlay");
            AtKit.removeButton("ttsRewind");
            AtKit.removeButton("ttsStop");
            $lib("#flashContent").remove();
            $lib("#at-lnk-tts").children("img").attr("src", AtKit.getPluginURL() + "images/sound.png").css("padding-top", "6px");
            AtKit.set("TTS_clickEnabled", !0)
        });
        AtKit.addFn("sbStartInsipioTTSSelection", function(b) {
            AtKit.set("TTS_clickEnabled", !1);
            var d = AtKit.get("TTSselectedData");
            if ("" == d || "undefined" ==
                typeof d) d = AtKit.call("getSelectedTextInsipioTTS");
            if ("undefined" != typeof d && "" !== d) {
                this.clickEnabled = !1;
                var d = AtKit.call("b64", d),
                    c = Math.ceil(d.length / 400);
                if (0 < c) {
                    var f = Math.floor(5001 * Math.random());
                    AtKit.message("<h2>" + AtKit.localisation("tts_pleasewait") + "</h2><p>" + AtKit.localisation("tts_converting") + "...<br /><div id='compactStatus'>0 / " + c + "</div></p>");
                    AtKit.call("sendInsipioTTSChunk", {
                        fullData: d,
                        block: 1,
                        totalBlocks: c,
                        reqID: f,
                        voice: b.voice
                    })
                } else AtKit.message("<h2>" + AtKit.localisation("tts_error") +
                    "</h2><p>" + AtKit.localisation("tts_problem") + "</p>")
            } else AtKit.message("<h2>" + AtKit.localisation("tts_title") + "</h2><p>" + AtKit.localisation("tts_explain") + "</p>")
        });
        AtKit.addFn("playChunksHtml5", function(b) {
            chunkUrls = b.chunkUrls;
            index = b.index;
            chunkUrls[index] && (audio.src = chunkUrls[index], audio.load(), audio.play(), chunkUrls[index + 1] && audio.addEventListener("ended", function() {
                AtKit.call("playChunksHtml5", {
                    chunkUrls: chunkUrls,
                    index: index + 1
                })
            }))
        });
        AtKit.set("TTS_clickEnabled", !0);
        $lib(document).delegate("#at-btn-tts",
            "mousemove, focus, mouseover",
            function() {
                var b = AtKit.call("getSelectedTextInsipioTTS");
                "undefined" == typeof b || "" == b || AtKit.set("TTSselectedData", b)
            });
        AtKit.addButton("tts", AtKit.localisation("tts_title"), AtKit.getPluginURL() + "images/sound.png", function(b) {
            if (!1 != AtKit.set("TTS_clickEnabled")) {
                var d = AtKit.call("getSelectedTextInsipioTTS");
                "" == AtKit.get("TTSselectedData") && "" != d && AtKit.set("TTSselectedData", d);
                if (AtKit.call("TTSSpeechSynthesisAPICheckSupport", d)) {
                    if ("" == d) return AtKit.show(b.TTSSpeechSynthesisAPIRequiresSelection);
                    AtKit.call("TTSSpeechSynthesisAPIBeginReadText", d)
                } else AtKit.show(b.options), AtKit.set("TTS_Listeners_setup", !1), AtKit.addScript("https://core.atbar.org/resources/js/swfobject.js", null), $lib("#sbStartInsipioTTSSelectionMale").on("click touchend", function() {
                    a = document.createElement("audio");
                    audio = new Audio;
                    audio.play();
                    audio.pause();
                    AtKit.call("sbStartInsipioTTSSelection", {
                        voice: "male"
                    })
                }), $lib("#sbStartInsipioTTSSelectionFemale").on("click touchend", function() {
                    a = document.createElement("audio");
                    audio =
                        new Audio;
                    audio.play();
                    audio.pause();
                    AtKit.call("sbStartInsipioTTSSelection", {
                        voice: "female"
                    })
                })
            }
        }, c, {});
        navigator.userAgent.match(/(iPhone|iPod|iPad)/i) && setInterval(function() {
            AtKit.call("getSelectedTextInsipioTTS")
        }, 100);
        $lib("a#at-lnk-tts").on("click touchend", function() {
            AtKit.call("getSelectedTextInsipioTTS");
            navigator.userAgent.match(/(iPhone|iPod|iPad)/i)
        })
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c = b
        };
        this.fire = function(b, d) {
            null !==
                c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("insipio-tts", e)
    })) : AtKit.registerPlugin("insipio-tts", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        var c = 0,
            b = 0,
            d = 0,
            g = 0,
            f = 0;
        AtKit.addLocalisationMap("en", {
            overlay_title: "Colour overlay",
            overlay_title_yellow: "yellow",
            overlay_title_red: "red",
            overlay_title_blue: "blue",
            overlay_title_green: "green",
            overlay_remove: "Remove overlay"
        });
        AtKit.addLocalisationMap("ar", {
            overlay_title: "&#1604;&#1608;&#1606;&#160;&#1575;&#1604;&#1588;&#1575;&#1588;&#1577;",
            overlay_title_yellow: "&#1571;&#1589;&#1601;&#1585;",
            overlay_title_red: "&#1571;&#1581;&#1605;&#1585;",
            overlay_title_blue: "&#1571;&#1586;&#1585;&#1602;",
            overlay_title_green: "&#1571;&#1582;&#1590;&#1585;",
            overlay_remove: "Remove overlay"
        });
        AtKit.addFn("addOverlay", function(b) {
            b = '<div class="at-overlay" style="background-color:#' + b.colour + '; opacity:0.4; position:absolute; top:0; left:0; height:100%; width:100%; z-index:2147483640; opacity:0.3; filter: alpha(opacity = 30); pointer-events: none; position:fixed"></div>';
            $lib("body").prepend(b);
            AtKit.call("addOvelayClose", {})
        });
        AtKit.addFn("removeOverlay", function() {
            $lib(".at-overlay").remove();
            $lib(".at-overlay-close").remove();
            f = g = d = b = 0
        });
        AtKit.addFn("addOvelayClose", function() {
            var b = '<div class="at-overlay-close" style="position:absolute; ' + ("ar" == AtKit.getLanguage() ? "right" : "left") + ':96%; top:48px; z-index:9999999999; position:fixed""><a href="#" onclick="AtKit.call(\'removeOverlay\', {});"><img src="' + AtKit.getResourceURL() + '/resources/img/facebox-close.png" alt="' + AtKit.localisation("overlay_remove") + '" title="' + AtKit.localisation("overlay_remove") + '"/></a></div>';
            $lib("body").prepend(b)
        });
        AtKit.addFn("toggleOverlayYellow",
            function() {
                b ? AtKit.call("removeOverlay", {}) : (AtKit.call("removeOverlay", {}), AtKit.call("addOverlay", {
                    colour: "BABA70"
                }), b = 1)
            });
        AtKit.addFn("toggleOverlayRed", function() {
            d ? AtKit.call("removeOverlay", {}) : (AtKit.call("removeOverlay", {}), AtKit.call("addOverlay", {
                colour: "FF6699"
            }), d = 1)
        });
        AtKit.addFn("toggleOverlayBlue", function() {
            g ? AtKit.call("removeOverlay", {}) : (AtKit.call("removeOverlay", {}), AtKit.call("addOverlay", {
                colour: "3399CC"
            }), g = 1)
        });
        AtKit.addFn("toggleOverlayGreen", function() {
            f ? AtKit.call("removeOverlay", {}) : (AtKit.call("removeOverlay", {}), AtKit.call("addOverlay", {
                colour: "00CC66"
            }), f = 1)
        });
        AtKit.addFn("overlayRemoveEverything", function() {
            AtKit.removeSeparator("overlayStart");
            AtKit.removeButton("overlayYellow");
            AtKit.removeButton("overlayRed");
            AtKit.removeButton("overlayBlue");
            AtKit.removeButton("overlayGreen")
        });
        AtKit.addButton("overlay", AtKit.localisation("overlay_title"), AtKit.getPluginURL() + "images/overlay.png", function() {
            AtKit.call("removeOverlay");
            AtKit.call("overlayRemoveEverything");
            c ? (c = 0,
                AtKit.call("overlayRemoveEverything")) : (c = 1, AtKit.addSeparator("overlayStart"), AtKit.addButton("overlayYellow", AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_yellow"), AtKit.getPluginURL() + "images/overlay-yellow.png", function() {
                AtKit.call("toggleOverlayYellow", {})
            }), AtKit.addButton("overlayRed", AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_red"), AtKit.getPluginURL() + "images/overlay-red.png", function() {
                AtKit.call("toggleOverlayRed", {})
            }), AtKit.addButton("overlayBlue",
                AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_blue"), AtKit.getPluginURL() + "images/overlay-blue.png",
                function() {
                    AtKit.call("toggleOverlayBlue", {})
                }), AtKit.addButton("overlayGreen", AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_green"), AtKit.getPluginURL() + "images/overlay-green.png", function() {
                AtKit.call("toggleOverlayGreen", {})
            }))
        }, null, null)
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c =
                b
        };
        this.fire = function(b, d) {
            null != c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("overlay", e)
    })) : AtKit.registerPlugin("overlay", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        AtKit.addLocalisationMap("en", {
            resize_up: "Increase Font Size",
            resize_down: "Decrease Font Size"
        });
        AtKit.addLocalisationMap("ar", {
            resize_up: "&#1578;&#1603;&#1576;&#1610;&#1585; &#1581;&#1580;&#1605; &#1575;&#1604;&#1582;&#1591;",
            resize_down: "&#1578;&#1589;&#1594;&#1610;&#1585; &#1581;&#1580;&#1605; &#1575;&#1604;&#1582;&#1591;"
        });
        AtKit.addFn("resizeText", function(c) {
            for (var b = AtKit.getHtmlTags(), d = 0; d < b.length; d++) $lib(b[d]).each(function(b, d) {
                if (!$lib(d).is("#sbar") &&
                    !$lib(d).is("#sbar *") && !$lib(d).is("body > .tooltip") && !$lib(d).is("body > .tooltip *")) {
                    var h = $lib(d).css("font-size"),
                        h = parseFloat(h),
                        e = parseFloat(c);
                    newVal = parseFloat(h + e)
                } else newVal = $lib(d).css("font-size");
                $lib(d).css("font-size", newVal + "px")
            })
        });
        AtKit.addButton("resizeUp", AtKit.localisation("resize_up"), AtKit.getPluginURL() + "images/font_increase.png", function() {
            AtKit.call("resizeText", "1")
        }, null, null);
        AtKit.addButton("resizeDown", AtKit.localisation("resize_down"), AtKit.getPluginURL() + "images/font_decrease.png",
            function() {
                AtKit.call("resizeText", "-1")
            }, null, null)
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c = b
        };
        this.fire = function(b, d) {
            null != c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("resize", e)
    })) : AtKit.registerPlugin("resize", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        TModifier = ctrlModifier = !1;
        $lib(document).keyup(function(c) {
            17 == c.which && (ctrlModifier = !1);
            84 == c.which && (TModifier = !1)
        }).keydown(function(c) {
            17 == c.which && (ctrlModifier = !0);
            84 == c.which && (TModifier = !0);
            if (!(49 == c.which && ctrlModifier && !TModifier) && 49 <= c.which && 57 >= c.which && ctrlModifier && TModifier) return $lib(".at-btn:eq(" + (String.fromCharCode(c.which) - 1) + ") a").focus(), !1
        })
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe =
            function(b) {
                c = b
            };
        this.fire = function(b, d) {
            null != c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("shortcutkeys", e)
    })) : AtKit.registerPlugin("shortcutkeys", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        $lib.sb_spellVersion = "3.9";
        var c = null,
            b = null,
            d = null,
            g = 0,
            f = !1,
            h = !1;
        AtKit.addLocalisationMap("en", {
            spell_title: "Start Spellchecker",
            spell_complete: "Spell checking complete!",
            spell_mistake: "Spelling Mistake",
            spell_suggestions: "Spelling Suggestions",
            spell_ignore: "Ignore",
            spell_replace: "Replace",
            spell_record: "Send anonymous usage data?",
            spell_record_data: "Data to be sent: ",
            spell_record_allow: "Allow",
            spell_record_disallow: "Disallow"
        });
        AtKit.addLocalisationMap("ar", {
            spell_title: "&#1575;&#1604;&#1578;&#1583;&#1602;&#1610;&#1602; &#1575;&#1604;&#1575;&#1605;&#1604;&#1575;&#1574;&#1610;",
            spell_complete: "&#1578;&#1605; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1575;&#1604;&#1578;&#1583;&#1602;&#1610;&#1602; &#1575;&#1604;&#1573;&#1605;&#1604;&#1575;&#1574;&#1610;",
            spell_mistake: "&#1582;&#1591;&#1571; &#1573;&#1605;&#1604;&#1575;&#1574;&#1610;",
            spell_suggestions: "&#1575;&#1602;&#1578;&#1585;&#1575;&#1581;&#1575;&#1578; &#1604;&#1578;&#1589;&#1581;&#1610;&#1581; &#1575;&#1604;&#1582;&#1591;&#1571; &#1575;&#1604;&#1573;&#1605;&#1604;&#1575;&#1574;&#1610;",
            spell_ignore: "&#1578;&#1580;&#1575;&#1607;&#1604;",
            spell_replace: "&#1575;&#1587;&#1578;&#1576;&#1583;&#1575;&#1604;",
            spell_record: "&#1571;&#1585;&#1587;&#1575;&#1604; &#1587;&#1580;&#1604; &#1575;&#1604;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1583;&#1608;&#1606; &#1603;&#1588;&#1601; &#1607;&#1608;&#1610;&#1577; &#1575;&#1604;&#1605;&#1587;&#1578;&#1582;&#1583;&#1605;",
            spell_record_data: "&#1575;&#1604;&#1605;&#1581;&#1578;&#1608;&#1609; &#1575;&#1604;&#1582;&#1575;&#1589; &#1576;&#1604;&#1571;&#1585;&#1587;&#1575;&#1604; : ",
            spell_record_allow: " &#1575;&#1604;&#1587;&#1605;&#1575;&#1581; &#1576;&#1600;",
            spell_record_disallow: " &#1593;&#1583;&#1605; &#1575;&#1604;&#1587;&#1605;&#1575;&#1581; &#1576;&#1600;"
        });
        AtKit.set("spellInitialised", !1);
        var e = $lib("<div>", {
            style: ""
        });
        e.append($lib("<h3>", {
            html: AtKit.localisation("spell_complete")
        }));
        AtKit.addFn("removeIncorrectWord", function() {
            $lib("#spellcheckmistakes option:selected").remove();
            $lib("#spellcheckmistakes").val($lib("#spellcheckmistakes option:first").val());
            0 === $lib("#spellcheckmistakes").children().length ?
                AtKit.message(e) : $lib("#spellcheckmistakes").trigger("change");
            AtKit.call("recordSpell")
        });
        AtKit.addFn("recordSpell", function() {
            if (h) f && AtKit.call("recordSpellng"), AtKit.message(e);
            else {
                var b = $lib("<div>", {
                    style: "",
                    id: "AtKitSpellRecordDialog"
                });
                b.append($lib("<p>", {
                    html: ""
                }));
                b.append($lib("<h3>", {
                    html: AtKit.localisation("spell_record")
                }));
                b.append($lib("<div>", {
                    id: "AtKitSpellRecordContainer"
                }));
                b.append($lib("<p>", {
                    html: AtKit.localisation("spell_record_data") + c
                }));
                b.append($lib("<div>", {
                    id: "AtKitSpellRecordContainerData"
                }));
                b.append($lib("<button>", {
                    html: AtKit.localisation("spell_record_allow"),
                    id: "AtKitSpellRecordAllow"
                }));
                b.append($lib("<button>", {
                    html: AtKit.localisation("spell_record_disallow"),
                    id: "AtKitSpellRecordDisallow"
                }));
                AtKit.message(b);
                $lib("#AtKitSpellRecordDialog").focus();
                $lib("#AtKitSpellRecordAllow").click(function() {
                    AtKit.call("recordSpellng");
                    AtKit.message(e);
                    f = !0
                });
                $lib("#AtKitSpellRecordDisallow").click(function() {
                    AtKit.message(e);
                    f = !1
                });
                h = !0
            }
        });
        AtKit.addFn("recordSpellng", function() {
            var j = "https://spell.services.atbar.org/spellng/record-spellng.php?l=" +
                AtKit.getLanguage() + "&e=" + b + "&c=" + d + "&i=" + g + "&s=" + c;
            $lib("#sbar").prepend('<img src="' + j + '" />');
            d = b = null;
            g = 0
        });
        AtKit.addFn("initSpell", function() {
            $lib.fn.spellcheck = function(b) {
                return this.each(function() {
                    var d = $lib(this);
                    !d.is("[type=password]") && !d.data("spellchecker") && $lib(this).data("spellchecker", new $lib.SpellChecker(this, b))
                })
            };
            $lib.fn.removeSpellCheck = function() {
                return this.each(function() {
                    $lib(this).unbind(this.options.events);
                    $lib(this).removeData("spellchecker")
                })
            };
            $lib.fn.rteSpellCheck =
                function(b, d, c) {
                    return this.each(function() {
                        $lib(this);
                        (new $lib.SpellChecker(this, c)).checkRTESpelling(b, d, c.RTEType)
                    })
                };
            $lib.fn.checkspelling = function() {
                return this.each(function() {
                    var b = $this.data("spellchecker");
                    b && b.checkSpelling()
                })
            };
            $lib.SpellChecker = function(b, d) {
                this.$element = $lib(b);
                this.options = $lib.extend({
                    lang: "en_US",
                    autocheck: 750,
                    events: "keypress blur paste",
                    url: "spellcheck.php",
                    useXHRMethod: "GM-XHR",
                    ignorecaps: 1,
                    ignoredigits: 1,
                    isRTE: !1,
                    RTEType: ""
                }, d);
                this.bindEvents()
            };
            $lib.SpellChecker.prototype = {
                bindEvents: function() {
                    if (this.options.events) {
                        var b = this,
                            d;
                        this.$element.bind(this.options.events, function(c) {
                            /^key[press|up|down]/.test(c.type) ? (d && clearTimeout(d), d = setTimeout(function() {
                                b.checkSpelling()
                            }, b.options.autocheck)) : b.checkSpelling()
                        })
                    }
                },
                checkRTESpelling: function(b, d, f) {
                    this.options.isRTE = !0;
                    this.origText = b;
                    this.rteptr = d;
                    this.RTEType = f;
                    b.replace(/<.*?>/ig, "");
                    this.text = b.replace(/<.*?>/ig, "");
                    c = b;
                    var g = this;
                    $lib.getJSON("https://spell.services.atbar.org/spellng/spellng.php?l=" + this.options.lang +
                        "&r=" + encodeURIComponent(this.text) + "&callback=?",
                        function(b) {
                            g.parseResults(b)
                        })
                },
                checkSpelling: function() {
                    this.options.isRTE = !1;
                    var b = this.text,
                        d = this.$element.val(),
                        f = this;
                    b !== d && (this.text = this.$element.val(), f = this, c = this.text, $lib.getJSON("https://spell.services.atbar.org/spellng/spellng.php?l=" + this.options.lang + "&r=" + encodeURIComponent(this.text) + "&callback=?", function(b) {
                        f.parseResults(b)
                    }))
                },
                parseResults: function(b) {
                    this.results = {};
                    this.results.words = {};
                    i = 0;
                    for (r in b) this.results.words[r] = {
                        word: r,
                        suggestions: b[r].suggestions,
                        w_offset: b[r].offset
                    }, i++;
                    this.results.count = i;
                    this.displayResults()
                },
                displayResults: function() {
                    if (this.results.count) {
                        var c = $lib("<div>", {
                            style: "",
                            id: "AtKitSpellDialog"
                        });
                        c.append($lib("<h3>", {
                            html: AtKit.localisation("spell_mistake")
                        }));
                        c.append($lib("<div>", {
                            id: "AtKitSpellMistakeContainer"
                        }));
                        c.append($lib("<h3>", {
                            html: AtKit.localisation("spell_suggestions")
                        }));
                        c.append($lib("<div>", {
                            id: "AtKitSpellSuggestionContainer"
                        }));
                        c.append($lib("<button>", {
                            html: AtKit.localisation("spell_replace"),
                            id: "AtKitSpellReplace"
                        }));
                        c.append($lib("<button>", {
                            html: AtKit.localisation("spell_ignore"),
                            id: "AtKitSpellIgnore"
                        }));
                        var f = this;
                        c.children("#AtKitSpellMistakeContainer").append($lib("<select>", {
                            name: "spellcheckmistakes",
                            id: "spellcheckmistakes",
                            size: 7,
                            style: "width: 350px;",
                            "class": "no-float"
                        }).change(function() {
                            $lib("#spellchecksuggestions").empty();
                            var b = f.results.words[$lib(this).val()].suggestions;
                            $lib.each(b, function(b, d) {
                                $lib("#spellchecksuggestions").append($lib("<option>", {
                                    name: d,
                                    text: d
                                }))
                            })
                        }));
                        c.children("#AtKitSpellSuggestionContainer").append($lib("<select>", {
                            name: "spellchecksuggestions",
                            id: "spellchecksuggestions",
                            size: 7,
                            style: "width: 350px;",
                            "class": "no-float"
                        }));
                        AtKit.message(c);
                        $lib("#AtKitSpellDialog").focus();
                        $lib.each(this.results.words, function(b, d) {
                            c.find("#spellcheckmistakes").append($lib("<option>", {
                                name: d.word,
                                text: d.word
                            }))
                        });
                        $lib("#AtKitSpellIgnore").click(function() {
                            g = 1;
                            b = c.find("#spellcheckmistakes").val();
                            AtKit.call("removeIncorrectWord")
                        });
                        $lib("#AtKitSpellReplace").click(function() {
                            var e =
                                c.find("#spellcheckmistakes").val(),
                                h = c.find("#spellchecksuggestions").val();
                            g = 0;
                            b = e;
                            d = h;
                            !1 === f.isRTE || "undefined" == typeof f.isRTE ? f.$element.val(f.$element.val().replace(e, h)) : (f.origText = f.origText.replace(e, h), "tMCE" == f.RTEType ? f.rteptr.setContent(f.origText) : "CKE" == f.RTEType && f.rteptr.setData(f.origText));
                            AtKit.call("removeIncorrectWord")
                        });
                        c.find("#spellcheckmistakes").val(c.find("#spellcheckmistakes option:first").val());
                        c.find("#spellcheckmistakes").trigger("change")
                    }
                }
            };
            AtKit.set("spellInitialised",
                !0)
        });
        AtKit.addButton("spell", AtKit.localisation("spell_title"), AtKit.getPluginURL() + "images/spell-off.png", function() {
            !1 === AtKit.get("spellInitialised") && AtKit.call("initSpell");
            $lib("textarea").spellcheck({
                useXHRMethod: AtKit.__env.transport,
                lang: AtKit.getLanguage(),
                baseURL: "https://core.atbar.org/"
            });
            $lib("input[type=text]").spellcheck({
                useXHRMethod: AtKit.__env.transport,
                lang: AtKit.getLanguage(),
                baseURL: "https://core.atbar.org/"
            });
            "undefined" != typeof AtKit.__env.window.tinyMCE && (tinyMCE = AtKit.__env.window.tinyMCE,
                tinyMCE.activeEditor.onKeyPress.add(function() {
                    var b = tinyMCE.activeEditor.getContent();
                    rteSpellTimer && window.clearTimeout(rteSpellTimer);
                    rteSpellTimer = window.setTimeout(function() {
                        $lib("#" + tinyMCE.activeEditor.editorContainer).rteSpellCheck(b, tinyMCE.activeEditor, {
                            useXHRMethod: AtKit.__env.transport,
                            lang: AtKit.getLanguage(),
                            RTEType: "tMCE"
                        })
                    }, 750)
                }));
            if ("undefined" != typeof AtKit.__env.window.CKEDITOR) {
                CKE = AtKit.__env.window.CKEDITOR;
                for (var b in CKE.instances) CKE.instances[b].document.bind("keypress",
                    function() {
                        rteSpellTimer && window.clearTimeout(rteSpellTimer);
                        var d = CKE.instances[b].getData();
                        rteSpellTimer = window.setTimeout(function() {
                            $lib("#" + CKE.instances[b].element.getId()).rteSpellCheck(d, CKE.instances[b], {
                                useXHRMethod: AtKit.__env.transport,
                                lang: AtKit.getLanguage(),
                                RTEType: "CKE"
                            })
                        }, 750)
                    })
            }
            $lib("#at-lnk-spell").find("img").attr("src", AtKit.getPluginURL() + "images/spell.png");
            altModifier = ctrlModifier = !1;
            $lib('input[type="text"], textarea').bind("keydown", function() {
                $lib(this).keyup(function(b) {
                    17 ==
                        b.keyCode && (ctrlModifier = !1);
                    18 == b.keyCode && (altModifier = !1)
                }).keydown(function(b) {
                    17 == b.keyCode && (ctrlModifier = !0);
                    18 == b.keyCode && (altModifier = !0);
                    shortcutKey = 83;
                    ctrlModifier && (altModifier && b.keyCode == shortcutKey) && (altModifier = ctrlModifier = !1, $lib("#spellcheckmistakes").focus(), b.returnValue = !1)
                })
            })
        })
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c = b
        };
        this.fire = function(b, d) {
            null !== c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("spellng",
            e)
    })) : AtKit.registerPlugin("spellng", e)
})();
(function() {
    var e = function() {
        var c = AtKit.lib();
        "use strict";
        var b = function(b, c) {
            this.init("tooltip", b, c)
        };
        b.prototype = {
            constructor: b,
            init: function(b, g, f) {
                this.type = b;
                this.$element = c(g);
                this.options = this.getOptions(f);
                this.enabled = !0;
                "manual" != this.options.trigger && (b = "hover" == this.options.trigger ? "mouseenter" : "focus", g = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.bind(b, this.options.selector, c.proxy(this.enter, this)), this.$element.bind(g, this.options.selector, c.proxy(this.leave,
                    this)));
                this.options.selector ? this._options = c.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(b) {
                b = c.extend({}, c.fn[this.type].defaults, b, this.$element.data());
                b.delay && "number" == typeof b.delay && (b.delay = {
                    show: b.delay,
                    hide: b.delay
                });
                return b
            },
            enter: function(b) {
                var g = c(b.currentTarget)[this.type](this._options).data(this.type);
                !g.options.delay || !g.options.delay.show ? g.show() : (g.hoverState = "in", setTimeout(function() {
                    "in" == g.hoverState && g.show()
                }, g.options.delay.show))
            },
            leave: function(b) {
                var g = c(b.currentTarget)[this.type](this._options).data(this.type);
                !g.options.delay || !g.options.delay.hide ? g.hide() : (g.hoverState = "out", setTimeout(function() {
                    "out" == g.hoverState && g.hide()
                }, g.options.delay.hide))
            },
            show: function() {
                var b, c, f, e, l, j, k;
                if (this.hasContent() && this.enabled) {
                    b = this.tip();
                    this.setContent();
                    this.options.animation && b.addClass("fade");
                    j = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement;
                    c = /in/.test(j);
                    b.remove().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).appendTo(c ? this.$element : document.body);
                    f = this.getPosition(c);
                    e = b[0].offsetWidth;
                    l = b[0].offsetHeight;
                    switch (c ? j.split(" ")[1] : j) {
                        case "bottom":
                            k = {
                                top: f.top + f.height,
                                left: f.left + f.width / 2 - e / 2
                            };
                            break;
                        case "top":
                            k = {
                                top: f.top - l,
                                left: f.left + f.width / 2 - e / 2
                            };
                            break;
                        case "left":
                            k = {
                                top: f.top + f.height / 2 - l / 2,
                                left: f.left - e
                            };
                            break;
                        case "right":
                            k = {
                                top: f.top + f.height / 2 - l / 2,
                                left: f.left + f.width
                            }
                    }
                    b.css(k).addClass(j).addClass("in")
                }
            },
            setContent: function() {
                var b = this.tip();
                b.find(".tooltip-inner").html(this.getTitle());
                b.removeClass("fade in top bottom left right")
            },
            hide: function() {
                var b = this.tip();
                b.removeClass("in");
                if (c.support.transition && this.$tip.hasClass("fade")) {
                    var e = setTimeout(function() {
                        b.off(c.support.transition.end).remove()
                    }, 500);
                    b.one(c.support.transition.end, function() {
                        clearTimeout(e);
                        b.remove()
                    })
                } else b.remove()
            },
            fixTitle: function() {
                var b = this.$element;
                if (b.attr("title") || "string" != typeof b.attr("data-original-title")) b.attr("data-original-title", b.attr("title") ||
                    "").removeAttr("title")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function(b) {
                return c.extend({}, b ? {
                    top: 0,
                    left: 0
                } : this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
            },
            getTitle: function() {
                var b;
                b = this.$element;
                var c = this.options;
                b = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
                return b = b.toString().replace(/(^\s*|\s*$)/, "")
            },
            tip: function() {
                return this.$tip = this.$tip || c(this.options.template)
            },
            validate: function() {
                this.$element[0].parentNode ||
                    (this.hide(), this.options = this.$element = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function() {
                this[this.tip().hasClass("in") ? "hide" : "show"]()
            }
        };
        c.fn.tooltip = function(d) {
            return this.each(function() {
                var e = c(this),
                    f = e.data("tooltip"),
                    h = "object" == typeof d && d;
                f || e.data("tooltip", f = new b(this, h));
                if ("string" == typeof d) f[d]()
            })
        };
        c.fn.tooltip.Constructor = b;
        c.fn.tooltip.defaults = {
            animation: !0,
            delay: 0,
            selector: !1,
            placement: "top",
            trigger: "hover",
            title: "",
            template: '<div class="tooltip" style="position: absolute;z-index:9999999;display: block;visibility:visible;padding: 5px;font-size:11px"><div class="tooltip-arrow" style="position: absolute;width:0;height:0;"></div><div class="tooltip-inner" style="max-width: 200px;padding: 3px 8px;color: #ffffff;text-align: center;text-decoration: none;background-color: #000000;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;"></div></div>'
        };
        setTimeout(function() {
            AtKit.lib()(".at-btn").tooltip({
                placement: "bottom",
                trigger: "hover"
            });
            AtKit.lib()(".at-btn a").tooltip({
                placement: "bottom",
                trigger: "focus"
            })
        }, 500)
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c = b
        };
        this.fire = function(b, d) {
            null != c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("tooltip", e)
    })) : AtKit.registerPlugin("tooltip", e)
})();
(function() {
    var e = function() {
        $lib = AtKit.lib();
        var c;
        AtKit.addLocalisationMap("en", {
            wp_title: "Word Prediction",
            wp_ignore: "Ignore",
            wp_instruct: "Keystrokes: esc to close, Ctrl + Alt + (1, 2, 3 etc)"
        });
        AtKit.addLocalisationMap("ar", {
            wp_title: "&#1578;&#1588;&#1594;&#1610;&#1604; &#1605;&#1602;&#1578;&#1585;&#1581; &#1575;&#1604;&#1603;&#1604;&#1605;&#1575;&#1578;",
            wp_ignore: "&#1578;&#1580;&#1575;&#1607;&#1604;",
            wp_instruct: "&#1605;&#1601;&#1575;&#1578;&#1610;&#1581;: Esc &#1604;&#1604;&#1582;&#1585;&#1608;&#1580;&#1548; Ctrl+Alt+(1,2,3...)"
        });
        AtKit.set("WordPrediction_TextSelected", null);
        $lib('input[type="text"], textarea').bind("focus", function() {
            AtKit.set("WordPrediction_TextSelected", $lib(this))
        });
        AtKit.addFn("getCaretPos", function(b) {
            var b = b[0],
                d;
            document.selection && document.selection.createRange ? d = document.selection.createRange().getBookmark().charCodeAt(2) - 2 : b.setSelectionRange && (d = b.selectionStart);
            return d
        });
        AtKit.addFn("setCaretPos", function(b) {
            var d = b.input[0];
            null !== d && (d.createTextRange ? (d = d.createTextRange(), d.move("character",
                b.position), d.select()) : d.selectionStart ? (d.focus(), d.setSelectionRange(b.position, b.position)) : d.focus())
        });
        AtKit.addButton("wordprediction", AtKit.localisation("wp_title"), AtKit.getPluginURL() + "images/aitype.png", function() {
            altModifier = ctrlModifier = !1;
            $lib('input[type="text"], textarea').bind("keydown", function(b) {
                if (!(17 == b.which || 18 == b.which || ctrlModifier || altModifier)) {
                    clearTimeout(c);
                    var d = $lib(this);
                    if (27 == b.keyCode) return $lib("#AtKitWordPrediction").remove();
                    c = setTimeout(function() {
                        var b =
                            AtKit.get("WordPrediction_TextSelected");
                        if (null !== b) {
                            var c = b.val(),
                                e = AtKit.call("getCaretPos", b);
                            AtKit.set("WordPrediction_CaretPos", e);
                            var l = c.substring(0, e).split(" ").slice(-6).join(" "),
                                c = c.substring(e).split(" ").slice(0, 2).join(" "),
                                e = "https://predict.services.atbar.org/wordprediction/",
                                e = "ar" == AtKit.getLanguage() ? e + "?lang=AR" : e + "?lang=EN",
                                e = e + ("&l=" + encodeURIComponent(l) + "&t=" + encodeURIComponent(c) + "&callback=?");
                            $lib.getJSON(e, function(c) {
                                var c = c.payload.split(";"),
                                    f = c.splice(0, 2);
                                $lib.each(f,
                                    function(b) {
                                        isNaN(f[b].charAt(0)) || (f[b] = f[b].substring(1))
                                    });
                                var e = b.position(),
                                    h = b.width(),
                                    l = b.outerHeight(),
                                    m = "",
                                    m = 0 === $lib("#AtKitWordPrediction").length ? $lib("<div>", {
                                        id: "AtKitWordPrediction"
                                    }).css({
                                        position: "absolute",
                                        left: e.left + "px",
                                        width: h,
                                        top: 5 + e.top + l + "px",
                                        background: "white",
                                        "font-size": "16pt",
                                        "font-weight": "bold",
                                        color: "black",
                                        border: "2px solid black",
                                        "z-index": "9999999999",
                                        padding: "10px"
                                    }) : $lib("#AtKitWordPrediction").empty();
                                m.append($lib("<a>", {
                                    href: "#",
                                    html: AtKit.localisation("wp_ignore"),
                                    style: "color:red;padding-right:10px;float:left;"
                                }).bind("click", function() {
                                    $lib("#AtKitWordPrediction").remove();
                                    b.focus()
                                }));
                                for (i = 0; i < c.length; i++) e = c[i], "" != e && (e.charAt(0), e = e.substring(1), e = $lib("<a>", {
                                    html: e,
                                    href: "#",
                                    style: "padding-right:10px;float:left;"
                                }).data("suggestion", e).bind("click", function(b) {
                                    var c = AtKit.get("WordPrediction_CaretPos"),
                                        d = $lib(this).data("suggestion") + " ",
                                        e = AtKit.get("WordPrediction_TextSelected"),
                                        g = c - f[0].length,
                                        c = c + f[1].length;
                                    e.val(e.val().substring(0, g) + d + e.val().substring(c));
                                    m.remove();
                                    e.focus();
                                    AtKit.call("setCaretPos", {
                                        input: e,
                                        position: g + d.length
                                    });
                                    b.preventDefault();
                                    return !1
                                }), m.append(e));
                                c = $lib("<p>", {
                                    html: AtKit.localisation("wp_instruct"),
                                    style: "font-size:12pt; padding-top:10px;clear:left"
                                });
                                m.append(c);
                                b.after(m);
                                d.keyup(function(b) {
                                    17 == b.keyCode && (ctrlModifier = !1);
                                    18 == b.keyCode && (altModifier = !1)
                                }).keydown(function(b) {
                                    17 == b.keyCode && (ctrlModifier = !0);
                                    18 == b.keyCode && (altModifier = !0);
                                    offset = 48;
                                    ctrlModifier && (altModifier && 49 <= b.keyCode && 57 >= b.keyCode) && (numKey = b.keyCode -
                                        offset, altModifier = ctrlModifier = !1, $lib("#AtKitWordPrediction").children("a:eq(" + numKey + ")").click(), b.preventDefault ? b.preventDefault() : b.stop(), b.returnValue = !1, b.stopPropagation(), d.trigger("keydown"))
                                })
                            })
                        }
                    }, 500)
                }
            })
        })
    };
    "undefined" == typeof window.AtKit ? (window.AtKitLoaded = function() {
        var c = null;
        this.subscribe = function(b) {
            c = b
        };
        this.fire = function(b, d) {
            null !== c && c(b, d)
        }
    }, window.AtKitLoaded = new AtKitLoaded, window.AtKitLoaded.subscribe(function() {
        AtKit.registerPlugin("wordprediction", e)
    })) : AtKit.registerPlugin("wordprediction",
        e)
})();