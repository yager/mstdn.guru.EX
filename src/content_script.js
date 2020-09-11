window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelector('#mastodon') != null) {
            renderHTML();
            clearInterval(jsInitCheckTimer);
        }
    }
}

function renderHTML() {
    // 上級者向け UI
    if ( document.querySelector('.drawer__inner__mastodon') != null ) {
        document.querySelector('.drawer__inner__mastodon').innerHTML
            = '<iframe id="ytIF" width="285" height="160" src="https://www.youtube.com/embed/?list=UUTfta7Ult6yLu7ru-WInOGg" frameborder="0" allowfullscreen></iframe>'
            + '<iframe id="mixlrIF" src="https://mixlr.com/users/3494368/embed" width="100%" height="150px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe>';
    }
    // 通常 UI
    else if ( document.querySelector('.getting-started__footer') != null ) {
        document.querySelector('.getting-started__footer p').innerHTML
            = '<iframe id="ytIF" width="265" height="149" src="https://www.youtube.com/embed/?list=UUTfta7Ult6yLu7ru-WInOGg" frameborder="0" allowfullscreen></iframe>'
            + '<iframe id="mixlrIF" src="https://mixlr.com/users/3494368/embed" width="100%" height="150px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe>';
    }

    
}