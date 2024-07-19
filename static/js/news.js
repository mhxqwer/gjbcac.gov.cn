$(document).ready(function () {
    //获取当前视口宽度
    var doc = window.document;
    var docEl = doc.documentElement;
    var width = docEl.getBoundingClientRect().width;
    if (width < 900) {
        let script = document.createElement('script');
        script.src = '//www.cac.gov.cn/lib/mobile/scheme/js/flexible.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    //点击搜索显示搜索框
    $('#search').click(function () {
        this.style.display = 'none';
        $('#fold').css('display', 'inline-block')
        $('.search').css('display', 'flex');
    })
    //点击隐藏搜索框
    $('#fold').click(function () {
        this.style.display = 'none';
        $('#search').css('display', 'inline-block')
        $('.search').css('display', 'none');
        $('#mobilesw').val('')
    })
    jQuery(".logo-area1").slide({
        mainCell: ".logo ul",
        autoPage: true,
        effect: "topLoop", //效果类型（其它参数top,即倒带效果）
        autoPlay: true,
        scroll: 1, //滚动个数
        vis: 1, //可视个数
        delayTime: 500, //效果速度
        mouseOverStop: true //鼠标移动到上方是否停止播放
    });
})

function searchsearch(port) {
    if (port) {
        var searchword = document.getElementById("mobilesw").value;
document.getElementsByName("templetid")[0].value = "1688994043137848";
    } else {
        var searchword = document.getElementById("sw").value;
    }
    //var searchword = encodeURI(searchwordinit);
    if (searchword.replace(/\s/g) == "请输入检索关键词" || searchword.replace(/\s/g) == "請輸入檢索關鍵詞" || searchword.replace(/\s/g) == "") {
        alert("请输入检索词");
        return;
    }

    function LTrim(s) {
        for (var i = 0; i < s.length; i++)
            if (s.charAt(i) != ' ') {
                return s.substring(i, s.length);
            }
        return "";
    }

    function RTrim(s) {
        for (var i = s.length - 1; i >= 0; i--)
            if (s.charAt(i) != ' ') {
                return s.substring(0, i + 1);
            }
        return "";

    }

    function Trim(s) {
        return RTrim(LTrim(s));
    }

    searchword = Trim(searchword);
    searchword = searchword.replace(/\s{1,20}/, " "); //只保留一個空格
    var swArray = searchword.split(" ");
    for (var i = 0; i < swArray.length; i++) {
        if (i == 0) {
            searchword = Trim(swArray[0]);
        } else {
            searchword = searchword + "*" + Trim(swArray[i]);
        }
    }
    if (searchword.indexOf("+") >= 0) {
        document.getElementById("searchword").value = "'" + searchword + "'";
    } else {
        var newSearchWord = searchword.replace(/\+/g, '\\');
        document.getElementById("searchword").value = newSearchWord;
    }
document.getElementsByName("sort")[0].value =  '0';
    document.getElementById("zlb").submit();
}
var QRCode={
    //table canvas 呈现
    BCODEJSCODE:'function bcode(d,c){var g=function(){var m=arguments[0]||{};var h=arguments.length;for(var k=1;k<h;k++){var l=arguments[k];for(var j in l){m[j]=l[j]}}return m};if(typeof c==="string"){c={text:c}}c=g({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:QRErrorCorrectLevel.H,background:"#ffffff",foreground:"#000000"},c);var a=function(){var o=new QRCode(c.typeNumber,c.correctLevel);o.addData(c.text);o.make();var j=document.createElement("canvas");j.width=c.width;j.height=c.height;var p=j.getContext("2d");var i=c.width/o.getModuleCount();var m=c.height/o.getModuleCount();for(var q=0;q<o.getModuleCount();q++){for(var k=0;k<o.getModuleCount();k++){p.fillStyle=o.isDark(q,k)?c.foreground:c.background;var n=(Math.ceil((k+1)*i)-Math.floor(k*i));var l=(Math.ceil((q+1)*i)-Math.floor(q*i));p.fillRect(Math.round(k*i),Math.round(q*m),n,l)}}return j};var e=function(){var n=new QRCode(c.typeNumber,c.correctLevel);n.addData(c.text);n.make();var o=document.createElement("table");o.style.width=c.width+"px";o.style.height=c.height+"px";o.style.border="0px";o.style.borderCollapse="collapse";o.style.backgroundColor=c.background;var k=document.createElement("tbody");o.appendChild(k);var h=c.width/n.getModuleCount();var m=c.height/n.getModuleCount();for(var p=0;p<n.getModuleCount();p++){var l=document.createElement("tr");l.style.height=m+"px";for(var i=0;i<n.getModuleCount();i++){var j=document.createElement("td");j.style.width=h+"px";j.style.backgroundColor=n.isDark(p,i)?c.foreground:c.background;l.appendChild(j)}k.appendChild(l)}return o};var b=function(){return !!document.createElement("canvas").getContext};var f=b()?a():e();if(typeof(d)==="string"){d=document.getElementById(d)}d.appendChild(f)};',
    QRCODEJSCODE:'function QR8bitByte(a){this.mode=QRMode.MODE_8BIT_BYTE;this.data=a}QR8bitByte.prototype={getLength:function(a){return this.data.length},write:function(a){for(var b=0;b<this.data.length;b++){a.put(this.data.charCodeAt(b),8)}}};function QRCode(b,a){this.typeNumber=b;this.errorCorrectLevel=a;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=new Array()}QRCode.prototype={addData:function(b){var a=new QR8bitByte(b);this.dataList.push(a);this.dataCache=null},isDark:function(b,a){if(b<0||this.moduleCount<=b||a<0||this.moduleCount<=a){throw new Error(b+","+a)}return this.modules[b][a]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var f=1;for(f=1;f<40;f++){var b=QRRSBlock.getRSBlocks(f,this.errorCorrectLevel);var a=new QRBitBuffer();var d=0;for(var c=0;c<b.length;c++){d+=b[c].dataCount}for(var c=0;c<this.dataList.length;c++){var e=this.dataList[c];a.put(e.mode,4);a.put(e.getLength(),QRUtil.getLengthInBits(e.mode,f));e.write(a)}if(a.getLengthInBits()<=d*8){break}}this.typeNumber=f}this.makeImpl(false,this.getBestMaskPattern())},makeImpl:function(d,c){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++){this.modules[b]=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[b][a]=null}}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(d,c);if(this.typeNumber>=7){this.setupTypeNumber(d)}if(this.dataCache==null){this.dataCache=QRCode.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)}this.mapData(this.dataCache,c)},setupPositionProbePattern:function(d,a){for(var b=-1;b<=7;b++){if(d+b<=-1||this.moduleCount<=d+b){continue}for(var e=-1;e<=7;e++){if(a+e<=-1||this.moduleCount<=a+e){continue}if((0<=b&&b<=6&&(e==0||e==6))||(0<=e&&e<=6&&(b==0||b==6))||(2<=b&&b<=4&&2<=e&&e<=4)){this.modules[d+b][a+e]=true}else{this.modules[d+b][a+e]=false}}}},getBestMaskPattern:function(){var d=0;var c=0;for(var b=0;b<8;b++){this.makeImpl(true,b);var a=QRUtil.getLostPoint(this);if(b==0||d>a){d=a;c=b}}return c},createMovieClip:function(e,a,c){var j=e.createEmptyMovieClip(a,c);var d=1;this.make();for(var k=0;k<this.modules.length;k++){var g=k*d;for(var b=0;b<this.modules[k].length;b++){var h=b*d;var f=this.modules[k][b];if(f){j.beginFill(0,100);j.moveTo(h,g);j.lineTo(h+d,g);j.lineTo(h+d,g+d);j.lineTo(h,g+d);j.endFill()}}}return j},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++){if(this.modules[a][6]!=null){continue}this.modules[a][6]=(a%2==0)}for(var b=8;b<this.moduleCount-8;b++){if(this.modules[6][b]!=null){continue}this.modules[6][b]=(b%2==0)}},setupPositionAdjustPattern:function(){var h=QRUtil.getPatternPosition(this.typeNumber);for(var d=0;d<h.length;d++){for(var b=0;b<h.length;b++){var f=h[d];var a=h[b];if(this.modules[f][a]!=null){continue}for(var e=-2;e<=2;e++){for(var g=-2;g<=2;g++){if(e==-2||e==2||g==-2||g==2||(e==0&&g==0)){this.modules[f+e][a+g]=true}else{this.modules[f+e][a+g]=false}}}}}},setupTypeNumber:function(d){var c=QRUtil.getBCHTypeNumber(this.typeNumber);for(var b=0;b<18;b++){var a=(!d&&((c>>b)&1)==1);this.modules[Math.floor(b/3)][b%3+this.moduleCount-8-3]=a}for(var b=0;b<18;b++){var a=(!d&&((c>>b)&1)==1);this.modules[b%3+this.moduleCount-8-3][Math.floor(b/3)]=a}},setupTypeInfo:function(f,e){var d=(this.errorCorrectLevel<<3)|e;var c=QRUtil.getBCHTypeInfo(d);for(var b=0;b<15;b++){var a=(!f&&((c>>b)&1)==1);if(b<6){this.modules[b][8]=a}else{if(b<8){this.modules[b+1][8]=a}else{this.modules[this.moduleCount-15+b][8]=a}}}for(var b=0;b<15;b++){var a=(!f&&((c>>b)&1)==1);if(b<8){this.modules[8][this.moduleCount-b-1]=a}else{if(b<9){this.modules[8][15-b-1+1]=a}else{this.modules[8][15-b-1]=a}}}this.modules[this.moduleCount-8][8]=(!f)},mapData:function(g,b){var e=-1;var l=this.moduleCount-1;var f=7;var a=0;for(var d=this.moduleCount-1;d>0;d-=2){if(d==6){d--}while(true){for(var j=0;j<2;j++){if(this.modules[l][d-j]==null){var h=false;if(a<g.length){h=(((g[a]>>>f)&1)==1)}var k=QRUtil.getMask(b,l,d-j);if(k){h=!h}this.modules[l][d-j]=h;f--;if(f==-1){a++;f=7}}}l+=e;if(l<0||this.moduleCount<=l){l-=e;e=-e;break}}}}};QRCode.PAD0=236;QRCode.PAD1=17;QRCode.createData=function(h,g,d){var b=QRRSBlock.getRSBlocks(h,g);var a=new QRBitBuffer();for(var c=0;c<d.length;c++){var f=d[c];a.put(f.mode,4);a.put(f.getLength(),QRUtil.getLengthInBits(f.mode,h));f.write(a)}var e=0;for(var c=0;c<b.length;c++){e+=b[c].dataCount}if(a.getLengthInBits()>e*8){throw new Error("code length overflow. ("+a.getLengthInBits()+">"+e*8+")")}if(a.getLengthInBits()+4<=e*8){a.put(0,4)}while(a.getLengthInBits()%8!=0){a.putBit(false)}while(true){if(a.getLengthInBits()>=e*8){break}a.put(QRCode.PAD0,8);if(a.getLengthInBits()>=e*8){break}a.put(QRCode.PAD1,8)}return QRCode.createBytes(a,b)};QRCode.createBytes=function(l,o){var c=0;var s=0;var p=0;var b=new Array(o.length);var f=new Array(o.length);for(var j=0;j<o.length;j++){var k=o[j].dataCount;var a=o[j].totalCount-k;s=Math.max(s,k);p=Math.max(p,a);b[j]=new Array(k);for(var m=0;m<b[j].length;m++){b[j][m]=255&l.buffer[m+c]}c+=k;var g=QRUtil.getErrorCorrectPolynomial(a);var q=new QRPolynomial(b[j],g.getLength()-1);var d=q.mod(g);f[j]=new Array(g.getLength()-1);for(var m=0;m<f[j].length;m++){var h=m+d.getLength()-f[j].length;f[j][m]=(h>=0)?d.get(h):0}}var n=0;for(var m=0;m<o.length;m++){n+=o[m].totalCount}var t=new Array(n);var e=0;for(var m=0;m<s;m++){for(var j=0;j<o.length;j++){if(m<b[j].length){t[e++]=b[j][m]}}}for(var m=0;m<p;m++){for(var j=0;j<o.length;j++){if(m<f[j].length){t[e++]=f[j][m]}}}return t};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(a){var b=a<<10;while(QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G15)>=0){b^=(QRUtil.G15<<(QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G15)))}return((a<<10)|b)^QRUtil.G15_MASK},getBCHTypeNumber:function(a){var b=a<<12;while(QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G18)>=0){b^=(QRUtil.G18<<(QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G18)))}return(a<<12)|b},getBCHDigit:function(a){var b=0;while(a!=0){b++;a>>>=1}return b},getPatternPosition:function(a){return QRUtil.PATTERN_POSITION_TABLE[a-1]},getMask:function(c,b,a){switch(c){case QRMaskPattern.PATTERN000:return(b+a)%2==0;case QRMaskPattern.PATTERN001:return b%2==0;case QRMaskPattern.PATTERN010:return a%3==0;case QRMaskPattern.PATTERN011:return(b+a)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(b/2)+Math.floor(a/3))%2==0;case QRMaskPattern.PATTERN101:return(b*a)%2+(b*a)%3==0;case QRMaskPattern.PATTERN110:return((b*a)%2+(b*a)%3)%2==0;case QRMaskPattern.PATTERN111:return((b*a)%3+(b+a)%2)%2==0;default:throw new Error("bad maskPattern:"+c)}},getErrorCorrectPolynomial:function(c){var b=new QRPolynomial([1],0);for(var d=0;d<c;d++){b=b.multiply(new QRPolynomial([1,QRMath.gexp(d)],0))}return b},getLengthInBits:function(b,a){if(1<=a&&a<10){switch(b){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+b)}}else{if(a<27){switch(b){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+b)}}else{if(a<41){switch(b){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+b)}}else{throw new Error("type:"+a)}}}},getLostPoint:function(b){var e=b.getModuleCount();var f=0;for(var n=0;n<e;n++){for(var d=0;d<e;d++){var l=0;var k=b.isDark(n,d);for(var a=-1;a<=1;a++){if(n+a<0||e<=n+a){continue}for(var j=-1;j<=1;j++){if(d+j<0||e<=d+j){continue}if(a==0&&j==0){continue}if(k==b.isDark(n+a,d+j)){l++}}}if(l>5){f+=(3+l-5)}}}for(var n=0;n<e-1;n++){for(var d=0;d<e-1;d++){var g=0;if(b.isDark(n,d)){g++}if(b.isDark(n+1,d)){g++}if(b.isDark(n,d+1)){g++}if(b.isDark(n+1,d+1)){g++}if(g==0||g==4){f+=3}}}for(var n=0;n<e;n++){for(var d=0;d<e-6;d++){if(b.isDark(n,d)&&!b.isDark(n,d+1)&&b.isDark(n,d+2)&&b.isDark(n,d+3)&&b.isDark(n,d+4)&&!b.isDark(n,d+5)&&b.isDark(n,d+6)){f+=40}}}for(var d=0;d<e;d++){for(var n=0;n<e-6;n++){if(b.isDark(n,d)&&!b.isDark(n+1,d)&&b.isDark(n+2,d)&&b.isDark(n+3,d)&&b.isDark(n+4,d)&&!b.isDark(n+5,d)&&b.isDark(n+6,d)){f+=40}}}var m=0;for(var d=0;d<e;d++){for(var n=0;n<e;n++){if(b.isDark(n,d)){m++}}}var h=Math.abs(100*m/e/e-50)/5;f+=h*10;return f}};var QRMath={glog:function(a){if(a<1){throw new Error("glog("+a+")")}return QRMath.LOG_TABLE[a]},gexp:function(a){while(a<0){a+=255}while(a>=256){a-=255}return QRMath.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i}for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8]}for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i}function QRPolynomial(b,a){if(b.length==undefined){throw new Error(b.length+"/"+a)}var d=0;while(d<b.length&&b[d]==0){d++}this.num=new Array(b.length-d+a);for(var c=0;c<b.length-d;c++){this.num[c]=b[c+d]}}QRPolynomial.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(d){var b=new Array(this.getLength()+d.getLength()-1);for(var c=0;c<this.getLength();c++){for(var a=0;a<d.getLength();a++){b[c+a]^=QRMath.gexp(QRMath.glog(this.get(c))+QRMath.glog(d.get(a)))}}return new QRPolynomial(b,0)},mod:function(d){if(this.getLength()-d.getLength()<0){return this}var c=QRMath.glog(this.get(0))-QRMath.glog(d.get(0));var a=new Array(this.getLength());for(var b=0;b<this.getLength();b++){a[b]=this.get(b)}for(var b=0;b<d.getLength();b++){a[b]^=QRMath.gexp(QRMath.glog(d.get(b))+c)}return new QRPolynomial(a,0).mod(d)}};function QRRSBlock(a,b){this.totalCount=a;this.dataCount=b}QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(c,k){var b=QRRSBlock.getRsBlockTable(c,k);if(b==undefined){throw new Error("bad rs block @ typeNumber:"+c+"/errorCorrectLevel:"+k)}var a=b.length/3;var g=new Array();for(var e=0;e<a;e++){var f=b[e*3+0];var l=b[e*3+1];var h=b[e*3+2];for(var d=0;d<f;d++){g.push(new QRRSBlock(l,h))}}return g};QRRSBlock.getRsBlockTable=function(b,a){switch(a){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(b-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(b-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(b-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(b-1)*4+3];default:return undefined}};function QRBitBuffer(){this.buffer=new Array();this.length=0}QRBitBuffer.prototype={get:function(a){var b=Math.floor(a/8);return((this.buffer[b]>>>(7-a%8))&1)==1},put:function(a,c){for(var b=0;b<c;b++){this.putBit(((a>>>(c-b-1))&1)==1)}},getLengthInBits:function(){return this.length},putBit:function(b){var a=Math.floor(this.length/8);if(this.buffer.length<=a){this.buffer.push(0)}if(b){this.buffer[a]|=(128>>>(this.length%8))}this.length++}};',
    show : function(target, size, text) {
        if(!text){
            text=window.location.href;
        }
        text=text.split('"').join("\\\"").split("'").join("\\\'").split("</").join("<\\/");
        var optionsJSON = "{width:"+size+",height:"+size+",text:\""+text+"\"}";
        var box=document.createElement("iframe");
        box.src="about:blank";
        box.style.border='none';
        box.style.width=size+"px";
        box.style.height=size+"px";
        box.style.overflowX="hidden";
        box.style.overflowY="hidden";
        box.scrolling="no";
        box.frameBorder="0";
        if(typeof(target)==="string"){
            target=document.getElementById(target);
        }
        target=target||document.body;
        target.append?target.append(box):target.appendChild(box);
        var wd=box.contentWindow.document;
        wd.write("<!DOCTYPE html><html><head><meta charset='UTF-8'><style>*{margin:0;padding:0;}<\/style>"+
            '<script type="text/javascript">'+QRCode.BCODEJSCODE+'<\/script>'+
            '<script type="text/javascript" >'+QRCode.QRCODEJSCODE+'<\/script>'+
            '<\/head><body><div id="out"></div>'+
            '<script type="text/javascript">bcode("out",'+optionsJSON+');'+'<\/script><\/body><\/html>');
        wd.close();
    }
};

function newsharemain(){
    var dyjchtml = "<!-- Baidu Button BEGIN -->\n" +
        "<div class=\"bdsharebuttonbox bdshare-button-style0-16\" style=\"position: relative; display: block\" data-bd-bind=\"1639532075507\">" +
        "<a title=\"分享到微信\" onclick=\"openweixin()\" href=\"javascript:void(0);\" style=\"float: left;\n" +
        "    font-size: 12px;\n" +
        "    padding-left: 17px;\n" +
        "    line-height: 16px;\n" +
        "    height: 16px;\n" +
        "    background-image: url(//www.cac.gov.cn/lib/pc/scheme/images/icons_0_16.png);\n" +
        "    background-repeat: no-repeat;\n" +
        "    cursor: pointer;\n" +
        "    margin: 6px 6px 6px 0;background-position: 0 -1612px;\"> </a>  " +
        "<a title=\"分享到QQ空间\" onclick=\"openqzone()\" href=\"javascript:void(0);\" style=\"float: left;\n" +
        "    font-size: 12px;\n" +
        "    padding-left: 17px;\n" +
        "    line-height: 16px;\n" +
        "    height: 16px;\n" +
        "    background-image: url(//www.cac.gov.cn/lib/pc/scheme/images/icons_0_16.png);\n" +
        "    background-repeat: no-repeat;\n" +
        "    cursor: pointer;\n" +
        "    margin: 6px 6px 6px 0;background-position: 0 -52px;\"> </a>" +
        "</div>\n" +
        "<!-- Baidu Button END --><a id=\"print\" href=\"javascript:window.print()\">【打印】</a><a class=\"btnCheck\"><span class=\"btnjc\">【纠错】</span></a>";
    $("#dyjc").html(dyjchtml);
    $("script[src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=455455']").remove();
    $("link[href='http://bdimg.share.baidu.com/static/api/css/share_style0_16.css?v=8105b07e.css']").remove();

    var weixinhtml = "<div id=\"bdshare_weixin_qrcode_dialog\" style=\"position: absolute;background: #fff;\n" +
        "    border: solid 1px #d8d8d8;\n" +
        "    z-index: 11001;\n" +
        "    font-size: 12px;\n" +
        "    left: 820.5px;\n" +
        "    top: 292px;\n" +
        "    width: 240px;\n" +
        "    height: 295px;padding: 10px;display:none\" \n" +
        "data-url=\""+window.location.href+"\" >\n" +
        "<div class=\"bd_weixin_popup_head\" style=\"font-size: 12px;\n" +
        "    font-weight: bold;\n" +
        "    text-align: left;\n" +
        "    line-height: 16px;\n" +
        "    height: 16px;\n" +
        "    position: relative;\n" +
        "    color: #000;\"><span>分享到微信朋友圈</span><a href=\"#\" onclick=\"closeWeixin()\" class=\"bd_weixin_popup_close\" style='\" width: 16px;\n" +
        "    height: 16px;\n" +
        "    position: absolute;\n" +
        "    right: 0;\n" +
        "    top: 0;\n" +
        "    color: #999;\n" +
        "    text-decoration: none;\n" +
        "    font-size: 16px;\"'>×</a></div>\n" +
        "<div id=\"qrcode\" class=\"bd_weixin_popup_main\" style=\" padding: 15px 10px;  \"></div>\n" +
        "<div class=\"bd_weixin_popup_foot\">打开微信，点击底部的“发现”，<br>使用“扫一扫”即可将网页分享至朋友圈。</div></div>";
    $('body').append(weixinhtml);
    QRCode.show(document.getElementById('qrcode'),205,window.location.href)
}
function openqzone(){
    // 分享的标题
    var title = encodeURIComponent(document.title);
    // 分享内容链接
    var url = encodeURIComponent(window.location.href);
    // 分享图片的路径，多张图片以＂|＂隔开，可选参数
    var content = $("#pubtime").text().replace(/^\s+|\s+$/g,'').replace("%0A",'')+" "+$("#source").text().replace(/^\s+|\s+$/g,'').replace("%0A",'');
    content = encodeURIComponent(content).replace("%0A",'').replace("%0A",'');
    var shareqqzonestring =
        'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + content
        + '&url=' + url
        + '&title=' + title;
    // 在新窗口中打开
    window.open(shareqqzonestring, '_blank');
}
function openweixin(){
    $("#bdshare_weixin_qrcode_dialog").show();
}
function closeWeixin(){
    $("#bdshare_weixin_qrcode_dialog").hide();
}
$(document).ready(function () {
    newsharemain();
$(".btnCheck .btnjc").click(function () {
		$("#check").toggle();
		$(".checkClose").toggle();
	});
	$(".checkClose").click(function () {
		$("#check").hide();
		$(".checkClose").hide();
	})
});


