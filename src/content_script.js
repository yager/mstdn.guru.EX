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
            = '<iframe id="ytIF" width="265" height="149" src="https://www.youtube.com/embed/?list=UUTfta7Ult6yLu7ru-WInOGg" frameborder="0" allowfullscreen></iframe>'
            + '<iframe id="twitchIF" width="265" height="149" src="https://player.twitch.tv/?channel=backspacefm&parent=mstdn.guru" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>'
            + '<div class="exFooter">'
            + '<a href="https://backspace.fm/" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/assets/favicon-32x32.png" alt="backspace.fm公式HP"></a>'
            + '<a href="https://twitter.com/backspacefm" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/public/backspacefm/052.png" alt="Twitter"></a>'
            + '<a href="https://www.youtube.com/channel/UCmx8RUU-52-l8xUfmJvEYIA" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/public/backspacefm/053.png" alt="YouTube"></a>'
            + '<a href="https://www.tiktok.com/@backspacefm" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/public/backspacefm/054.png" alt="Tiktok"></a>'
            + '<a href="#" id="btnOpen" title="Open">▲</a>'
            + '<a href="#" id="btnClose" title="Close">▼</a>'
            + '</div>';
    }
    // 通常 UI
    else if ( document.querySelector('.getting-started__footer') != null ) {
        document.querySelector('.getting-started__footer p').innerHTML
            = '<iframe id="ytIF" width="265" height="149" src="https://www.youtube.com/embed/?list=UUTfta7Ult6yLu7ru-WInOGg" frameborder="0" allowfullscreen></iframe>'
            + '<iframe id="twitchIF" width="265" height="149" src="https://player.twitch.tv/?channel=backspacefm&parent=mstdn.guru" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>'
            + '<div class="exFooter">'
            + '<a href="https://backspace.fm/" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/assets/favicon-32x32.png" alt="backspace.fm公式HP"></a>'
            + '<a href="https://twitter.com/backspacefm" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/public/backspacefm/052.png" alt="Twitter"></a>'
            + '<a href="https://www.youtube.com/channel/UCmx8RUU-52-l8xUfmJvEYIA" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/public/backspacefm/053.png" alt="YouTube"></a>'
            + '<a href="https://www.tiktok.com/@backspacefm" target="_blank" rel="noopener noreferrer"><img src="https://backspace.fm/public/backspacefm/054.png" alt="Tiktok"></a>'
            + '<a href="#" id="btnOpen" title="Open">▲</a>'
            + '<a href="#" id="btnClose" title="Close">▼</a>'
            + '</div>';
    }

	document.getElementById('btnOpen').addEventListener("click", function(){
		document.getElementById('btnOpen').style.display = 'none';
		document.getElementById('btnClose').style.display = 'block';
		document.getElementById('ytIF').style.width = '265px';
		document.getElementById('ytIF').style.height = '149px';
		document.getElementById('twitchIF').style.width = '265px';
		document.getElementById('twitchIF').style.height = '149px';
		if ( document.querySelector('.drawer__inner__mastodon') != null ) {
			document.getElementById('ytIF').style.bottom = '181px';
			document.getElementById('twitchIF').style.left = '0px';
		}
	}, false);
	document.getElementById('btnClose').addEventListener("click", function(){
		document.getElementById('btnClose').style.display = 'none';
		document.getElementById('btnOpen').style.display = 'block';
		document.getElementById('ytIF').style.width = '132px';
		document.getElementById('ytIF').style.height = '74px';
		document.getElementById('twitchIF').style.width = '132px';
		document.getElementById('twitchIF').style.height = '74px';
		if ( document.querySelector('.drawer__inner__mastodon') != null ) {
			document.getElementById('ytIF').style.bottom = '32px';
			document.getElementById('twitchIF').style.left = '132px';
		}
	}, false);
}