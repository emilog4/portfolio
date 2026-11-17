// Interactive parts of emilo.se: split-flap board, recruiter ticket, copy button and travel globe.
// Loaded once from src/app/page.tsx after the page has rendered.
(function(){
  var MONTHS=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  var DAY=864e5, TARGET=2027*12+5, FROM=new Date(2027,5,1), TO=new Date(2027,7,31);
  var NAME="EMIL LÖGDBERG", FINAL="FREE FOR AN INTERNSHIP", SLEN=22;
  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var btn=document.getElementById("replay"), sbtn=document.getElementById("sound"), busy=false, soundOn=false, actx=null;

  /* ----- Swedish holidays ----- */
  function easter(y){var a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),
    g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,
    m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(y,mo-1,da);}
  function add(d,n){return new Date(d.getFullYear(),d.getMonth(),d.getDate()+n);}
  function firstSat(y,m,d){var x=new Date(y,m,d);while(x.getDay()!==6)x=add(x,1);return x;}
  function key(d){return d.getMonth()*100+d.getDate();}
  var cache={};
  function year(y){
    if(cache[y])return cache[y];
    var red={},eve={},E=easter(y),mid=firstSat(y,5,20);
    [new Date(y,0,1),new Date(y,0,6),add(E,-2),E,add(E,1),new Date(y,4,1),add(E,39),add(E,49),new Date(y,5,6),mid,
     firstSat(y,9,31),new Date(y,11,25),new Date(y,11,26)].forEach(function(d){red[key(d)]=1;});
    [add(mid,-1),new Date(y,11,24),new Date(y,11,31)].forEach(function(d){eve[key(d)]=1;});
    return cache[y]={red:red,eve:eve};
  }
  function info(d){var Y=year(d.getFullYear()),k=key(d),w=d.getDay(),red=!!Y.red[k],eve=!!Y.eve[k];
    return {red:red||w===0,off:w===0||w===6||red||eve};}

  /* ----- split-flap tiles ----- */
  function half(cls,v){var h=document.createElement("span");h.className="h "+cls;var s=document.createElement("span");s.textContent=v;h.appendChild(s);return h;}
  function tile(){var el=document.createElement("span");el.className="f";el.appendChild(half("top",""));el.appendChild(half("bot",""));
    el._v="";el._c="";el._shown="";return el;}
  function setTile(el,v,cls,dur,delay){
    cls=cls||"";
    if(el._v===v&&el._c===cls)return;
    if(el._pend){clearTimeout(el._pend);el._pend=null;}
    if(el._fin)el._fin();
    el._v=v;el._c=cls;
    var top=el.children[0],bot=el.children[1];
    function instant(){top.firstChild.textContent=v;bot.firstChild.textContent=v;el.className="f"+(cls?" "+cls:"");el._shown=v;}
    if(!dur||reduce){instant();return;}
    function run(){
      el._pend=null;
      var ft=half("top fl-t",el._shown),fb=half("bot fl-b",v),hd=Math.round(dur/2),done=false;
      ft.style.animationDuration=fb.style.animationDuration=hd+"ms";fb.style.animationDelay=hd+"ms";
      top.firstChild.textContent=v;el.appendChild(ft);el.appendChild(fb);
      var t1=setTimeout(function(){el.className="f"+(cls?" "+cls:"");},hd),t2;
      el._fin=function(){if(done)return;done=true;clearTimeout(t1);clearTimeout(t2);instant();
        if(ft.parentNode)el.removeChild(ft);if(fb.parentNode)el.removeChild(fb);el._fin=null;};
      t2=setTimeout(el._fin,dur+30);
    }
    if(delay)el._pend=setTimeout(run,delay);else run();
  }
  function row(host,n){var a=[];for(var i=0;i<n;i++){var t=tile();host.appendChild(t);a.push(t);}return a;}
  function text(tiles,str,cls,dur,stagger){
    for(var i=0;i<tiles.length;i++){var ch=str.charAt(i)||"";if(ch===" ")ch="";
      setTile(tiles[i],ch,ch?cls:"",dur,stagger?i*stagger:Math.random()*90);}
  }
  function center(str,len){var p=Math.max(0,Math.floor((len-str.length)/2));return new Array(p+1).join(" ")+str;}

  /* ----- build board ----- */
  var nameT=row(document.getElementById("name"),13), statusT=row(document.getElementById("status"),SLEN);
  var monthsEl=document.getElementById("months"), mons=[];
  for(var j=0;j<3;j++){
    var m=document.createElement("div");m.className="mon";
    var mr=document.createElement("div");mr.className="mrow";
    var L=row(mr,9);var gap=document.createElement("span");mr.appendChild(gap);var Y=row(mr,4);
    var wd=document.createElement("div");wd.className="wd";wd.innerHTML="<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span class='su'>S</span>";
    var dg=document.createElement("div");dg.className="days";var D=row(dg,42);
    m.appendChild(mr);m.appendChild(wd);m.appendChild(dg);monthsEl.appendChild(m);mons.push({L:L,Y:Y,D:D});
  }
  var now=new Date(), today=new Date(now.getFullYear(),now.getMonth(),now.getDate());

  function month(slot,idx,dur,withFree){
    var y=Math.floor(idx/12),mo=idx%12,first=new Date(y,mo,1),off=(first.getDay()+6)%7,S=mons[slot];
    text(S.L,MONTHS[mo],"",dur);text(S.Y,String(y),"",dur);
    for(var i=0;i<42;i++){
      var d=add(first,i-off),v="",cls="";
      if(d.getMonth()===mo){var I=info(d);v=String(d.getDate());
        if(I.red)cls="red";
        if(+d===+today)cls+=(cls?" ":"")+"today";
        if(withFree&&d>=FROM&&d<=TO&&!I.off)cls="free";}
      setTile(S.D[i],v,cls,dur,withFree&&dur?Math.max(0,Math.round((d-FROM)/DAY))*6:Math.random()*80);
    }
  }
  function board(base,dur,withFree){for(var s=0;s<3;s++)month(s,base+s,dur,withFree);}
  function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}

  function clack(n){
    if(!soundOn)return;
    try{
      actx=actx||new (window.AudioContext||window.webkitAudioContext)();
      for(var i=0;i<n;i++){
        var len=Math.floor(actx.sampleRate*.018),buf=actx.createBuffer(1,len,actx.sampleRate),ch=buf.getChannelData(0);
        for(var k=0;k<len;k++)ch[k]=(Math.random()*2-1)*Math.pow(1-k/len,3);
        var src=actx.createBufferSource(),g=actx.createGain(),f=actx.createBiquadFilter();
        f.type="bandpass";f.frequency.value=1800+Math.random()*1400;g.gain.value=.12;
        src.buffer=buf;src.connect(f);f.connect(g);g.connect(actx.destination);src.start(actx.currentTime+i*.028+Math.random()*.01);
      }
    }catch(e){}
  }

  function startIdx(){var s=today.getFullYear()*12+today.getMonth();return s>=TARGET?TARGET:Math.max(s,TARGET-12);}
  function todayLine(){return center("TODAY "+today.getDate()+" "+MONTHS[today.getMonth()].slice(0,3)+" "+today.getFullYear(),SLEN);}

  async function play(first){
    if(busy)return;busy=true;btn.disabled=true;
    var base=startIdx(),n=TARGET-base;
    if(reduce||n<=0){text(nameT,NAME,"",0);board(TARGET,0,true);text(statusT,center(FINAL,SLEN),"free",0);busy=false;btn.disabled=false;return;}
    board(base,first?0:200,false);
    if(first)text(nameT,NAME,"",260,28);
    await sleep(first?550:350);
    for(var s=1;s<=n;s++){
      var dur=s===1?230:(s===n?300:(s===n-1?210:140));
      board(base+s,dur,false);clack(5);
      await sleep(Math.round(dur*.7));
    }
    await sleep(320);
    board(TARGET,230,true);clack(8);
    await sleep(900);busy=false;btn.disabled=false;
  }

  var n=0;for(var d=new Date(FROM);d<=TO;d=add(d,1)){if(!info(d).off)n++;}

  var rtTo=row(document.getElementById("rt-code"),3);
  text(row(document.getElementById("rt-from"),3),"LIU","",0);text(rtTo,"YOU","free",0);
  document.getElementById("rt-days").textContent=n;
  document.getElementById("issue").addEventListener("submit",function(e){
    e.preventDefault();
    var v=document.getElementById("co").value.replace(/\s+/g," ").trim();if(!v)return;
    var code=v.toUpperCase().replace(/[^A-ZÅÄÖ0-9]/g,"").slice(0,3);if(!code)code="YOU";while(code.length<3)code+=" ";
    text(rtTo,"   ","",0);text(rtTo,code,"free",340,90);clack(6);
    document.getElementById("rt-cap").textContent=v+", summer 2027";
    document.getElementById("rt-title").textContent="Emil Lögdberg to "+v;
  });
  btn.addEventListener("click",function(){play(false);});
  sbtn.addEventListener("click",function(){soundOn=!soundOn;sbtn.textContent=soundOn?"Sound on":"Sound off";sbtn.setAttribute("aria-pressed",soundOn);if(soundOn)clack(3);});
  document.getElementById("copy").addEventListener("click",function(){
    var b=this,el=document.getElementById("mail");
    function sel(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);}
    try{navigator.clipboard.writeText(el.textContent).then(function(){b.textContent="Copied";setTimeout(function(){b.textContent="Copy address";},1600);},sel);}catch(e){sel();}
  });
  text(statusT,center(FINAL,SLEN),"free",0);
  play(true);
})();
(function(){
  var cv=document.getElementById("globe");if(!cv||!cv.getContext)return;
  var ctx=cv.getContext("2d"),RAD=Math.PI/180;
  var COUNTRIES=[["Sweden", 62.4, 16.1], ["Finland", 64.3, 26.1], ["Germany", 51.1, 10.3], ["Netherlands", 52.3, 5.5], ["France", 46.5, 2.5], ["Monaco", 43.7, 7.4], ["Spain", 40.3, -3.6], ["Portugal", 39.6, -8.1], ["Italy", 42.8, 12.5], ["Austria", 47.6, 14.1], ["Czechia", 49.8, 15.3], ["Hungary", 47.2, 19.3], ["Croatia", 45.3, 16], ["Albania", 41.1, 20], ["Greece", 39.3, 22], ["Thailand", 15, 101], ["USA", 39, -98]];
  var PLACES=[
    {n:"Stockholm",note:"Home",lat:59.33,lon:18.07},
    {n:"Cinque Terre",note:"Backpacking trip",lat:44.13,lon:9.71},
    {n:"Porto",note:"Exchange, 2022",lat:41.15,lon:-8.61},
    {n:"Croatia",note:"Vacation spot",lat:43.51,lon:16.44},
    {n:"Prague",note:"Best in winter",lat:50.08,lon:14.44}
  ];
  var LAND="000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000008000800000000000000000000000000,000000000000820820820000000000000020000000000,000000000004200842108000080000000000000000000,000000000000808888888000000000000000000000000,000000000888800088880000000000800088800088000,000000020820900124920000000004000924924000000,800800004820920024920000000004024924924924000,004924920820820024900000124800024924924924924,904924924924824024800000124824924924924924924,a0aaaaaaaaaa8a80a800a000a8a0aaaaaaaaaaaaaaaaa,00aaaaaaaaa8008028000002a2aaaaaaaaaaaaaaaaaaa,00aaaaaaaaa00a0028000002a2aaaaaaaaaaaaaaaaaa8,002802aaaaa00a2000000002a2aaaaaaaaaaaaaa82200,000000aaaaa80aa00000008022aaaaaaaaaaaaaa00200,0000002aaaaa8aa80000008082aaaaaaaaaaaaa800a00,0000002aaaaa8aaa000002a2aaaaaaaaaaaaaaaa80000,0000000aaaaaaaaa000000aaaaaaaaaaaaaaaaaa80000,0000000aaaaaaa020000002aaaaaaaaaaaaaaaaa80000,0000000fffffffc10000007ffffbffffffffffff40000,00000007ffffffa00000003fff97cffffffffffe40000,0000000ffffffe00000003f09f01cffffffffff060000,0000000ffffffc00000003e06f7fe3ffffffffe000000,00000007fffff800000003c004ffe7fffffff84080000,00000007fffff000000003c104fff7ffffffff2180000,00000003fffff000000001ff010ffffffffffc2700000,00000000ffffe000000003ff000ffffffffffe1000000,00000000bfffc000000003ffe7dffffffffffe0000000,000000007fe04000000007ffffffeffffffffe0000000,000000005fc0400000000fffffefe5fffffffe0000000,000000002fc0100000001ffffff7f20ffffffc0000000,0000000017c0400000003ffffff3ff07fffff80000000,0000000003c6180000003ffffffbff01fc7f400000000,0000000003c6030000003ffffff9fe01f87e400000000,0000000000fc000000003ffffffcfc01f03f010000000,00000000000f800000003ffffffef000e01f800000000,000000000001800000003fffffff8000e00f808000000,000000000000870000001fffffff3000c003818000000,0000000000003ff000000ffffffff0006000044000000,0000000000000ff8000007ffffffe0002008004000000,0000000000000fff00000347ffffe00000240c0000000,0000000000000fff80000001ffffc0000014180000000,0000000000001fffc0000001ffff8000000c7c2000000,0000000000003fffe0000001fffe000000047b0c00000,0000000000003ffffe000000fffe000000073b1780000,0000000000003fffff000000fffc000000020201e2000,0000000000003fffff8000007ffc00000000e000f0000,0000000000001fffff8000007ffc00000000004048000,0000000000000fffff0000007ffe00000000000000000,0000000000000ffffe0000007ffe00000000000e40000,00000000000007fffe0000007ffe30000000007c60000,00000000000003fffe000000fffc6000000000ff60000,00000000000001fffe0000007ff06000000001fff0000,00000000000001fffc0000007ff0e000000007fff8000,00000000000001fff80000003ff0c00000001ffffc000,00000000000001ffe00000003fe0400000001ffffe000,00000000000001ffc00000003fe0000000001ffffe000,00000000000001ffc00000001fc0000000000ffffe000,00000000000001ff800000001fc0000000000ffffe000,00000000000001ff000000000f00000000000f83fc000,00000000000003fc000000000000000000000400fc000,00000000000003fc000000000000000000000000f8000,00000000000003e000000000000000000000000000003,00000000000003e000000000000000000000000008002,00000000000007c000000000000000000000000010008,00000000000007c000000000000000000000000000030,000000000000078000000000000000000000000000000,000000000000028000000000000000000000000000000,000000000000020000000000000000000000000000000,000000000000020000000000000000000000000000000,000000000000008000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000004000000000000004000004904920000,000000000000004000000000000124900924924924000,000000000000004000000004924924904924924924920,000000000100004000000924924924924924924924920,000000888088888000000888888888888888888888880,000088888888800000088888888888888888888888800,002108421084200040108421084210842108421084200,000020820820820000020820820820820820820820800,000080808080808080808080808080808080808080800,800002004008010020040080100200400801002004008,800010000200004000080001000020000400008000100".split(","),VIS="000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000800000000000000000000000000000000000000000,004920000000000000000000000000000000000000000,004920000000000000000000120000000000000000000,00aaa0000000000000000000288000000000000000000,00aaa0000000000000000000a28000000000000000000,00aaa0000000000000000000228000000000000000000,002802000000000000000000a00000000000000000000,000000000000000000000000200000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000002800000000000000000000,000000000000000000000002800000000000000000000,00000000000000000000002aa00000000000000000000,0000000fffff00800000007df80000000000000000000,00000007ffff81800000003fc00000000000000000000,0000000fffff9e00000003f0800000000000000000000,0000000ffffffc00000003e06f0000000000000000000,00000007fffff800000003c0040000000000000000000,00000007fffff000000003c0040000000000000000000,00000003fffff00000000000010000000000000000000,00000000ffffe00000000000000000000000000000000,0000000003ffc00000000000000000000000000000000,0000000000e0400000000000000000000000000000000,000000000040400000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000018000000000,00000000000000000000000000000000000e000000000,00000000000000000000000000000000000e000000000,00000000000000000000000000000000000c000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000008000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000,000000000000000000000000000000000000000000000".split(","),EXTRA=[[45.3, 16], [49.8, 15.3], [52.3, 5.5], [41.1, 20]],pts=[],red=[];
  function vec(lat,lon){var p=lat*RAD,l=lon*RAD;return [Math.cos(p)*Math.sin(l),Math.sin(p),Math.cos(p)*Math.cos(l)];}
  function bit(hex,c){return (parseInt(hex.charAt(c>>2),16)>>(3-(c&3)))&1;}
  LAND.forEach(function(hex,r){for(var c=0;c<180;c++){if(!bit(hex,c))continue;var v=vec(87-2*r,-180+2*c);(bit(VIS[r],c)?red:pts).push(v);}});
  EXTRA.forEach(function(e){red.push(vec(e[0],e[1]));});red.push(vec(43.73,7.42));
  PLACES.forEach(function(p){p.v=vec(p.lat,p.lon);});
  var lon0=10,lat0=44,selP=-1,dirty=true,anim=null,col={},frame=0;
  function colors(){var cs=getComputedStyle(document.documentElement),n={fg:cs.getPropertyValue("--fg").trim(),rule:cs.getPropertyValue("--muted").trim(),
    red:cs.getPropertyValue("--red").trim(),bg:cs.getPropertyValue("--bg").trim()};
    if(n.fg!==col.fg||n.bg!==col.bg){col=n;dirty=true;}}
  function proj(v){var l=lon0*RAD,p=lat0*RAD,x1=v[0]*Math.cos(l)-v[2]*Math.sin(l),z1=v[0]*Math.sin(l)+v[2]*Math.cos(l);
    return [x1,v[1]*Math.cos(p)-z1*Math.sin(p),v[1]*Math.sin(p)+z1*Math.cos(p)];}
  function dots(list,c,R,dpr,base,grow,amin){
    for(var i=0;i<list.length;i++){var q=proj(list[i]);if(q[2]<=0)continue;
      ctx.globalAlpha=amin+(1-amin)*q[2];ctx.beginPath();ctx.arc(c+q[0]*R,c-q[1]*R,dpr*(base+grow*q[2]),0,6.2832);ctx.fill();}
  }
  function draw(){
    var dpr=window.devicePixelRatio||1,w=Math.round(cv.clientWidth*dpr);if(!w)return;
    if(cv.width!==w||cv.height!==w){cv.width=w;cv.height=w;}
    var c=w/2,R=c-6*dpr;ctx.clearRect(0,0,w,w);
    ctx.globalAlpha=1;ctx.strokeStyle=col.rule;ctx.lineWidth=dpr;ctx.setLineDash([dpr,3*dpr]);
    ctx.beginPath();ctx.arc(c,c,R,0,6.2832);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle=col.fg;dots(pts,c,R,dpr,.5,.6,.2);
    ctx.fillStyle=col.red;dots(red,c,R,dpr,.8,1.1,.45);
    ctx.globalAlpha=1;
    if(selP>=0){var q=proj(PLACES[selP].v);if(q[2]>.05){var x=c+q[0]*R,y=c-q[1]*R;
      ctx.fillStyle=col.bg;ctx.beginPath();ctx.arc(x,y,6*dpr,0,6.2832);ctx.fill();
      ctx.fillStyle=col.fg;ctx.beginPath();ctx.arc(x,y,3*dpr,0,6.2832);ctx.fill();
      ctx.strokeStyle=col.fg;ctx.lineWidth=dpr;ctx.beginPath();ctx.arc(x,y,8*dpr,0,6.2832);ctx.stroke();}}
  }
  function loop(t){
    if(++frame%30===0)colors();
    if(anim){var k=Math.min(1,(t-anim.t0)/650),e=1-Math.pow(1-k,3);lon0=anim.a+(anim.b-anim.a)*e;lat0=anim.c+(anim.d-anim.c)*e;dirty=true;if(k>=1)anim=null;}
    if(dirty){dirty=false;draw();}
    requestAnimationFrame(loop);
  }
  function turn(lat,lon){var d=((lon-lon0+540)%360)-180,target=Math.max(-70,Math.min(70,lat-6));
    var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduce){lon0+=d;lat0=target;}else anim={t0:performance.now(),a:lon0,b:lon0+d,c:lat0,d:target};dirty=true;}
  var cl=document.getElementById("countries"),pl=document.getElementById("places"),all=[];
  function press(b){all.forEach(function(x){x.setAttribute("aria-pressed",x===b);});}
  COUNTRIES.forEach(function(c){var b=document.createElement("button");b.type="button";b.textContent=c[0];b.setAttribute("aria-pressed","false");
    b.addEventListener("click",function(){selP=-1;press(b);turn(c[1],c[2]);});cl.appendChild(b);all.push(b);});
  document.getElementById("ccount").textContent=COUNTRIES.length;
  PLACES.forEach(function(p,i){var li=document.createElement("li"),b=document.createElement("button");b.type="button";b.setAttribute("aria-pressed","false");
    var a=document.createElement("span");a.className="pn";a.textContent=p.n;var n=document.createElement("span");n.className="note";n.textContent=p.note;
    b.appendChild(a);b.appendChild(n);b.addEventListener("click",function(){selP=i;press(b);turn(p.lat,p.lon);});li.appendChild(b);pl.appendChild(li);all.push(b);});
  var drag=null;
  cv.addEventListener("pointerdown",function(e){drag={x:e.clientX,y:e.clientY};anim=null;try{cv.setPointerCapture(e.pointerId);}catch(x){}});
  cv.addEventListener("pointermove",function(e){if(!drag)return;lon0-=(e.clientX-drag.x)*.45;lat0=Math.max(-80,Math.min(80,lat0+(e.clientY-drag.y)*.45));
    drag={x:e.clientX,y:e.clientY};dirty=true;});
  ["pointerup","pointercancel"].forEach(function(n){cv.addEventListener(n,function(){drag=null;});});
  window.addEventListener("resize",function(){dirty=true;});
  colors();requestAnimationFrame(loop);
})();
