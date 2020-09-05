window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelector('#mastodon') != null) {
            renderHTML();
            clearInterval(jsInitCheckTimer);
  //要素を取得する処理
        }
    }
}

function renderHTML() {
    if ( document.querySelector('.drawer__inner__mastodon') != null ) {
        document.querySelector('.drawer__inner__mastodon').innerHTML
            = '<iframe src="https://mixlr.com/users/3494368/embed" width="100%" height="180px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe>';
    }
    if ( document.querySelector('.getting-started__footer') != null ) {
        document.querySelector('.getting-started__footer p').innerHTML
            = '<iframe src="https://mixlr.com/users/3494368/embed" width="100%" height="180px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe>';
    }

    
}