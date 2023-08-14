var _0x7ce6 = ["slider", ".slider", "hide", "#display", "gif", "jpeg", "jpg", "png", "bmp", " <div class=\"image-upload text-center\"> <label for=\"inputImage\" title=\"Upload image file\"> <input type=\"file\" class=\"sr-only btn btn-dark\" id=\"inputImage\" name=\"files\" accept=\"image/jpeg, image/png, image/bmp, image/svg, image/ico, image/jpg, image/gif\"> <a class=\"btn btn-dark text-white font-weight-bold\" > <span class=\"fa fa-upload\"></span> UPLOAD IMAGE</a> </label> </div> <div class=\"img-container\" id=\"imagecontainer\"> <img src=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh36_D5szwSDKtBaSb_6PRVB2IrEjb_R3xFlrVdtv5bNz6bT9uGzoFLZDc9PzmbTVPYiuO-6hKcs6_XfTI0_8HDKIc_hVKjsqFesSC7iN4AqV8qBoxeHOb0JOLsxTi8mKLkuPkn-y3t3QO_ucafU7KrE_JFuHgm6gdCTaXSDjG9cNOmeu4EDm0RYfW14_o/s1076/image%20%281%29.jpg\" id=\"image\" style=\"padding-top:20px\"> </div>", "//imageonline.org/ajax_upload_file.php", "POST", "parse", "hasWarnings", "isSuccess", "files", "name", "warnings", "upload-failed", "addClass", "upload-successful", "removeClass", "html", "onError", "fadeOut", ".progress-bar2", "find", "disabled", "prop", "#convert", "width", "reader", "height", "upload failed - kindly reupload", "length", "%", "span", ".fileuploader-progressbar .bar", "status", "upload", "cancelled", ".fileuploader-action-retry", "<a class=\"fileuploader-action fileuploader-action-retry\" title=\"Retry\"><i></i></a>", "prepend", ".column-actions", "#image", "show", "percentage", "#download1", "getInstance", "fileuploader", "getFiles", "remove", "", "#results", "input[name=\"files\"]", "0 Bytes", "log", "floor", "toFixed", "pow", " ", "Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "<i class=\"fa fa-circle-o-notch fa-spin\"></i> Pencil sketching..", "val", "#pencilsketchnum", "input[name=fileuploader-list-files]", ",", "split", "/", "indexOf", "substring", "\"", "replace", "trim", "each", "https://imageonline.org/script.php", "scrollTop", "documentElement", "pageYOffset", "reset", "button", "PENCIL SKETCH", "src", "attr", "#resultphoto", "#adsid", "hidden", "#finalphoto", "scrollIntoView", "finalphoto", "getElementById", "post"];
var image;
var cropper;
var extension;
var ext;
var dataURL;
var imgname;
var resizewidth = 0;
var resizeheight = 0;
var orgwidth;
var orgheight;
var originalwidth;
var originalheight;
var imageData;
var canvas;
var canvas1;
var element;
var cropper1;
var fileExt;
var imagecheck = 0;
var uploadcheck = 0;
var check = 0;
var options = {};
$(_0x7ce6[1])[_0x7ce6[0]]();
$(_0x7ce6[3])[_0x7ce6[2]]();
var input = $(_0x7ce6[55])[_0x7ce6[50]]({
    enableApi: !0,
    fileMaxSize: 7,
    extensions: [_0x7ce6[4], _0x7ce6[5], _0x7ce6[6], _0x7ce6[7], _0x7ce6[8]],
    changeInput: _0x7ce6[9],
    upload: {
        url: _0x7ce6[10],
        data: null,
        type: _0x7ce6[11],
        start: !0,
        synchron: !0,
        beforeSend: null,
        chunk: 1,
        onSuccess: function (_0x84c9x18, _0x84c9x19) {
            var _0x84c9x1a = {};
            try {
                _0x84c9x1a = JSON[_0x7ce6[12]](_0x84c9x18)
            } catch (e) {
                _0x84c9x1a[_0x7ce6[13]] = !0
            };
            if (_0x84c9x1a[_0x7ce6[14]] && _0x84c9x1a[_0x7ce6[15]][0]) {
                _0x84c9x19[_0x7ce6[16]] = _0x84c9x1a[_0x7ce6[15]][0][_0x7ce6[16]]
            };
            if (_0x84c9x1a[_0x7ce6[13]]) {
                for (var _0x84c9x1b in _0x84c9x1a[_0x7ce6[17]]) {
                    alert(_0x84c9x1a[_0x7ce6[17]])
                };
                _0x84c9x19[_0x7ce6[22]][_0x7ce6[21]](_0x7ce6[20])[_0x7ce6[19]](_0x7ce6[18]);
                return this[_0x7ce6[23]] ? this[_0x7ce6[23]](_0x84c9x19) : null
            };
            setTimeout(function () {
                _0x84c9x19[_0x7ce6[22]][_0x7ce6[26]](_0x7ce6[25])[_0x7ce6[24]](400)
            }, 400);
            $(_0x7ce6[29])[_0x7ce6[28]](_0x7ce6[27], 0);
            orgwidth = _0x84c9x19[_0x7ce6[31]][_0x7ce6[30]];
            orgheight = _0x84c9x19[_0x7ce6[31]][_0x7ce6[32]];
            if (orgwidth > 2048) {
                var _0x84c9x1c = 2048 / orgwidth;
                resizeheight = orgheight * _0x84c9x1c;
                resizewidth = 2048;
                check = 1
            } else {
                if (orgheight > 2048) {
                    var _0x84c9x1d = 2048 / orgheight;
                    resizewidth = orgwidth * _0x84c9x1d;
                    resizeheight = 2048;
                    check = 1
                } else {
                    resizewidth = orgwidth;
                    resizeheight = orgheight;
                    check = 0
                }
            }
        },
        onError: function (_0x84c9x19) {
            var _0x84c9x1e = _0x84c9x19[_0x7ce6[22]][_0x7ce6[26]](_0x7ce6[25]);
            $(_0x7ce6[29])[_0x7ce6[28]](_0x7ce6[27], !0);
            alert(_0x7ce6[33]);
            if (_0x84c9x1e[_0x7ce6[34]] > 0) {
                _0x84c9x1e[_0x7ce6[26]](_0x7ce6[36])[_0x7ce6[22]](0 + _0x7ce6[35]);
                _0x84c9x1e[_0x7ce6[26]](_0x7ce6[37])[_0x7ce6[30]](0 + _0x7ce6[35]);
                _0x84c9x19[_0x7ce6[22]][_0x7ce6[26]](_0x7ce6[25])[_0x7ce6[24]](400)
            };
            _0x84c9x19[_0x7ce6[39]][_0x7ce6[38]] != _0x7ce6[40] && _0x84c9x19[_0x7ce6[22]][_0x7ce6[26]](_0x7ce6[41])[_0x7ce6[34]] == 0 ? _0x84c9x19[_0x7ce6[22]][_0x7ce6[26]](_0x7ce6[44])[_0x7ce6[43]](_0x7ce6[42]) : null
        },
        onProgress: function (_0x84c9x1a, _0x84c9x19) {
            $(_0x7ce6[45])[_0x7ce6[2]]();
            var _0x84c9x1e = _0x84c9x19[_0x7ce6[22]][_0x7ce6[26]](_0x7ce6[25]);
            if (_0x84c9x1e[_0x7ce6[34]] > 0) {
                _0x84c9x1e[_0x7ce6[46]]();
                _0x84c9x1e[_0x7ce6[26]](_0x7ce6[36])[_0x7ce6[22]](_0x84c9x1a[_0x7ce6[47]] + _0x7ce6[35]);
                _0x84c9x1e[_0x7ce6[26]](_0x7ce6[37])[_0x7ce6[30]](_0x84c9x1a[_0x7ce6[47]] + _0x7ce6[35])
            };
            $(_0x7ce6[29])[_0x7ce6[28]](_0x7ce6[27], !0)
        },
        onComplete: null
    },
    beforeSelect: function (_0x84c9x19, _0x84c9x1f, _0x84c9x20, _0x84c9x21, input) {
        $(_0x7ce6[45])[_0x7ce6[2]]();
        $(_0x7ce6[48])[_0x7ce6[2]]();
        var _0x84c9x22 = $[_0x7ce6[50]][_0x7ce6[49]](input);
        if (_0x84c9x22[_0x7ce6[51]]()[_0x7ce6[34]]) {
            _0x84c9x22[_0x7ce6[51]]()[0][_0x7ce6[52]]();
            $(_0x7ce6[54])[_0x7ce6[22]](_0x7ce6[53])
        };
        return !0
    }
});

function formatBytes(_0x84c9x24, _0x84c9x25 = 2) {
    if (0 === _0x84c9x24) {
        return _0x7ce6[56]
    };
    const _0x84c9x26 = 0 > _0x84c9x25 ? 0 : _0x84c9x25,
        _0x84c9x27 = Math[_0x7ce6[58]](Math[_0x7ce6[57]](_0x84c9x24) / Math[_0x7ce6[57]](1024));
    return parseFloat((_0x84c9x24 / Math[_0x7ce6[60]](1024, _0x84c9x27))[_0x7ce6[59]](_0x84c9x26)) + _0x7ce6[61] + [_0x7ce6[62], _0x7ce6[63], _0x7ce6[64], _0x7ce6[65], _0x7ce6[66], _0x7ce6[67], _0x7ce6[68], _0x7ce6[69], _0x7ce6[70]][_0x84c9x27]
}
var filename = [];
var fileurl = [];
var inputurls = [];
var i = 0;

function SubmitFormData() {
    $(_0x7ce6[29])[_0x7ce6[28]](_0x7ce6[27], true);
    $(_0x7ce6[48])[_0x7ce6[2]]();
    $(_0x7ce6[29])[_0x7ce6[22]](_0x7ce6[71]);
    $(_0x7ce6[54])[_0x7ce6[22]](_0x7ce6[53]);
    var _0x84c9x2d = parseInt($(_0x7ce6[73])[_0x7ce6[72]]());
    var _0x84c9x2e = $(_0x7ce6[74])[_0x7ce6[72]]();
    var _0x84c9x2f = _0x84c9x2e[_0x7ce6[76]](_0x7ce6[75]);
    $[_0x7ce6[83]](_0x84c9x2f, function (_0x84c9x30, _0x84c9x31) {
        _0x84c9x2f[_0x84c9x30] = _0x84c9x2f[_0x84c9x30][_0x7ce6[79]](_0x84c9x2f[_0x84c9x30][_0x7ce6[78]](_0x7ce6[77]));
        _0x84c9x2f[_0x84c9x30] = _0x84c9x2f[_0x84c9x30][_0x7ce6[79]](0, _0x84c9x2f[_0x84c9x30][_0x7ce6[78]](_0x7ce6[80]));
        _0x84c9x2f[_0x84c9x30] = _0x84c9x2f[_0x84c9x30][_0x7ce6[81]](_0x7ce6[77], _0x7ce6[53]);
        _0x84c9x2f[_0x84c9x30] = _0x84c9x2f[_0x84c9x30][_0x7ce6[82]]()
    });
    $[_0x7ce6[100]](_0x7ce6[84], {
        name: _0x84c9x2f,
        pencilsketch: _0x84c9x2d,
        resizewidth: resizewidth,
        resizeheight: resizeheight,
        check: check
    }, function (_0x84c9x1a) {
        $(_0x7ce6[54])[_0x7ce6[22]](_0x84c9x1a);
        var _0x84c9x32 = $(document)[_0x7ce6[30]]();
        if (_0x84c9x32 > 768) {
            document[_0x7ce6[86]][_0x7ce6[85]] = 0
        } else {
            var _0x84c9x33 = window[_0x7ce6[87]] || document[_0x7ce6[86]][_0x7ce6[85]];
            document[_0x7ce6[86]][_0x7ce6[85]] = _0x84c9x33 + 250
        };
        $(_0x7ce6[29])[_0x7ce6[89]](_0x7ce6[88]);
        $(_0x7ce6[29])[_0x7ce6[28]](_0x7ce6[27], false);
        $(_0x7ce6[29])[_0x7ce6[22]](`${_0x7ce6[90]}`);
        $(_0x7ce6[93])[_0x7ce6[92]](_0x7ce6[91], dataURL);
        $(_0x7ce6[94])[_0x7ce6[2]]();
        $(_0x7ce6[96])[_0x7ce6[21]](_0x7ce6[95]);
        $(_0x7ce6[96])[_0x7ce6[46]]();
        document[_0x7ce6[99]](_0x7ce6[98])[_0x7ce6[97]]()
    })
}
