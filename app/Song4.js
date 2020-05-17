/*
 * JS for Song4 generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '0c2b18ad-30dc-4103-ae45-9fdf77d705b4';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "Song6",
    "location": "Song6.html"
}, {
    "name": "Song7",
    "location": "Song7.html"
}, {
    "name": "Song2",
    "location": "Song2.html"
}, {
    "name": "Song8",
    "location": "Song8.html"
}, {
    "name": "BlessTheLord_1",
    "location": "BlessTheLord_1.html"
}, {
    "name": "Song9",
    "location": "Song9.html"
}, {
    "name": "Song10",
    "location": "Song10.html"
}, {
    "name": "Song3",
    "location": "Song3.html"
}, {
    "name": "startScreen_clone_1",
    "location": "startScreen_clone_1.html"
}, {
    "name": "Song4",
    "location": "Song4.html"
}, {
    "name": "Song5",
    "location": "Song5.html"
}];

function Song4_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_5': 'Song4_mobilelabel_5'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'Song4';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Song4_onLoad = function() {
        Song4_elementsExtraJS();
        Song4_deviceEvents();
        Song4_windowEvents();
        Song4_elementsEvents();
    };
    // screen window events
    function Song4_windowEvents() {
        $('#Song4').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function Song4_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Song4_elementsExtraJS() {
        // screen (Song4) extra code
    };
    // screen elements handler
    function Song4_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#Song4").on("pagebeforeshow", "#Song4", function(event, ui) {
        Apperyio.CurrentScreen = "Song4";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Song4_onLoad();
};
$(document).off("pagecreate", "#Song4").on("pagecreate", "#Song4", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Song4_js();
});