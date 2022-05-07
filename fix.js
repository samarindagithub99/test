<div class="noop-random-posts"><script type="text/javascript">
    


    var randarray = new Array();
    var l=0;
    var flag;
    var numofpost=5;
    function nooprandomposts(json){
    var total = parseInt(json.feed.openSearch$totalResults.$t,10);
    for(i=0;i < numofpost;){flag=0;randarray.length=numofpost;l=Math.floor(Math.random()*total);for(j in randarray){if(l==randarray[j]){ flag=1;}}
    if(flag==0&&l!=0){randarray[i++]=l;}}document.write('<ul>');
    for(n in randarray){ var p=randarray[n];var entry=json.feed.entry[p-1];
    for(k=0; k < entry.link.length; k++){if(entry.link[k].rel=='alternate'){
      
     

      var item = "<div class='tag-abso'>" + "<a href=" + "'" + "/search/label/" + entry.category[0].term  + "'" + ">" + entry.category[0].term + "</a>" + "</div>" + "<li>" + "<a href=" + entry.link[k].href + ">" + "<p>" + entry.title.$t + "</p></a></li>";
    document.write(item);}}
    }document.write('</ul>');}
    </script>

<script type="text/javascript" src="/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1000&callback=nooprandomposts"></script></div>