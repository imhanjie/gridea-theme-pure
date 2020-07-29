const generateOverride = (params = {}) => {
    let result = ''
    var colors = {
        'theme-color-first': {
            'black': '#151617',
            'white': '#ffffff',
            'gray': '#f9f9f9',
            'green': '#e6eceb',
        },
        'theme-color-second': {
            'black': '#1d1e1f',
            'white': '#ffffff',
            'gray': '#f3f3f3',
            'green': '#e6eceb',
        },
        'content-color-first': {
            'black': '#e0eaef',
            'white': '#5f6169',
            'gray': '#5e5e5e',
            'green': '#727877',
        },
        'content-color-second': {
            'black': '#62686b',
            'white': '#999fa7',
            'gray': '#BFBFBF',
            'green': '#b3b9b8',
        },
        'accent-color-first': {
            'black': '#64b587',
            'white': '#f5bab2',
            'gray': '#8b959f',
            'green': '#65b687',
        },
    };
    colors['accent-color-second'] = {
        'black': colors["accent-color-first"].black.colorRgba(0.14),
        'white': colors["accent-color-first"].white.colorRgba(0.14),
        'gray': colors["accent-color-first"].gray.colorRgba(0.14),
        'green': colors["accent-color-first"].green.colorRgba(0.14),
    }

    if (params.isEnabledCustomColor) {
        params.skin = "custom"
        colors["theme-color-first"][params.skin] = params.ctf
        colors["theme-color-second"][params.skin] = params.cts
        colors["content-color-first"][params.skin] = params.ccf
        colors["content-color-second"][params.skin] = params.ccs
        colors["accent-color-first"][params.skin] = params.caf
        colors['accent-color-second'][params.skin] = params.caf.colorRgba(0.2)
    }

    console.log('current theme: ' + params.skin)
    if (!params.skin) {
        params.skin = 'black'
    }
    result += `
        .gt-bg-theme-color-first {
          background: ${colors["theme-color-first"][params.skin]}!important;
        }
        
        .gt-bg-theme-color-second {
          background: ${colors["theme-color-second"][params.skin]}!important;
        }
        
        .gt-bg-content-color-first {
          background: ${colors["content-color-first"][params.skin]}!important;
        }
        
        .gt-bg-content-color-second {
          background: ${colors["content-color-second"][params.skin]}!important;
        }
        
        .gt-bg-accent-color-first {
          background: ${colors["accent-color-first"][params.skin]}!important;
        }
        
        .gt-bg-accent-color-second {
          background: ${colors["accent-color-second"][params.skin]}!important;
        }
        
        .gt-c-theme-color-first {
          color: ${colors["theme-color-first"][params.skin]}!important;
        }
        
        .gt-c-theme-color-second {
          color: ${colors["theme-color-second"][params.skin]}!important;
        }
        
        .gt-c-content-color-first {
          color: ${colors["content-color-first"][params.skin]}!important;
        }
        
        .gt-c-content-color-second {
          color: ${colors["content-color-second"][params.skin]}!important;
        }
        
        .gt-c-accent-color-first {
          color: ${colors["accent-color-first"][params.skin]}!important;
        }
        
        .gt-c-accent-color-second {
          color: ${colors["accent-color-second"][params.skin]}!important;
        }
        
        body {
          color: ${colors["content-color-first"][params.skin]}!important;
        }
        
        a {
          color: ${colors["accent-color-first"][params.skin]}!important;
        }
        
        .post-content h1 {
          display: inline-block;
          color: ${colors["content-color-first"][params.skin]}!important;
          position: relative!important;
          background: linear-gradient(180deg, transparent 75%, ${colors["accent-color-first"][params.skin].colorRgba(0.4)} 0)!important;
        }
        
        .post-content h2 {
          display: inline-block;
          color: ${colors["content-color-first"][params.skin]}!important;
          position: relative!important;
          background: linear-gradient(180deg, transparent 75%, ${colors["accent-color-first"][params.skin].colorRgba(0.4)} 0)!important;
        }
        
        .gt-a-link {
          color: ${colors["content-color-first"][params.skin]}!important;
          position: relative!important;
          background: linear-gradient(180deg, transparent 75%, ${colors["accent-color-first"][params.skin].colorRgba(0.4)} 0)!important;
        }
        
        .gt-post-content a {
          color: ${colors["accent-color-first"][params.skin]}!important;
        }
        
        .gt-post-content blockquote {
          background: ${colors["accent-color-second"][params.skin]}!important;
          border-color: ${colors["accent-color-first"][params.skin]}!important;
        }
        
        .gt-post-content code {
          background: ${colors["accent-color-second"][params.skin]}!important;
        }
        
        input::placeholder {
          color: ${colors["content-color-second"][params.skin]}!important;
        }
        
        .search-input {
          color: ${colors["content-color-first"][params.skin]}!important;
          background-color: ${colors["theme-color-second"][params.skin]}!important;
        }
         `;
    if (params.customCss) {
        result += `
      ${params.customCss}
    `
    }
    console.log(result)
    return result
}

/**
 * 十六进制颜色转 RGBA 颜色
 * @param alpha
 * @returns {string}
 */
String.prototype.colorRgba = function (alpha = 1.0) {
    var sColor = this.toLowerCase();
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGBA(" + sColorChange.join(",") + "," + alpha + ")";
    }
    return sColor;
};

module.exports = generateOverride
