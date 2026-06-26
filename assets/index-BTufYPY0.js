(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="169",jd=0,xc=1,Kd=2,Fu=1,ku=2,Nn=3,On=0,Ot=1,pn=2,kn=0,as=1,Ci=2,_c=3,Sc=4,Zd=5,wi=100,Qd=101,Jd=102,$d=103,ef=104,tf=200,nf=201,sf=202,rf=203,jo=204,Ko=205,af=206,of=207,lf=208,cf=209,hf=210,uf=211,df=212,ff=213,pf=214,Zo=0,Qo=1,Jo=2,hs=3,$o=4,el=5,tl=6,nl=7,Ou=0,mf=1,gf=2,si=0,Bu=1,zu=2,Hu=3,zl=4,vf=5,Gu=6,Vu=7,Wu=300,us=301,ds=302,il=303,sl=304,_a=306,Js=1e3,Ti=1001,rl=1002,Nt=1003,xf=1004,cr=1005,an=1006,Ga=1007,Ai=1008,Bn=1009,Xu=1010,qu=1011,$s=1012,Hl=1013,Pi=1014,Mn=1015,vn=1016,Gl=1017,Vl=1018,fs=1020,Yu=35902,ju=1021,Ku=1022,gn=1023,Zu=1024,Qu=1025,os=1026,ps=1027,Wl=1028,Xl=1029,Ju=1030,ql=1031,Yl=1033,$r=33776,ea=33777,ta=33778,na=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,vl=37812,xl=37813,_l=37814,Sl=37815,yl=37816,Ml=37817,bl=37818,wl=37819,El=37820,Tl=37821,ia=36492,Al=36494,Rl=36495,$u=36283,Cl=36284,Pl=36285,Ll=36286,_f=3200,Sf=3201,ed=0,yf=1,ii="",sn="srgb",oi="srgb-linear",jl="display-p3",Sa="display-p3-linear",la="linear",rt="srgb",ca="rec709",ha="p3",Oi=7680,yc=519,Mf=512,bf=513,wf=514,td=515,Ef=516,Tf=517,Af=518,Rf=519,Mc=35044,er=35048,bc="300 es",Fn=2e3,ua=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,Dl=180/Math.PI;function nr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function Cf(i,e){return(i%e+e)%e}function Wa(i,e,t){return(1-t)*i+t*e}function Es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,s,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],_=s[0],p=s[3],f=s[6],b=s[1],y=s[4],E=s[7],U=s[2],R=s[5],A=s[8];return r[0]=a*_+o*b+l*U,r[3]=a*p+o*y+l*R,r[6]=a*f+o*E+l*A,r[1]=c*_+h*b+u*U,r[4]=c*p+h*y+u*R,r[7]=c*f+h*E+u*A,r[2]=d*_+m*b+v*U,r[5]=d*p+m*y+v*R,r[8]=d*f+m*E+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,v=t*u+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Oe;function nd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pf(){const i=da("canvas");return i.style.display="block",i}const wc={};function sa(i){i in wc||(wc[i]=!0,console.warn(i))}function Lf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Df(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function If(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ec=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tc=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[oi]:{transfer:la,primaries:ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[sn]:{transfer:rt,primaries:ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sa]:{transfer:la,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Tc),fromReference:i=>i.applyMatrix3(Ec)},[jl]:{transfer:rt,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Tc),fromReference:i=>i.applyMatrix3(Ec).convertLinearToSRGB()}},Uf=new Set([oi,Sa]),Qe={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ts[e].toReference,s=Ts[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ts[i].primaries},getTransfer:function(i){return i===ii?la:Ts[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ts[e].luminanceCoefficients)}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Nf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=da("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ff=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ya(s[a].image)):r.push(Ya(s[a]))}else r=Ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kf=0;class At extends _s{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Ti,s=Ti,r=an,a=Ai,o=gn,l=Bn,c=At.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=nr(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Wu;At.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(m+1)/2,U=(f+1)/2,R=(h+d)/4,A=(u+_)/4,D=(v+p)/4;return y>E&&y>U?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=A/n):E>U?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=D/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=A/r,s=D/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-v)*(p-v)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Of extends _s{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sd extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bf extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ct{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==v){let p=1-o;const f=l*d+c*m+h*v+u*_,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const U=Math.sqrt(y),R=Math.atan2(U,f*b);p=Math.sin(p*R)/U,o=Math.sin(o*R)/U}const E=o*b;if(l=l*p+d*E,c=c*p+m*E,h=h*p+v*E,u=u*p+_*E,p===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*m-c*d,e[t+1]=l*v+h*d+c*u-o*m,e[t+2]=c*v+h*m+o*d-l*u,e[t+3]=h*v-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"YZX":this._x=d*h*u+c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u-d*m*v;break;case"XZY":this._x=d*h*u-c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new w,Ac=new ct;class Ii{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),ur.subVectors(this.max,As),zi.subVectors(e.a,As),Hi.subVectors(e.b,As),Gi.subVectors(e.c,As),Vn.subVectors(Hi,zi),Wn.subVectors(Gi,Hi),hi.subVectors(zi,Gi);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-hi.z,hi.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,hi.z,0,-hi.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-hi.y,hi.x,0];return!Ka(t,zi,Hi,Gi,ur)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,zi,Hi,Gi,ur))?!1:(dr.crossVectors(Vn,Wn),t=[dr.x,dr.y,dr.z],Ka(t,zi,Hi,Gi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new w,new w,new w,new w,new w,new w,new w,new w],cn=new w,hr=new Ii,zi=new w,Hi=new w,Gi=new w,Vn=new w,Wn=new w,hi=new w,As=new w,ur=new w,dr=new w,ui=new w;function Ka(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zf=new Ii,Rs=new w,Za=new w;class Ss{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Za)),this.expandByPoint(Rs.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new w,Qa=new w,fr=new w,Xn=new w,Ja=new w,pr=new w,$a=new w;class rd{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qa.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Qa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fr),o=Xn.dot(this.direction),l=-Xn.dot(fr),c=Xn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,v;if(h>0)if(u=a*l-o,d=a*o-l,v=r*h,u>=0)if(d>=-v)if(d<=v){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qa).addScaledVector(fr,d),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){Ja.subVectors(t,e),pr.subVectors(n,e),$a.crossVectors(Ja,pr);let a=this.direction.dot($a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(pr.crossVectors(Xn,pr));if(l<0)return null;const c=o*this.direction.dot(Ja.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot($a);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,s,r,a,o,l,c,h,u,d,m,v,_,p){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,m,v,_,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,m,v,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=v,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*u,v=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,v=c*h,_=c*u;t[0]=d+_*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,v=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,v=o*h,_=o*u;t[0]=l*h,t[4]=v*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=v*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+v,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,Gf)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),qn.crossVectors(n,jt),qn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),qn.crossVectors(n,jt)),qn.normalize(),mr.crossVectors(jt,qn),s[0]=qn.x,s[4]=mr.x,s[8]=jt.x,s[1]=qn.y,s[5]=mr.y,s[9]=jt.y,s[2]=qn.z,s[6]=mr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],_=n[6],p=n[10],f=n[14],b=n[3],y=n[7],E=n[11],U=n[15],R=s[0],A=s[4],D=s[8],X=s[12],g=s[1],M=s[5],O=s[9],B=s[13],W=s[2],Z=s[6],H=s[10],Q=s[14],V=s[3],ce=s[7],he=s[11],_e=s[15];return r[0]=a*R+o*g+l*W+c*V,r[4]=a*A+o*M+l*Z+c*ce,r[8]=a*D+o*O+l*H+c*he,r[12]=a*X+o*B+l*Q+c*_e,r[1]=h*R+u*g+d*W+m*V,r[5]=h*A+u*M+d*Z+m*ce,r[9]=h*D+u*O+d*H+m*he,r[13]=h*X+u*B+d*Q+m*_e,r[2]=v*R+_*g+p*W+f*V,r[6]=v*A+_*M+p*Z+f*ce,r[10]=v*D+_*O+p*H+f*he,r[14]=v*X+_*B+p*Q+f*_e,r[3]=b*R+y*g+E*W+U*V,r[7]=b*A+y*M+E*Z+U*ce,r[11]=b*D+y*O+E*H+U*he,r[15]=b*X+y*B+E*Q+U*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],f=e[15];return v*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+_*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],f=e[15],b=u*p*c-_*d*c+_*l*m-o*p*m-u*l*f+o*d*f,y=v*d*c-h*p*c-v*l*m+a*p*m+h*l*f-a*d*f,E=h*_*c-v*u*c+v*o*m-a*_*m-h*o*f+a*u*f,U=v*u*l-h*_*l-v*o*d+a*_*d+h*o*p-a*u*p,R=t*b+n*y+s*E+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(_*d*r-u*p*r-_*s*m+n*p*m+u*s*f-n*d*f)*A,e[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*f+n*l*f)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*A,e[4]=y*A,e[5]=(h*p*r-v*d*r+v*s*m-t*p*m-h*s*f+t*d*f)*A,e[6]=(v*l*r-a*p*r-v*s*c+t*p*c+a*s*f-t*l*f)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*m+t*l*m)*A,e[8]=E*A,e[9]=(v*u*r-h*_*r-v*n*m+t*_*m+h*n*f-t*u*f)*A,e[10]=(a*_*r-v*o*r+v*n*c-t*_*c-a*n*f+t*o*f)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*A,e[12]=U*A,e[13]=(h*_*s-v*u*s+v*n*d-t*_*d-h*n*p+t*u*p)*A,e[14]=(v*o*s-a*_*s-v*n*l+t*_*l+a*n*p-t*o*p)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,v=r*u,_=a*h,p=a*u,f=o*u,b=l*c,y=l*h,E=l*u,U=n.x,R=n.y,A=n.z;return s[0]=(1-(_+f))*U,s[1]=(m+E)*U,s[2]=(v-y)*U,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(d+f))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(v+y)*A,s[9]=(p-b)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Vi.set(s[0],s[1],s[2]).length();const a=Vi.set(s[4],s[5],s[6]).length(),o=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,h=1/a,u=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Fn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let m,v;if(o===Fn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ua)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,m=(n+s)*h;let v,_;if(o===Fn)v=(a+r)*u,_=-2*u;else if(o===ua)v=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new w,hn=new nt,Hf=new w(0,0,0),Gf=new w(1,1,1),qn=new w,mr=new w,jt=new w,Rc=new nt,Cc=new ct;class on{constructor(e=0,t=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vf=0;const Pc=new w,Wi=new ct,Rn=new nt,gr=new w,Cs=new w,Wf=new w,Xf=new ct,Lc=new w(1,0,0),Dc=new w(0,1,0),Ic=new w(0,0,1),Uc={type:"added"},qf={type:"removed"},Xi={type:"childadded",child:null},eo={type:"childremoved",child:null};class Rt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new w,t=new on,n=new ct,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Oe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Cs,gr,this.up):Rn.lookAt(gr,Cs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),eo.child=e,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new w(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new w,Cn=new w,to=new w,Pn=new w,qi=new w,Yi=new w,Nc=new w,no=new w,io=new w,so=new w,ro=new ut,ao=new ut,oo=new ut;class mn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Cn.subVectors(n,t),to.subVectors(e,t);const a=un.dot(un),o=un.dot(Cn),l=un.dot(to),c=Cn.dot(Cn),h=Cn.dot(to),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ro.setScalar(0),ao.setScalar(0),oo.setScalar(0),ro.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,n),oo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ro,r.x),a.addScaledVector(ao,r.y),a.addScaledVector(oo,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Cn.subVectors(e,t),un.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),un.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;qi.subVectors(s,n),Yi.subVectors(r,n),no.subVectors(e,n);const l=qi.dot(no),c=Yi.dot(no);if(l<=0&&c<=0)return t.copy(n);io.subVectors(e,s);const h=qi.dot(io),u=Yi.dot(io);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(qi,a);so.subVectors(e,r);const m=qi.dot(so),v=Yi.dot(so);if(v>=0&&m<=v)return t.copy(r);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Yi,o);const p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return Nc.subVectors(r,s),o=(u-h)/(u-h+(m-v)),t.copy(s).addScaledVector(Nc,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Cf(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lo(a,r,e+1/3),this.g=lo(a,r,e),this.b=lo(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Wt(Dt.r*255,0,255))*65536+Math.round(Wt(Dt.g*255,0,255))*256+Math.round(Wt(Dt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=sn){Qe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(vr);const n=Wa(Yn.h,vr.h,t),s=Wa(Yn.s,vr.s,t),r=Wa(Yn.l,vr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Re;Re.NAMES=od;let Yf=0;class ys extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=as,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Ko,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ms extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new w,xr=new we;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class ld extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cd extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jf=0;const tn=new nt,co=new Rt,ji=new w,Kt=new Ii,Ps=new Ii,bt=new w;class Ft extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?cd:ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Kt.min,Ps.min),Kt.expandByPoint(bt),bt.addVectors(Kt.max,Ps.max),Kt.expandByPoint(bt)):(Kt.expandByPoint(Ps.min),Kt.expandByPoint(Ps.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),bt.add(ji)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new w,l[D]=new w;const c=new w,h=new w,u=new w,d=new we,m=new we,v=new we,_=new w,p=new w;function f(D,X,g){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,X),u.fromBufferAttribute(n,g),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,X),v.fromBufferAttribute(r,g),h.sub(c),u.sub(c),m.sub(d),v.sub(d);const M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(M),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(M),o[D].add(_),o[X].add(_),o[g].add(_),l[D].add(p),l[X].add(p),l[g].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,X=b.length;D<X;++D){const g=b[D],M=g.start,O=g.count;for(let B=M,W=M+O;B<W;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new w,E=new w,U=new w,R=new w;function A(D){U.fromBufferAttribute(s,D),R.copy(U);const X=o[D];y.copy(X),y.sub(U.multiplyScalar(U.dot(X))).normalize(),E.crossVectors(R,X);const M=E.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,M)}for(let D=0,X=b.length;D<X;++D){const g=b[D],M=g.start,O=g.count;for(let B=M,W=M+O;B<W;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)d[v++]=c[m++]}return new Bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new nt,di=new rd,_r=new Ss,kc=new w,Sr=new w,yr=new w,Mr=new w,ho=new w,br=new w,Oc=new w,wr=new w;class Ue extends Rt{constructor(e=new Ft,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ho.fromBufferAttribute(u,e),a?br.addScaledVector(ho,h):br.addScaledVector(ho.sub(t),h))}t.add(br)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(_r.containsPoint(di.origin)===!1&&(di.intersectSphere(_r,kc)===null||di.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Fc.copy(r).invert(),di.copy(e.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,U=y;E<U;E+=3){const R=o.getX(E),A=o.getX(E+1),D=o.getX(E+2);s=Er(this,f,e,n,c,h,u,R,A,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const b=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);s=Er(this,a,e,n,c,h,u,b,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,U=y;E<U;E+=3){const R=E,A=E+1,D=E+2;s=Er(this,f,e,n,c,h,u,R,A,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const b=p,y=p+1,E=p+2;s=Er(this,a,e,n,c,h,u,b,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Kf(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===On,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wr);return c<t.near||c>t.far?null:{distance:c,point:wr.clone(),object:i}}function Er(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,yr),i.getVertexPosition(c,Mr);const h=Kf(i,e,t,n,Sr,yr,Mr,Oc);if(h){const u=new w;mn.getBarycoord(Oc,Sr,yr,Mr,u),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,u,new we)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,l,c,u,new we)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new w,materialIndex:0};mn.getNormal(Sr,yr,Mr,d.normal),h.face=d,h.barycoord=u}return h}class Tt extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function v(_,p,f,b,y,E,U,R,A,D,X){const g=E/A,M=U/D,O=E/2,B=U/2,W=R/2,Z=A+1,H=D+1;let Q=0,V=0;const ce=new w;for(let he=0;he<H;he++){const _e=he*M-B;for(let Ke=0;Ke<Z;Ke++){const et=Ke*g-O;ce[_]=et*b,ce[p]=_e*y,ce[f]=W,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[p]=0,ce[f]=R>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Ke/A),u.push(1-he/D),Q+=1}}for(let he=0;he<D;he++)for(let _e=0;_e<A;_e++){const Ke=d+_e+Z*he,et=d+_e+Z*(he+1),q=d+(_e+1)+Z*(he+1),ee=d+(_e+1)+Z*he;l.push(Ke,et,ee),l.push(et,q,ee),V+=6}o.addGroup(m,V,X),m+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=gs(i[t]);for(const s in n)e[s]=n[s]}return e}function Zf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ri={clone:gs,merge:kt};var Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ud extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new w,Bc=new we,zc=new we;class rn extends ud{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,zc),t.subVectors(zc,Bc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Va*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class $f extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const r=new rn(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const a=new rn(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const o=new rn(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const l=new rn(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new rn(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class dd extends At{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ep extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tt(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:kn});r.uniforms.tEquirect.value=t;const a=new Ue(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=an),new $f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const uo=new w,tp=new w,np=new Oe;class yi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=uo.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||np.getNormalMatrix(e),s=this.coplanarPoint(uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ss,Tr=new w;class Kl{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],v=s[9],_=s[10],p=s[11],f=s[12],b=s[13],y=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,p-m,E-f).normalize(),n[1].setComponents(l+r,d+c,p+m,E+f).normalize(),n[2].setComponents(l+a,d+h,p+v,E+b).normalize(),n[3].setComponents(l-a,d-h,p-v,E-b).normalize(),n[4].setComponents(l-o,d-u,p-_,E-y).normalize(),t===Fn)n[5].setComponents(l+o,d+u,p+_,E+y).normalize();else if(t===ua)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Tr.x=s.normal.x>0?e.max.x:e.min.x,Tr.y=s.normal.y>0?e.max.y:e.min.y,Tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ip(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<u.length;m++){const v=u[d],_=u[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,v=u.length;m<v;m++){const _=u[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class zn extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,m=[],v=[],_=[],p=[];for(let f=0;f<h;f++){const b=f*d-a;for(let y=0;y<c;y++){const E=y*u-r;v.push(E,-b,0),_.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const y=b+c*f,E=b+c*(f+1),U=b+1+c*(f+1),R=b+1+c*f;m.push(y,E,R),m.push(E,U,R)}this.setIndex(m),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.widthSegments,e.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ug=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:Mp,color_fragment:bp,color_pars_fragment:wp,color_pars_vertex:Ep,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Ip,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Op,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Zp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:jp,lights_pars_begin:Kp,lights_toon_fragment:Qp,lights_toon_pars_fragment:Jp,lights_phong_fragment:$p,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:vm,morphnormal_vertex:xm,morphtarget_pars_vertex:_m,morphtarget_vertex:Sm,normal_fragment_begin:ym,normal_fragment_maps:Mm,normal_pars_fragment:bm,normal_pars_vertex:wm,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Dm,premultiplied_alpha_fragment:Im,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:jm,tonemapping_fragment:Km,tonemapping_pars_fragment:Zm,transmission_fragment:Qm,transmission_pars_fragment:Jm,uv_pars_fragment:$m,uv_pars_vertex:eg,uv_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:vg,meshbasic_frag:xg,meshlambert_vert:_g,meshlambert_frag:Sg,meshmatcap_vert:yg,meshmatcap_frag:Mg,meshnormal_vert:bg,meshnormal_frag:wg,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ig,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Fg},ie={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},yn={basic:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:kt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:kt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:kt([ie.points,ie.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:kt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:kt([ie.common,ie.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:kt([ie.sprite,ie.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:kt([ie.common,ie.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:kt([ie.lights,ie.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};yn.physical={uniforms:kt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ar={r:0,b:0,g:0},pi=new on,kg=new nt;function Og(i,e,t,n,s,r,a){const o=new Re(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const E=v(b);E===null?f(o,l):E&&E.isColor&&(f(E,1),y=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,y){const E=v(y);E&&(E.isCubeTexture||E.mapping===_a)?(h===void 0&&(h=new Ue(new Tt(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:gs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(pi)),h.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,(u!==E||d!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ue(new zn(2,2),new _t({name:"BackgroundMaterial",uniforms:gs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,y){b.getRGB(Ar,hd(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:_,addToRenderList:p}}function Bg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(g,M,O,B,W){let Z=!1;const H=u(B,O,M);r!==H&&(r=H,c(r.object)),Z=m(g,B,O,W),Z&&v(g,B,O,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(g,M,O,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,M,O){const B=O.wireframe===!0;let W=n[g.id];W===void 0&&(W={},n[g.id]=W);let Z=W[M.id];Z===void 0&&(Z={},W[M.id]=Z);let H=Z[B];return H===void 0&&(H=d(l()),Z[B]=H),H}function d(g){const M=[],O=[],B=[];for(let W=0;W<t;W++)M[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:O,attributeDivisors:B,object:g,attributes:{},index:null}}function m(g,M,O,B){const W=r.attributes,Z=M.attributes;let H=0;const Q=O.getAttributes();for(const V in Q)if(Q[V].location>=0){const he=W[V];let _e=Z[V];if(_e===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(_e=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(_e=g.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function v(g,M,O,B){const W={},Z=M.attributes;let H=0;const Q=O.getAttributes();for(const V in Q)if(Q[V].location>=0){let he=Z[V];he===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(he=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(he=g.instanceColor));const _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),W[V]=_e,H++}r.attributes=W,r.attributesNum=H,r.index=B}function _(){const g=r.newAttributes;for(let M=0,O=g.length;M<O;M++)g[M]=0}function p(g){f(g,0)}function f(g,M){const O=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;O[g]=1,B[g]===0&&(i.enableVertexAttribArray(g),B[g]=1),W[g]!==M&&(i.vertexAttribDivisor(g,M),W[g]=M)}function b(){const g=r.newAttributes,M=r.enabledAttributes;for(let O=0,B=M.length;O<B;O++)M[O]!==g[O]&&(i.disableVertexAttribArray(O),M[O]=0)}function y(g,M,O,B,W,Z,H){H===!0?i.vertexAttribIPointer(g,M,O,W,Z):i.vertexAttribPointer(g,M,O,B,W,Z)}function E(g,M,O,B){_();const W=B.attributes,Z=O.getAttributes(),H=M.defaultAttributeValues;for(const Q in Z){const V=Z[Q];if(V.location>=0){let ce=W[Q];if(ce===void 0&&(Q==="instanceMatrix"&&g.instanceMatrix&&(ce=g.instanceMatrix),Q==="instanceColor"&&g.instanceColor&&(ce=g.instanceColor)),ce!==void 0){const he=ce.normalized,_e=ce.itemSize,Ke=e.get(ce);if(Ke===void 0)continue;const et=Ke.buffer,q=Ke.type,ee=Ke.bytesPerElement,ge=q===i.INT||q===i.UNSIGNED_INT||ce.gpuType===Hl;if(ce.isInterleavedBufferAttribute){const ue=ce.data,Ne=ue.stride,Te=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)f(V.location+Ve,ue.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)p(V.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Ve=0;Ve<V.locationSize;Ve++)y(V.location+Ve,_e/V.locationSize,q,he,Ne*ee,(Te+_e/V.locationSize*Ve)*ee,ge)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<V.locationSize;ue++)f(V.location+ue,ce.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<V.locationSize;ue++)p(V.location+ue);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ue=0;ue<V.locationSize;ue++)y(V.location+ue,_e/V.locationSize,q,he,_e*ee,_e/V.locationSize*ue*ee,ge)}}else if(H!==void 0){const he=H[Q];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(V.location,he);break;case 3:i.vertexAttrib3fv(V.location,he);break;case 4:i.vertexAttrib4fv(V.location,he);break;default:i.vertexAttrib1fv(V.location,he)}}}}b()}function U(){D();for(const g in n){const M=n[g];for(const O in M){const B=M[O];for(const W in B)h(B[W].object),delete B[W];delete M[O]}delete n[g]}}function R(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const O in M){const B=M[O];for(const W in B)h(B[W].object),delete B[W];delete M[O]}delete n[g.id]}function A(g){for(const M in n){const O=n[M];if(O[g.id]===void 0)continue;const B=O[g.id];for(const W in B)h(B[W].object),delete B[W];delete O[g.id]}}function D(){X(),a=!0,r!==s&&(r=s,c(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:X,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function zg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let _=0;_<u;_++)v+=h[_];for(let _=0;_<d.length;_++)t.update(v,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:U,maxSamples:R}}function Gg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new yi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,y=b*4;let E=f.clippingState||null;l.value=E,E=h(v,d,y,m);for(let U=0;U!==y;++U)E[U]=t[U];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,v){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const f=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,E=m;y!==_;++y,E+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Vg(i){let e=new WeakMap;function t(a,o){return o===il?a.mapping=us:o===sl&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===il||o===sl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ep(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Zl extends ud{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Hc=[.125,.215,.35,.446,.526,.582],Ei=20,fo=new Zl,Gc=new Re;let po=null,mo=0,go=0,vo=!1;const Mi=(1+Math.sqrt(5))/2,Qi=1/Mi,Vc=[new w(-Mi,Qi,0),new w(Mi,Qi,0),new w(-Qi,0,Mi),new w(Qi,0,Mi),new w(0,Mi,-Qi),new w(0,Mi,Qi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=vo,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:vn,format:gn,colorSpace:oi,depthBuffer:!1},s=Xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,e,t)}return s}_compileMaterial(e){const t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,s){const o=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=si,h.autoClear=!1;const m=new ms({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),v=new Ue(new Tt,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Gc),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;Rr(s,b*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===us||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vc[(s-r-1)%Vc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ue(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),_=r/v,p=isFinite(r)?1+Math.floor(h*_):Ei;p>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const f=[];let b=0;for(let A=0;A<Ei;++A){const D=A/_,X=Math.exp(-D*D/2);f.push(X),A===0?b+=X:A<p&&(b+=2*X)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const E=this._sizeLods[s],U=3*E*(s>y-ss?s-y+ss:0),R=4*(this._cubeSize-E);Rr(t,U,R,3*E,2*E),l.setRenderTarget(t),l.render(u,fo)}}function Wg(i){const e=[],t=[],n=[];let s=i;const r=i-ss+1+Hc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ss?l=Hc[a-i+ss-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,_=3,p=2,f=1,b=new Float32Array(_*v*m),y=new Float32Array(p*v*m),E=new Float32Array(f*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,D=R>2?0:-1,X=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];b.set(X,_*v*R),y.set(d,p*v*R);const g=[R,R,R,R,R,R];E.set(g,f*v*R)}const U=new Ft;U.setAttribute("position",new Bt(b,_)),U.setAttribute("uv",new Bt(y,p)),U.setAttribute("faceIndex",new Bt(E,f)),e.push(U),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xc(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xg(i,e,t){const n=new Float32Array(Ei),s=new w(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function qc(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Yc(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===il||l===sl,h=l===us||l===ds;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Wc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Wc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const _=m[v];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,v=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let y=0,E=b.length;y<E;y+=3){const U=b[y+0],R=b[y+1],A=b[y+2];d.push(U,R,R,A,A,U)}}else if(v!==void 0){const b=v.array;_=v.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const U=y+0,R=y+1,A=y+2;d.push(U,R,R,A,A,U)}}else return;const p=new(nd(d)?cd:ld)(d,1);p.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Kg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,d*a,v),t.update(m,n,v))}function h(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];t.update(p,n,1)}function u(d,m,v,_){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,_,0,v);let f=0;for(let b=0;b<v;b++)f+=m[b];for(let b=0;b<_.length;b++)t.update(f,n,_[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qg(i,e,t){const n=new WeakMap,s=new ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let g=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var m=g;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let U=o.attributes.position.count*E,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const A=new Float32Array(U*R*4*u),D=new sd(A,U,R,u);D.type=Mn,D.needsUpdate=!0;const X=E*4;for(let M=0;M<u;M++){const O=f[M],B=b[M],W=y[M],Z=U*R*4*M;for(let H=0;H<O.count;H++){const Q=H*X;v===!0&&(s.fromBufferAttribute(O,H),A[Z+Q+0]=s.x,A[Z+Q+1]=s.y,A[Z+Q+2]=s.z,A[Z+Q+3]=0),_===!0&&(s.fromBufferAttribute(B,H),A[Z+Q+4]=s.x,A[Z+Q+5]=s.y,A[Z+Q+6]=s.z,A[Z+Q+7]=0),p===!0&&(s.fromBufferAttribute(W,H),A[Z+Q+8]=s.x,A[Z+Q+9]=s.y,A[Z+Q+10]=s.z,A[Z+Q+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new we(U,R)},n.set(o,d),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class pd extends At{constructor(e,t,n,s,r,a,o,l,c,h=os){if(h!==os&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Pi),n===void 0&&h===ps&&(n=fs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const md=new At,jc=new pd(1,1),gd=new sd,vd=new Bf,xd=new dd,Kc=[],Zc=[],Qc=new Float32Array(16),Jc=new Float32Array(9),$c=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ya(i,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function i0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Mt(t,n)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),Mt(t,n)}}function r0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Mt(t,n)}}function a0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function p0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jc.compareFunction=td,r=jc):r=md,t.setTexture2D(e||r,s)}function m0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vd,s)}function g0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xd,s)}function v0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gd,s)}function x0(i){switch(i){case 5126:return $g;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}function _0(i,e){i.uniform1fv(this.addr,e)}function S0(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function y0(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function M0(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function b0(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w0(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E0(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function T0(i,e){i.uniform1iv(this.addr,e)}function A0(i,e){i.uniform2iv(this.addr,e)}function R0(i,e){i.uniform3iv(this.addr,e)}function C0(i,e){i.uniform4iv(this.addr,e)}function P0(i,e){i.uniform1uiv(this.addr,e)}function L0(i,e){i.uniform2uiv(this.addr,e)}function D0(i,e){i.uniform3uiv(this.addr,e)}function I0(i,e){i.uniform4uiv(this.addr,e)}function U0(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||md,r[a])}function N0(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vd,r[a])}function F0(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xd,r[a])}function k0(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gd,r[a])}function O0(i){switch(i){case 5126:return _0;case 35664:return S0;case 35665:return y0;case 35666:return M0;case 35674:return b0;case 35675:return w0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return k0}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O0(t.type)}}class H0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function eh(i,e){i.seq.push(e),i.map[e.id]=e}function G0(i,e,t){const n=i.name,s=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),a=xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){eh(t,c===void 0?new B0(o,i,e):new z0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new H0(o),eh(t,u)),t=u}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);G0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function th(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const V0=37297;let W0=0;function X0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function q0(i){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i);let n;switch(e===t?n="":e===ha&&t===ca?n="LinearDisplayP3ToLinearSRGB":e===ca&&t===ha&&(n="LinearSRGBToLinearDisplayP3"),i){case oi:case Sa:return[n,"LinearTransferOETF"];case sn:case jl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function nh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+X0(i.getShaderSource(e),a)}else return s}function Y0(i,e){const t=q0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function j0(i,e){let t;switch(e){case Bu:t="Linear";break;case zu:t="Reinhard";break;case Hu:t="Cineon";break;case zl:t="ACESFilmic";break;case Gu:t="AgX";break;case Vu:t="Neutral";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new w;function K0(){Qe.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Q0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zs(i){return i!==""}function ih(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(i){return i.replace($0,tv)}const ev=new Map;function tv(i,e){let t=ke[e];if(t===void 0){const n=ev.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(nv,iv)}function iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function rv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function av(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function ov(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ou:e="ENVMAP_BLENDING_MULTIPLY";break;case mf:e="ENVMAP_BLENDING_MIX";break;case gf:e="ENVMAP_BLENDING_ADD";break}return e}function lv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sv(t),c=rv(t),h=av(t),u=ov(t),d=lv(t),m=Z0(t),v=Q0(r),_=s.createProgram();let p,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zs).join(`
`),f.length>0&&(f+=`
`)):(p=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),f=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?ke.tonemapping_pars_fragment:"",t.toneMapping!==si?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Il(a),a=ih(a,t),a=sh(a,t),o=Il(o),o=ih(o,t),o=sh(o,t),a=rh(a),o=rh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+p+a,E=b+f+o,U=th(s,s.VERTEX_SHADER,y),R=th(s,s.FRAGMENT_SHADER,E);s.attachShader(_,U),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(M){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(U).trim(),W=s.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,R);else{const Q=nh(s,U,"vertex"),V=nh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+O+`
`+Q+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||W==="")&&(H=!1);H&&(M.diagnostics={runnable:Z,programLog:O,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:f}})}s.deleteShader(U),s.deleteShader(R),D=new ra(s,_),X=J0(s,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let X;this.getAttributes=function(){return X===void 0&&A(this),X};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(_,V0)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}let hv=0;class uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dv(e),t.set(e,n)),n}}class dv{constructor(e){this.id=hv++,this.code=e,this.usedTimes=0}}function fv(i,e,t,n,s,r,a){const o=new ad,l=new uv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function f(g,M,O,B,W){const Z=B.fog,H=W.geometry,Q=g.isMeshStandardMaterial?B.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||Q),ce=V&&V.mapping===_a?V.image.height:null,he=_[g.type];g.precision!==null&&(v=s.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const _e=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=_e!==void 0?_e.length:0;let et=0;H.morphAttributes.position!==void 0&&(et=1),H.morphAttributes.normal!==void 0&&(et=2),H.morphAttributes.color!==void 0&&(et=3);let q,ee,ge,ue;if(he){const Ht=yn[he];q=Ht.vertexShader,ee=Ht.fragmentShader}else q=g.vertexShader,ee=g.fragmentShader,l.update(g),ge=l.getVertexShaderID(g),ue=l.getFragmentShaderID(g);const Ne=i.getRenderTarget(),Te=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,it=!!g.map,We=!!g.matcap,C=!!V,Xt=!!g.aoMap,He=!!g.lightMap,qe=!!g.bumpMap,Ce=!!g.normalMap,at=!!g.displacementMap,Ie=!!g.emissiveMap,T=!!g.metalnessMap,x=!!g.roughnessMap,N=g.anisotropy>0,j=g.clearcoat>0,$=g.dispersion>0,Y=g.iridescence>0,Se=g.sheen>0,se=g.transmission>0,de=N&&!!g.anisotropyMap,Ye=j&&!!g.clearcoatMap,te=j&&!!g.clearcoatNormalMap,fe=j&&!!g.clearcoatRoughnessMap,Pe=Y&&!!g.iridescenceMap,Le=Y&&!!g.iridescenceThicknessMap,pe=Se&&!!g.sheenColorMap,Ge=Se&&!!g.sheenRoughnessMap,Fe=!!g.specularMap,st=!!g.specularColorMap,P=!!g.specularIntensityMap,oe=se&&!!g.transmissionMap,G=se&&!!g.thicknessMap,K=!!g.gradientMap,re=!!g.alphaMap,le=g.alphaTest>0,Xe=!!g.alphaHash,mt=!!g.extensions;let zt=si;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(zt=i.toneMapping);const Ze={shaderID:he,shaderType:g.type,shaderName:g.name,vertexShader:q,fragmentShader:ee,defines:g.defines,customVertexShaderID:ge,customFragmentShaderID:ue,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Te,instancingColor:Te&&W.instanceColor!==null,instancingMorph:Te&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:oi,alphaToCoverage:!!g.alphaToCoverage,map:it,matcap:We,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:ce,aoMap:Xt,lightMap:He,bumpMap:qe,normalMap:Ce,displacementMap:m&&at,emissiveMap:Ie,normalMapObjectSpace:Ce&&g.normalMapType===yf,normalMapTangentSpace:Ce&&g.normalMapType===ed,metalnessMap:T,roughnessMap:x,anisotropy:N,anisotropyMap:de,clearcoat:j,clearcoatMap:Ye,clearcoatNormalMap:te,clearcoatRoughnessMap:fe,dispersion:$,iridescence:Y,iridescenceMap:Pe,iridescenceThicknessMap:Le,sheen:Se,sheenColorMap:pe,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:st,specularIntensityMap:P,transmission:se,transmissionMap:oe,thicknessMap:G,gradientMap:K,opaque:g.transparent===!1&&g.blending===as&&g.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Xe,combine:g.combine,mapUv:it&&p(g.map.channel),aoMapUv:Xt&&p(g.aoMap.channel),lightMapUv:He&&p(g.lightMap.channel),bumpMapUv:qe&&p(g.bumpMap.channel),normalMapUv:Ce&&p(g.normalMap.channel),displacementMapUv:at&&p(g.displacementMap.channel),emissiveMapUv:Ie&&p(g.emissiveMap.channel),metalnessMapUv:T&&p(g.metalnessMap.channel),roughnessMapUv:x&&p(g.roughnessMap.channel),anisotropyMapUv:de&&p(g.anisotropyMap.channel),clearcoatMapUv:Ye&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:te&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(g.sheenRoughnessMap.channel),specularMapUv:Fe&&p(g.specularMap.channel),specularColorMapUv:st&&p(g.specularColorMap.channel),specularIntensityMapUv:P&&p(g.specularIntensityMap.channel),transmissionMapUv:oe&&p(g.transmissionMap.channel),thicknessMapUv:G&&p(g.thicknessMap.channel),alphaMapUv:re&&p(g.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ce||N),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(it||re),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ke,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:it&&g.map.isVideoTexture===!0&&Qe.getTransfer(g.map.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pn,flipSided:g.side===Ot,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:mt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&g.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function b(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)M.push(O),M.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(y(M,g),E(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function y(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function E(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function U(g){const M=_[g.type];let O;if(M){const B=yn[M];O=ri.clone(B.uniforms)}else O=g.uniforms;return O}function R(g,M){let O;for(let B=0,W=h.length;B<W;B++){const Z=h[B];if(Z.cacheKey===M){O=Z,++O.usedTimes;break}}return O===void 0&&(O=new cv(i,M,g,r),h.push(O)),O}function A(g){if(--g.usedTimes===0){const M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),g.destroy()}}function D(g){l.remove(g)}function X(){l.dispose()}return{getParameters:f,getProgramCacheKey:b,getUniforms:U,acquireProgram:R,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:X}}function pv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,m,v,_,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:_,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function o(u,d,m,v,_,p){const f=a(u,d,m,v,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,v,_,p){const f=a(u,d,m,v,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||mv),n.length>1&&n.sort(d||oh),s.length>1&&s.sort(d||oh)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function gv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new lh,i.set(n,[a])):s>=r.length?(a=new lh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Re};break;case"SpotLight":t={position:new w,direction:new w,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _v=0;function Sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yv(i){const e=new vv,t=xv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const s=new w,r=new nt,a=new nt;function o(c){let h=0,u=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let m=0,v=0,_=0,p=0,f=0,b=0,y=0,E=0,U=0,R=0,A=0;c.sort(Sv);for(let X=0,g=c.length;X<g;X++){const M=c[X],O=M.color,B=M.intensity,W=M.distance,Z=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],B);A++}else if(M.isDirectionalLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Q=M.shadow,V=t.get(M);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=M.shadow.matrix,b++}n.directional[m]=H,m++}else if(M.isSpotLight){const H=e.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(O).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[_]=H;const Q=M.shadow;if(M.map&&(n.spotLightMap[U]=M.map,U++,Q.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[_]=Q.matrix,M.castShadow){const V=t.get(M);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Z,E++}_++}else if(M.isRectAreaLight){const H=e.get(M);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=H,p++}else if(M.isPointLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const Q=M.shadow,V=t.get(M);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=M.shadow.matrix,y++}n.point[v]=H,v++}else if(M.isHemisphereLight){const H=e.get(M);H.skyColor.copy(M.color).multiplyScalar(B),H.groundColor.copy(M.groundColor).multiplyScalar(B),n.hemi[f]=H,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==v||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==E||D.numSpotMaps!==U||D.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=m,D.pointLength=v,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=E,D.numSpotMaps=U,D.numLightProbes=A,n.version=_v++)}function l(c,h){let u=0,d=0,m=0,v=0,_=0;const p=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const y=c[f];if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function ch(i){const e=new yv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ch(i),e.set(s,[o])):r>=a.length?(o=new ch(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class bv extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Av(i,e,t){let n=new Kl;const s=new we,r=new we,a=new ut,o=new bv({depthPacking:Sf}),l=new wv,c={},h=t.maxTextureSize,u={[On]:Ot,[Ot]:On,[pn]:pn},d=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Ev,fragmentShader:Tv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ft;v.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ue(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let f=this.type;this.render=function(R,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const X=i.getRenderTarget(),g=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),O=i.state;O.setBlending(kn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==Nn&&this.type===Nn,W=f===Nn&&this.type!==Nn;for(let Z=0,H=R.length;Z<H;Z++){const Q=R[Z],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ce=V.getFrameExtents();if(s.multiply(ce),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,V.mapSize.y=r.y)),V.map===null||B===!0||W===!0){const _e=this.type!==Nn?{minFilter:Nt,magFilter:Nt}:{};V.map!==null&&V.map.dispose(),V.map=new Jt(s.x,s.y,_e),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const he=V.getViewportCount();for(let _e=0;_e<he;_e++){const Ke=V.getViewport(_e);a.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),O.viewport(a),V.updateMatrices(Q,_e),n=V.getFrustum(),E(A,D,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Nn&&b(V,D),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(X,g,M)};function b(R,A){const D=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Jt(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,D,m,_,null)}function y(R,A,D,X){let g=null;const M=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)g=M;else if(g=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=g.uuid,B=A.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let Z=W[B];Z===void 0&&(Z=g.clone(),W[B]=Z,A.addEventListener("dispose",U)),g=Z}if(g.visible=A.visible,g.wireframe=A.wireframe,X===Nn?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:u[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,D.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const O=i.properties.get(g);O.light=D}return g}function E(R,A,D,X,g){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===Nn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=e.update(R),W=R.material;if(Array.isArray(W)){const Z=B.groups;for(let H=0,Q=Z.length;H<Q;H++){const V=Z[H],ce=W[V.materialIndex];if(ce&&ce.visible){const he=y(R,ce,X,g);R.onBeforeShadow(i,R,A,D,B,he,V),i.renderBufferDirect(D,null,B,he,R,V),R.onAfterShadow(i,R,A,D,B,he,V)}}}else if(W.visible){const Z=y(R,W,X,g);R.onBeforeShadow(i,R,A,D,B,Z,null),i.renderBufferDirect(D,null,B,Z,R,null),R.onAfterShadow(i,R,A,D,B,Z,null)}}const O=R.children;for(let B=0,W=O.length;B<W;B++)E(O[B],A,D,X,g)}function U(R){R.target.removeEventListener("dispose",U);for(const D in c){const X=c[D],g=R.target.uuid;g in X&&(X[g].dispose(),delete X[g])}}}const Rv={[Zo]:Qo,[Jo]:tl,[$o]:nl,[hs]:el,[Qo]:Zo,[tl]:Jo,[nl]:$o,[el]:hs};function Cv(i){function e(){let P=!1;const oe=new ut;let G=null;const K=new ut(0,0,0,0);return{setMask:function(re){G!==re&&!P&&(i.colorMask(re,re,re,re),G=re)},setLocked:function(re){P=re},setClear:function(re,le,Xe,mt,zt){zt===!0&&(re*=mt,le*=mt,Xe*=mt),oe.set(re,le,Xe,mt),K.equals(oe)===!1&&(i.clearColor(re,le,Xe,mt),K.copy(oe))},reset:function(){P=!1,G=null,K.set(-1,0,0,0)}}}function t(){let P=!1,oe=!1,G=null,K=null,re=null;return{setReversed:function(le){oe=le},setTest:function(le){le?ge(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(le){G!==le&&!P&&(i.depthMask(le),G=le)},setFunc:function(le){if(oe&&(le=Rv[le]),K!==le){switch(le){case Zo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=le}},setLocked:function(le){P=le},setClear:function(le){re!==le&&(i.clearDepth(le),re=le)},reset:function(){P=!1,G=null,K=null,re=null}}}function n(){let P=!1,oe=null,G=null,K=null,re=null,le=null,Xe=null,mt=null,zt=null;return{setTest:function(Ze){P||(Ze?ge(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(Ze){oe!==Ze&&!P&&(i.stencilMask(Ze),oe=Ze)},setFunc:function(Ze,Ht,En){(G!==Ze||K!==Ht||re!==En)&&(i.stencilFunc(Ze,Ht,En),G=Ze,K=Ht,re=En)},setOp:function(Ze,Ht,En){(le!==Ze||Xe!==Ht||mt!==En)&&(i.stencilOp(Ze,Ht,En),le=Ze,Xe=Ht,mt=En)},setLocked:function(Ze){P=Ze},setClear:function(Ze){zt!==Ze&&(i.clearStencil(Ze),zt=Ze)},reset:function(){P=!1,oe=null,G=null,K=null,re=null,le=null,Xe=null,mt=null,zt=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,v=!1,_=null,p=null,f=null,b=null,y=null,E=null,U=null,R=new Re(0,0,0),A=0,D=!1,X=null,g=null,M=null,O=null,B=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=H>=2);let V=null,ce={};const he=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Ke=new ut().fromArray(he),et=new ut().fromArray(_e);function q(P,oe,G,K){const re=new Uint8Array(4),le=i.createTexture();i.bindTexture(P,le),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<G;Xe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(oe+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return le}const ee={};ee[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),r.setFunc(hs),He(!1),qe(xc),ge(i.CULL_FACE),C(kn);function ge(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function ue(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Ne(P,oe){return h[P]!==oe?(i.bindFramebuffer(P,oe),h[P]=oe,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Te(P,oe){let G=d,K=!1;if(P){G=u.get(oe),G===void 0&&(G=[],u.set(oe,G));const re=P.textures;if(G.length!==re.length||G[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Xe=re.length;le<Xe;le++)G[le]=i.COLOR_ATTACHMENT0+le;G.length=re.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function Ve(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const it={[wi]:i.FUNC_ADD,[Qd]:i.FUNC_SUBTRACT,[Jd]:i.FUNC_REVERSE_SUBTRACT};it[$d]=i.MIN,it[ef]=i.MAX;const We={[tf]:i.ZERO,[nf]:i.ONE,[sf]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[af]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[of]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[ff]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(P,oe,G,K,re,le,Xe,mt,zt,Ze){if(P===kn){v===!0&&(ue(i.BLEND),v=!1);return}if(v===!1&&(ge(i.BLEND),v=!0),P!==Zd){if(P!==_||Ze!==D){if((p!==wi||y!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,y=wi),Ze)switch(P){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,b=null,E=null,U=null,R.set(0,0,0),A=0,_=P,D=Ze}return}re=re||oe,le=le||G,Xe=Xe||K,(oe!==p||re!==y)&&(i.blendEquationSeparate(it[oe],it[re]),p=oe,y=re),(G!==f||K!==b||le!==E||Xe!==U)&&(i.blendFuncSeparate(We[G],We[K],We[le],We[Xe]),f=G,b=K,E=le,U=Xe),(mt.equals(R)===!1||zt!==A)&&(i.blendColor(mt.r,mt.g,mt.b,zt),R.copy(mt),A=zt),_=P,D=!1}function Xt(P,oe){P.side===pn?ue(i.CULL_FACE):ge(i.CULL_FACE);let G=P.side===Ot;oe&&(G=!G),He(G),P.blending===as&&P.transparent===!1?C(kn):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const K=P.stencilWrite;a.setTest(K),K&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),at(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){X!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),X=P)}function qe(P){P!==jd?(ge(i.CULL_FACE),P!==g&&(P===xc?i.cullFace(i.BACK):P===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),g=P}function Ce(P){P!==M&&(Z&&i.lineWidth(P),M=P)}function at(P,oe,G){P?(ge(i.POLYGON_OFFSET_FILL),(O!==oe||B!==G)&&(i.polygonOffset(oe,G),O=oe,B=G)):ue(i.POLYGON_OFFSET_FILL)}function Ie(P){P?ge(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+W-1),V!==P&&(i.activeTexture(P),V=P)}function x(P,oe,G){G===void 0&&(V===null?G=i.TEXTURE0+W-1:G=V);let K=ce[G];K===void 0&&(K={type:void 0,texture:void 0},ce[G]=K),(K.type!==P||K.texture!==oe)&&(V!==G&&(i.activeTexture(G),V=G),i.bindTexture(P,oe||ee[P]),K.type=P,K.texture=oe)}function N(){const P=ce[V];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(P){Ke.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ke.copy(P))}function pe(P){et.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function Ge(P,oe){let G=l.get(oe);G===void 0&&(G=new WeakMap,l.set(oe,G));let K=G.get(P);K===void 0&&(K=i.getUniformBlockIndex(oe,P.name),G.set(P,K))}function Fe(P,oe){const K=l.get(oe).get(P);o.get(oe)!==K&&(i.uniformBlockBinding(oe,K,P.__bindingPointIndex),o.set(oe,K))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,ce={},h={},u=new WeakMap,d=[],m=null,v=!1,_=null,p=null,f=null,b=null,y=null,E=null,U=null,R=new Re(0,0,0),A=0,D=!1,X=null,g=null,M=null,O=null,B=null,Ke.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ge,disable:ue,bindFramebuffer:Ne,drawBuffers:Te,useProgram:Ve,setBlending:C,setMaterial:Xt,setFlipSided:He,setCullFace:qe,setLineWidth:Ce,setPolygonOffset:at,setScissorTest:Ie,activeTexture:T,bindTexture:x,unbindTexture:N,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:fe,texImage3D:Pe,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:Ye,texStorage3D:te,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Le,viewport:pe,reset:st}}function hh(i,e,t,n){const s=Pv(n);switch(t){case ju:return i*e;case Zu:return i*e;case Qu:return i*e*2;case Wl:return i*e/s.components*s.byteLength;case Xl:return i*e/s.components*s.byteLength;case Ju:return i*e*2/s.components*s.byteLength;case ql:return i*e*2/s.components*s.byteLength;case Ku:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Yl:return i*e*4/s.components*s.byteLength;case $r:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(i,16)*Math.max(e,8)/4;case al:case ll:return Math.max(i,8)*Math.max(e,8)/2;case hl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ia:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $u:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pv(i){switch(i){case Bn:case Xu:return{byteLength:1,components:1};case $s:case qu:case vn:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case Pi:case Hl:case Mn:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return m?new OffscreenCanvas(T,x):da("canvas")}function _(T,x,N){let j=1;const $=Ie(T);if(($.width>N||$.height>N)&&(j=N/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(j*$.width),Se=Math.floor(j*$.height);u===void 0&&(u=v(Y,Se));const se=x?v(Y,Se):u;return se.width=Y,se.height=Se,se.getContext("2d").drawImage(T,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+Se+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Nt&&T.minFilter!==an}function f(T){i.generateMipmap(T)}function b(T,x,N,j,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),x===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const Se=$?la:Qe.getTransfer(j);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=Se===rt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(T,x){let N;return T?x===null||x===Pi||x===fs?N=i.DEPTH24_STENCIL8:x===Mn?N=i.DEPTH32F_STENCIL8:x===$s&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pi||x===fs?N=i.DEPTH_COMPONENT24:x===Mn?N=i.DEPTH_COMPONENT32F:x===$s&&(N=i.DEPTH_COMPONENT16),N}function E(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function U(T){const x=T.target;x.removeEventListener("dispose",U),A(x),x.isVideoTexture&&h.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),X(x)}function A(T){const x=n.get(T);if(x.__webglInit===void 0)return;const N=T.source,j=d.get(N);if(j){const $=j[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&D(T),Object.keys(j).length===0&&d.delete(N)}n.remove(T)}function D(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const N=T.source,j=d.get(N);delete j[x.__cacheKey],a.memory.textures--}function X(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let $=0;$<x.__webglFramebuffer[j].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[j][$]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=T.textures;for(let j=0,$=N.length;j<$;j++){const Y=n.get(N[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[j])}n.remove(T)}let g=0;function M(){g=0}function O(){const T=g;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),g+=1,T}function B(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function W(T,x){const N=n.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(N,T,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function Z(T,x){const N=n.get(T);if(T.version>0&&N.__version!==T.version){et(N,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function H(T,x){const N=n.get(T);if(T.version>0&&N.__version!==T.version){et(N,T,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function Q(T,x){const N=n.get(T);if(T.version>0&&N.__version!==T.version){q(N,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const V={[Js]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},ce={[Nt]:i.NEAREST,[xf]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},he={[Mf]:i.NEVER,[Rf]:i.ALWAYS,[bf]:i.LESS,[td]:i.LEQUAL,[wf]:i.EQUAL,[Af]:i.GEQUAL,[Ef]:i.GREATER,[Tf]:i.NOTEQUAL};function _e(T,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===Ga||x.magFilter===cr||x.magFilter===Ai||x.minFilter===an||x.minFilter===Ga||x.minFilter===cr||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,V[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==cr&&x.minFilter!==Ai||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ke(T,x){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",U));const j=x.source;let $=d.get(j);$===void 0&&($={},d.set(j,$));const Y=B(x);if(Y!==T.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[Y].usedTimes++;const Se=$[T.__cacheKey];Se!==void 0&&($[T.__cacheKey].usedTimes--,Se.usedTimes===0&&D(x)),T.__cacheKey=Y,T.__webglTexture=$[Y].texture}return N}function et(T,x,N){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const $=Ke(T,x),Y=x.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+N);const Se=n.get(Y);if(Y.version!==Se.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const se=Qe.getPrimaries(Qe.workingColorSpace),de=x.colorSpace===ii?null:Qe.getPrimaries(x.colorSpace),Ye=x.colorSpace===ii||se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let te=_(x.image,!1,s.maxTextureSize);te=at(x,te);const fe=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type);let Le=b(x.internalFormat,fe,Pe,x.colorSpace,x.isVideoTexture);_e(j,x);let pe;const Ge=x.mipmaps,Fe=x.isVideoTexture!==!0,st=Se.__version===void 0||$===!0,P=Y.dataReady,oe=E(x,te);if(x.isDepthTexture)Le=y(x.format===ps,x.type),st&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Le,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Le,te.width,te.height,0,fe,Pe,null));else if(x.isDataTexture)if(Ge.length>0){Fe&&st&&t.texStorage2D(i.TEXTURE_2D,oe,Le,Ge[0].width,Ge[0].height);for(let G=0,K=Ge.length;G<K;G++)pe=Ge[G],Fe?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,G,Le,pe.width,pe.height,0,fe,Pe,pe.data);x.generateMipmaps=!1}else Fe?(st&&t.texStorage2D(i.TEXTURE_2D,oe,Le,te.width,te.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,fe,Pe,te.data)):t.texImage2D(i.TEXTURE_2D,0,Le,te.width,te.height,0,fe,Pe,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Le,Ge[0].width,Ge[0].height,te.depth);for(let G=0,K=Ge.length;G<K;G++)if(pe=Ge[G],x.format!==gn)if(fe!==null)if(Fe){if(P)if(x.layerUpdates.size>0){const re=hh(pe.width,pe.height,x.format,x.type);for(const le of x.layerUpdates){const Xe=pe.data.subarray(le*re/pe.data.BYTES_PER_ELEMENT,(le+1)*re/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,le,pe.width,pe.height,1,fe,Xe,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,te.depth,fe,pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Le,pe.width,pe.height,te.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,te.depth,fe,Pe,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Le,pe.width,pe.height,te.depth,0,fe,Pe,pe.data)}else{Fe&&st&&t.texStorage2D(i.TEXTURE_2D,oe,Le,Ge[0].width,Ge[0].height);for(let G=0,K=Ge.length;G<K;G++)pe=Ge[G],x.format!==gn?fe!==null?Fe?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,G,Le,pe.width,pe.height,0,fe,Pe,pe.data)}else if(x.isDataArrayTexture)if(Fe){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Le,te.width,te.height,te.depth),P)if(x.layerUpdates.size>0){const G=hh(te.width,te.height,x.format,x.type);for(const K of x.layerUpdates){const re=te.data.subarray(K*G/te.data.BYTES_PER_ELEMENT,(K+1)*G/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,fe,Pe,re)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,fe,Pe,te.data);else if(x.isData3DTexture)Fe?(st&&t.texStorage3D(i.TEXTURE_3D,oe,Le,te.width,te.height,te.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,fe,Pe,te.data);else if(x.isFramebufferTexture){if(st)if(Fe)t.texStorage2D(i.TEXTURE_2D,oe,Le,te.width,te.height);else{let G=te.width,K=te.height;for(let re=0;re<oe;re++)t.texImage2D(i.TEXTURE_2D,re,Le,G,K,0,fe,Pe,null),G>>=1,K>>=1}}else if(Ge.length>0){if(Fe&&st){const G=Ie(Ge[0]);t.texStorage2D(i.TEXTURE_2D,oe,Le,G.width,G.height)}for(let G=0,K=Ge.length;G<K;G++)pe=Ge[G],Fe?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,fe,Pe,pe):t.texImage2D(i.TEXTURE_2D,G,Le,fe,Pe,pe);x.generateMipmaps=!1}else if(Fe){if(st){const G=Ie(te);t.texStorage2D(i.TEXTURE_2D,oe,Le,G.width,G.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,Le,fe,Pe,te);p(x)&&f(j),Se.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function q(T,x,N){if(x.image.length!==6)return;const j=Ke(T,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const Y=n.get($);if($.version!==Y.__version||j===!0){t.activeTexture(i.TEXTURE0+N);const Se=Qe.getPrimaries(Qe.workingColorSpace),se=x.colorSpace===ii?null:Qe.getPrimaries(x.colorSpace),de=x.colorSpace===ii||Se===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ye=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Ye&&!te?fe[K]=_(x.image[K],!0,s.maxCubemapSize):fe[K]=te?x.image[K].image:x.image[K],fe[K]=at(x,fe[K]);const Pe=fe[0],Le=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),Ge=b(x.internalFormat,Le,pe,x.colorSpace),Fe=x.isVideoTexture!==!0,st=Y.__version===void 0||j===!0,P=$.dataReady;let oe=E(x,Pe);_e(i.TEXTURE_CUBE_MAP,x);let G;if(Ye){Fe&&st&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ge,Pe.width,Pe.height);for(let K=0;K<6;K++){G=fe[K].mipmaps;for(let re=0;re<G.length;re++){const le=G[re];x.format!==gn?Le!==null?Fe?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,le.width,le.height,Le,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,le.width,le.height,Le,pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Ge,le.width,le.height,0,Le,pe,le.data)}}}else{if(G=x.mipmaps,Fe&&st){G.length>0&&oe++;const K=Ie(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(te){Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Le,pe,fe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,fe[K].width,fe[K].height,0,Le,pe,fe[K].data);for(let re=0;re<G.length;re++){const Xe=G[re].image[K].image;Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Xe.width,Xe.height,Le,pe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Ge,Xe.width,Xe.height,0,Le,pe,Xe.data)}}else{Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,pe,fe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Le,pe,fe[K]);for(let re=0;re<G.length;re++){const le=G[re];Fe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Le,pe,le.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Ge,Le,pe,le.image[K])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),Y.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ee(T,x,N,j,$,Y){const Se=r.convert(N.format,N.colorSpace),se=r.convert(N.type),de=b(N.internalFormat,Se,se,N.colorSpace);if(!n.get(x).__hasExternalTextures){const te=Math.max(1,x.width>>Y),fe=Math.max(1,x.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Y,de,te,fe,x.depth,0,Se,se,null):t.texImage2D($,Y,de,te,fe,0,Se,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),qe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,n.get(N).__webglTexture,0,He(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,$,n.get(N).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(T,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const j=x.depthTexture,$=j&&j.isDepthTexture?j.type:null,Y=y(x.stencilBuffer,$),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=He(x);qe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Y,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const j=x.textures;for(let $=0;$<j.length;$++){const Y=j[$],Se=r.convert(Y.format,Y.colorSpace),se=r.convert(Y.type),de=b(Y.internalFormat,Se,se,Y.colorSpace),Ye=He(x);N&&qe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,de,x.width,x.height):qe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const j=n.get(x.depthTexture).__webglTexture,$=He(x);if(x.depthTexture.format===os)qe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===ps)qe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const x=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ue(x.__webglFramebuffer,T)}else if(N){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),ge(x.__webglDepthbuffer[j],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ge(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(T,x,N){const j=n.get(T);x!==void 0&&ee(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ne(T)}function Ve(T){const x=T.texture,N=n.get(T),j=n.get(x);T.addEventListener("dispose",R);const $=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[se][de]=i.createFramebuffer()}else N.__webglFramebuffer[se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)N.__webglFramebuffer[se]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Se)for(let se=0,de=$.length;se<de;se++){const Ye=n.get($[se]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&qe(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const de=$[se];N.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[se]);const Ye=r.convert(de.format,de.colorSpace),te=r.convert(de.type),fe=b(de.internalFormat,Ye,te,de.colorSpace,T.isXRRenderTarget===!0),Pe=He(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,fe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,N.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),_e(i.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ee(N.__webglFramebuffer[se][de],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else ee(N.__webglFramebuffer[se],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,de=$.length;se<de;se++){const Ye=$[se],te=n.get(Ye);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),_e(i.TEXTURE_2D,Ye),ee(N.__webglFramebuffer,T,Ye,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),p(Ye)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),_e(se,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ee(N.__webglFramebuffer[de],T,x,i.COLOR_ATTACHMENT0,se,de);else ee(N.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,se,0);p(x)&&f(se),t.unbindTexture()}T.depthBuffer&&Ne(T)}function it(T){const x=T.textures;for(let N=0,j=x.length;N<j;N++){const $=x[N];if(p($)){const Y=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get($).__webglTexture;t.bindTexture(Y,Se),f(Y),t.unbindTexture()}}}const We=[],C=[];function Xt(T){if(T.samples>0){if(qe(T)===!1){const x=T.textures,N=T.width,j=T.height;let $=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),se=x.length>1;if(se)for(let de=0;de<x.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<x.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Ye=n.get(x[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,N,j,0,0,N,j,$,i.NEAREST),l===!0&&(We.length=0,C.length=0,We.push(i.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.resolveDepthBuffer===!1&&(We.push(Y),C.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<x.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Ye=n.get(x[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function He(T){return Math.min(s.maxSamples,T.samples)}function qe(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ce(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function at(T,x){const N=T.colorSpace,j=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==oi&&N!==ii&&(Qe.getTransfer(N)===rt?(j!==gn||$!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=M,this.setTexture2D=W,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=qe}function Dv(i,e){function t(n,s=ii){let r;const a=Qe.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.BYTE;if(n===qu)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===ju)return i.ALPHA;if(n===Ku)return i.RGB;if(n===gn)return i.RGBA;if(n===Zu)return i.LUMINANCE;if(n===Qu)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===Ju)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===$r||n===ea||n===ta||n===na)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ol||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===vl||n===xl||n===_l||n===Sl||n===yl||n===Ml||n===bl||n===wl||n===El||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===Cl||n===Pl||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Iv extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class De extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new At,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _t({vertexShader:Nv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ov extends _s{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,v=null;const _=new kv,p=t.getContextAttributes();let f=null,b=null;const y=[],E=[],U=new we;let R=null;const A=new rn;A.layers.enable(1),A.viewport=new ut;const D=new rn;D.layers.enable(2),D.viewport=new ut;const X=[A,D],g=new Iv;g.layers.enable(1),g.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=y[q];return ee===void 0&&(ee=new _o,y[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=y[q];return ee===void 0&&(ee=new _o,y[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=y[q];return ee===void 0&&(ee=new _o,y[q]=ee),ee.getHandSpace()};function B(q){const ee=E.indexOf(q.inputSource);if(ee===-1)return;const ge=y[ee];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<y.length;q++){const ee=E[q];ee!==null&&(E[q]=null,y[q].disconnect(ee))}M=null,O=null,_.reset(),e.setRenderTarget(f),m=null,d=null,u=null,s=null,b=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Jt(m.framebufferWidth,m.framebufferHeight,{format:gn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ge=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?ps:os,ge=p.stencil?fs:Pi);const Ne={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Jt(d.textureWidth,d.textureHeight,{format:gn,type:Bn,depthTexture:new pd(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let ee=0;ee<q.removed.length;ee++){const ge=q.removed[ee],ue=E.indexOf(ge);ue>=0&&(E[ue]=null,y[ue].disconnect(ge))}for(let ee=0;ee<q.added.length;ee++){const ge=q.added[ee];let ue=E.indexOf(ge);if(ue===-1){for(let Te=0;Te<y.length;Te++)if(Te>=E.length){E.push(ge),ue=Te;break}else if(E[Te]===null){E[Te]=ge,ue=Te;break}if(ue===-1)break}const Ne=y[ue];Ne&&Ne.connect(ge)}}const H=new w,Q=new w;function V(q,ee,ge){H.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(ge.matrixWorld);const ue=H.distanceTo(Q),Ne=ee.projectionMatrix.elements,Te=ge.projectionMatrix.elements,Ve=Ne[14]/(Ne[10]-1),it=Ne[14]/(Ne[10]+1),We=(Ne[9]+1)/Ne[5],C=(Ne[9]-1)/Ne[5],Xt=(Ne[8]-1)/Ne[0],He=(Te[8]+1)/Te[0],qe=Ve*Xt,Ce=Ve*He,at=ue/(-Xt+He),Ie=at*-Xt;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(at),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ne[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const T=Ve+at,x=it+at,N=qe-Ie,j=Ce+(ue-Ie),$=We*it/x*T,Y=C*it/x*T;q.projectionMatrix.makePerspective(N,j,$,Y,T,x),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,ge=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),g.near=D.near=A.near=ee,g.far=D.far=A.far=ge,(M!==g.near||O!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,O=g.far);const ue=q.parent,Ne=g.cameras;ce(g,ue);for(let Te=0;Te<Ne.length;Te++)ce(Ne[Te],ue);Ne.length===2?V(g,A,D):g.projectionMatrix.copy(A.projectionMatrix),he(q,g,ue)};function he(q,ee,ge){ge===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Dl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(g)};let _e=null;function Ke(q,ee){if(h=ee.getViewerPose(c||a),v=ee,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ue=!1;ge.length!==g.cameras.length&&(g.cameras.length=0,ue=!0);for(let Te=0;Te<ge.length;Te++){const Ve=ge[Te];let it=null;if(m!==null)it=m.getViewport(Ve);else{const C=u.getViewSubImage(d,Ve);it=C.viewport,Te===0&&(e.setRenderTargetTextures(b,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(b))}let We=X[Te];We===void 0&&(We=new rn,We.layers.enable(Te),We.viewport=new ut,X[Te]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(it.x,it.y,it.width,it.height),Te===0&&(g.matrix.copy(We.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ue===!0&&g.cameras.push(We)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Te=u.getDepthInformation(ge[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,s.renderState)}}for(let ge=0;ge<y.length;ge++){const ue=E[ge],Ne=y[ge];ue!==null&&Ne!==void 0&&Ne.update(ue,ee,c||a)}_e&&_e(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const et=new fd;et.setAnimationLoop(Ke),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}}const mi=new on,Bv=new nt;function zv(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,hd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ot&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ot&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),y=b.envMap,E=b.envMapRotation;y&&(p.envMap.value=y,mi.copy(E),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),p.envMapRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(mi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hv(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const E=y.program;n.uniformBlockBinding(b,E)}function c(b,y){let E=s[b.id];E===void 0&&(v(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",p));const U=y.program;n.updateUBOMapping(b,U);const R=e.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function h(b){const y=u();b.__bindingPointIndex=y;const E=i.createBuffer(),U=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=s[b.id],E=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,A=E.length;R<A;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let X=0,g=D.length;X<g;X++){const M=D[X];if(m(M,R,X,U)===!0){const O=M.__offset,B=Array.isArray(M.value)?M.value:[M.value];let W=0;for(let Z=0;Z<B.length;Z++){const H=B[Z],Q=_(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+W,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,y,E,U){const R=b.value,A=y+"_"+E;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const D=U[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return U[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function v(b){const y=b.uniforms;let E=0;const U=16;for(let A=0,D=y.length;A<D;A++){const X=Array.isArray(y[A])?y[A]:[y[A]];for(let g=0,M=X.length;g<M;g++){const O=X[g],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Z=B.length;W<Z;W++){const H=B[W],Q=_(H),V=E%U,ce=V%Q.boundary,he=V+ce;E+=ce,he!==0&&U-he<Q.storage&&(E+=U-he),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Q.storage}}}const R=E%U;return R>0&&(E+=U-R),b.__size=E,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Gv{constructor(e={}){const{canvas:t=Pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=si,this.toneMappingExposure=1;const y=this;let E=!1,U=0,R=0,A=null,D=-1,X=null;const g=new ut,M=new ut;let O=null;const B=new Re(0);let W=0,Z=t.width,H=t.height,Q=1,V=null,ce=null;const he=new ut(0,0,Z,H),_e=new ut(0,0,Z,H);let Ke=!1;const et=new Kl;let q=!1,ee=!1;const ge=new nt,ue=new nt,Ne=new w,Te=new ut,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function We(){return A===null?Q:1}let C=n;function Xt(S,L){return t.getContext(S,L)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bl}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",le,!1),C===null){const L="webgl2";if(C=Xt(L,S),C===null)throw Xt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let He,qe,Ce,at,Ie,T,x,N,j,$,Y,Se,se,de,Ye,te,fe,Pe,Le,pe,Ge,Fe,st,P;function oe(){He=new Yg(C),He.init(),Fe=new Dv(C,He),qe=new Hg(C,He,e,Fe),Ce=new Cv(C),qe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),at=new Zg(C),Ie=new pv,T=new Lv(C,He,Ce,Ie,qe,Fe,at),x=new Vg(y),N=new qg(y),j=new ip(C),st=new Bg(C,j),$=new jg(C,j,at,st),Y=new Jg(C,$,j,at),Le=new Qg(C,qe,T),te=new Gg(Ie),Se=new fv(y,x,N,He,qe,st,te),se=new zv(y,Ie),de=new gv,Ye=new Mv(He),Pe=new Og(y,x,N,Ce,Y,d,l),fe=new Av(y,Y,qe),P=new Hv(C,at,qe,Ce),pe=new zg(C,He,at),Ge=new Kg(C,He,at),at.programs=Se.programs,y.capabilities=qe,y.extensions=He,y.properties=Ie,y.renderLists=de,y.shadowMap=fe,y.state=Ce,y.info=at}oe();const G=new Ov(y,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=He.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=He.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(Z,H,!1))},this.getSize=function(S){return S.set(Z,H)},this.setSize=function(S,L,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,H=L,t.width=Math.floor(S*Q),t.height=Math.floor(L*Q),F===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(Z*Q,H*Q).floor()},this.setDrawingBufferSize=function(S,L,F){Z=S,H=L,Q=F,t.width=Math.floor(S*F),t.height=Math.floor(L*F),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(g)},this.getViewport=function(S){return S.copy(he)},this.setViewport=function(S,L,F,k){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,L,F,k),Ce.viewport(g.copy(he).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(_e)},this.setScissor=function(S,L,F,k){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,L,F,k),Ce.scissor(M.copy(_e).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){Ce.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(S=!0,L=!0,F=!0){let k=0;if(S){let I=!1;if(A!==null){const ne=A.texture.format;I=ne===Yl||ne===ql||ne===Xl}if(I){const ne=A.texture.type,ae=ne===Bn||ne===Pi||ne===$s||ne===fs||ne===Gl||ne===Vl,me=Pe.getClearColor(),ve=Pe.getClearAlpha(),Ee=me.r,Ae=me.g,ye=me.b;ae?(m[0]=Ee,m[1]=Ae,m[2]=ye,m[3]=ve,C.clearBufferuiv(C.COLOR,0,m)):(v[0]=Ee,v[1]=Ae,v[2]=ye,v[3]=ve,C.clearBufferiv(C.COLOR,0,v))}else k|=C.COLOR_BUFFER_BIT}L&&(k|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),Ye.dispose(),Ie.dispose(),x.dispose(),N.dispose(),Y.dispose(),st.dispose(),P.dispose(),Se.dispose(),G.dispose(),G.removeEventListener("sessionstart",hc),G.removeEventListener("sessionend",uc),ci.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=at.autoReset,L=fe.enabled,F=fe.autoUpdate,k=fe.needsUpdate,I=fe.type;oe(),at.autoReset=S,fe.enabled=L,fe.autoUpdate=F,fe.needsUpdate=k,fe.type=I}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xe(S){const L=S.target;L.removeEventListener("dispose",Xe),mt(L)}function mt(S){zt(S),Ie.remove(S)}function zt(S){const L=Ie.get(S).programs;L!==void 0&&(L.forEach(function(F){Se.releaseProgram(F)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,F,k,I,ne){L===null&&(L=Ve);const ae=I.isMesh&&I.matrixWorld.determinant()<0,me=Wd(S,L,F,k,I);Ce.setMaterial(k,ae);let ve=F.index,Ee=1;if(k.wireframe===!0){if(ve=$.getWireframeAttribute(F),ve===void 0)return;Ee=2}const Ae=F.drawRange,ye=F.attributes.position;let tt=Ae.start*Ee,ot=(Ae.start+Ae.count)*Ee;ne!==null&&(tt=Math.max(tt,ne.start*Ee),ot=Math.min(ot,(ne.start+ne.count)*Ee)),ve!==null?(tt=Math.max(tt,0),ot=Math.min(ot,ve.count)):ye!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,ye.count));const ht=ot-tt;if(ht<0||ht===1/0)return;st.setup(I,k,me,F,ve);let qt,Je=pe;if(ve!==null&&(qt=j.get(ve),Je=Ge,Je.setIndex(qt)),I.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*We()),Je.setMode(C.LINES)):Je.setMode(C.TRIANGLES);else if(I.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),Ce.setLineWidth(Me*We()),I.isLineSegments?Je.setMode(C.LINES):I.isLineLoop?Je.setMode(C.LINE_LOOP):Je.setMode(C.LINE_STRIP)}else I.isPoints?Je.setMode(C.POINTS):I.isSprite&&Je.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Je.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Me=I._multiDrawStarts,Ct=I._multiDrawCounts,$e=I._multiDrawCount,ln=ve?j.get(ve).bytesPerElement:1,ki=Ie.get(k).currentProgram.getUniforms();for(let Yt=0;Yt<$e;Yt++)ki.setValue(C,"_gl_DrawID",Yt),Je.render(Me[Yt]/ln,Ct[Yt])}else if(I.isInstancedMesh)Je.renderInstances(tt,ht,I.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ct=Math.min(F.instanceCount,Me);Je.renderInstances(tt,ht,Ct)}else Je.render(tt,ht)};function Ze(S,L,F){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,lr(S,L,F),S.side=On,S.needsUpdate=!0,lr(S,L,F),S.side=pn):lr(S,L,F)}this.compile=function(S,L,F=null){F===null&&(F=S),p=Ye.get(F),p.init(L),b.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),S!==F&&S.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return S.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ne=I.material;if(ne)if(Array.isArray(ne))for(let ae=0;ae<ne.length;ae++){const me=ne[ae];Ze(me,F,I),k.add(me)}else Ze(ne,F,I),k.add(ne)}),b.pop(),p=null,k},this.compileAsync=function(S,L,F=null){const k=this.compile(S,L,F);return new Promise(I=>{function ne(){if(k.forEach(function(ae){Ie.get(ae).currentProgram.isReady()&&k.delete(ae)}),k.size===0){I(S);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ht=null;function En(S){Ht&&Ht(S)}function hc(){ci.stop()}function uc(){ci.start()}const ci=new fd;ci.setAnimationLoop(En),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(S){Ht=S,G.setAnimationLoop(S),S===null?ci.stop():ci.start()},G.addEventListener("sessionstart",hc),G.addEventListener("sessionend",uc),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,L,A),p=Ye.get(S,b.length),p.init(L),b.push(p),ue.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),et.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,q=te.init(this.clippingPlanes,ee),_=de.get(S,f.length),_.init(),f.push(_),G.enabled===!0&&G.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Oa(ne,L,-1/0,y.sortObjects)}Oa(S,L,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(V,ce),it=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,it&&Pe.addToRenderList(_,S),this.info.render.frame++,q===!0&&te.beginShadows();const F=p.state.shadowsArray;fe.render(F,S,L),q===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,I=_.transmissive;if(p.setupLights(),L.isArrayCamera){const ne=L.cameras;if(I.length>0)for(let ae=0,me=ne.length;ae<me;ae++){const ve=ne[ae];fc(k,I,S,ve)}it&&Pe.render(S);for(let ae=0,me=ne.length;ae<me;ae++){const ve=ne[ae];dc(_,S,ve,ve.viewport)}}else I.length>0&&fc(k,I,S,L),it&&Pe.render(S),dc(_,S,L);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,L),st.resetDefaultState(),D=-1,X=null,b.pop(),b.length>0?(p=b[b.length-1],q===!0&&te.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Oa(S,L,F,k){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||et.intersectsSprite(S)){k&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ue);const ae=Y.update(S),me=S.material;me.visible&&_.push(S,ae,me,F,Te.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||et.intersectsObject(S))){const ae=Y.update(S),me=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Te.copy(ae.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(ue)),Array.isArray(me)){const ve=ae.groups;for(let Ee=0,Ae=ve.length;Ee<Ae;Ee++){const ye=ve[Ee],tt=me[ye.materialIndex];tt&&tt.visible&&_.push(S,ae,tt,F,Te.z,ye)}}else me.visible&&_.push(S,ae,me,F,Te.z,null)}}const ne=S.children;for(let ae=0,me=ne.length;ae<me;ae++)Oa(ne[ae],L,F,k)}function dc(S,L,F,k){const I=S.opaque,ne=S.transmissive,ae=S.transparent;p.setupLightsView(F),q===!0&&te.setGlobalState(y.clippingPlanes,F),k&&Ce.viewport(g.copy(k)),I.length>0&&or(I,L,F),ne.length>0&&or(ne,L,F),ae.length>0&&or(ae,L,F),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function fc(S,L,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Jt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?vn:Bn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ne=p.state.transmissionRenderTarget[k.id],ae=k.viewport||g;ne.setSize(ae.z,ae.w);const me=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(B),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),it&&Pe.render(F);const ve=y.toneMapping;y.toneMapping=si;const Ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),q===!0&&te.setGlobalState(y.clippingPlanes,k),or(S,F,k),T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ye=0,tt=L.length;ye<tt;ye++){const ot=L[ye],ht=ot.object,qt=ot.geometry,Je=ot.material,Me=ot.group;if(Je.side===pn&&ht.layers.test(k.layers)){const Ct=Je.side;Je.side=Ot,Je.needsUpdate=!0,pc(ht,F,k,qt,Je,Me),Je.side=Ct,Je.needsUpdate=!0,Ae=!0}}Ae===!0&&(T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne))}y.setRenderTarget(me),y.setClearColor(B,W),Ee!==void 0&&(k.viewport=Ee),y.toneMapping=ve}function or(S,L,F){const k=L.isScene===!0?L.overrideMaterial:null;for(let I=0,ne=S.length;I<ne;I++){const ae=S[I],me=ae.object,ve=ae.geometry,Ee=k===null?ae.material:k,Ae=ae.group;me.layers.test(F.layers)&&pc(me,L,F,ve,Ee,Ae)}}function pc(S,L,F,k,I,ne){S.onBeforeRender(y,L,F,k,I,ne),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(y,L,F,k,S,ne),I.transparent===!0&&I.side===pn&&I.forceSinglePass===!1?(I.side=Ot,I.needsUpdate=!0,y.renderBufferDirect(F,L,k,I,S,ne),I.side=On,I.needsUpdate=!0,y.renderBufferDirect(F,L,k,I,S,ne),I.side=pn):y.renderBufferDirect(F,L,k,I,S,ne),S.onAfterRender(y,L,F,k,I,ne)}function lr(S,L,F){L.isScene!==!0&&(L=Ve);const k=Ie.get(S),I=p.state.lights,ne=p.state.shadowsArray,ae=I.state.version,me=Se.getParameters(S,I.state,ne,L,F),ve=Se.getProgramCacheKey(me);let Ee=k.programs;k.environment=S.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",Xe),Ee=new Map,k.programs=Ee);let Ae=Ee.get(ve);if(Ae!==void 0){if(k.currentProgram===Ae&&k.lightsStateVersion===ae)return gc(S,me),Ae}else me.uniforms=Se.getUniforms(S),S.onBeforeCompile(me,y),Ae=Se.acquireProgram(me,ve),Ee.set(ve,Ae),k.uniforms=me.uniforms;const ye=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ye.clippingPlanes=te.uniform),gc(S,me),k.needsLights=qd(S),k.lightsStateVersion=ae,k.needsLights&&(ye.ambientLightColor.value=I.state.ambient,ye.lightProbe.value=I.state.probe,ye.directionalLights.value=I.state.directional,ye.directionalLightShadows.value=I.state.directionalShadow,ye.spotLights.value=I.state.spot,ye.spotLightShadows.value=I.state.spotShadow,ye.rectAreaLights.value=I.state.rectArea,ye.ltc_1.value=I.state.rectAreaLTC1,ye.ltc_2.value=I.state.rectAreaLTC2,ye.pointLights.value=I.state.point,ye.pointLightShadows.value=I.state.pointShadow,ye.hemisphereLights.value=I.state.hemi,ye.directionalShadowMap.value=I.state.directionalShadowMap,ye.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ye.spotShadowMap.value=I.state.spotShadowMap,ye.spotLightMatrix.value=I.state.spotLightMatrix,ye.spotLightMap.value=I.state.spotLightMap,ye.pointShadowMap.value=I.state.pointShadowMap,ye.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ae,k.uniformsList=null,Ae}function mc(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=ra.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function gc(S,L){const F=Ie.get(S);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Wd(S,L,F,k,I){L.isScene!==!0&&(L=Ve),T.resetTextureUnits();const ne=L.fog,ae=k.isMeshStandardMaterial?L.environment:null,me=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:oi,ve=(k.isMeshStandardMaterial?N:x).get(k.envMap||ae),Ee=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ae=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!F.morphAttributes.position,tt=!!F.morphAttributes.normal,ot=!!F.morphAttributes.color;let ht=si;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ht=y.toneMapping);const qt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Je=qt!==void 0?qt.length:0,Me=Ie.get(k),Ct=p.state.lights;if(q===!0&&(ee===!0||S!==X)){const en=S===X&&k.id===D;te.setState(k,S,en)}let $e=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ct.state.version||Me.outputColorSpace!==me||I.isBatchedMesh&&Me.batching===!1||!I.isBatchedMesh&&Me.batching===!0||I.isBatchedMesh&&Me.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Me.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Me.instancing===!1||!I.isInstancedMesh&&Me.instancing===!0||I.isSkinnedMesh&&Me.skinning===!1||!I.isSkinnedMesh&&Me.skinning===!0||I.isInstancedMesh&&Me.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Me.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Me.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Me.instancingMorph===!1&&I.morphTexture!==null||Me.envMap!==ve||k.fog===!0&&Me.fog!==ne||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==te.numPlanes||Me.numIntersection!==te.numIntersection)||Me.vertexAlphas!==Ee||Me.vertexTangents!==Ae||Me.morphTargets!==ye||Me.morphNormals!==tt||Me.morphColors!==ot||Me.toneMapping!==ht||Me.morphTargetsCount!==Je)&&($e=!0):($e=!0,Me.__version=k.version);let ln=Me.currentProgram;$e===!0&&(ln=lr(k,L,I));let ki=!1,Yt=!1,Ba=!1;const dt=ln.getUniforms(),Gn=Me.uniforms;if(Ce.useProgram(ln.program)&&(ki=!0,Yt=!0,Ba=!0),k.id!==D&&(D=k.id,Yt=!0),ki||X!==S){qe.reverseDepthBuffer?(ge.copy(S.projectionMatrix),Df(ge),If(ge),dt.setValue(C,"projectionMatrix",ge)):dt.setValue(C,"projectionMatrix",S.projectionMatrix),dt.setValue(C,"viewMatrix",S.matrixWorldInverse);const en=dt.map.cameraPosition;en!==void 0&&en.setValue(C,Ne.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&dt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,Yt=!0,Ba=!0)}if(I.isSkinnedMesh){dt.setOptional(C,I,"bindMatrix"),dt.setOptional(C,I,"bindMatrixInverse");const en=I.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),dt.setValue(C,"boneTexture",en.boneTexture,T))}I.isBatchedMesh&&(dt.setOptional(C,I,"batchingTexture"),dt.setValue(C,"batchingTexture",I._matricesTexture,T),dt.setOptional(C,I,"batchingIdTexture"),dt.setValue(C,"batchingIdTexture",I._indirectTexture,T),dt.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&dt.setValue(C,"batchingColorTexture",I._colorsTexture,T));const za=F.morphAttributes;if((za.position!==void 0||za.normal!==void 0||za.color!==void 0)&&Le.update(I,F,ln),(Yt||Me.receiveShadow!==I.receiveShadow)&&(Me.receiveShadow=I.receiveShadow,dt.setValue(C,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gn.envMap.value=ve,Gn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Gn.envMapIntensity.value=L.environmentIntensity),Yt&&(dt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Me.needsLights&&Xd(Gn,Ba),ne&&k.fog===!0&&se.refreshFogUniforms(Gn,ne),se.refreshMaterialUniforms(Gn,k,Q,H,p.state.transmissionRenderTarget[S.id]),ra.upload(C,mc(Me),Gn,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ra.upload(C,mc(Me),Gn,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(C,"center",I.center),dt.setValue(C,"modelViewMatrix",I.modelViewMatrix),dt.setValue(C,"normalMatrix",I.normalMatrix),dt.setValue(C,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const en=k.uniformsGroups;for(let Ha=0,Yd=en.length;Ha<Yd;Ha++){const vc=en[Ha];P.update(vc,ln),P.bind(vc,ln)}}return ln}function Xd(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,L,F){Ie.get(S.texture).__webglTexture=L,Ie.get(S.depthTexture).__webglTexture=F;const k=Ie.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const F=Ie.get(S);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,F=0){A=S,U=L,R=F;let k=!0,I=null,ne=!1,ae=!1;if(S){const ve=Ie.get(S);if(ve.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(ve.__hasExternalTextures)T.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ye=S.depthTexture;if(ve.__boundDepthTexture!==ye){if(ye!==null&&Ie.has(ye)&&(S.width!==ye.image.width||S.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ae=!0);const Ae=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[L])?I=Ae[L][F]:I=Ae[L],ne=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?I=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?I=Ae[F]:I=Ae,g.copy(S.viewport),M.copy(S.scissor),O=S.scissorTest}else g.copy(he).multiplyScalar(Q).floor(),M.copy(_e).multiplyScalar(Q).floor(),O=Ke;if(Ce.bindFramebuffer(C.FRAMEBUFFER,I)&&k&&Ce.drawBuffers(S,I),Ce.viewport(g),Ce.scissor(M),Ce.setScissorTest(O),ne){const ve=Ie.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve.__webglTexture,F)}else if(ae){const ve=Ie.get(S.texture),Ee=L||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.__webglTexture,F||0,Ee)}D=-1},this.readRenderTargetPixels=function(S,L,F,k,I,ne,ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(me=me[ae]),me){Ce.bindFramebuffer(C.FRAMEBUFFER,me);try{const ve=S.texture,Ee=ve.format,Ae=ve.type;if(!qe.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-k&&F>=0&&F<=S.height-I&&C.readPixels(L,F,k,I,Fe.convert(Ee),Fe.convert(Ae),ne)}finally{const ve=A!==null?Ie.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(C.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(S,L,F,k,I,ne,ae){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(me=me[ae]),me){const ve=S.texture,Ee=ve.format,Ae=ve.type;if(!qe.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-k&&F>=0&&F<=S.height-I){Ce.bindFramebuffer(C.FRAMEBUFFER,me);const ye=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(L,F,k,I,Fe.convert(Ee),Fe.convert(Ae),0);const tt=A!==null?Ie.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(C.FRAMEBUFFER,tt);const ot=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Lf(C,ot,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne),C.deleteBuffer(ye),C.deleteSync(ot),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,F=0){S.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-F),I=Math.floor(S.image.width*k),ne=Math.floor(S.image.height*k),ae=L!==null?L.x:0,me=L!==null?L.y:0;T.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,ae,me,I,ne),Ce.unbindTexture()},this.copyTextureToTexture=function(S,L,F=null,k=null,I=0){S.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],L=arguments[2],I=arguments[3]||0,F=null);let ne,ae,me,ve,Ee,Ae;F!==null?(ne=F.max.x-F.min.x,ae=F.max.y-F.min.y,me=F.min.x,ve=F.min.y):(ne=S.image.width,ae=S.image.height,me=0,ve=0),k!==null?(Ee=k.x,Ae=k.y):(Ee=0,Ae=0);const ye=Fe.convert(L.format),tt=Fe.convert(L.type);T.setTexture2D(L,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const ot=C.getParameter(C.UNPACK_ROW_LENGTH),ht=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qt=C.getParameter(C.UNPACK_SKIP_PIXELS),Je=C.getParameter(C.UNPACK_SKIP_ROWS),Me=C.getParameter(C.UNPACK_SKIP_IMAGES),Ct=S.isCompressedTexture?S.mipmaps[I]:S.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,me),C.pixelStorei(C.UNPACK_SKIP_ROWS,ve),S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,I,Ee,Ae,ne,ae,ye,tt,Ct.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,I,Ee,Ae,Ct.width,Ct.height,ye,Ct.data):C.texSubImage2D(C.TEXTURE_2D,I,Ee,Ae,ne,ae,ye,tt,Ct),C.pixelStorei(C.UNPACK_ROW_LENGTH,ot),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Me),I===0&&L.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(S,L,F=null,k=null,I=0){S.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,S=arguments[2],L=arguments[3],I=arguments[4]||0);let ne,ae,me,ve,Ee,Ae,ye,tt,ot;const ht=S.isCompressedTexture?S.mipmaps[I]:S.image;F!==null?(ne=F.max.x-F.min.x,ae=F.max.y-F.min.y,me=F.max.z-F.min.z,ve=F.min.x,Ee=F.min.y,Ae=F.min.z):(ne=ht.width,ae=ht.height,me=ht.depth,ve=0,Ee=0,Ae=0),k!==null?(ye=k.x,tt=k.y,ot=k.z):(ye=0,tt=0,ot=0);const qt=Fe.convert(L.format),Je=Fe.convert(L.type);let Me;if(L.isData3DTexture)T.setTexture3D(L,0),Me=C.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)T.setTexture2DArray(L,0),Me=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const Ct=C.getParameter(C.UNPACK_ROW_LENGTH),$e=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ln=C.getParameter(C.UNPACK_SKIP_PIXELS),ki=C.getParameter(C.UNPACK_SKIP_ROWS),Yt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ee),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ae),S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Me,I,ye,tt,ot,ne,ae,me,qt,Je,ht.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(Me,I,ye,tt,ot,ne,ae,me,qt,ht.data):C.texSubImage3D(Me,I,ye,tt,ot,ne,ae,me,qt,Je,ht),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ct),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$e),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,ki),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Yt),I===0&&L.generateMipmaps&&C.generateMipmap(Me),Ce.unbindTexture()},this.initRenderTarget=function(S){Ie.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){U=0,R=0,A=null,Ce.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Sa?"display-p3":"srgb"}}class ir{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vv extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wv extends At{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,h=Nt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uh extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new nt,dh=new nt,Pr=[],fh=new Ii,Xv=new nt,Ls=new Ue,Ds=new Ss;class Ul extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),fh.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Ds.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),dh.multiplyMatrices(n,Ji),Ls.matrixWorld=dh,Ls.raycast(e,Pr);for(let a=0,o=Pr.length;a<o;a++){const l=Pr[a];l.instanceId=r,l.object=this,t.push(l)}Pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wv(new Float32Array(s*this.count),s,this.count,Wl,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jl extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ph=new nt,Nl=new rd,Lr=new Ss,Dr=new w;class Fl extends Rt{constructor(e=new Ft,t=new Jl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;ph.copy(s).invert(),Nl.copy(e.ray).applyMatrix4(ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,_=m;v<_;v++){const p=c.getX(v);Dr.fromBufferAttribute(u,p),mh(Dr,p,l,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,_=m;v<_;v++)Dr.fromBufferAttribute(u,v),mh(Dr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mh(i,e,t,n,s,r,a){const o=Nl.distanceSqToPoint(i);if(o<t){const l=new w;Nl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qv extends At{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ma extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let v=0;const _=[],p=n/2;let f=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(m,2));function b(){const E=new w,U=new w;let R=0;const A=(t-e)/n;for(let D=0;D<=r;D++){const X=[],g=D/r,M=g*(t-e)+e;for(let O=0;O<=s;O++){const B=O/s,W=B*l+o,Z=Math.sin(W),H=Math.cos(W);U.x=M*Z,U.y=-g*n+p,U.z=M*H,u.push(U.x,U.y,U.z),E.set(Z,A,H).normalize(),d.push(E.x,E.y,E.z),m.push(B,1-g),X.push(v++)}_.push(X)}for(let D=0;D<s;D++)for(let X=0;X<r;X++){const g=_[X][D],M=_[X+1][D],O=_[X+1][D+1],B=_[X][D+1];e>0&&(h.push(g,M,B),R+=3),t>0&&(h.push(M,O,B),R+=3)}c.addGroup(f,R,0),f+=R}function y(E){const U=v,R=new we,A=new w;let D=0;const X=E===!0?e:t,g=E===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*g,0),d.push(0,g,0),m.push(.5,.5),v++;const M=v;for(let O=0;O<=s;O++){const W=O/s*l+o,Z=Math.cos(W),H=Math.sin(W);A.x=X*H,A.y=p*g,A.z=X*Z,u.push(A.x,A.y,A.z),d.push(0,g,0),R.x=Z*.5+.5,R.y=H*.5*g+.5,m.push(R.x,R.y),v++}for(let O=0;O<s;O++){const B=U+O,W=M+O;E===!0?h.push(W,W+1,B):h.push(W+1,W,B),D+=3}c.addGroup(f,D,E===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tr extends Ma{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new tr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new w,E=new w,U=new w;for(let R=0;R<t.length;R+=3)m(t[R+0],y),m(t[R+1],E),m(t[R+2],U),l(y,E,U,b)}function l(b,y,E,U){const R=U+1,A=[];for(let D=0;D<=R;D++){A[D]=[];const X=b.clone().lerp(E,D/R),g=y.clone().lerp(E,D/R),M=R-D;for(let O=0;O<=M;O++)O===0&&D===R?A[D][O]=X:A[D][O]=X.clone().lerp(g,O/M)}for(let D=0;D<R;D++)for(let X=0;X<2*(R-D)-1;X++){const g=Math.floor(X/2);X%2===0?(d(A[D][g+1]),d(A[D+1][g]),d(A[D][g])):(d(A[D][g+1]),d(A[D+1][g+1]),d(A[D+1][g]))}}function c(b){const y=new w;for(let E=0;E<r.length;E+=3)y.x=r[E+0],y.y=r[E+1],y.z=r[E+2],y.normalize().multiplyScalar(b),r[E+0]=y.x,r[E+1]=y.y,r[E+2]=y.z}function h(){const b=new w;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const E=p(b)/2/Math.PI+.5,U=f(b)/Math.PI+.5;a.push(E,1-U)}v(),u()}function u(){for(let b=0;b<a.length;b+=6){const y=a[b+0],E=a[b+2],U=a[b+4],R=Math.max(y,E,U),A=Math.min(y,E,U);R>.9&&A<.1&&(y<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),U<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function m(b,y){const E=b*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function v(){const b=new w,y=new w,E=new w,U=new w,R=new we,A=new we,D=new we;for(let X=0,g=0;X<r.length;X+=9,g+=6){b.set(r[X+0],r[X+1],r[X+2]),y.set(r[X+3],r[X+4],r[X+5]),E.set(r[X+6],r[X+7],r[X+8]),R.set(a[g+0],a[g+1]),A.set(a[g+2],a[g+3]),D.set(a[g+4],a[g+5]),U.copy(b).add(y).add(E).divideScalar(3);const M=p(U);_(R,g+0,b,M),_(A,g+2,y,M),_(D,g+4,E,M)}}function _(b,y,E,U){U<0&&b.x===1&&(a[y]=b.x-1),E.x===0&&E.z===0&&(a[y]=U/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.vertices,e.indices,e.radius,e.details)}}class ba extends $l{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ba(e.radius,e.detail)}}class ec extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,m=new w,v=new we;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,h.push(v.x,v.y)}u+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let f=0;f<n;f++){const b=f+p,y=b,E=b+n+1,U=b+n+2,R=b+1;o.push(y,E,R),o.push(E,U,R)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wa extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,d=new w,m=[],v=[],_=[],p=[];for(let f=0;f<=n;f++){const b=[],y=f/n;let E=0;f===0&&a===0?E=.5/t:f===n&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){const R=U/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+y*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(R+E,1-y),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const y=h[f][b+1],E=h[f][b],U=h[f+1][b],R=h[f+1][b+1];(f!==0||a>0)&&m.push(y,E,R),(f!==n-1||l<Math.PI)&&m.push(E,U,R)}this.setIndex(m),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yv extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vs extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _d extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jv extends _d{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const So=new nt,gh=new w,vh=new w;class Kv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zv extends Kv{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xh extends _d{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Zv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _h(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);const Sd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ui{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jv=new Zl(-1,1,1,-1,0,1);class $v extends Ft{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const ex=new $v;class Ea{constructor(e){this._mesh=new Ue(ex,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class tx extends Ui{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ri.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ea(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sh extends Ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class nx extends Ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ix{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tx(Sd),this.copyPass.material.blending=kn,this.clock=new Qv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sh!==void 0&&(a instanceof Sh?n=!0:a instanceof nx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sx extends Ui{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const rx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends Ui{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,a,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Jt(r,a,{type:vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Jt(r,a,{type:vn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=rx;this.highPassUniforms=ri.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new we(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Sd;this.copyUniforms=ri.clone(h.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ci,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new ms,this.fsQuad=new Ea(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xs.BlurDirectionX=new we(1,0);xs.BlurDirectionY=new we(0,1);const Ir={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new we(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Ur={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new we(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},yo={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new we(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class ax extends Ui{constructor(e,t){super(),this.edgesRT=new Jt(e,t,{depthBuffer:!1,type:vn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Jt(e,t,{depthBuffer:!1,type:vn}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new At,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=an,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new At,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=Nt,this.searchTexture.minFilter=Nt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=ri.clone(Ir.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new _t({defines:Object.assign({},Ir.defines),uniforms:this.uniformsEdges,vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader}),this.uniformsWeights=ri.clone(Ur.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new _t({defines:Object.assign({},Ur.defines),uniforms:this.uniformsWeights,vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader}),this.uniformsBlend=ri.clone(yo.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new _t({uniforms:this.uniformsBlend,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader}),this.fsQuad=new Ea(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const ox={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class lx extends Ui{constructor(){super();const e=ox;this.uniforms=ri.clone(e.uniforms),this.material=new Yv({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ea(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const yh={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",rollL:"KeyQ",rollR:"KeyE",throttleUp:"ShiftLeft",throttleDown:"ControlLeft",sprint:"ShiftLeft",dodge:"Space",attack:"Mouse0",heavy:"Mouse2",spell1:"Digit1",spell2:"Digit2",spell3:"Digit3",spell4:"Digit4",swap:"KeyF",mute:"KeyM",debug:"Backquote"},cx={mouseSensitivity:.0022},vt={pitchRate:2.2,yawRate:2.2,adYawRate:1.6,minSpeed:8,maxSpeed:42,throttleAccel:26,cruiseSpeed:18,passiveHoverBob:.6,bankAngle:.55,bankRate:6,bankLevelRate:3,bankPerYaw:6,bankHoldDecay:8,pitchLevelRate:0},be={moveSpeed:7.5,sprintMul:1.6,attackMoveScale:.35,turnRate:1,groundY:0,accel:11,friction:9},je={comboBuffer:.35,rollDuration:.45,rollIFrames:.32,rollSpeed:12,hitstop:.05,hitstopPerDamage:.0018,hitstopFinisher:.08,hitstopMax:.18,knockImpulse:11,knockMax:26,knockFinisherMul:1.5,shakeHit:.16,shakePerDamage:.006,shakeFinisher:.22},Ta={regenPerSec:6,wardHp:40,breathCostPerSec:14},hx={damageTakenScale:.55},Qs={selfWard:45,heal:35,cooldown:12},Ut={passiveDamageScale:.5,engageRange:9,meleeRange:2.4,groundReachY:3.5,leashRange:6,approachSpeed:5,attackCadence:.9,saphiraEngageRange:40,saphiraClawRange:8,airEngageBandY:22,urgencyHealthFrac:.35,urgencyFlashTime:2.5},Is={max:120,finisherBonus:40,window:3,decay:.5},ux={nonRoranScale:.15},xt={maxHealth:1e3,aggroRange:120,colliderRadius:1.6,attackCadence:2.2,telegraph:.5,projDamage:16,projSpeed:34,projRadius:.7,projTtl:3.5,aoeEvery:4,aoeCount:12,aoeSpeed:22,aoeDamage:12,deflectThrottle:.18},Us={hp:60,colliderRadius:1.6,bobSpeed:1.6,bobAmplitude:.6,spinSpeed:.8},tc=30,xn={shadowBox:95,shadowNear:1,shadowFar:300,shadowMapSize:2048,shadowBias:-5e-4,shadowNormalBias:.02,rimPosition:[-30,18,-45],presets:{aerial:{sunColor:16773846,sunIntensity:3,sunPosition:[50,90,40],hemiSky:12575743,hemiGround:4872760,hemiIntensity:.6,rimColor:9483519,rimIntensity:.3,exposure:1.15,skyHorizon:12176857,skyZenith:4884168},siege:{sunColor:16747325,sunIntensity:2.8,sunPosition:[-85,26,40],hemiSky:13208154,hemiGround:2761244,hemiIntensity:.45,rimColor:6965882,rimIntensity:.4,exposure:1.05,skyHorizon:10248760,skyZenith:2038330},citadel:{sunColor:9085140,sunIntensity:1.7,sunPosition:[-40,38,-20],hemiSky:4478588,hemiGround:1448486,hemiIntensity:1.05,rimColor:9086696,rimIntensity:1.6,exposure:1.2,skyHorizon:1446688,skyZenith:791592}}},xe={perSide:250,frontBaseZ:-80,frontHalfRange:45,xMin:-150,xMax:150,rearDepth:55,fightBand:9,marchSpeed:6,marchSpeedJitter:2.5,attritionPerSec:.4,respawnDelay:1,respawnDelayJitter:1.6,strengthReversion:.12,strengthDrift:.3,strengthMin:.4,strengthMax:1.9,frontShiftSpeed:2.2,fireKillPerSec:3,fireBoostPerSec:.25,bobFreq:6,bobAmp:.06,fightBobMul:2.3,fightBobAmp:.13,yawJitter:.45,clashSway:.16,raggedAmp:5,raggedFreq:.06,scaleMin:.9,scaleMax:1.12,fireZoneRadius:16,firePower:1,ballistaBoost:.18,breachBoost:.4,breakthroughProgress:.9,routProgress:.1,breakthroughHeal:80,breakthroughWaveDamage:60},Ns={bloom:{strength:.6,radius:.4,threshold:.85},bloomByMood:{aerial:1,siege:1.15,citadel:1.7}},wt={groundOffset:[.6,2.4,6.5],flightOffset:[0,4,14],lookOffset:[0,1.2,0],lookAhead:2.5,shakeDecay:1.7,shakeScale:.55,fovBase:60,fovSprint:68,sprintSpeedRef:be.moveSpeed*be.sprintMul,sprintDistMul:1.18,sprintHeightDrop:.35},Mh=10471144,dx=5208643;class fx{constructor(e){this.canvas=e,this.renderer=new Gv({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=sn,this.renderer.toneMapping=zl,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ku,this.scene=new Vv,this.scene.background=new Re(Mh),this.scene.fog=new ir(Mh,80,600),this.camera=new rn(60,1,.1,2e3),this.camera.position.set(0,6,14);const{width:t,height:n}=this.currentSize(),s=this.renderer.getPixelRatio();this.composer=new ix(this.renderer);const r=new sx(this.scene,this.camera);this.bloomPass=new xs(new we(t,n),Ns.bloom.strength,Ns.bloom.radius,Ns.bloom.threshold);const a=new ax(t*s,n*s),o=new lx;this.composer.addPass(r),this.composer.addPass(this.bloomPass),this.composer.addPass(a),this.composer.addPass(o),this.passes=[r,this.bloomPass,a,o],this.hemi=new jv(12575743,3754028,1),this.scene.add(this.hemi),this.sun=new xh(16773846,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(xn.shadowMapSize,xn.shadowMapSize);const l=this.sun.shadow.camera;l.left=-95,l.right=xn.shadowBox,l.top=xn.shadowBox,l.bottom=-95,l.near=xn.shadowNear,l.far=xn.shadowFar,l.updateProjectionMatrix(),this.sun.shadow.bias=xn.shadowBias,this.sun.shadow.normalBias=xn.shadowNormalBias,this.scene.add(this.sun),this.scene.add(this.sun.target),this.rim=new xh(16777215,.3),this.rim.position.set(...xn.rimPosition),this.scene.add(this.rim),this.scene.add(this.rim.target),this.skyMat=new _t({side:Ot,depthWrite:!1,fog:!1,uniforms:{horizon:{value:new Re},zenith:{value:new Re}},vertexShader:`
        varying vec3 vDir;
        void main() {
          // Object-space direction (the dome is centered at its own origin), so the
          // gradient is stable no matter where the dome is positioned — we recenter
          // it on the camera each frame, and this keeps the horizon band correct.
          vDir = normalize(position.xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 horizon;
        uniform vec3 zenith;
        varying vec3 vDir;
        void main() {
          float t = smoothstep(0.0, 0.55, vDir.y);
          gl_FragColor = vec4(mix(horizon, zenith, t), 1.0);
        }
      `}),this.skyDome=new Ue(new wa(1500,32,16),this.skyMat),this.skyDome.renderOrder=-1,this.skyDome.frustumCulled=!1,this.scene.add(this.skyDome),this.setLightingMood("aerial");const c=new zn(2e3,2e3),h=new vs({color:dx,roughness:1}),u=new Ue(c,h);u.rotation.x=-Math.PI/2,u.position.y=-.5,u.receiveShadow=!0,this.scene.add(u),this.resize(),window.addEventListener("resize",this.resize)}renderer;scene;camera;sun;hemi;rim;skyMat;skyDome;composer;bloomPass;passes;setLightingMood(e){const t=xn.presets[e];this.sun.color.setHex(t.sunColor),this.sun.intensity=t.sunIntensity,this.sun.position.set(t.sunPosition[0],t.sunPosition[1],t.sunPosition[2]),this.hemi.color.setHex(t.hemiSky),this.hemi.groundColor.setHex(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.rim.color.setHex(t.rimColor),this.rim.intensity=t.rimIntensity,this.renderer.toneMappingExposure=t.exposure,this.bloomPass.strength=Ns.bloom.strength*Ns.bloomByMood[e],this.skyMat.uniforms.horizon.value.setHex(t.skyHorizon),this.skyMat.uniforms.zenith.value.setHex(t.skyZenith)}render(e,t){t.forEach(n=>{const s=n.mesh;s&&(s.position.lerpVectors(n.prevPosition,n.position,e),s.quaternion.slerpQuaternions(n.prevQuat,n.quaternion,e))}),this.skyDome.position.copy(this.camera.position),this.composer.render()}dispose(){window.removeEventListener("resize",this.resize);for(const e of this.passes)e.dispose();this.composer.dispose(),this.skyDome.geometry.dispose(),this.skyMat.dispose(),this.renderer.dispose()}currentSize(){return{width:this.canvas.clientWidth||window.innerWidth,height:this.canvas.clientHeight||window.innerHeight}}resize=()=>{const{width:e,height:t}=this.currentSize();this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t)}}class px{down=new Set;prevDown=new Set;mouseDX=0;mouseDY=0;stepMouseDX=0;stepMouseDY=0;mode="GROUND";frozen=!1;constructor(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("blur",this.onBlur),window.addEventListener("contextmenu",this.onContextMenu)}setMode(e){this.mode=e}getMode(){return this.mode}setFrozen(e){this.frozen=e}pressed(e){return this.frozen?!1:this.down.has(yh[e])}justPressed(e){if(this.frozen)return!1;const t=yh[e];return this.down.has(t)&&!this.prevDown.has(t)}axis(e){if(this.frozen)return 0;const t=cx.mouseSensitivity,n=1;return this.mode==="FLIGHT"?e==="pitch"?n*this.stepMouseDY*t:e==="yaw"?this.stepMouseDX*t:e==="roll"?this.digital("right","left"):this.digital("forward","back"):e==="pitch"?n*this.stepMouseDY*t:e==="yaw"?this.stepMouseDX*t:0}beginStep(e){e?(this.stepMouseDX=this.mouseDX,this.stepMouseDY=this.mouseDY,this.mouseDX=0,this.mouseDY=0):(this.stepMouseDX=0,this.stepMouseDY=0)}lateUpdate(){this.prevDown.clear();for(const e of this.down)this.prevDown.add(e)}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("blur",this.onBlur),window.removeEventListener("contextmenu",this.onContextMenu)}digital(e,t){return(this.pressed(e)?1:0)-(this.pressed(t)?1:0)}onKeyDown=e=>{e.code==="Space"&&e.preventDefault(),this.down.add(e.code)};onKeyUp=e=>{this.down.delete(e.code)};onMouseDown=e=>{this.down.add(`Mouse${e.button}`)};onMouseUp=e=>{this.down.delete(`Mouse${e.button}`)};onMouseMove=e=>{document.pointerLockElement&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)};onContextMenu=e=>{e.preventDefault()};onBlur=()=>{this.down.clear(),this.mouseDX=0,this.mouseDY=0,this.stepMouseDX=0,this.stepMouseDY=0}}const $i=new w,Mo=new ct,bo=new w,Nr=new w,bh=new w,Fr=new w;function wo(i){let e=i+1831565813|0;return e=Math.imul(e^e>>>15,1|e),e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}class mx{constructor(e){this.camera=e}mode="GROUND";currentPos=new w;currentLook=new w;currentLead=new w;trauma=0;shakeFrame=0;initialized=!1;prevFramePos=new w;speedFactor=0;setMode(e){this.mode=e}getMode(){return this.mode}addShake(e){e<=0||(this.trauma=Math.min(1,this.trauma+e))}update(e,t,n){$i.lerpVectors(n.prevPosition,n.position,t),Mo.slerpQuaternions(n.prevQuat,n.quaternion,t);let s=0;if(this.mode==="GROUND"&&this.initialized&&e>1e-6){const h=$i.x-this.prevFramePos.x,u=$i.z-this.prevFramePos.z,d=Math.sqrt(h*h+u*u)/e;s=Math.min(1,Math.max(0,d/wt.sprintSpeedRef))}if(this.prevFramePos.copy($i),!this.initialized)this.speedFactor=0;else{const h=1-Math.exp(-4*e);this.speedFactor+=(s-this.speedFactor)*h}const r=this.speedFactor;let a,o,l;this.mode==="FLIGHT"?(a=wt.flightOffset[0],o=wt.flightOffset[1],l=wt.flightOffset[2]):(a=wt.groundOffset[0],o=wt.groundOffset[1]-wt.sprintHeightDrop*r,l=wt.groundOffset[2]*(1+(wt.sprintDistMul-1)*r)),bo.set(a,o,l).applyQuaternion(Mo).add($i);const c=wt.fovBase+(wt.fovSprint-wt.fovBase)*r;if(Math.abs(c-this.camera.fov)>.001&&(this.camera.fov=c,this.camera.updateProjectionMatrix()),bh.set(0,0,-1).applyQuaternion(Mo),Fr.copy(bh).multiplyScalar(wt.lookAhead),Nr.set(wt.lookOffset[0],wt.lookOffset[1],wt.lookOffset[2]).add($i),!this.initialized)this.currentPos.copy(bo),this.currentLead.copy(Fr),this.currentLook.copy(Nr).add(Fr),this.initialized=!0;else{const h=1-Math.exp(-7*e),u=1-Math.exp(-9*e),d=1-Math.exp(-3*e);this.currentPos.lerp(bo,h),this.currentLead.lerp(Fr,d),Nr.add(this.currentLead),this.currentLook.lerp(Nr,u)}if(this.camera.position.copy(this.currentPos),this.trauma>0){this.shakeFrame++;const h=this.trauma*this.trauma*wt.shakeScale;this.camera.position.x+=(wo(this.shakeFrame*3+1)*2-1)*h,this.camera.position.y+=(wo(this.shakeFrame*3+2)*2-1)*h,this.camera.position.z+=(wo(this.shakeFrame*3+3)*2-1)*h,this.trauma=Math.max(0,this.trauma-wt.shakeDecay*e)}this.camera.lookAt(this.currentLook)}resnap(){this.initialized=!1,this.speedFactor=0,this.trauma=0,this.shakeFrame=0}}let yd=null;function gx(i){yd=i}function vx(i){yd?.addShake(i)}let xx=1;class sr{id=xx++;position=new w;quaternion=new ct;prevPosition=new w;prevQuat=new ct;mesh=null;collider={radius:.5};alive=!0;dying=!1;isCombatant=!1;animate(e){}syncTransformImmediate(){this.mesh&&(this.mesh.position.copy(this.position),this.mesh.quaternion.copy(this.quaternion)),this.prevPosition.copy(this.position),this.prevQuat.copy(this.quaternion)}}function nc(i){return i.isCombatant===!0}const Li={saphira:3043296,thorn:12656425,firnen:3386199,shruikan:1447967,saphiraDark:1785740,thornDark:7868953,shruikanDark:2830655,membrane:2764090,horn:15262415,belly:12568534,saphiraEye:8382975,thornEye:16724774,shruikanEye:12899044,eragonSkin:14198906,eragonGarb:5202232,eragonHair:4862752,murtaghGarb:7089977,roranGarb:6967856,elfTone:13625039,eragonCloak:3494010,murtaghCloak:3937307,empireTabard:9313051,leather:4862496,glove:3679765,armorSteel:7765125,boot:3089431,riderEye:1842466,steel:12174028,ironDark:4869975,wood:7227947,rope:10125909,stone:9146519,stoneDark:5856870,fireOrange:16742938,fireYellow:16765514,wardCyan:5235455,dauthdaertGreen:7208794,eldunariGlow:16764764,sky:10471144,skyDusk:13208154,fog:12176857,ground:7311183,groundDark:5598012,water:3108751,cityStone:3947076,smoke:7039859,wallStone:7565160,wallStoneDark:4933698,cobble:5920592,breachRubble:3881011,bannerRed:10231069,roofTile:7027244,citadelBlack:1118230,throneDark:2302506,gold:13938487};function Ri(i){return Li[i]}function fa(i){return new Re(typeof i=="number"?i:Li[i])}function _x(i){return{roughness:i.roughness??.85,metalness:i.metalness??0,emissive:i.emissive??0,emissiveIntensity:i.emissiveIntensity??0,transparent:i.transparent??!1,opacity:i.opacity??1,doubleSide:i.doubleSide??!1}}const wh=new Map,Md=new Set;function Sx(i,e){return[i,e.roughness,e.metalness,e.emissive,e.emissiveIntensity,e.transparent?1:0,e.opacity,e.doubleSide?1:0].join(":")}function bd(i,e={}){const t=_x(e),n=Sx(i,t),s=wh.get(n);if(s)return s;const r=new vs({color:i,flatShading:!0,roughness:t.roughness,metalness:t.metalness,emissive:t.emissive,emissiveIntensity:t.emissiveIntensity,transparent:t.transparent,opacity:t.opacity,side:t.doubleSide?pn:On});return wh.set(n,r),Md.add(r),r}function Eh(i){return Md.has(i)}function St(i,e={}){return bd(Ri(i),e)}function Di(i,e=1.4){return bd(i,{emissive:i,emissiveIntensity:e,roughness:.4})}const Th=new Map,wd=new Set;function Aa(i,e){const t=Th.get(i);if(t)return t;const n=e();return Th.set(i,n),wd.add(n),n}function Ed(i){return wd.has(i)}function J(i,e,t){return Aa(`box:${i}:${e}:${t}`,()=>new Tt(i,e,t))}function lt(i,e,t=6){return Aa(`cone:${i}:${e}:${t}`,()=>new tr(i,e,t))}function Qt(i,e,t,n=6){return Aa(`cyl:${i}:${e}:${t}:${n}`,()=>new Ma(i,e,t,n))}function $t(i,e=0){return Aa(`ico:${i}:${e}`,()=>new ba(i,e))}function ic(i,e){i.traverse(t=>{t.isMesh&&(t.castShadow=e)})}function z(i,e,t={}){const n=new Ue(i,St(e));return t.pos&&n.position.set(t.pos[0],t.pos[1],t.pos[2]),t.rot&&n.rotation.set(t.rot[0],t.rot[1],t.rot[2]),t.scale!==void 0&&(typeof t.scale=="number"?n.scale.setScalar(t.scale):n.scale.set(t.scale[0],t.scale[1],t.scale[2])),t.name&&(n.name=t.name),n.castShadow=t.castShadow??!0,n.receiveShadow=!1,n}function sc(i="saphira"){const e=i==="thorn"?"thornDark":i==="saphira"?"saphiraDark":i==="shruikan"?"shruikanDark":i,t=i==="thorn",n=i==="shruikan",s=n?1.35:t?1.2:.85,r=Ri(i==="thorn"?"thornEye":i==="shruikan"?"shruikanEye":"saphiraEye"),a=new De;a.name="dragon";const o=new De;o.add(z(J(1.3,1.1,1.8),i,{pos:[0,0,-.2]})),o.add(z(J(1.15,1,.9),i,{pos:[0,-.02,.55]})),o.add(z(J(1,.9,1.4),i,{pos:[0,-.05,1]})),o.add(z(J(1.5,.75,.95),i,{pos:[0,.22,-.85]})),o.add(z(J(.9,.4,2.6),"belly",{pos:[0,-.55,.3]})),o.add(z(J(.7,.12,.5),"belly",{pos:[0,-.74,-.3],castShadow:!1})),o.add(z(J(.7,.12,.5),"belly",{pos:[0,-.74,.6],castShadow:!1})),a.add(o);const l=[[-1.1,.62],[-.5,.66],[.1,.62],[.7,.55],[1.2,.45]];for(const[_,p]of l)a.add(z(lt(.11,.34,4),"horn",{pos:[0,p,_],scale:[s,s,s],castShadow:!1}));const c=new De;c.add(z(Qt(.42,.5,.9,6),i,{pos:[0,.45,-1.1],rot:[.5,0,0]})),c.add(z(Qt(.34,.42,.8,6),i,{pos:[0,1,-1.65],rot:[.75,0,0]})),c.add(z(lt(.09,.28,4),"horn",{pos:[0,.78,-1.25],rot:[-.4,0,0],scale:[s,s,s],castShadow:!1})),c.add(z(lt(.08,.24,4),"horn",{pos:[0,1.22,-1.75],rot:[-.6,0,0],scale:[s,s,s],castShadow:!1})),a.add(c);const h=new De;h.name="head",h.position.set(0,1.45,-2.1),h.add(z(J(.5,.5,.7),i,{pos:[0,0,0]})),h.add(z(J(.46,.16,.34),e,{pos:[0,.28,-.16]})),h.add(z(lt(.28,.7,5),i,{pos:[0,.02,-.6],rot:[-Math.PI/2,0,0]})),h.add(z(J(.34,.16,.66),e,{pos:[0,-.22,-.45]})),h.add(z(lt(.18,.4,5),i,{pos:[0,-.16,-.66],rot:[-Math.PI/2,0,0]}));for(const _ of[-.21,.21]){const p=new Ue($t(.07,0),Di(r,1.7));p.position.set(_,.08,-.2),p.castShadow=!1,h.add(p)}h.add(z(lt(.1,.45,4),"horn",{pos:[-.18,.4,.1],rot:[-.4,0,.2],scale:[s,s,s]})),h.add(z(lt(.1,.45,4),"horn",{pos:[.18,.4,.1],rot:[-.4,0,-.2],scale:[s,s,s]})),h.add(z(lt(.07,.34,4),"horn",{pos:[-.27,.18,.22],rot:[.5,0,.5],scale:[s,s,s],castShadow:!1})),h.add(z(lt(.07,.34,4),"horn",{pos:[.27,.18,.22],rot:[.5,0,-.5],scale:[s,s,s],castShadow:!1})),(t||n)&&(h.add(z(lt(.06,.3,4),"horn",{pos:[-.3,-.04,.2],rot:[.9,0,.7],castShadow:!1})),h.add(z(lt(.06,.3,4),"horn",{pos:[.3,-.04,.2],rot:[.9,0,-.7],castShadow:!1}))),a.add(h);const u=Ah(i,e,1);u.name="wingL",u.position.set(.55,.55,-.1);const d=Ah(i,e,-1);d.name="wingR",d.position.set(-.55,.55,-.1),a.add(u,d);const m=new De;m.name="tail",m.position.set(0,-.1,1.7),m.add(z(Qt(.3,.4,.9,6),i,{pos:[0,0,.45],rot:[Math.PI/2,0,0]})),m.add(z(Qt(.22,.3,.9,6),i,{pos:[0,0,1.3],rot:[Math.PI/2,0,0]})),m.add(z(Qt(.14,.22,.7,6),i,{pos:[0,0,2],rot:[Math.PI/2,0,0]})),m.add(z(lt(.16,.6,5),i,{pos:[0,0,2.55],rot:[Math.PI/2,0,0]}));for(const _ of[.4,1.1,1.8])m.add(z(lt(.09,.3,4),"horn",{pos:[0,.18,_],scale:[s,s,s],castShadow:!1}));m.add(z(J(.08,.7,.55),"horn",{pos:[0,.14,2.45]})),a.add(m),a.add(kr(i,e,.55,-.55)),a.add(kr(i,e,-.55,-.55)),a.add(kr(i,e,.58,.95)),a.add(kr(i,e,-.58,.95));const v={wingL:u,wingR:d,head:h,tail:m};return a.userData=v,a}function kr(i,e,t,n){const s=new De;s.position.set(t,-.2,n),s.add(z(J(.36,.5,.4),i,{pos:[0,-.22,0]})),s.add(z(J(.26,.45,.28),e,{pos:[0,-.62,.05]})),s.add(z(J(.32,.12,.46),e,{pos:[0,-.86,-.1]}));for(const r of[-.1,0,.1])s.add(z(lt(.05,.18,4),"horn",{pos:[r,-.9,-.34],rot:[-1.2,0,0],castShadow:!1}));return s}function Ah(i,e,t){const n=new De;n.add(z(J(2.2,.14,.16),i,{pos:[t*1.1,0,0]})),n.add(z(lt(.07,.32,4),"horn",{pos:[t*2.2,.06,.02],rot:[.4,0,t*-1.3],castShadow:!1}));const s=[[.7,.55,1.5,.35],[1.1,.7,1.3,.7],[1.55,.78,1,1]];for(const[a,o,l,c]of s)n.add(z(J(l,.08,.1),i,{pos:[t*a,-.02,o],rot:[0,t*c,0],castShadow:!1}));const r=[[.45,1.7,.55],[1.1,1.45,.6],[1.7,1,.55]];for(const[a,o,l]of r){const c=new Ue(J(.72,.04,o),St(e,{doubleSide:!0}));c.position.set(t*a,-.02,l),c.castShadow=!0,n.add(c)}return n}function Rh(i,e,t,n){const s=new De;return s.name=n,s.position.set(t,.75,0),s.add(z(J(.21,.44,.23),i,{pos:[0,-.22,0]})),s.add(z(J(.18,.3,.2),i,{pos:[0,-.55,0]})),s.add(z(J(.24,.14,.34),e,{pos:[0,-.68,-.07]})),s}function yx(i,e,t){const n=new De;n.position.set(t,1.46,0),n.add(z(J(.16,.42,.16),i,{pos:[0,-.21,0]}));const s=new De;return s.position.set(0,-.42,0),s.rotation.x=-.12,s.add(z(J(.14,.4,.14),i,{pos:[0,-.2,0]})),s.add(z(J(.14,.15,.17),e,{pos:[0,-.43,.01],castShadow:!1})),n.add(s),n}function Mx(i,e){const t=new De;return t.position.set(e,1.46,0),t.rotation.x=.35,t.add(z(J(.16,.42,.16),i,{pos:[0,-.21,0]})),t}function bx(i,e){const t=new De;return t.name="weaponForearm",t.add(z(J(.14,.36,.14),i,{pos:[0,.18,.04],rot:[.45,0,0]})),t.add(z(J(.14,.15,.17),e,{pos:[0,0,.01],castShadow:!1})),t}function Ni(i={}){const e=i.skin??"eragonSkin",t=i.garb??"eragonGarb",n=i.hair??"eragonHair",s=i.boots??"boot",r=i.gloves??"glove",a=i.helm??!1,o=i.heavyArmor??!1,l=i.bodyScale??1,c=new De;c.name="rider";const h=new De;if(h.name="body",h.scale.set(l,1,l),c.add(h),h.add(z(J(.6,.7,.32),t,{pos:[0,1.15,0]})),h.add(z(J(.5,.35,.3),t,{pos:[0,.72,0]})),h.add(z(J(.7,.18,.36),t,{pos:[0,1.48,0]})),h.add(z(J(.62,.1,.34),"leather",{pos:[0,.9,0]})),i.tabard&&h.add(z(J(.4,.7,.06),i.tabard,{pos:[0,1.18,-.18]})),o&&(h.add(z(J(.68,.62,.38),"armorSteel",{pos:[0,1.2,0]})),h.add(z(J(.26,.22,.3),"armorSteel",{pos:[.44,1.5,0]})),h.add(z(J(.26,.22,.3),"armorSteel",{pos:[-.44,1.5,0]}))),i.cloak){const p=new Ue(J(.62,1.3,.05),St(i.cloak,{doubleSide:!0}));p.position.set(0,1,.22),p.rotation.x=.13,p.castShadow=!0,h.add(p);const f=new Ue(J(.78,.5,.05),St(i.cloak,{doubleSide:!0}));f.position.set(0,.42,.31),f.rotation.x=.22,f.castShadow=!0,h.add(f),h.add(z(J(.52,.1,.16),i.cloak,{pos:[0,1.52,.12]}))}const u=z($t(.24,0),e,{pos:[0,1.7,0],name:"head"});h.add(u);for(const p of[-.09,.09])h.add(z(J(.06,.06,.04),"riderEye",{pos:[p,1.73,-.21],castShadow:!1}));h.add(z(J(.06,.09,.07),e,{pos:[0,1.66,-.23],castShadow:!1})),h.add(z(J(.26,.04,.06),n,{pos:[0,1.8,-.18],castShadow:!1})),a?(h.add(z(J(.36,.28,.38),"armorSteel",{pos:[0,1.8,0]})),h.add(z(J(.06,.26,.07),"armorSteel",{pos:[0,1.7,-.21]}))):(h.add(z(J(.36,.22,.38),n,{pos:[0,1.84,0]})),h.add(z(J(.3,.26,.18),n,{pos:[0,1.74,.18]}))),h.add(yx(t,r,.42)),h.add(Mx(t,-.42));const d=Rh(t,s,.16,"legL"),m=Rh(t,s,-.16,"legR");h.add(d,m);const v=new De;v.name="weapon",v.position.set(-.5,.95,.05),v.rotation.set(-.2,0,.05),v.add(bx(t,r)),h.add(v);const _={body:h,weaponMount:v,head:u,legL:d,legR:m};return c.userData=_,c}function bs(i){return i.userData}function rc(i){return i.userData}function Ra(){const i=new De;return i.name="sword",i.add(z(J(.07,1,.02),"steel",{pos:[0,.6,0]})),i.add(z(J(.02,.8,.03),"ironDark",{pos:[0,.62,0],castShadow:!1})),i.add(z(J(.09,.12,.04),"ironDark",{pos:[0,.16,0],castShadow:!1})),i.add(z(lt(.06,.16,4),"steel",{pos:[0,1.18,0]})),i.add(z(J(.32,.08,.08),"ironDark",{pos:[0,.08,0],castShadow:!1})),i.add(z(Qt(.05,.05,.22,6),"leather",{pos:[0,-.08,0],castShadow:!1})),i.add(z(J(.11,.03,.11),"ironDark",{pos:[0,-.02,0],castShadow:!1})),i.add(z(J(.11,.03,.11),"ironDark",{pos:[0,-.14,0],castShadow:!1})),i.add(z($t(.07,0),"ironDark",{pos:[0,-.21,0],castShadow:!1})),i}function Td(){const i=new De;return i.name="hammer",i.add(z(Qt(.06,.07,1.2,6),"wood",{pos:[0,.4,0]})),i.add(z(J(.13,.04,.13),"leather",{pos:[0,.1,0],castShadow:!1})),i.add(z(J(.13,.04,.13),"leather",{pos:[0,.3,0],castShadow:!1})),i.add(z(J(.36,.34,.34),"ironDark",{pos:[0,1.05,0]})),i.add(z(J(.4,.08,.38),"steel",{pos:[0,1.2,0],castShadow:!1})),i.add(z(J(.4,.08,.38),"steel",{pos:[0,.9,0],castShadow:!1})),i.add(z(J(.16,.3,.3),"ironDark",{pos:[.28,1.05,0]})),i}function wx(){const i=new De;i.name="ballista",i.add(z(J(1.6,.3,1.6),"wood",{pos:[0,.15,0]})),i.add(z(Qt(.2,.25,.7,6),"wood",{pos:[0,.65,0]}));const e=new De;e.position.set(0,1,0),e.rotation.set(-.35,0,0),e.add(z(J(.3,.2,1.4),"wood",{pos:[0,0,-.2]})),e.add(z(J(1.8,.12,.12),"ironDark",{pos:[0,.1,-.7],rot:[0,0,0]})),e.add(z(J(1,.08,.08),"wood",{pos:[.5,.1,-.4],rot:[0,.5,0]})),e.add(z(J(1,.08,.08),"wood",{pos:[-.5,.1,-.4],rot:[0,-.5,0]}));const t=new Ue(Qt(.04,.05,1.6,6),Di(7208794,1.1));t.position.set(0,.12,-.2),t.rotation.set(Math.PI/2,0,0),t.name="lance",t.castShadow=!0;const n=new Ue(lt(.09,.4,5),Di(7208794,1.3));return n.position.set(0,.12,-1),n.rotation.set(-Math.PI/2,0,0),e.add(t,n),i.add(e),i.userData={lance:t},i}function Ex(i="eldunariGlow"){const e=new De;e.name="eldunari";const t=Ri(i),n=new Ue($t(.4,0),Di(t,1.6));n.name="gem",n.castShadow=!0,e.add(n);const s=new Ue($t(.55,0),St(i,{transparent:!0,opacity:.18,emissive:t,emissiveIntensity:.8}));return e.add(s),e.userData={gem:n},e}function Tx(i=120,e=18){const t=new De;t.name="city";const n=i/2;for(let s=0;s<e;s++){const r=-n+s/Math.max(1,e-1)*i+(Math.random()-.5)*4,a=3+Math.random()*5,o=6+Math.random()*18,l=3+Math.random()*5;if(t.add(z(J(a,o,l),"cityStone",{pos:[r,o/2,(Math.random()-.5)*8]})),Math.random()<.4){const c=new Ue($t(.6,0),Di(16742938,1.8));c.position.set(r,o+.4,0),t.add(c)}}return t}function Ax(i=12,e=6){const t=new De;t.name="wall";const n=1.4;t.add(z(J(i,e,n),"wallStone",{pos:[0,e/2,0]})),t.add(z(J(i+.2,e*.22,n+.3),"wallStoneDark",{pos:[0,e*.11,0]}));const s=1,r=.9,a=s+.8,o=Math.max(1,Math.floor(i/a)),l=-((o-1)*a)/2;for(let c=0;c<o;c++)t.add(z(J(s,r,n),"wallStone",{pos:[l+c*a,e+r/2,0]}));return t}function Rx(i=!1){const e=new De;e.name="gate";const t=8,n=2.4,s=2.4,r=4.5,a=r/2,o=6.2;for(const u of[-1,1]){const d=u*(a+n/2);e.add(z(J(n,t,s),"wallStone",{pos:[d,t/2,0]})),e.add(z(J(n+.4,.6,s+.4),"wallStoneDark",{pos:[d,t+.3,0]})),e.add(z(J(.7,.7,s),"wallStone",{pos:[d-.6,t+.95,0]})),e.add(z(J(.7,.7,s),"wallStone",{pos:[d+.6,t+.95,0]}))}e.add(z(J(r+n*.6,1.4,s),"wallStone",{pos:[0,o+.7,0]}));const l=new De;l.name="gateDoors";const c=r/2-.05;for(const u of[-1,1])l.add(z(J(c,o,.4),"wood",{pos:[u*(r/4),o/2,0]}));l.add(z(J(r,.22,.5),"ironDark",{pos:[0,o*.3,0]})),l.add(z(J(r,.22,.5),"ironDark",{pos:[0,o*.7,0]}));const h=new De;h.name="breachRubble";for(let u=0;u<8;u++){const d=new Ue($t(1,0),St("breachRubble")),m=.5+Math.random()*1.1;d.scale.set(m*(.8+Math.random()*.6),m*(.6+Math.random()*.5),m*(.8+Math.random()*.6)),d.position.set((Math.random()-.5)*r,m*.5,(Math.random()-.5)*1.6),d.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),d.castShadow=!0,h.add(d)}return l.visible=!i,h.visible=i,e.add(l,h),e.userData={doors:l,rubble:h},e}function Ch(i=6,e=7,t=6){const n=new De;n.name="building",n.add(z(J(i,e,t),"wallStone",{pos:[0,e/2,0]})),n.add(z(J(i+.2,e*.15,t+.2),"wallStoneDark",{pos:[0,e*.075,0]}));const s=new Ue(lt(Math.max(i,t)*.78,e*.5,4),St("roofTile"));return s.position.set(0,e+e*.25,0),s.rotation.y=Math.PI/4,s.castShadow=!0,n.add(s),n.add(z(J(1,1.8,.2),"wood",{pos:[0,.9,-t/2-.01]})),n.add(z(J(.8,.8,.15),"wallStoneDark",{pos:[-i*.28,e*.6,-t/2-.01]})),n.add(z(J(.8,.8,.15),"wallStoneDark",{pos:[i*.28,e*.6,-t/2-.01]})),n}function Cx(i="bannerRed"){const e=new De;e.name="banner",e.add(z(Qt(.06,.06,2,6),"wood",{pos:[0,0,0],rot:[0,0,Math.PI/2]}));const t=new Ue(J(1.6,3,.06),St(i,{doubleSide:!0}));t.position.set(0,-1.6,0),t.name="cloth",t.castShadow=!0,e.add(t);const n=new Ue(lt(1.13,.7,4),St(i,{doubleSide:!0}));return n.position.set(0,-3.45,0),n.rotation.set(Math.PI,Math.PI/4,0),n.castShadow=!0,e.add(n),e.add(z(J(.7,.7,.08),"wallStoneDark",{pos:[0,-1.6,.05]})),e.userData={cloth:t},e}function kl(){const i=new De;i.name="helgrind";const e=new Ue($t(1,0),St("stoneDark"));e.scale.set(34,10,22),e.position.set(0,2,0),e.castShadow=!0,i.add(e);const t=[[-14,2,46,6],[-4,-3,62,7],[7,1,52,6.5],[16,-2,40,5]];for(const[n,s,r,a]of t){const o=new Ue(lt(a,r,5),St("shruikan"));o.position.set(n,r/2,s),o.castShadow=!0,i.add(o);const l=new Ue($t(1,0),St("shruikan"));l.scale.set(a*.9,r*.32,a*.9),l.position.set(n+a*.4,r*.2,s+a*.3),l.rotation.set(.3,n,.2),l.castShadow=!0,i.add(l)}return i}function Px(){const i=new De;i.name="perch";const e=2.6,t=2.6;i.add(z(J(e,.3,t),"roofTile",{pos:[0,0,0]}));const n=1.2,s=e/2-.25,r=t/2-.25;for(const a of[-s,s])for(const o of[-r,r])i.add(z(J(.2,n,.2),"wood",{pos:[a,-n/2-.15,o]}));return i.add(z(J(e,.5,.2),"wallStoneDark",{pos:[0,.4,-t/2+.1]})),i}function Lx(){const i=new De;i.name="galbatorix",i.add(z(lt(.85,1.7,6),"citadelBlack",{pos:[0,.85,0]})),i.add(z(Qt(.88,.92,.18,6),"gold",{pos:[0,.12,0]})),i.add(z(J(.85,.9,.45),"citadelBlack",{pos:[0,1.85,0]})),i.add(z(J(1.15,.28,.6),"throneDark",{pos:[0,2.18,0]})),i.add(z(J(.9,.12,.5),"gold",{pos:[0,1.5,0]}));const e=z($t(.26,0),"elfTone",{pos:[0,2.6,0],name:"head"});i.add(e),i.add(z(Qt(.28,.3,.18,8),"gold",{pos:[0,2.86,0]}));const t=8;for(let s=0;s<t;s++){const r=s/t*Math.PI*2;i.add(z(lt(.05,.22,4),"gold",{pos:[Math.cos(r)*.27,3.02,Math.sin(r)*.27]}))}i.add(z(J(.22,.85,.22),"citadelBlack",{pos:[.55,1.85,0]})),i.add(z(J(.22,.85,.22),"citadelBlack",{pos:[-.55,1.85,0]}));const n=new De;return n.position.set(-.62,1.5,.15),n.rotation.set(.15,0,.08),n.add(z(J(.09,1.5,.03),"citadelBlack",{pos:[0,-.6,0]})),n.add(z(lt(.07,.22,4),"citadelBlack",{pos:[0,-1.45,0],rot:[Math.PI,0,0]})),n.add(z(J(.34,.09,.09),"ironDark",{pos:[0,.1,0]})),n.add(z($t(.07,0),"gold",{pos:[0,.28,0]})),i.add(n),i.userData={head:e},i}function Dx(){const i=new De;i.name="throne",i.add(z(J(4.4,.5,4),"throneDark",{pos:[0,.25,0]})),i.add(z(J(3.4,.5,3.2),"citadelBlack",{pos:[0,.75,0]})),i.add(z(J(2.4,.5,2),"throneDark",{pos:[0,1.25,0]})),i.add(z(J(2.4,3.6,.6),"citadelBlack",{pos:[0,3,.9]}));for(const t of[-1,1])i.add(z(J(.5,1.3,2),"throneDark",{pos:[t*1.45,1.9,0]}));const e=[[-.8,1],[0,1.4],[.8,1]];for(const[t,n]of e)i.add(z(lt(.22,n,5),"citadelBlack",{pos:[t,4.8+n/2-.6,.9]}));return i}function Ix(i=12){const e=new De;e.name="pillar";const t=.8,n=.8,s=Math.max(1,i-t-n);return e.add(z(J(1.6,t,1.6),"throneDark",{pos:[0,t/2,0]})),e.add(z(Qt(.55,.65,s,8),"citadelBlack",{pos:[0,t+s/2,0]})),e.add(z(J(1.6,n,1.6),"throneDark",{pos:[0,t+s+n/2,0]})),e}function Ux(i="eldunariGlow"){const e=new De;e.name="eldunariAnchor";const t=Ri(i),n=new Ue($t(.9,0),Di(t,2.4));n.name="gem",n.castShadow=!0,e.add(n);const s=new Ue($t(1.4,0),St(i,{transparent:!0,opacity:.16,emissive:t,emissiveIntensity:1}));return e.add(s),e.userData={gem:n},e}class Nx{constructor(e){this.scene=e}entities=[];add(e){return this.entities.push(e),e.mesh&&(e.mesh.position.copy(e.position),e.mesh.quaternion.copy(e.quaternion),this.scene.add(e.mesh)),e.prevPosition.copy(e.position),e.prevQuat.copy(e.quaternion),e}remove(e){const t=this.entities.indexOf(e);t!==-1&&(this.entities.splice(t,1),this.disposeEntity(e))}forEach(e){for(const t of this.entities)e(t)}get count(){return this.entities.length}animateAll(e){for(const t of this.entities)t.animate(e)}capturePrevTransforms(){for(const e of this.entities)e.prevPosition.copy(e.position),e.prevQuat.copy(e.quaternion)}update(e,t){for(const n of this.entities.slice())n.alive&&n.update(e,t);for(let n=this.entities.length-1;n>=0;n--){const s=this.entities[n];!s.alive&&!s.dying&&(this.entities.splice(n,1),this.disposeEntity(s))}}query(e){const t=[];for(const n of this.entities)n.alive&&nc(n)&&n.team===e&&t.push(n);return t}queryRadius(e,t){const n=t*t,s=[];for(const r of this.entities)r.alive&&r.position.distanceToSquared(e)<=n&&s.push(r);return s}clear(){for(const e of this.entities)this.disposeEntity(e);this.entities.length=0}disposeEntity(e){const t=e.mesh;t&&(this.scene.remove(t),t.traverse(n=>{const s=n;if(s.isMesh){const r=s.geometry;r&&!Ed(r)&&r.dispose();const a=s.material;if(Array.isArray(a))for(const o of a)Eh(o)||o.dispose();else a&&!Eh(a)&&a.dispose()}}))}}class Fx{context=null;master=null;noiseBuffer=null;muted=!1;resume(){try{if(!this.context){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=this.muted?0:.6,this.master.connect(this.context.destination),this.noiseBuffer=this.buildNoiseBuffer(this.context)}this.context.state==="suspended"&&this.context.resume()}catch(e){console.warn("AudioManager: audio unavailable, continuing muted.",e),this.context=null,this.master=null,this.noiseBuffer=null}}play(e){const t=this.context,n=this.master;if(!(this.muted||!t||!n||t.state!=="running"))try{this.synth(e,t,n)}catch(s){console.warn(`AudioManager: failed to play "${e}".`,s)}}toggleMute(){return this.muted=!this.muted,this.master&&this.context&&this.master.gain.setValueAtTime(this.muted?0:.6,this.context.currentTime),this.muted}get isMuted(){return this.muted}synth(e,t,n){switch(e){case"ui-click":this.tone(t,n,{type:"sine",freq:430,freqEnd:300,dur:.05,gain:.16}),this.noise(t,n,{dur:.025,gain:.07,cutoff:2200});break;case"shout":this.tone(t,n,{type:"triangle",freq:this.vary(300,.1),freqEnd:190,dur:.14,gain:.18});break;case"cast":this.tone(t,n,{type:"triangle",freq:320,freqEnd:880,dur:.28,gain:.3}),this.tone(t,n,{type:"sine",freq:640,freqEnd:1320,dur:.22,gain:.18,delay:.02});break;case"melee-hit":{const s=this.vary(135,.18);this.tone(t,n,{type:"triangle",freq:s,freqEnd:s*.45,dur:.11,gain:.3}),this.noise(t,n,{dur:.07,gain:.34,cutoff:this.vary(1500,.25),cutoffEnd:480});break}case"fire":case"fire-breath":this.noise(t,n,{dur:.34,gain:.28,cutoff:this.vary(1400,.18),cutoffEnd:600}),this.tone(t,n,{type:"sawtooth",freq:this.vary(120,.14),freqEnd:70,dur:.3,gain:.12});break;case"death":this.tone(t,n,{type:"sawtooth",freq:260,freqEnd:50,dur:.55,gain:.3}),this.noise(t,n,{dur:.5,gain:.16,cutoff:1200,cutoffEnd:300});break;case"ballista-charge":this.tone(t,n,{type:"sawtooth",freq:90,freqEnd:260,dur:.55,gain:.16});break;case"ballista-fire":this.tone(t,n,{type:"square",freq:520,freqEnd:120,dur:.14,gain:.28}),this.noise(t,n,{dur:.12,gain:.26,cutoff:3200});break;case"dragon-roar":this.tone(t,n,{type:"sawtooth",freq:180,freqEnd:70,dur:.6,gain:.34}),this.tone(t,n,{type:"square",freq:90,freqEnd:45,dur:.6,gain:.2}),this.noise(t,n,{dur:.55,gain:.18,cutoff:900,cutoffEnd:300});break;case"ward-break":this.tone(t,n,{type:"square",freq:880,freqEnd:440,dur:.18,gain:.22}),this.tone(t,n,{type:"square",freq:1170,freqEnd:520,dur:.16,gain:.18}),this.noise(t,n,{dur:.2,gain:.26,cutoff:5e3});break;case"heal":this.tone(t,n,{type:"sine",freq:523,dur:.16,gain:.22}),this.tone(t,n,{type:"sine",freq:659,dur:.16,gain:.22,delay:.08}),this.tone(t,n,{type:"sine",freq:784,dur:.2,gain:.22,delay:.16});break;case"win":this.tone(t,n,{type:"triangle",freq:523,dur:.18,gain:.3}),this.tone(t,n,{type:"triangle",freq:659,dur:.18,gain:.3,delay:.14}),this.tone(t,n,{type:"triangle",freq:784,dur:.18,gain:.3,delay:.28}),this.tone(t,n,{type:"triangle",freq:1047,dur:.32,gain:.32,delay:.42});break;case"lose":this.tone(t,n,{type:"sawtooth",freq:392,dur:.22,gain:.28}),this.tone(t,n,{type:"sawtooth",freq:311,dur:.22,gain:.28,delay:.18}),this.tone(t,n,{type:"sawtooth",freq:196,dur:.5,gain:.3,delay:.36});break}}vary(e,t){return e*(1+(Math.random()-.5)*t)}tone(e,t,n){const s=e.currentTime+(n.delay??0),r=s+n.dur,a=n.gain??.25,o=e.createOscillator();o.type=n.type,o.frequency.setValueAtTime(n.freq,s),n.freqEnd!==void 0&&o.frequency.exponentialRampToValueAtTime(Math.max(1,n.freqEnd),r);const l=e.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(a,s+Math.min(.012,n.dur*.3)),l.gain.exponentialRampToValueAtTime(1e-4,r),o.connect(l),l.connect(t),o.start(s),o.stop(r+.02)}noise(e,t,n){if(!this.noiseBuffer)return;const s=e.currentTime+(n.delay??0),r=s+n.dur,a=n.gain??.2,o=e.createBufferSource();o.buffer=this.noiseBuffer;const l=e.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(n.cutoff??2e3,s),n.cutoffEnd!==void 0&&l.frequency.exponentialRampToValueAtTime(Math.max(1,n.cutoffEnd),r);const c=e.createGain();c.gain.setValueAtTime(a,s),c.gain.exponentialRampToValueAtTime(1e-4,r),o.connect(l),l.connect(c),c.connect(t),o.start(s),o.stop(r+.02)}buildNoiseBuffer(e){const t=Math.floor(e.sampleRate*.6),n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}}const Ph=-1e5,Kn=new Re,Ln=12,gi=new w;class Ca extends sr{capacity;positions;colors;velX;velY;velZ;life;gravity;cursor=0;geometry;posAttr;colorAttr;ringGeometry;ringMeshes=[];ringMats=[];ringAge=new Float32Array(Ln);ringLife=new Float32Array(Ln);ringFrom=new Float32Array(Ln);ringTo=new Float32Array(Ln);ringOpacity=new Float32Array(Ln);ringActive=new Uint8Array(Ln);ringCursor=0;constructor(e=600){super(),this.capacity=e,this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.velX=new Float32Array(e),this.velY=new Float32Array(e),this.velZ=new Float32Array(e),this.life=new Float32Array(e),this.gravity=new Float32Array(e);for(let r=0;r<e;r++)this.positions[r*3+1]=Ph;this.geometry=new Ft,this.posAttr=new Bt(this.positions,3),this.colorAttr=new Bt(this.colors,3),this.posAttr.setUsage(er),this.colorAttr.setUsage(er),this.geometry.setAttribute("position",this.posAttr),this.geometry.setAttribute("color",this.colorAttr);const t=new Jl({size:.4,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Ci}),n=new Fl(this.geometry,t);n.frustumCulled=!1;const s=new De;s.add(n),this.ringGeometry=new ec(.86,1,40);for(let r=0;r<Ln;r++){const a=new ms({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:pn,blending:Ci}),o=new Ue(this.ringGeometry,a);o.rotation.x=-Math.PI/2,o.visible=!1,o.frustumCulled=!1,this.ringMeshes.push(o),this.ringMats.push(a),s.add(o)}this.mesh=s,this.collider={radius:0}}burst(e,t={}){const n=Math.min(t.count??12,this.capacity),s=t.color??16755251,r=t.speed??6,a=t.speedJitter??4,o=t.life??.5,l=t.gravity??9;Kn.set(s);for(let c=0;c<n;c++){const h=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const u=h*3;this.positions[u]=e.x,this.positions[u+1]=e.y,this.positions[u+2]=e.z;const d=Math.random()*Math.PI*2,m=Math.random()*2-1,v=Math.sqrt(Math.max(0,1-m*m)),_=r+Math.random()*a;this.velX[h]=Math.cos(d)*v*_,this.velY[h]=Math.abs(m)*_,this.velZ[h]=Math.sin(d)*v*_,this.colors[u]=Kn.r,this.colors[u+1]=Kn.g,this.colors[u+2]=Kn.b,this.life[h]=o,this.gravity[h]=l}}fireBurst(e,t=16){this.burst(e,{count:t,color:16747038,speed:4,speedJitter:5,life:.5,gravity:-2})}sparkBurst(e,t=12){this.burst(e,{count:t,color:16773792,speed:8,speedJitter:6,life:.3,gravity:14})}fireBreath(e,t,n=14){gi.copy(t),gi.lengthSq()<1e-6&&gi.set(0,0,-1),gi.normalize(),Kn.set(Math.random()<.5?16747038:16765514);for(let s=0;s<n;s++){const r=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const a=r*3;this.positions[a]=e.x,this.positions[a+1]=e.y,this.positions[a+2]=e.z;const o=10+Math.random()*14;this.velX[r]=gi.x*o+(Math.random()-.5)*5,this.velY[r]=gi.y*o+(Math.random()-.5)*5,this.velZ[r]=gi.z*o+(Math.random()-.5)*5,this.colors[a]=Kn.r,this.colors[a+1]=Kn.g,this.colors[a+2]=Kn.b,this.life[r]=.28+Math.random()*.22,this.gravity[r]=-3}}shockwaveRing(e,t=16777215,n={}){const s=this.ringCursor;this.ringCursor=(this.ringCursor+1)%Ln;const r=this.ringMeshes[s],a=this.ringMats[s];r.position.set(e.x,e.y+.15,e.z),r.visible=!0,a.color.set(t),this.ringActive[s]=1,this.ringAge[s]=0,this.ringLife[s]=n.life??.5,this.ringFrom[s]=n.from??.5,this.ringTo[s]=n.to??7,this.ringOpacity[s]=n.opacity??.8;const o=this.ringFrom[s];r.scale.set(o,o,o),a.opacity=this.ringOpacity[s]}update(e,t){for(let n=0;n<this.capacity;n++){if(this.life[n]<=0)continue;this.life[n]-=e;const s=n*3;if(this.life[n]<=0){this.positions[s+1]=Ph;continue}this.velY[n]-=this.gravity[n]*e,this.positions[s]+=this.velX[n]*e,this.positions[s+1]+=this.velY[n]*e,this.positions[s+2]+=this.velZ[n]*e}this.posAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0;for(let n=0;n<Ln;n++){if(this.ringActive[n]===0)continue;this.ringAge[n]+=e;const s=this.ringAge[n]/this.ringLife[n];if(s>=1){this.ringActive[n]=0,this.ringMeshes[n].visible=!1,this.ringMats[n].opacity=0;continue}const r=1-(1-s)*(1-s),a=this.ringFrom[n]+(this.ringTo[n]-this.ringFrom[n])*r;this.ringMeshes[n].scale.set(a,a,a),this.ringMats[n].opacity=this.ringOpacity[n]*(1-s)}}}let Ad=null;function ai(i){Ad=i}function Be(){return Ad}const _n=new nt,Fs=new w,Or=new w,Br=new ct,Lh=new w(0,-1e4,0),Dh=new w(0,0,0),ks=new Re;class Fi extends sr{capacity;px;py;pz;vx;vy;vz;ttl;damage;radius;active;targetTeam;cursor=0;instanced;halo;constructor(e=160){super(),this.capacity=e,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.ttl=new Float32Array(e),this.damage=new Float32Array(e),this.radius=new Float32Array(e),this.active=new Uint8Array(e),this.targetTeam=new Array(e).fill("enemy");const t=new wa(1,8,6),n=new ms({vertexColors:!0,blending:Ci});this.instanced=new Ul(t,n,e),this.instanced.instanceMatrix.setUsage(er),this.instanced.frustumCulled=!1;const s=new ms({vertexColors:!0,transparent:!0,opacity:.35,depthWrite:!1,blending:Ci});this.halo=new Ul(t,s,e),this.halo.instanceMatrix.setUsage(er),this.halo.frustumCulled=!1;for(let a=0;a<e;a++)_n.compose(Lh,Br,Dh),this.instanced.setMatrixAt(a,_n),this.halo.setMatrixAt(a,_n),this.instanced.setColorAt(a,ks.set(16755251)),this.halo.setColorAt(a,ks);this.instanced.instanceMatrix.needsUpdate=!0,this.halo.instanceMatrix.needsUpdate=!0,this.instanced.instanceColor&&(this.instanced.instanceColor.needsUpdate=!0),this.halo.instanceColor&&(this.halo.instanceColor.needsUpdate=!0);const r=new De;r.add(this.instanced,this.halo),this.mesh=r,this.collider={radius:0}}static HALO_SCALE=2.1;spawn(e){const t=this.acquire();this.px[t]=e.position.x,this.py[t]=e.position.y,this.pz[t]=e.position.z,this.vx[t]=e.velocity.x,this.vy[t]=e.velocity.y,this.vz[t]=e.velocity.z,this.ttl[t]=e.ttl,this.damage[t]=e.damage,this.radius[t]=e.radius,this.active[t]=1,this.targetTeam[t]=e.team==="player"?"enemy":"player",ks.set(e.color??16755251),this.instanced.setColorAt(t,ks),this.halo.setColorAt(t,ks),this.instanced.instanceColor&&(this.instanced.instanceColor.needsUpdate=!0),this.halo.instanceColor&&(this.halo.instanceColor.needsUpdate=!0)}update(e,t){for(let n=0;n<this.capacity;n++){if(this.active[n]===0)continue;if(this.px[n]+=this.vx[n]*e,this.py[n]+=this.vy[n]*e,this.pz[n]+=this.vz[n]*e,this.ttl[n]-=e,this.ttl[n]<=0){this.deactivate(n);continue}Fs.set(this.px[n],this.py[n],this.pz[n]);const s=t.query(this.targetTeam[n]);let r=!1;for(const l of s){if(!l.alive)continue;const c=this.radius[n]+l.collider.radius;if(Fs.distanceToSquared(l.position)<=c*c){l.takeDamage(this.damage[n],void 0),Be()?.fireBurst(Fs),this.deactivate(n),r=!0;break}}if(r)continue;const a=this.radius[n];Or.set(a,a,a),_n.compose(Fs,Br,Or),this.instanced.setMatrixAt(n,_n);const o=a*Fi.HALO_SCALE;Or.set(o,o,o),_n.compose(Fs,Br,Or),this.halo.setMatrixAt(n,_n)}this.instanced.instanceMatrix.needsUpdate=!0,this.halo.instanceMatrix.needsUpdate=!0}clearTeam(e){let t=!1;for(let n=0;n<this.capacity;n++){if(this.active[n]===0)continue;(this.targetTeam[n]==="player"?"enemy":"player")===e&&(this.deactivate(n),t=!0)}t&&(this.instanced.instanceMatrix.needsUpdate=!0,this.halo.instanceMatrix.needsUpdate=!0)}deactivate(e){this.active[e]=0,_n.compose(Lh,Br,Dh),this.instanced.setMatrixAt(e,_n),this.halo.setMatrixAt(e,_n)}acquire(){for(let t=0;t<this.capacity;t++){const n=(this.cursor+t)%this.capacity;if(this.active[n]===0)return this.cursor=(n+1)%this.capacity,n}const e=this.cursor;return this.cursor=(e+1)%this.capacity,e}}let Rd=null;function Hn(i){Rd=i}function pa(){return Rd}class kx{constructor(e,t,n,s){this.entities=e,this.scene=t,this.audio=n,this.save=s}spawnProjectile(e){let t=pa();t||(t=new Fi,this.entities.add(t),Hn(t)),t.spawn(e)}query(e){return this.entities.query(e)}}const zr="inheritance.save.v1";class Ih extends Error{constructor(e,t){super(e,t),this.name="SaveError"}}function aa(){return{eldunariCollected:[],unlockedSpells:[],levelsCleared:[]}}function Ox(i){const e=aa();if(i&&typeof i=="object"){const t=i;Array.isArray(t.eldunariCollected)&&(e.eldunariCollected=t.eldunariCollected.filter(n=>typeof n=="string")),Array.isArray(t.unlockedSpells)&&(e.unlockedSpells=t.unlockedSpells.filter(n=>typeof n=="string")),Array.isArray(t.levelsCleared)&&(e.levelsCleared=t.levelsCleared.filter(n=>typeof n=="string"))}return e}class Bx{eldunariCollected;unlockedSpells;levelsCleared;storageOk=!0;constructor(){const e=this.read();this.eldunariCollected=e.eldunariCollected,this.unlockedSpells=e.unlockedSpells,this.levelsCleared=e.levelsCleared}get maxEnergyBonus(){return this.eldunariCollected.length*tc}isCollected(e){return this.eldunariCollected.includes(e)}collect(e){this.eldunariCollected.includes(e)||(this.eldunariCollected.push(e),this.persist())}unlockSpell(e){this.unlockedSpells.includes(e)||(this.unlockedSpells.push(e),this.persist())}markLevelCleared(e){this.levelsCleared.includes(e)||(this.levelsCleared.push(e),this.persist())}reset(){this.eldunariCollected=[],this.unlockedSpells=[],this.levelsCleared=[],this.persist()}read(){if(!this.storageOk)return aa();try{const e=localStorage.getItem(zr);return e===null?aa():Ox(JSON.parse(e))}catch(e){return this.storageOk=!1,this.reportError(new Ih(`Failed to read save "${zr}"`,{cause:e})),aa()}}persist(){if(!this.storageOk)return;const e={eldunariCollected:[...this.eldunariCollected],unlockedSpells:[...this.unlockedSpells],levelsCleared:[...this.levelsCleared]};try{localStorage.setItem(zr,JSON.stringify(e))}catch(t){this.storageOk=!1,this.reportError(new Ih(`Failed to write save "${zr}"`,{cause:t}))}}reportError(e){console.warn(`[SaveManager] ${e.message} — falling back to in-memory save.`,e.cause)}}class zx{constructor(e,t){this.hooks=t,this.root=document.createElement("div"),Object.assign(this.root.style,{position:"fixed",top:"12px",left:"12px",padding:"10px 12px",background:"rgba(8, 12, 20, 0.82)",border:"1px solid #2a3a55",borderRadius:"6px",font:"12px/1.5 ui-monospace, monospace",color:"#cfe3ff",display:"none",zIndex:"50",minWidth:"180px"});const n=document.createElement("div");n.textContent="DEBUG",n.style.fontWeight="700",n.style.letterSpacing="0.12em",n.style.marginBottom="6px",this.root.appendChild(n),this.readout=document.createElement("pre"),this.readout.style.margin="0 0 8px",this.readout.textContent="",this.root.appendChild(this.readout),this.godmodeButton=this.makeButton("Godmode: OFF",()=>{this.godmode=!this.godmode,this.godmodeButton.textContent=`Godmode: ${this.godmode?"ON":"OFF"}`,this.hooks.setGodmode(this.godmode)}),this.root.appendChild(this.makeButton("Force WIN",()=>this.hooks.forceWin())),this.root.appendChild(this.makeButton("Force LOSE",()=>this.hooks.forceLose())),e.appendChild(this.root)}root;readout;godmodeButton;visible=!1;godmode=!1;toggle(){this.setVisible(!this.visible)}setVisible(e){this.visible=e,this.root.style.display=e?"block":"none"}get isVisible(){return this.visible}sync(e){if(!this.visible)return;const t=e.health===null?"n/a":e.health.toFixed(0),n=e.energy===null?"n/a":e.energy.toFixed(0);this.readout.textContent=`fps    ${e.fps.toFixed(0)}
health ${t}
energy ${n}`}makeButton(e,t){const n=document.createElement("button");return n.textContent=e,Object.assign(n.style,{display:"block",width:"100%",marginTop:"4px",padding:"4px 6px",background:"#1b2740",color:"#cfe3ff",border:"1px solid #34507e",borderRadius:"4px",cursor:"pointer",font:"inherit"}),n.addEventListener("click",t),n}}const Hx={objective:"",spells:[],roster:[]};function Gx(i){if(!i)return null;const e=i;return typeof e.health=="number"&&typeof e.maxHealth=="number"&&typeof e.energy=="number"&&typeof e.maxEnergy=="number"&&typeof e.wardHp=="number"&&typeof e.magicEnabled=="boolean"?e:null}const Eo=4;class Vx{root;objectiveEl;healthFill;energyFill;wardFill;vitalsEl;slotsEl;slots=[];rosterEl;rosterChips=[];swapChip;damageEl;lastActive=null;lastHealth=null;visible=!1;constructor(e){this.root=document.createElement("div"),this.root.className="hud",this.root.style.pointerEvents="none",this.root.style.display="none",this.objectiveEl=document.createElement("div"),this.objectiveEl.className="hud__objective",this.root.appendChild(this.objectiveEl),this.vitalsEl=document.createElement("div"),this.vitalsEl.className="hud__vitals";const t=this.makeBar("hud__bar--health");this.healthFill=t.fill,this.vitalsEl.appendChild(t.root);const n=this.makeBar("hud__bar--energy");this.energyFill=n.fill,this.wardFill=document.createElement("div"),this.wardFill.className="hud__bar-ward",n.root.appendChild(this.wardFill),this.vitalsEl.appendChild(n.root),this.root.appendChild(this.vitalsEl),this.slotsEl=document.createElement("div"),this.slotsEl.className="hud__slots";for(let r=0;r<Eo;r++){const a=document.createElement("div");a.className="hud__slot";const o=document.createElement("span");o.className="hud__slot-key";const l=document.createElement("span");l.className="hud__slot-name";const c=document.createElement("div");c.className="hud__slot-cd",a.appendChild(c),a.appendChild(o),a.appendChild(l),this.slotsEl.appendChild(a),this.slots.push({root:a,key:o,name:l,cd:c})}this.root.appendChild(this.slotsEl);const s=document.createElement("div");s.className="hud__rightcol",this.swapChip=document.createElement("div"),this.swapChip.className="hud__swap",this.swapChip.style.display="none",s.appendChild(this.swapChip),this.rosterEl=document.createElement("div"),this.rosterEl.className="hud__roster",s.appendChild(this.rosterEl),this.root.appendChild(s),this.damageEl=document.createElement("div"),this.damageEl.className="hud__damage",this.damageEl.style.pointerEvents="none",this.root.appendChild(this.damageEl),e.appendChild(this.root)}setVisible(e){this.visible!==e&&(this.visible=e,this.root.style.display=e?"block":"none")}sync(e,t){if(!this.visible)return;const n=Gx(e);if(this.syncDamageFlash(e,n),n){this.vitalsEl.style.visibility="visible",this.healthFill.style.width=`${Uh(n.health,n.maxHealth)}%`;const s=n.maxEnergy>0;if(this.energyFill.parentElement.style.display=s?"block":"none",s){this.energyFill.style.width=`${Uh(n.energy,n.maxEnergy)}%`;const r=oa(n.wardHp/Ta.wardHp);this.wardFill.style.width=`${r*100}%`,this.wardFill.style.opacity=r>0?"1":"0"}}else this.vitalsEl.style.visibility="hidden";this.objectiveEl.textContent=t.objective,this.objectiveEl.style.visibility=t.objective?"visible":"hidden",this.syncSlots(t.spells),this.syncRoster(t.roster),this.syncSwapHint(t.swapHint)}dispose(){this.root.remove()}syncDamageFlash(e,t){const n=t?t.health:null;if(e!==this.lastActive){this.lastActive=e,this.lastHealth=n;return}const s=this.lastHealth;this.lastHealth=n,s!==null&&n!==null&&n<s&&this.flashDamage(s-n)}flashDamage(e){try{const t=this.damageEl,n=(.32+oa(e/60)*.38).toFixed(3);t.style.setProperty("--dmg-flash",n),t.style.animation="none",t.offsetWidth,t.style.animation="hud-damage-flash 0.32s ease-out"}catch{}}syncSlots(e){const t=Math.min(e.length,Eo);this.slotsEl.style.display=t>0?"flex":"none";for(let n=0;n<Eo;n++){const s=this.slots[n];if(n>=t){s.root.style.display="none";continue}const r=e[n];s.root.style.display="flex",s.key.textContent=r.key,s.name.textContent=r.name,s.cd.style.height=`${oa(r.cooldownFrac)*100}%`,s.root.classList.toggle("is-ready",r.ready),s.root.classList.toggle("is-busy",!r.ready)}}syncRoster(e){for(this.rosterEl.style.display=e.length>0?"flex":"none";this.rosterChips.length<e.length;){const t=document.createElement("div");t.className="hud__char",this.rosterEl.appendChild(t),this.rosterChips.push(t)}for(let t=0;t<this.rosterChips.length;t++){const n=this.rosterChips[t],s=e[t];if(!s){n.style.display="none";continue}if(n.style.display="block",n.textContent=s.name,n.classList.toggle("is-active",s.active),n.classList.toggle("is-unavailable",!s.available),s.urgent){const r=(Math.sin(performance.now()/110)+1)/2;n.style.boxShadow=`0 0 ${6+r*12}px rgba(255,70,70,${.45+r*.55})`}else n.style.boxShadow&&(n.style.boxShadow="")}}syncSwapHint(e){if(!e){this.swapChip.style.display="none";return}this.swapChip.style.display="block";const t=e.available&&e.name!==null;this.swapChip.classList.toggle("is-disabled",!t),this.swapChip.textContent=t?`F → ${e.name}`:"F · land to swap"}makeBar(e){const t=document.createElement("div");t.className=`hud__bar ${e}`;const n=document.createElement("div");return n.className="hud__bar-fill",t.appendChild(n),{root:t,fill:n}}}function Uh(i,e){return e<=0?0:oa(i/e)*100}function oa(i){return Number.isNaN(i)||i<0?0:i>1?1:i}const Wx=[["Mouse (flight)","steer — pitch + turn"],["W / S (flight)","throttle up / down"],["A / D (flight)","turn left / right"],["1 (flight)","fire-breath"],["WASD (ground)","move"],["Shift (ground)","sprint"],["Mouse (ground)","aim"],["LMB","attack / claw"],["RMB","heavy / finisher"],["Space","dodge"],["1-4","spells"],["F","swap character"]];class Xx{constructor(e,t){this.actions=t,this.title=this.makeTitleOverlay(e),this.levelList=this.title.root.querySelector(".menu__levels"),this.pause=this.makeOverlay(e,"menu--pause",{title:"Paused",subtitle:"Pointer-lock released",button:{label:"Resume",onClick:()=>this.actions.onResume()}}),this.win=this.makeOverlay(e,"menu--win",{title:"Victory",subtitle:"The duel is won.",button:{label:"Continue",onClick:()=>this.actions.onContinue()}}),this.lose=this.makeOverlay(e,"menu--lose",{title:"Defeated",subtitle:"You have fallen.",button:{label:"Retry",onClick:()=>this.actions.onRetry()}}),this.all=[this.title,this.pause,this.win,this.lose]}title;pause;win;lose;all;levelList;render(e){e==="TITLE"&&this.rebuildLevelList();const t=this.overlayFor(e);for(const n of this.all)n.root.style.display=n===t?"flex":"none"}setEndText(e,t,n){const s=e==="WON"?this.win:this.lose;s.title.textContent=t,s.subtitle.textContent=n}dispose(){for(const e of this.all)e.root.remove()}overlayFor(e){switch(e){case"TITLE":return this.title;case"PAUSED":return this.pause;case"WON":return this.win;case"LOST":return this.lose;default:return null}}rebuildLevelList(){this.levelList.replaceChildren();for(const e of this.actions.getLevelCatalog()){const t=document.createElement("button");t.type="button",t.className="menu__level",e.cleared&&t.classList.add("is-cleared"),e.unlocked||(t.classList.add("is-locked"),t.disabled=!0);const n=document.createElement("span");n.className="menu__level-name",n.textContent=`Level ${e.index+1}: ${e.title}`;const s=document.createElement("span");s.className="menu__level-tag",s.textContent=e.cleared?"✓":e.unlocked?"":"Locked",t.appendChild(n),t.appendChild(s),e.unlocked&&t.addEventListener("click",()=>this.actions.onSelectLevel(e.id)),this.levelList.appendChild(t)}}makeTitleOverlay(e){const t=document.createElement("div");t.className="menu menu--title";const n=document.createElement("div");n.className="menu__panel menu__panel--title";const s=document.createElement("div");s.className="menu__title",s.textContent="INHERITANCE";const r=document.createElement("div");r.className="menu__sub",r.textContent="Eragon — The Inheritance Cycle, Book IV";const a=document.createElement("div");a.className="menu__levels";const o=document.createElement("button");o.className="menu__btn menu__btn--small",o.type="button",o.textContent="New Game",o.addEventListener("click",()=>this.actions.onNewGame());const l=document.createElement("div");l.className="menu__controls";for(const[c,h]of Wx){const u=document.createElement("span");u.className="menu__control";const d=document.createElement("b");d.textContent=c,u.appendChild(d),u.appendChild(document.createTextNode(` ${h}`)),l.appendChild(u)}return n.appendChild(s),n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(l),t.appendChild(n),e.appendChild(t),{root:t,title:s,subtitle:r}}makeOverlay(e,t,n){const s=document.createElement("div");s.className=`menu ${t}`;const r=document.createElement("div");r.className="menu__panel";const a=document.createElement("div");a.className="menu__title",a.textContent=n.title;const o=document.createElement("div");o.className="menu__sub",o.textContent=n.subtitle;const l=document.createElement("button");return l.className="menu__btn",l.type="button",l.textContent=n.button.label,l.addEventListener("click",n.button.onClick),r.appendChild(a),r.appendChild(o),r.appendChild(l),s.appendChild(r),e.appendChild(s),{root:s,title:a,subtitle:o}}}class qx{el;constructor(e){this.el=document.createElement("div"),this.el.className="transition-veil",this.el.style.pointerEvents="none",e.appendChild(this.el)}cover(){this.el.style.transition="none",this.el.style.opacity="1",this.el.offsetWidth}reveal(){this.el.style.transition="",this.el.style.opacity="0"}dispose(){this.el.remove()}}function Yx(i){return typeof i.currentStrike=="function"}function jx(i){return typeof i.hitstop=="number"}function Cd(i){return typeof i.applyKnockback=="function"}function Kx(i,e){const t=je.hitstop+i*je.hitstopPerDamage+(e?je.hitstopFinisher:0);return Math.min(je.hitstopMax,t)}const Zn=new w;class Zx{resolve(e,t){const n=[];t.entities.forEach(s=>{s.alive&&Yx(s)&&n.push(s)});for(const s of n){const r=s.currentStrike();if(!r)continue;const a=r.team==="player"?"enemy":"player",o=t.query(a);for(const l of o){if(!l.alive||r.hitSet.has(l.id))continue;const c=r.radius+l.collider.radius;if(r.center.distanceToSquared(l.position)>c*c)continue;const h=r.finisher===!0;r.hitSet.add(l.id),l.takeDamage(r.damage,nc(s)?s:void 0,{finisher:h}),Zn.copy(l.position).sub(r.center),Zn.y=0,Zn.lengthSq()<1e-6&&Zn.set(0,0,1),Zn.normalize();const u=r.impact??1,d=r.knockback*(h?je.knockFinisherMul:1)*u;Cd(l)?l.applyKnockback(Zn.x,Zn.z,d):l.position.addScaledVector(Zn,d);const m=Math.min(je.hitstopMax*1.8,Kx(r.damage,h)*u);Nh(s,m),Nh(l,m),Be()?.sparkBurst(r.center,Math.round(12*u)),u>=1.4&&Be()?.burst(r.center,{count:Math.round(9*u),color:12102026,speed:5*u,speedJitter:4,life:.45,gravity:9}),t.audio.play("melee-hit"),vx((je.shakeHit+r.damage*je.shakePerDamage+(r.finisher===!0?je.shakeFinisher:0))*u)}}}}function Nh(i,e){e>0&&jx(i)&&(i.hitstop=Math.max(i.hitstop,e))}const Ol={};function Pa(i,e){Ol[i]=e}function Qx(i){const e=Ol[i];if(!e)throw new Error(`Unknown level id: "${i}". Registered: ${Object.keys(Ol).join(", ")}`);return e()}const Hr=[{id:"aerial-duel",title:"The Aerial Duel"},{id:"siege",title:"Siege of Dras-Leona"},{id:"urubaen",title:"Assault on Urûʼbaen"}],Gr=1/60,To=.25;class Jx{constructor(e,t){this.canvas=e,this.renderer=new fx(e),this.entities=new Nx(this.renderer.scene),this.audio=new Fx,this.cameraRig=new mx(this.renderer.camera),gx(this.cameraRig),this.ctx=new kx(this.entities,this.renderer.scene,this.audio,new Bx),this.input=new px,this.overlay=new zx(t,{setGodmode:n=>{this.godmode=n},forceWin:()=>this.setPhase("WON"),forceLose:()=>this.setPhase("LOST")}),this.hud=new Vx(t),this.transition=new qx(t),this.menus=new Xx(t,{onStart:()=>{this.audio.play("ui-click"),this.requestPlay()},onResume:()=>{this.audio.play("ui-click"),this.requestPlay()},onRetry:()=>{this.audio.play("ui-click"),this.currentLevelId&&this.startLevel(this.currentLevelId)},onContinue:()=>{this.audio.play("ui-click"),this.advanceOrFinish()},onSelectLevel:n=>{this.audio.play("ui-click"),this.startLevel(n)},onNewGame:()=>{this.audio.play("ui-click"),this.newGame()},getLevelCatalog:()=>this.getLevelCatalog()}),document.addEventListener("pointerlockchange",this.onPointerLockChange),this.setPhase("TITLE")}input;renderer;entities;audio;cameraRig;ctx;overlay;hud;menus;transition;combat=new Zx;phase="TITLE";godmode=!1;activeEntity=null;currentLevel=null;currentLevelId=null;hudProvider=null;acc=0;last=performance.now();running=!1;fps=0;bootInto(e){this.currentLevel&&(this.currentLevel.unload(),this.currentLevel=null),this.hudProvider=null;const t=Qx(e);t.load(this.ctx),this.currentLevel=t,this.currentLevelId=e}setHudInfoProvider(e){this.hudProvider=e}advanceOrFinish(){const e=Hr.findIndex(n=>n.id===this.currentLevelId),t=e>=0?Hr[e+1]:void 0;t?(this.beginCoveredTransition(),this.bootInto(t.id),this.setPhase("TITLE"),this.requestPlay()):this.setPhase("TITLE")}startLevel(e){this.beginCoveredTransition(),this.bootInto(e),this.setPhase("TITLE"),this.requestPlay()}beginCoveredTransition(){this.transition.cover(),window.setTimeout(()=>{this.phase!=="PLAYING"&&this.transition.reveal()},1200)}newGame(){this.ctx.save.reset(),this.bootInto("aerial-duel"),this.setPhase("TITLE")}getLevelCatalog(){const e=this.ctx.save.levelsCleared;return Hr.map((t,n)=>{const s=n>0&&e.includes(Hr[n-1].id);return{id:t.id,title:t.title,index:n,cleared:e.includes(t.id),unlocked:n===0||s||t.id===this.currentLevelId}})}setActiveEntity(e){this.activeEntity=e,this.cameraRig.resnap()}setControlMode(e){this.cameraRig.setMode(e),this.input.setMode(e),this.cameraRig.resnap()}isGodmode(){return this.godmode}setLightingMood(e){this.renderer.setLightingMood(e)}win(){this.phase!=="WON"&&this.setPhase("WON")}lose(){this.phase!=="LOST"&&this.setPhase("LOST")}setEndText(e,t,n){this.menus.setEndText(e,t,n)}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.frame))}requestPlay(){this.audio.resume(),this.canvas.requestPointerLock()}setPhase(e){const t=this.phase;switch(this.phase=e,this.hud.setVisible(e==="PLAYING"),e){case"PLAYING":this.acc=0,this.last=performance.now(),this.transition.reveal();break;case"PAUSED":this.exitLock();break;case"WON":this.exitLock(),t!=="WON"&&this.audio.play("win");break;case"LOST":this.exitLock(),t!=="LOST"&&this.audio.play("lose");break}this.menus.render(e)}frame=e=>{const t=(e-this.last)/1e3;if(this.last=e,t>0&&(this.fps=this.fps===0?1/t:this.fps+(1/t-this.fps)*.1),this.phase==="PLAYING"){this.acc+=Math.min(t,To);let s=!0;for(;this.acc>=Gr&&this.phase==="PLAYING";)this.entities.capturePrevTransforms(),this.input.beginStep(s),s=!1,this.step(Gr),this.acc-=Gr}else this.acc=0;t>0&&this.entities.animateAll(Math.min(t,To));const n=this.phase==="PLAYING"?this.acc/Gr:1;this.activeEntity&&this.cameraRig.update(Math.min(t,To),n,this.activeEntity),this.renderer.render(n,this.entities),this.syncDebug(),this.hud.sync(this.activeEntity,this.hudProvider?.()??Hx),this.input.justPressed("debug")&&this.overlay.toggle(),this.input.justPressed("mute")&&this.audio.toggleMute(),this.input.lateUpdate(),requestAnimationFrame(this.frame)};step(e){this.entities.update(e,this.ctx),this.combat.resolve(e,this.ctx),this.currentLevel?.update(e,this.ctx)}syncDebug(){let e=null,t=null;const n=this.activeEntity;n&&nc(n)&&(e=n.health,t=n.energy),this.overlay.sync({fps:this.fps,health:e,energy:t})}onPointerLockChange=()=>{document.pointerLockElement===this.canvas?(this.audio.resume(),(this.phase==="TITLE"||this.phase==="PAUSED")&&this.setPhase("PLAYING")):this.phase==="PLAYING"&&this.setPhase("PAUSED")};exitLock(){document.pointerLockElement===this.canvas&&document.exitPointerLock()}}class La{constructor(e,t){this.input=e,this.host=t}roster=[];activeIndex=0;prevSwapHeld=!1;frozen=!1;setRoster(e,t=0){this.roster=e,this.activeIndex=Math.min(t,Math.max(0,e.length-1));for(let n=0;n<e.length;n++)e[n].setActive(n===this.activeIndex),e[n].freezePassive=this.frozen;this.syncToActive()}setFreezeAllies(e){this.frozen=e;for(const t of this.roster)t.freezePassive=e}get active(){return this.roster[this.activeIndex]??null}canSwap(){const e=this.nextLivingIndex(this.activeIndex);return this.roster.length>1&&e>=0&&e!==this.activeIndex}nextSwapTarget(){const e=this.nextLivingIndex(this.activeIndex);return this.roster.length>1&&e!==this.activeIndex?this.roster[e]??null:null}update(e){const t=this.active;t&&t.downed&&this.swapToNextLiving();const n=this.input.pressed("swap");n&&!this.prevSwapHeld&&this.roster.length>1&&this.cycle(),this.prevSwapHeld=n;const s=this.active;s&&(s.godmode=this.host.isGodmode())}cycle(){const e=this.nextLivingIndex(this.activeIndex);e<0||e===this.activeIndex||this.switchTo(e)}swapToNextLiving(){const e=this.roster[this.activeIndex]?.controlMode;let t=this.nextLivingIndexInMode(this.activeIndex,e);t<0&&(t=this.nextLivingIndex(this.activeIndex)),!(t<0)&&this.switchTo(t)}nextLivingIndex(e){const t=this.roster.length;for(let n=1;n<=t;n++){const s=(e+n)%t,r=this.roster[s];if(r&&!r.downed&&r.health>0)return s}return-1}nextLivingIndexInMode(e,t){if(!t)return-1;const n=this.roster.length;for(let s=1;s<=n;s++){const r=(e+s)%n,a=this.roster[r];if(a&&!a.downed&&a.health>0&&a.controlMode===t)return r}return-1}switchTo(e){const t=this.active;this.activeIndex=e;const n=this.active;t&&t.setActive(!1),n&&n.setActive(!0),this.syncToActive()}syncToActive(){const e=this.active;if(!e){this.host.setActiveEntity(null);return}this.host.setActiveEntity(e),this.host.setControlMode(e.controlMode)}}function ac(i,e){let t=Math.max(0,e);if(i.wardHp>0){const n=Math.min(i.wardHp,t);i.wardHp=Math.max(0,i.wardHp-n),t-=n}i.health=Math.max(0,i.health-t)}function $x(i,e){if(e<=0)return!0;if(i.energy>=e)i.energy-=e;else{const t=e-i.energy;if(i.health>t)i.energy=0,i.health-=t;else return!1}return i.energy=Math.max(0,i.energy),i.health=Math.max(0,i.health),!0}function e_(i,e){return e<=0||i.energy>=e?!0:i.health>e-i.energy}function Pd(i,e,t){i.energy>=i.maxEnergy||(i.energy=Math.min(i.maxEnergy,i.energy+t*e))}function Ld(i,e){i.health=Math.min(i.maxHealth,Math.max(0,i.health+Math.max(0,e)))}class li{state="IDLE";steps;heavyStep;bufferTime;rollDuration;rollIFrames;rollSpeed;stepIndex=-1;timer=0;phaseLen=0;buffered=!1;bufferAge=0;rollTimer=0;heavy=!1;hitSet=new Set;constructor(e){if(e.steps.length===0)throw new Error("ComboStateMachine requires at least one step.");this.steps=e.steps,this.heavyStep=e.heavyStep??null,this.bufferTime=e.bufferTime??je.comboBuffer,this.rollDuration=e.rollDuration??je.rollDuration,this.rollIFrames=e.rollIFrames??je.rollIFrames,this.rollSpeed=e.rollSpeed??je.rollSpeed}pressAttack(){this.state!=="ROLL"&&(this.state==="IDLE"?this.enterStep(0):(this.buffered=!0,this.bufferAge=0))}pressHeavy(){this.state!=="ROLL"&&this.heavyStep&&(this.heavy=!0,this.stepIndex=-1,this.buffered=!1,this.state="WINDUP",this.timer=this.heavyStep.windup,this.phaseLen=this.heavyStep.windup,this.hitSet.clear())}pressDodge(){return this.state==="ROLL"?!1:(this.state="ROLL",this.rollTimer=this.rollDuration,this.stepIndex=-1,this.heavy=!1,this.buffered=!1,this.hitSet.clear(),!0)}update(e){switch(this.buffered&&(this.bufferAge+=e,this.bufferAge>this.bufferTime&&(this.buffered=!1)),this.state){case"IDLE":return;case"ROLL":this.rollTimer-=e,this.rollTimer<=0&&(this.state="IDLE");return}if(this.timer-=e,this.timer>0)return;const t=this.heavy?this.heavyStep:this.steps[this.stepIndex];if(this.state==="WINDUP")this.state="ACTIVE",this.timer=t.active,this.phaseLen=t.active,this.hitSet.clear();else if(this.state==="ACTIVE")this.state="RECOVERY",this.timer=t.recovery,this.phaseLen=t.recovery;else if(this.state==="RECOVERY"){if(this.heavy){this.heavy=!1,this.buffered=!1,this.state="IDLE",this.stepIndex=-1;return}const n=this.stepIndex+1;this.buffered&&n<this.steps.length?(this.buffered=!1,this.enterStep(n)):(this.state="IDLE",this.stepIndex=-1)}}get activeStep(){return this.state!=="ACTIVE"?null:this.heavy?this.heavyStep:this.steps[this.stepIndex]}get isBusy(){return this.state!=="IDLE"}get isAttacking(){return this.state==="WINDUP"||this.state==="ACTIVE"||this.state==="RECOVERY"}get isRolling(){return this.state==="ROLL"}get progress(){if(this.phaseLen<=0)return 0;const e=1-this.timer/this.phaseLen;return e<0?0:e>1?1:e}get inIFrames(){return this.state==="ROLL"&&this.rollDuration-this.rollTimer<this.rollIFrames}enterStep(e){this.stepIndex=e,this.state="WINDUP",this.timer=this.steps[e].windup,this.phaseLen=this.steps[e].windup,this.hitSet.clear()}}const dn={freq:5,freqPerIntensity:4,amp:.35,ampPerIntensity:.55,dihedral:.18,tailFreq:2.2,tailAmp:.22,headFreq:2,headAmp:.08},It={readyX:-.2,readyZ:.05,windX:1.15,windZ:-.25,swingX:-1.55,swingZ:.3,idleFreq:1.6,idleAmp:.05},es={idleFreq:1.8,idleAmp:.015,strideFreq:9,strideAmp:.07,legSwing:.5},Ao=new w;function Dd(i){return i<0?0:i>1?1:i}function bi(i,e,t){return i+(e-i)*t}function oc(i,e,t){const n=dn.freq+dn.freqPerIntensity*t,s=dn.amp+dn.ampPerIntensity*t,r=Math.sin(e*n)*s,a=dn.dihedral+r;i.wingL.rotation.z=a,i.wingR.rotation.z=-a,i.tail.rotation.y=Math.sin(e*dn.tailFreq)*dn.tailAmp,i.tail.rotation.x=Math.sin(e*dn.tailFreq*.5)*dn.tailAmp*.5,i.head.rotation.x=Math.sin(e*dn.headFreq)*dn.headAmp}function Fh(i,e,t,n){let s,r;switch(e){case"WINDUP":{const a=t*t;s=bi(It.readyX,It.windX,a),r=bi(It.readyZ,It.windZ,a);break}case"ACTIVE":{const a=1-(1-t)*(1-t);s=bi(It.windX,It.swingX,a),r=bi(It.windZ,It.swingZ,a);break}case"RECOVERY":{s=bi(It.swingX,It.readyX,t),r=bi(It.swingZ,It.readyZ,t);break}default:{s=It.readyX+Math.sin(n*It.idleFreq)*It.idleAmp,r=It.readyZ;break}}i.rotation.set(s,0,r)}function t_(i,e,t){const n=Dd(t),s=(Math.sin(e*es.idleFreq)*.5+.5)*es.idleAmp,r=Math.abs(Math.sin(e*es.strideFreq*.5))*es.strideAmp;i.body.position.y=bi(s,r,n),i.body.rotation.x=-.18*n;const a=Math.sin(e*es.strideFreq*.5)*es.legSwing*n;i.legL.rotation.x=a,i.legR.rotation.x=-a}function n_(i){i.body.position.y=0,i.body.rotation.x=0,i.legL.rotation.x=0,i.legR.rotation.x=0}class ws{t=0;speed01=0;prevPos=new w;started=!1;update(e,t,n,s,r,a,o){if(this.t+=e,this.started&&e>1e-5){Ao.copy(n).sub(this.prevPos),Ao.y=0;const l=Ao.length()/e,c=a>0?Dd(l/a):0;this.speed01+=(c-this.speed01)*Math.min(1,e*10)}else this.started=!0;if(this.prevPos.copy(n),o){n_(t),Fh(t.weaponMount,"IDLE",0,this.t);return}t_(t,this.t,this.speed01),Fh(t.weaponMount,s,r,this.t)}}const i_=.1,s_=.95,r_=new Re(16777215);class cs{flash=0;mats;constructor(e){this.mats=e}static fromMesh(e){const t=new Map,n=[];return e.traverse(s=>{const r=s;if(!r.isMesh)return;const a=r.material;if(Array.isArray(a))r.material=a.map(o=>cs.cloneOf(o,t,n)??o);else if(a){const o=cs.cloneOf(a,t,n);o&&(r.material=o)}}),new cs(n)}static cloneOf(e,t,n){if(!(e instanceof vs))return null;const s=t.get(e);if(s)return s;const r=e.clone();return t.set(e,r),n.push({mat:r,baseEmissive:r.emissive.getHex(),baseIntensity:r.emissiveIntensity}),r}trigger(e=1){this.flash=Math.min(1,Math.max(this.flash,e))}update(e){if(this.flash<=0)return;this.flash=Math.max(0,this.flash-e/i_);const t=this.flash;if(t<=0){for(const n of this.mats)n.mat.emissive.setHex(n.baseEmissive),n.mat.emissiveIntensity=n.baseIntensity;return}for(const n of this.mats)n.mat.emissive.copy(r_),n.mat.emissiveIntensity=n.baseIntensity+t*s_}}function Id(i,e,t,n){const s=i.query("enemy");let r=null,a=t*t;for(const o of s){if(!o.alive||!n(o))continue;const l=o.position.distanceToSquared(e);l<=a&&(a=l,r=o)}return r}function kh(i,e,t){i.copy(t).sub(e);const n=i.lengthSq();return n<1e-8?i.set(0,0,0):i.multiplyScalar(1/Math.sqrt(n))}const a_=["attack","heavy","dodge","spell1","spell2","spell3","spell4"],Oh=new w(0,1,0);class Ud extends sr{team;maxHealth;health;maxEnergy;energy;wardHp=0;damageTakenScale=1;hitstop=0;godmode=!1;active=!1;downed=!1;post=null;freezePassive=!1;allyCooldown=0;lastShoutWord=null;lastShoutAge=1/0;onShout=null;input;audio;hitFlash=null;knockVel=new w;prevHeld=new Map;constructor(e,t,n=null){super(),this.isCombatant=!0,this.input=e,this.audio=n,this.team=t.team??"player",this.maxHealth=t.maxHealth,this.health=t.maxHealth,this.maxEnergy=t.maxEnergy,this.energy=t.maxEnergy}setActive(e){this.active!==e&&(this.active=e,this.onActiveChanged(e))}setMaxEnergy(e){const t=e-this.maxEnergy;this.maxEnergy=e,t>0&&(this.energy=Math.min(e,this.energy+t))}get invulnerable(){return this.downed||this.godmode||this.inIFrames}setPost(e){this.post||(this.post=new w),this.post.copy(e)}get inIFrames(){return!1}shout(e){this.lastShoutWord=e,this.lastShoutAge=0,this.audio?.play("shout"),this.onShout?.(e)}takeDamage(e,t,n){if(this.invulnerable)return;this.triggerHitFlash(),e*=this.damageTakenScale*(this.active?1:Ut.passiveDamageScale);const s=this.wardHp;ac(this,e),s>0&&this.wardHp===0&&this.audio?.play("ward-break"),this.health<=0&&!this.downed&&(this.downed=!0)}update(e,t){if(this.lastShoutAge+=e,!this.downed){if(this.hitstop>0){this.hitstop=Math.max(0,this.hitstop-e),this.refreshEdges();return}this.active?this.controlActive(e,t):this.controlPassive(e,t),this.integrateKnockback(e),Pd(this,e,Ta.regenPerSec),this.refreshEdges()}}animate(e){this.hitFlash?.update(e),this.animateBody(e)}animateBody(e){}triggerHitFlash(e=1){!this.hitFlash&&this.mesh&&(this.hitFlash=cs.fromMesh(this.mesh)),this.hitFlash?.trigger(e)}applyKnockback(e,t,n){const s=n*je.knockImpulse;this.knockVel.x+=e*s,this.knockVel.z+=t*s;const r=this.knockVel.x*this.knockVel.x+this.knockVel.z*this.knockVel.z,a=je.knockMax;if(r>a*a){const o=a/Math.sqrt(r);this.knockVel.x*=o,this.knockVel.z*=o}}integrateKnockback(e){if(this.knockVel.x===0&&this.knockVel.z===0)return;this.position.x+=this.knockVel.x*e,this.position.z+=this.knockVel.z*e;const t=Math.exp(-9*e);this.knockVel.x*=t,this.knockVel.z*=t,this.knockVel.x*this.knockVel.x+this.knockVel.z*this.knockVel.z<.01&&this.knockVel.set(0,0,0)}justPressedStep(e){return this.input.pressed(e)&&!(this.prevHeld.get(e)??!1)}refreshEdges(){for(const e of a_)this.prevHeld.set(e,this.input.pressed(e))}controlPassive(e,t){}onActiveChanged(e){}}const Os=new w,Bh=new w,Dn=new w,Ro=new w,ts=new w;class Nd extends Ud{controlMode="GROUND";role="ground";combo;yaw=0;vel=new w;strike;riderAnim=new ws;constructor(e,t,n,s=null){super(e,t,s),this.combo=new li(n),this.collider={radius:.9},this.position.y=be.groundY,this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,hitSet:this.combo.hitSet}}get inIFrames(){return this.combo.inIFrames}animateBody(e){this.mesh&&this.riderAnim.update(e,bs(this.mesh),this.position,this.combo.state,this.combo.progress,be.moveSpeed,!1)}currentStrike(){if(this.downed)return null;const e=this.combo.activeStep;return e?(Os.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector(Os,e.range),this.strike.center.y+=1,this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike.finisher=e.finisher===!0,this.strike):null}controlActive(e,t){this.yaw-=this.input.axis("yaw")*be.turnRate,this.quaternion.setFromAxisAngle(Oh,this.yaw),this.justPressedStep("dodge")?this.combo.pressDodge():this.justPressedStep("heavy")?this.combo.pressHeavy():this.justPressedStep("attack")&&this.combo.pressAttack(),this.combo.update(e),Os.set(0,0,-1).applyQuaternion(this.quaternion),Bh.set(1,0,0).applyQuaternion(this.quaternion);const n=(this.input.pressed("forward")?1:0)-(this.input.pressed("back")?1:0),s=(this.input.pressed("right")?1:0)-(this.input.pressed("left")?1:0);if(Dn.set(0,0,0).addScaledVector(Os,n).addScaledVector(Bh,s),this.combo.isRolling)Dn.lengthSq()<1e-6&&Dn.copy(Os),Dn.normalize(),this.position.addScaledVector(Dn,this.combo.rollSpeed*e),this.vel.copy(Dn).multiplyScalar(be.moveSpeed);else{const r=Dn.lengthSq()>1e-6,a=!this.combo.isAttacking&&n>0&&this.input.pressed("sprint");let o;this.combo.isAttacking?o=be.moveSpeed*be.attackMoveScale:a?o=be.moveSpeed*be.sprintMul:o=be.moveSpeed,r?(Dn.normalize(),Ro.copy(Dn).multiplyScalar(o)):Ro.set(0,0,0);const l=r?be.accel:be.friction;this.vel.lerp(Ro,1-Math.exp(-l*e)),!r&&this.vel.lengthSq()<.04&&this.vel.set(0,0,0),this.vel.lengthSq()>o*o&&this.vel.setLength(o),this.position.addScaledVector(this.vel,e)}this.position.y=be.groundY,this.handleAbilities(e,t)}controlPassive(e,t){if(this.combo.update(e),this.vel.set(0,0,0),this.position.y=be.groundY,this.freezePassive)return;this.allyCooldown=Math.max(0,this.allyCooldown-e);const n=this.post,s=Id(t,this.position,Ut.engageRange,r=>Math.abs(r.position.y-this.position.y)<=Ut.groundReachY);if(s){this.faceHorizontal(s.position);const r=this.horizontalDistTo(s.position),a=n?this.horizontalDistTo(n):0;r>Ut.meleeRange&&(!n||a<Ut.leashRange)&&(kh(ts,this.position,s.position),ts.y=0,this.position.addScaledVector(ts,Ut.approachSpeed*e),this.position.y=be.groundY),r<=Ut.meleeRange&&this.combo.state==="IDLE"&&this.allyCooldown<=0&&(this.combo.pressAttack(),this.allyCooldown=Ut.attackCadence)}else n&&this.horizontalDistTo(n)>.5&&(this.faceHorizontal(n),kh(ts,this.position,n),ts.y=0,this.position.addScaledVector(ts,Ut.approachSpeed*e),this.position.y=be.groundY)}faceHorizontal(e){const t=e.x-this.position.x,n=e.z-this.position.z;t*t+n*n<1e-6||this.setHeading(Math.atan2(-t,-n))}horizontalDistTo(e){const t=e.x-this.position.x,n=e.z-this.position.z;return Math.sqrt(t*t+n*n)}handleAbilities(e,t){}get heading(){return this.yaw}setHeading(e){this.yaw=e,this.quaternion.setFromAxisAngle(Oh,e)}}function o_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ft;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let v=0;v<m.count;++v)u.push(m.getX(v)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=zh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const m=[];for(let _=0;_<a[h].length;++_)m.push(a[h][_][d]);const v=zh(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function zh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Bt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,m=h.count;d<m;d++)for(let v=0;v<t;v++){const _=h.getComponent(d,v);o.setComponent(d+u,v,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const Co=0,Po=1,Lo=2,l_=-1e5,Vr=new nt,ma=new w,ga=new w,va=new ct,Hh=new ct,Gh=new ct,c_=new w(0,l_,0),h_=new w(0,0,0),Vh=new nt,Wh=new on,u_=new w(0,1,0),d_=new w(1,0,0),f_=new ct;class Fd extends sr{capacity;frontBaseZ;vardenWinsToward;varden;empire;soldierGeo;vardenMat;empireMat;vardenStrength=1;empireStrength=1;frontZ;time=0;constructor(e={}){super(),this.capacity=e.perSide??xe.perSide,this.frontBaseZ=e.frontZ??xe.frontBaseZ,this.vardenWinsToward=e.vardenWinsToward??-1,this.frontZ=this.frontBaseZ,this.soldierGeo=m_(),this.vardenMat=new vs({color:Li.saphira,flatShading:!0,roughness:.9}),this.empireMat=new vs({color:Li.bannerRed,flatShading:!0,roughness:.9});const t=new De;t.name="armyBattle",this.varden=this.makeSide(this.vardenMat,-1,this.frontBaseZ+xe.rearDepth,0,t),this.empire=this.makeSide(this.empireMat,1,this.frontBaseZ-xe.rearDepth,Math.PI,t),this.mesh=t,this.isCombatant=!1,this.collider={radius:0}}makeSide(e,t,n,s,r){const a=this.capacity,o=new Ul(this.soldierGeo,e,a);o.instanceMatrix.setUsage(er),o.frustumCulled=!1,o.castShadow=!1,o.receiveShadow=!1,r.add(o);const l={mesh:o,x:new Float32Array(a),z:new Float32Array(a),homeX:new Float32Array(a),phase:new Float32Array(a),scaleArr:new Float32Array(a),speed:new Float32Array(a),frontBias:new Float32Array(a),fightOff:new Float32Array(a),state:new Uint8Array(a),respawn:new Float32Array(a),marchDir:t,rearZ:n,yaw:s};for(let c=0;c<a;c++)this.initSoldier(l,c,!0),this.writeMatrix(l,c);return o.instanceMatrix.needsUpdate=!0,l}initSoldier(e,t,n){e.homeX[t]=xe.xMin+Math.random()*(xe.xMax-xe.xMin),e.phase[t]=Math.random()*Math.PI*2,e.scaleArr[t]=xe.scaleMin+Math.random()*(xe.scaleMax-xe.scaleMin),e.speed[t]=xe.marchSpeed+Math.random()*xe.marchSpeedJitter,e.frontBias[t]=Math.sin(e.homeX[t]*xe.raggedFreq)*xe.raggedAmp+(Math.random()-.5)*3,e.fightOff[t]=Math.random()*xe.fightBand,e.respawn[t]=0,e.x[t]=e.homeX[t];const s=this.frontZ+e.frontBias[t];if(n){const r=Math.random();e.z[t]=e.rearZ+(s-e.rearZ)*r,e.state[t]=Math.abs(e.z[t]-s)<=xe.fightBand?Po:Co}else e.z[t]=e.rearZ+(Math.random()-.5)*6,e.state[t]=Co}kill(e,t){e.state[t]=Lo,e.respawn[t]=xe.respawnDelay+Math.random()*xe.respawnDelayJitter,Vr.compose(c_,f_,h_),e.mesh.setMatrixAt(t,Vr)}update(e,t){this.time+=e,this.driftStrength(e),this.shiftFront(e),this.stepSide(this.varden,e),this.stepSide(this.empire,e)}driftStrength(e){this.vardenStrength=vi(this.vardenStrength+(1-this.vardenStrength)*xe.strengthReversion*e+(Math.random()-.5)*xe.strengthDrift*e,xe.strengthMin,xe.strengthMax),this.empireStrength=vi(this.empireStrength+(1-this.empireStrength)*xe.strengthReversion*e+(Math.random()-.5)*xe.strengthDrift*e,xe.strengthMin,xe.strengthMax)}shiftFront(e){const t=this.vardenStrength-this.empireStrength;this.frontZ+=t*this.vardenWinsToward*xe.frontShiftSpeed*e;const n=this.frontBaseZ-xe.frontHalfRange,s=this.frontBaseZ+xe.frontHalfRange;this.frontZ=vi(this.frontZ,n,s)}stepSide(e,t){const n=this.capacity,s=xe.attritionPerSec*t;for(let r=0;r<n;r++){const a=e.state[r];if(a===Lo){e.respawn[r]-=t,e.respawn[r]<=0&&(this.initSoldier(e,r,!1),this.writeMatrix(e,r));continue}const o=this.frontZ+e.frontBias[r];if(a===Co)e.z[r]+=e.marchDir*e.speed[r]*t,Math.abs(e.z[r]-o)<=xe.fightBand&&(e.state[r]=Po,e.fightOff[r]=Math.random()*xe.fightBand);else{if(Math.random()<s){this.kill(e,r);continue}e.z[r]=o-e.marchDir*e.fightOff[r],e.x[r]=e.homeX[r]+Math.sin(this.time*3+e.phase[r])*xe.clashSway}this.writeMatrix(e,r)}e.mesh.instanceMatrix.needsUpdate=!0}writeMatrix(e,t){const n=e.state[t]===Po,s=n?xe.bobFreq*xe.fightBobMul:xe.bobFreq,r=n?xe.fightBobAmp:xe.bobAmp,a=Math.abs(Math.sin(this.time*s+e.phase[t]))*r;ma.set(e.x[t],a,e.z[t]);const o=e.yaw+(n?Math.sin(this.time*2+e.phase[t])*xe.yawJitter:0);Hh.setFromAxisAngle(u_,o),Gh.setFromAxisAngle(d_,-.13),va.multiplyQuaternions(Hh,Gh);const l=e.scaleArr[t];ga.set(l,l,l),Vr.compose(ma,va,ga),e.mesh.setMatrixAt(t,Vr)}get frontProgress(){const e=.5+this.vardenWinsToward*(this.frontZ-this.frontBaseZ)/(2*xe.frontHalfRange);return vi(e,0,1)}get vardenWon(){return this.frontProgress>=.98}get empireWon(){return this.frontProgress<=.02}boostVarden(e){this.vardenStrength=vi(this.vardenStrength+e,xe.strengthMin,xe.strengthMax)}boostEmpire(e){this.empireStrength=vi(this.empireStrength+e,xe.strengthMin,xe.strengthMax)}fireInZone(e,t,n,s){const r=t*t;let a=0;const o=this.empire,l=vi(xe.fireKillPerSec*n*s,0,1);for(let c=0;c<this.capacity;c++){if(o.state[c]===Lo)continue;const h=o.x[c]-e.x,u=o.z[c]-e.z;h*h+u*u>r||Math.random()<l&&(this.kill(o,c),a++)}a>0&&(o.mesh.instanceMatrix.needsUpdate=!0),this.boostVarden(xe.fireBoostPerSec*n*s)}}function p_(i){const e=i.geo.toNonIndexed();return i.geo.dispose(),Wh.set(i.rot?.[0]??0,i.rot?.[1]??0,i.rot?.[2]??0),va.setFromEuler(Wh),ma.set(i.pos[0],i.pos[1],i.pos[2]),ga.set(1,1,1),Vh.compose(ma,va,ga),e.applyMatrix4(Vh),e}function m_(){const e=[{geo:new Tt(.17,.7,.2),pos:[-.13,.35,0]},{geo:new Tt(.17,.7,.2),pos:[.13,.35,0]},{geo:new Tt(.46,.62,.28),pos:[0,1,0]},{geo:new Tt(.6,.16,.32),pos:[0,1.32,0]},{geo:new Tt(.24,.24,.24),pos:[0,1.5,0]},{geo:new tr(.16,.22,5),pos:[0,1.7,0]},{geo:new Tt(.13,.5,.13),pos:[.3,1.05,-.02]},{geo:new Tt(.05,1.7,.05),pos:[.36,1.2,-.12],rot:[.32,0,0]},{geo:new tr(.07,.22,4),pos:[.36,2.02,-.38],rot:[.32,0,0]},{geo:new Tt(.06,.42,.36),pos:[-.32,1,.02]}].map(p_),t=o_(e,!1);for(const n of e)n.dispose();return t.name="soldier",t}function vi(i,e,t){return i<e?e:i>t?t:i}let kd=null;function xa(i){kd=i}function g_(){return kd}function Xh(i,e,t){return i<e?e:i>t?t:i}function v_(i,e,t){return i+(e-i)*t}function Do(i,e,t,n){return v_(i,e,1-Math.exp(-t*n))}const x_=new w(0,0,-1),qh=new ct,Yh=new on,Qn=new w,Wr=new w,Bs=new w,Xr=new w,jh=new ct,__={steps:[{windup:.12,active:.16,recovery:.3,damage:26,knockback:1.5,range:4,radius:2},{windup:.14,active:.18,recovery:.42,damage:34,knockback:2.5,range:4.4,radius:2.2}]};class Da extends Ud{controlMode="FLIGHT";magicEnabled=!1;role="air";throttle=vt.cruiseSpeed;hoverPhase=0;hoverBaseY=30;breathCd=0;bank=0;bankYaw=0;pitchHeld=0;combo;strike;dragonParts;animT=0;constructor(e,t=null){super(e,{team:"player",maxHealth:220,maxEnergy:90},t),this.combo=new li(__),this.collider={radius:2.6};const n=sc("saphira");this.mesh=n,this.dragonParts=rc(n),this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,hitSet:this.combo.hitSet}}get inIFrames(){return!1}currentStrike(){if(this.downed)return null;const e=this.combo.activeStep;return e?(Qn.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector(Qn,e.range),this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike.finisher=!1,this.strike.impact=2,this.strike):null}controlActive(e,t){const n=this.input.axis("pitch"),s=this.input.axis("yaw"),r=this.input.axis("roll"),a=-s*vt.yawRate-r*vt.adYawRate*e;s!==0?this.bankYaw=s:this.bankYaw=Do(this.bankYaw,0,vt.bankHoldDecay,e);const l=-Xh(this.bankYaw*vt.bankPerYaw+r,-1,1)*vt.bankAngle,c=Math.abs(this.bankYaw)>1e-5||r!==0,h=Do(this.bank,l,c?vt.bankRate:vt.bankLevelRate,e),u=h-this.bank;this.bank=h,n!==0?this.pitchHeld=1:this.pitchHeld=Do(this.pitchHeld,0,vt.bankHoldDecay,e);let d=n*vt.pitchRate;this.pitchHeld<.001&&vt.pitchLevelRate>0,Yh.set(d,a,u,"XYZ"),qh.setFromEuler(Yh),this.quaternion.multiply(qh).normalize(),this.throttle=Xh(this.throttle+this.input.axis("throttle")*vt.throttleAccel*e,vt.minSpeed,vt.maxSpeed),Qn.set(0,0,-1).applyQuaternion(this.quaternion),this.position.addScaledVector(Qn,this.throttle*e),this.hoverBaseY=this.position.y,this.justPressedStep("attack")&&this.combo.pressAttack(),this.combo.update(e),this.input.pressed("spell1")?this.breatheFire(e,t):this.breathCd=0}controlPassive(e,t){if(this.combo.update(e),this.hoverPhase+=e,this.post){const s=1-Math.exp(-.6*e);this.hoverBaseY+=(this.post.y-this.hoverBaseY)*s}if(this.position.y=this.hoverBaseY+Math.sin(this.hoverPhase*vt.passiveHoverBob)*.3,this.freezePassive)return;if(this.post){const s=1-Math.exp(-.6*e);this.position.x+=(this.post.x-this.position.x)*s,this.position.z+=(this.post.z-this.position.z)*s}this.allyCooldown=Math.max(0,this.allyCooldown-e);const n=Id(t,this.position,Ut.saphiraEngageRange,s=>Math.abs(s.position.y-this.position.y)<=Ut.airEngageBandY);if(n){Xr.copy(n.position).sub(this.position);const s=Xr.length();s>1e-4&&(Xr.multiplyScalar(1/s),jh.setFromUnitVectors(x_,Xr),this.quaternion.slerp(jh,1-Math.exp(-2.4*e)).normalize()),s<=Ut.saphiraClawRange?(this.combo.state==="IDLE"&&this.allyCooldown<=0&&(this.combo.pressAttack(),this.allyCooldown=Ut.attackCadence),this.breathCd=0):this.energy>0?this.breatheFire(e,t):this.breathCd=0}else this.breathCd=0}onActiveChanged(e){e?(this.throttle=vt.cruiseSpeed,this.bank=0,this.bankYaw=0,this.pitchHeld=0):this.hoverBaseY=this.position.y}animateBody(e){this.animT+=e;const t=(this.throttle-vt.minSpeed)/Math.max(.001,vt.maxSpeed-vt.minSpeed),n=this.active?.6+t*.8:.2;oc(this.dragonParts,this.animT,n)}breatheFire(e,t){this.energy<=0||(this.energy=Math.max(0,this.energy-Ta.breathCostPerSec*e),Qn.set(0,0,-1).applyQuaternion(this.quaternion),Wr.copy(this.position).addScaledVector(Qn,this.collider.radius+.4),g_()?.fireInZone(Wr,xe.fireZoneRadius,xe.firePower,e),this.breathCd-=e,!(this.breathCd>0)&&(this.breathCd=.05,Bs.copy(Qn).multiplyScalar(30),Bs.x+=(Math.random()-.5)*8,Bs.y+=(Math.random()-.5)*8,Bs.z+=(Math.random()-.5)*8,t.spawnProjectile({position:Wr,velocity:Bs.clone(),team:this.team,damage:6,radius:.9,ttl:.55,color:16742938}),Be()?.fireBreath(Wr,Qn,12)))}}const Io=new w,qr=new w,Jn=new w;function S_(i,e){return e.set(0,0,-1).applyQuaternion(i.quaternion)}function Uo(i,e,t){S_(i,Io),qr.copy(i.position).addScaledVector(Io,i.collider.radius+.6),qr.y+=1,e.spawnProjectile({position:qr,velocity:Io.clone().multiplyScalar(t.speed),team:i.team,damage:t.damage,radius:t.radius,ttl:t.ttl,color:t.color}),Be()?.fireBurst(qr,8)}function y_(i,e,t){const n=i.team==="player"?"enemy":"player",s=t.radius*t.radius;for(const r of e.query(n))r.alive&&(i.position.distanceToSquared(r.position)>s||(r.takeDamage(t.damage,i),Jn.copy(r.position).sub(i.position),Jn.y=0,Jn.lengthSq()<1e-6&&Jn.set(0,0,1),Jn.normalize(),Cd(r)?r.applyKnockback(Jn.x,Jn.z,t.knockback):r.position.addScaledVector(Jn,t.knockback),Be()?.sparkBurst(r.position)));Be()?.shockwaveRing(i.position,12576511,{from:.5,to:t.radius,life:.45,opacity:.85}),Be()?.burst(i.position,{count:24,color:12576511,speed:10,life:.4,gravity:2})}const M_=[{id:"brisingr",word:"Brisingr",gloss:"fire",cost:12,cooldown:.45,unlockedByDefault:!0,kind:"projectile",effect:(i,e)=>Uo(i,e,{speed:34,damage:22,radius:.55,ttl:2.2,color:16742938})},{id:"thrysta-vindr",word:"Thrysta vindr",gloss:"compress the air (shockwave)",cost:18,cooldown:1.1,unlockedByDefault:!0,kind:"aoe",effect:(i,e)=>y_(i,e,{radius:7,damage:16,knockback:3.5})},{id:"skolir",word:"Skölir",gloss:"shield (ward)",cost:16,cooldown:3.5,unlockedByDefault:!0,kind:"ward",effect:i=>{i.wardHp=Math.max(i.wardHp,Ta.wardHp),Be()?.shockwaveRing(i.position,5235455,{from:.4,to:2.6,life:.4,opacity:.9}),Be()?.burst(i.position,{count:20,color:5235455,speed:4,life:.6,gravity:-1})}},{id:"waise-heill",word:"Waíse heill",gloss:"be healed",cost:20,cooldown:2.5,unlockedByDefault:!0,kind:"heal",effect:i=>{Ld(i,30),Be()?.shockwaveRing(i.position,9109440,{from:.4,to:2.2,life:.6,opacity:.55}),Be()?.burst(i.position,{count:18,color:9109440,speed:3,life:.7,gravity:-2})}},{id:"jierda",word:"Jierda",gloss:"break / shatter",cost:24,cooldown:.8,unlockedByDefault:!1,kind:"projectile",effect:(i,e)=>Uo(i,e,{speed:30,damage:34,radius:.5,ttl:1.8,color:13686496})},{id:"garjzla",word:"Garjzla",gloss:"light (blinding blast)",cost:20,cooldown:.7,unlockedByDefault:!1,kind:"projectile",effect:(i,e)=>Uo(i,e,{speed:40,damage:18,radius:.45,ttl:1.6,color:16773792})}],rs=Object.fromEntries(M_.map(i=>[i.id,i])),rr=[rs.brisingr,rs["thrysta-vindr"],rs.skolir,rs["waise-heill"]],b_={steps:[{windup:.1,active:.12,recovery:.25,damage:14,knockback:.8,range:1.8,radius:1},{windup:.09,active:.12,recovery:.24,damage:16,knockback:.9,range:1.9,radius:1},{windup:.12,active:.16,recovery:.38,damage:24,knockback:2.2,range:2.1,radius:1.15}],bufferTime:je.comboBuffer,heavyStep:{windup:.35,active:.12,recovery:.45,damage:30,knockback:3,range:2.4,radius:1.25,finisher:!0}},Kh=["spell1","spell2","spell3","spell4"];class Ia extends Nd{magicEnabled=!0;spells;loadout;constructor(e,t,n=null){super(e,{team:"player",maxHealth:100,maxEnergy:60},b_,n),this.spells=t,this.loadout=rr.slice(0,4);const s=Ni({skin:"eragonSkin",garb:"eragonGarb",hair:"eragonHair",cloak:"eragonCloak"});s.userData.weaponMount.add(Ra()),this.mesh=s,this.collider={radius:.9}}handleAbilities(e,t){this.spells.tick(this,e);for(let n=0;n<Kh.length;n++){if(!this.justPressedStep(Kh[n]))continue;const s=this.loadout[n];s&&this.spells.cast(this,s,t)}}}const w_={steps:[{windup:.16,active:.14,recovery:.4,damage:24,knockback:2.4,range:1.9,radius:1.1},{windup:.22,active:.18,recovery:.55,damage:40,knockback:4,range:2.1,radius:1.3}],bufferTime:je.comboBuffer,heavyStep:{windup:.45,active:.14,recovery:.5,damage:44,knockback:6,range:2.7,radius:1.5,finisher:!0}};class ar extends Nd{magicEnabled=!1;rallyCd=0;constructor(e,t=null){super(e,{team:"player",maxHealth:130,maxEnergy:0},w_,t),this.damageTakenScale=hx.damageTakenScale;const n=Ni({skin:"eragonSkin",garb:"roranGarb",hair:"eragonHair"});n.userData.weaponMount.add(Td()),this.mesh=n,this.collider={radius:.95}}handleAbilities(e,t){this.rallyCd>0&&(this.rallyCd=Math.max(0,this.rallyCd-e)),this.justPressedStep("spell1")&&this.rallyCd<=0&&this.castRally(t)}castRally(e){this.wardHp+=Qs.selfWard;for(const t of e.query("player"))t!==this&&Ld(t,Qs.heal);this.rallyCd=Qs.cooldown,e.audio.play("shout"),Be()?.burst(this.position,{count:30,color:Ri("wardCyan"),speed:7,life:.6,gravity:-3})}}class Ua{cooldowns=new WeakMap;canCast(e,t){return this.remainingCooldown(e,t.id)<=0&&e_(e,t.cost)}remainingCooldown(e,t){return this.cooldowns.get(e)?.get(t)??0}cast(e,t,n){if(this.remainingCooldown(e,t.id)>0)return"cooldown";if(!$x(e,t.cost))return"insufficient";e.shout(t.word),t.effect(e,n),n.audio.play(t.kind==="heal"?"heal":"cast");let s=this.cooldowns.get(e);return s||(s=new Map,this.cooldowns.set(e,s)),s.set(t.id,t.cooldown),"cast"}tick(e,t){const n=this.cooldowns.get(e);if(n)for(const[s,r]of n){const a=r-t;a<=0?n.delete(s):n.set(s,a)}}}const E_={energyRegenPerSec:10},Zh=.25,T_=.35,A_=new w(0,1,0),ns=new w,No=new w;function R_(i){return i.invulnerable===!0}class wn extends sr{team="enemy";maxHealth;health;maxEnergy;energy;wardHp=0;hitstop=0;aggroRange;baseScale=1;hitFlash=null;knockVel=new w;spawnElapsed=0;deathElapsed=0;lastShoutWord=null;lastShoutAge=1/0;onShout=null;audio;target=null;constructor(e,t=null){super(),this.isCombatant=!0,this.audio=t,this.maxHealth=e.maxHealth,this.health=e.maxHealth,this.maxEnergy=e.maxEnergy??0,this.energy=this.maxEnergy,this.aggroRange=e.aggroRange,this.collider={radius:e.colliderRadius}}shout(e){this.lastShoutWord=e,this.lastShoutAge=0,this.audio?.play("shout"),this.onShout?.(e)}takeDamage(e,t){this.alive&&(this.triggerHitFlash(),ac(this,e),this.health<=0&&this.die())}update(e,t){if(this.lastShoutAge+=e,this.hitstop>0){this.hitstop=Math.max(0,this.hitstop-e);return}this.acquireTarget(t),this.maxEnergy>0&&Pd(this,e,E_.energyRegenPerSec),this.think(e,t),this.integrateKnockback(e)}animate(e){this.hitFlash?.update(e),this.animateBody(e),this.updateLifecycleScale(e)}animateBody(e){}triggerHitFlash(e=1){!this.hitFlash&&this.mesh&&(this.hitFlash=cs.fromMesh(this.mesh)),this.hitFlash?.trigger(e)}applyKnockback(e,t,n){const s=n*je.knockImpulse;this.knockVel.x+=e*s,this.knockVel.z+=t*s;const r=this.knockVel.x*this.knockVel.x+this.knockVel.z*this.knockVel.z,a=je.knockMax;if(r>a*a){const o=a/Math.sqrt(r);this.knockVel.x*=o,this.knockVel.z*=o}}integrateKnockback(e){if(this.knockVel.x===0&&this.knockVel.z===0)return;this.position.x+=this.knockVel.x*e,this.position.z+=this.knockVel.z*e;const t=Math.exp(-9*e);this.knockVel.x*=t,this.knockVel.z*=t,this.knockVel.x*this.knockVel.x+this.knockVel.z*this.knockVel.z<.01&&this.knockVel.set(0,0,0)}updateLifecycleScale(e){if(this.mesh){if(this.dying){this.deathElapsed+=e;const t=Math.min(1,this.deathElapsed/T_),n=(1-t)*this.baseScale;this.mesh.scale.setScalar(Math.max(1e-4,n)),t>=1&&(this.dying=!1);return}if(this.spawnElapsed<Zh){this.spawnElapsed+=e;const t=Math.min(1,this.spawnElapsed/Zh),n=1-(1-t)*(1-t);this.mesh.scale.setScalar(n*this.baseScale)}}}get targetReachY(){return 1/0}acquireTarget(e){const t=e.query("player"),n=this.aggroRange*this.aggroRange,s=this.targetReachY;let r=null,a=n,o=null,l=n;for(const c of t){if(!c.alive||Math.abs(c.position.y-this.position.y)>s)continue;const h=c.position.distanceToSquared(this.position);h<=l&&(l=h,o=c),!R_(c)&&h<=a&&(a=h,r=c)}this.target=r??o}die(){this.alive&&(this.alive=!1,this.dying=!0,this.deathElapsed=0,this.collider={radius:0},Be()?.burst(this.position,{count:40,color:16742938,speed:9,life:.7,gravity:4}),this.audio?.play("death"),this.onDeath())}onDeath(){}steer(e,t,n,s=1){return ns.copy(n).sub(this.position),ns.lengthSq()<1e-8?e.set(0,0,0):(ns.normalize(),t==="seek"?e.copy(ns):t==="retreat"?e.copy(ns).multiplyScalar(-1):(No.copy(ns).cross(A_),No.lengthSq()<1e-8?e.set(0,0,0):e.copy(No.normalize()).multiplyScalar(s)))}distanceTo(e){return this.position.distanceTo(e)}}const ft={maxHealth:260,aggroRange:240,colliderRadius:2.6,speed:26,preferredMin:16,preferredMax:32,altitudeMin:14,breathRange:44,breathFacingDot:.86,breathWindup:.55,breathDuration:.8,breathCooldown:2.6,breathTickInterval:.05,breathDamage:7,breathSpeed:34,clawRange:8,strafeFlipInterval:3.5},C_={steps:[{windup:.18,active:.16,recovery:.36,damage:22,knockback:2.2,range:4.6,radius:2.4},{windup:.2,active:.18,recovery:.5,damage:30,knockback:3,range:4.8,radius:2.5}]},P_=new w(0,0,-1),zs=new w,Sn=new w,Qh=new w,Hs=new w,Gs=new w,Jh=new ct;class L_ extends wn{combo;strike;breathState="ready";breathTimer=0;breathTick=0;strafeSign=1;strafeFlip=ft.strafeFlipInterval;dragonParts;animT=0;constructor(e=null){super({maxHealth:ft.maxHealth,colliderRadius:ft.colliderRadius,aggroRange:ft.aggroRange},e),this.combo=new li(C_);const t=sc("thorn");this.mesh=t,this.dragonParts=rc(t),this.position.y=28,this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,impact:2.2,hitSet:this.combo.hitSet}}currentStrike(){const e=this.combo.activeStep;return e?(Sn.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector(Sn,e.range),this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike):null}animateBody(e){this.animT+=e;const t=this.breathState==="breathing"||this.combo.isAttacking?1.3:1;oc(this.dragonParts,this.animT,t)}think(e,t){this.combo.update(e);const n=this.target;if(!n){this.position.y<ft.altitudeMin&&(this.position.y=ft.altitudeMin);return}zs.copy(n.position).sub(this.position);const s=zs.length();s>1e-4&&(zs.multiplyScalar(1/s),Jh.setFromUnitVectors(P_,zs),this.quaternion.slerp(Jh,1-Math.exp(-2.4*e)).normalize()),this.strafeFlip-=e,this.strafeFlip<=0&&(this.strafeFlip=ft.strafeFlipInterval,this.strafeSign=this.strafeSign===1?-1:1);const r=s>ft.preferredMax?"seek":s<ft.preferredMin?"retreat":"strafe";this.steer(Qh,r,n.position,this.strafeSign),this.position.addScaledVector(Qh,ft.speed*e),this.position.y<ft.altitudeMin&&(this.position.y=ft.altitudeMin),s<=ft.clawRange&&this.combo.state==="IDLE"&&this.combo.pressAttack(),Sn.set(0,0,-1).applyQuaternion(this.quaternion);const a=Sn.dot(zs)>=ft.breathFacingDot;this.updateBreath(e,t,s,a)}updateBreath(e,t,n,s){switch(this.breathState){case"ready":n<=ft.breathRange&&s&&!this.combo.isAttacking&&(this.breathState="windup",this.breathTimer=ft.breathWindup);break;case"windup":this.breathTick-=e,this.breathTick<=0&&(this.breathTick=.08,Sn.set(0,0,-1).applyQuaternion(this.quaternion),Hs.copy(this.position).addScaledVector(Sn,this.collider.radius+.4),Be()?.fireBurst(Hs,4)),this.breathTimer-=e,this.breathTimer<=0&&(this.breathState="breathing",this.breathTimer=ft.breathDuration,this.audio?.play("fire"));break;case"breathing":this.emitBreath(e,t),this.breathTimer-=e,this.breathTimer<=0&&(this.breathState="cooldown",this.breathTimer=ft.breathCooldown);break;case"cooldown":this.breathTimer-=e,this.breathTimer<=0&&(this.breathState="ready");break}}emitBreath(e,t){this.breathTick-=e,!(this.breathTick>0)&&(this.breathTick=ft.breathTickInterval,Sn.set(0,0,-1).applyQuaternion(this.quaternion),Hs.copy(this.position).addScaledVector(Sn,this.collider.radius+.5),Gs.copy(Sn).multiplyScalar(ft.breathSpeed),Gs.x+=(Math.random()-.5)*9,Gs.y+=(Math.random()-.5)*9,Gs.z+=(Math.random()-.5)*9,t.spawnProjectile({position:Hs,velocity:Gs.clone(),team:this.team,damage:ft.breathDamage,radius:.95,ttl:.55,color:16734746}),Be()?.fireBreath(Hs,Sn,11))}}const Pt={maxHealth:150,maxEnergy:80,aggroRange:70,colliderRadius:.9,moveSpeed:6.2,meleeRange:2.6,approachRange:2,spellRangeMin:7,spellRangeMax:32,spellEveryMin:4.5,spellEveryMax:8,spellWindup:.5},D_={steps:[{windup:.16,active:.12,recovery:.3,damage:13,knockback:.9,range:1.9,radius:1.05},{windup:.14,active:.12,recovery:.3,damage:15,knockback:1,range:2,radius:1.05},{windup:.18,active:.16,recovery:.46,damage:22,knockback:2.4,range:2.2,radius:1.2}],bufferTime:je.comboBuffer},I_=new w(0,0,-1),Yr=new w,jr=new w,$h=new w,Fo=new w,eu=new ct;class U_ extends wn{combo;strike;spells;spellTimer;casting=!1;castWindup=0;pendingSpell=null;riderAnim=new ws;constructor(e,t=null){super({maxHealth:Pt.maxHealth,maxEnergy:Pt.maxEnergy,colliderRadius:Pt.colliderRadius,aggroRange:Pt.aggroRange},t),this.spells=e,this.combo=new li(D_),this.spellTimer=Pt.spellEveryMin;const n=Ni({garb:"murtaghGarb",cloak:"murtaghCloak"});n.userData.weaponMount.add(Ra()),this.mesh=n,this.position.y=be.groundY,this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,hitSet:this.combo.hitSet}}currentStrike(){const e=this.combo.activeStep;return e?($h.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector($h,e.range),this.strike.center.y+=1,this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike):null}animateBody(e){this.mesh&&this.riderAnim.update(e,bs(this.mesh),this.position,this.combo.state,this.combo.progress,Pt.moveSpeed,!1)}think(e,t){this.spells.tick(this,e),this.combo.update(e),this.position.y=be.groundY;const n=this.target;if(!n){this.casting=!1,this.pendingSpell=null;return}Yr.copy(n.position).sub(this.position),jr.set(Yr.x,0,Yr.z);const s=Yr.length();if(jr.lengthSq()>1e-6&&(jr.normalize(),eu.setFromUnitVectors(I_,jr),this.quaternion.slerp(eu,1-Math.exp(-11*e)).normalize()),this.casting){this.updateCast(e,t);return}if(this.spellTimer-=e,this.spellTimer<=0&&s>=Pt.spellRangeMin&&s<=Pt.spellRangeMax&&!this.combo.isAttacking){const r=this.pickSpell(s);if(r&&this.spells.canCast(this,r)){this.casting=!0,this.castWindup=Pt.spellWindup,this.pendingSpell=r;return}this.spellTimer=1}if(s>Pt.approachRange){this.steer(Fo,"seek",n.position),Fo.y=0;const r=this.combo.isAttacking?Pt.moveSpeed*be.attackMoveScale:Pt.moveSpeed;this.position.addScaledVector(Fo,r*e),this.position.y=be.groundY}s<=Pt.meleeRange&&this.combo.state==="IDLE"&&this.combo.pressAttack()}updateCast(e,t){if(Be()?.burst(this.position,{count:3,color:16742938,speed:2,life:.3,gravity:-3}),this.castWindup-=e,this.castWindup>0)return;const n=this.pendingSpell;this.casting=!1,this.pendingSpell=null,this.spellTimer=Pt.spellEveryMin+Math.random()*(Pt.spellEveryMax-Pt.spellEveryMin),n&&this.spells.cast(this,n,t)}pickSpell(e){return e<=Pt.spellRangeMin+3?rs["thrysta-vindr"]:rs.brisingr}}const In={maxHealth:60,aggroRange:60,colliderRadius:.9,moveSpeed:6,meleeRange:2.4,approachRange:1.9,reachY:3.5},N_={steps:[{windup:.18,active:.12,recovery:.34,damage:12,knockback:.9,range:1.9,radius:1},{windup:.2,active:.14,recovery:.42,damage:16,knockback:1.6,range:2,radius:1.1}],bufferTime:je.comboBuffer},F_=new w(0,0,-1),Vs=new w,tu=new w,ko=new w,nu=new ct;class fn extends wn{combo;strike;riderAnim=new ws;constructor(e=null){super({maxHealth:In.maxHealth,colliderRadius:In.colliderRadius,aggroRange:In.aggroRange},e),this.combo=new li(N_);const t=Ni({garb:"bannerRed",tabard:"empireTabard",helm:!0});t.userData.weaponMount.add(Ra()),this.mesh=t,this.position.y=be.groundY,this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,hitSet:this.combo.hitSet}}get targetReachY(){return In.reachY}currentStrike(){const e=this.combo.activeStep;return e?(tu.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector(tu,e.range),this.strike.center.y+=1,this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike):null}animateBody(e){this.mesh&&this.riderAnim.update(e,bs(this.mesh),this.position,this.combo.state,this.combo.progress,In.moveSpeed,!1)}think(e,t){this.combo.update(e),this.position.y=be.groundY;const n=this.target;if(!n)return;Vs.set(n.position.x-this.position.x,0,n.position.z-this.position.z);const s=Vs.length();if(Vs.lengthSq()>1e-6&&(Vs.normalize(),nu.setFromUnitVectors(F_,Vs),this.quaternion.slerp(nu,1-Math.exp(-11*e)).normalize()),s>In.approachRange){this.steer(ko,"seek",n.position),ko.y=0;const r=this.combo.isAttacking?In.moveSpeed*be.attackMoveScale:In.moveSpeed;this.position.addScaledVector(ko,r*e),this.position.y=be.groundY}s<=In.meleeRange&&this.combo.state==="IDLE"&&this.combo.pressAttack()}}const Zt={maxHealth:80,aggroRange:260,colliderRadius:1.3,reload:4.5,telegraph:1.3,lanceSpeed:62,lanceDamage:45,lanceRadius:.85,lanceTtl:4,muzzleHeight:1.1,maxLeadTime:1.5},iu=new w(0,0,-1),Un=new w,su=new w,ru=new w,au=new w,Kr=new w,ou=new ct;class Od extends wn{state="reload";timer=Zt.reload;lance;estVel=new w;prevTargetPos=new w;hasPrev=!1;lockedDir=new w(0,0,-1);constructor(e=null){super({maxHealth:Zt.maxHealth,colliderRadius:Zt.colliderRadius,aggroRange:Zt.aggroRange},e);const t=wx();this.mesh=t,this.position.y=be.groundY,this.lance=t.userData.lance}acquireTarget(e){const t=e.query("player");let n=null,s=-1/0,r=1/0;const a=this.aggroRange*this.aggroRange;for(const o of t){if(!o.alive)continue;const l=o.position.distanceToSquared(this.position);l>a||(o.position.y>s+.5||Math.abs(o.position.y-s)<=.5&&l<r)&&(s=o.position.y,r=l,n=o)}this.target=n}think(e,t){const n=this.target;if(!n){this.hasPrev=!1,this.lance.visible=!0;return}if(this.hasPrev&&e>0){const s=1-Math.exp(-8*e);ru.copy(n.position).sub(this.prevTargetPos).multiplyScalar(1/e),this.estVel.lerp(ru,s)}else this.hasPrev=!0;switch(this.prevTargetPos.copy(n.position),Kr.set(n.position.x-this.position.x,0,n.position.z-this.position.z),Kr.lengthSq()>1e-6&&(Kr.normalize(),ou.setFromUnitVectors(iu,Kr),this.quaternion.slerp(ou,1-Math.exp(-6*e)).normalize()),this.timer-=e,this.state){case"reload":this.lance.visible=!0,this.timer<=0&&(this.lockSolution(n.position),this.state="aim",this.timer=Zt.telegraph,this.audio?.play("ballista-charge"));break;case"aim":this.muzzle(Un),Be()?.burst(Un,{count:4,color:7208794,speed:2,life:.25,gravity:-2}),this.timer<=0&&(this.fire(t),this.state="reload",this.timer=Zt.reload);break}}lockSolution(e){this.muzzle(Un),su.copy(e).sub(Un);const t=su.length(),n=Math.min(t/Zt.lanceSpeed,Zt.maxLeadTime);au.copy(e).addScaledVector(this.estVel,n),this.lockedDir.copy(au).sub(Un),this.lockedDir.lengthSq()<1e-6&&this.lockedDir.copy(iu),this.lockedDir.normalize()}fire(e){this.muzzle(Un),e.spawnProjectile({position:Un.clone(),velocity:this.lockedDir.clone().multiplyScalar(Zt.lanceSpeed),team:this.team,damage:Zt.lanceDamage,radius:Zt.lanceRadius,ttl:Zt.lanceTtl,color:7208794}),Be()?.fireBurst(Un,10),Be()?.burst(Un,{count:16,color:7208794,speed:7,life:.4,gravity:3}),this.audio?.play("ballista-fire"),this.lance.visible=!1}muzzle(e){return e.set(this.position.x,this.position.y+Zt.muzzleHeight,this.position.z)}}const lu=256;function k_(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zr(i){return i<0?0:i>1?1:i}function Oo(i,e,t){return i+(e-i)*t}function cu(i){return{r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255}}function hu(i,e,t){const n=new Float32Array(e*e);for(let r=0;r<n.length;r++)n[r]=t();const s=new Float32Array(i*i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=a/i*e,l=r/i*e,c=Math.floor(o)%e,h=Math.floor(l)%e,u=(c+1)%e,d=(h+1)%e,m=o-Math.floor(o),v=l-Math.floor(l),_=m*m*(3-2*m),p=v*v*(3-2*v),f=n[h*e+c],b=n[h*e+u],y=n[d*e+c],E=n[d*e+u],U=f+(b-f)*_,R=y+(E-y)*_;s[r*i+a]=U+(R-U)*p}return s}function O_(i){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d");if(!t)throw new Error("2D canvas context unavailable for procedural textures");return{canvas:e,ctx:t}}function Na(i,e,t){const n=k_(t.seed),s=hu(e,t.coarse,n),r=hu(e,t.fine,n),a=cu(t.low),o=cu(t.high),l=t.contrast??1,c=t.speckle??0,h=i.createImageData(e,e),u=h.data;for(let d=0;d<e*e;d++){let m=s[d]*.6+r[d]*.4;m=(m-.5)*l+.5,c>0&&(m+=(n()-.5)*c);const v=Zr(m);u[d*4+0]=Math.round(Zr(Oo(a.r,o.r,v))*255),u[d*4+1]=Math.round(Zr(Oo(a.g,o.g,v))*255),u[d*4+2]=Math.round(Zr(Oo(a.b,o.b,v))*255),u[d*4+3]=255}i.putImageData(h,0,0)}function lc(i,e,t,n,s,r){i.strokeStyle=`rgba(0,0,0,${s})`,i.lineWidth=Math.max(1,e/t*.1);const a=e/t,o=e/n;for(let l=0;l<n;l++){const c=l*o;i.beginPath(),i.moveTo(0,c),i.lineTo(e,c),i.stroke();const h=r&&l%2===1?a/2:0;for(let u=0;u<=t;u++){const d=(u*a+h)%e;i.beginPath(),i.moveTo(d,c),i.lineTo(d,c+o),i.stroke()}}}const B_=new Set,z_=new Set;function Fa(i,e,t){const{canvas:n,ctx:s}=O_(lu);i(s,lu);const r=new qv(n);return r.colorSpace=sn,r.wrapS=Js,r.wrapT=Js,r.repeat.set(e,t),r.generateMipmaps=!0,r.anisotropy=8,r.needsUpdate=!0,B_.add(r),r}function ka(i){const e=new vs({map:i,color:16777215,roughness:1,metalness:0});return z_.add(e),e}let Bo=null,zo=null,Ho=null,Go=null;function H_(){if(!Bo){const i=Fa((e,t)=>Na(e,t,{seed:7,low:4873520,high:8165973,coarse:5,fine:22,contrast:1.25,speckle:.1}),64,64);Bo=ka(i)}return Bo}function G_(){if(!zo){const i=Fa((e,t)=>{Na(e,t,{seed:23,low:4604989,high:7038816,coarse:6,fine:18,contrast:1.15,speckle:.08}),lc(e,t,6,7,.4,!0)},6,26);zo=ka(i)}return zo}function V_(){if(!Ho){const i=Fa((e,t)=>{Na(e,t,{seed:51,low:6117715,high:8486004,coarse:5,fine:16,contrast:1.1,speckle:.07}),lc(e,t,4,6,.32,!0)},2,2);Ho=ka(i)}return Ho}function W_(){if(!Go){const i=Fa((e,t)=>{Na(e,t,{seed:88,low:1841954,high:2894387,coarse:4,fine:14,contrast:1,speckle:.05}),lc(e,t,3,3,.45,!1)},10,10);Go=ka(i)}return Go}function X_(i,e=90,t=680){i.background=new Re(Li.sky),i.fog=new ir(Li.fog,e,t)}class cc{group;groundY;columns=[];windX=1.6;windZ=.4;constructor(e,t={}){const n=t.size??600;this.groundY=t.groundY??0;const s=t.waterY??-.4;this.group=new De,this.group.name="terrain";const r=new zn(n,n,1,1),a=new Ue(r,H_());a.rotation.x=-Math.PI/2,a.position.y=this.groundY,a.receiveShadow=!0,a.name="ground",this.group.add(a);const o=new zn(n,n,1,1),l=new Ue(o,St("water",{transparent:!0,opacity:.72,roughness:.3,metalness:.1}));if(l.rotation.x=-Math.PI/2,l.position.y=s,l.name="water",this.group.add(l),t.smoke)for(const c of t.smoke)this.addSmokeColumn(c);(t.applySky??!0)&&X_(e),e.add(this.group)}addSmokeColumn(e){const t=e.count??60,n=e.height??22,s=e.radius??1.5,r=new Float32Array(t*3),a=new Float32Array(t);for(let u=0;u<t;u++){const d=Math.random()*n,m=Math.random()*Math.PI*2,v=Math.random()*s*(.4+d/n);r[u*3+0]=e.x+Math.cos(m)*v,r[u*3+1]=this.groundY+d,r[u*3+2]=e.z+Math.sin(m)*v,a[u]=2.5+Math.random()*3.5}const o=new Ft,l=new Bt(r,3);o.setAttribute("position",l);const c=new Jl({color:Li.smoke,size:2.4,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1}),h=new Fl(o,c);h.name="smoke",h.frustumCulled=!1,this.group.add(h),this.columns.push({points:h,positions:l,rise:a,baseX:e.x,baseZ:e.z,height:n,radius:s,count:t})}update(e){for(const t of this.columns){const n=t.positions.array;for(let s=0;s<t.count;s++){const r=s*3+1;let a=n[r]-this.groundY;if(a+=t.rise[s]*e,n[s*3+0]+=this.windX*e,n[s*3+2]+=this.windZ*e,a>=t.height){a=0;const o=Math.random()*Math.PI*2,l=Math.random()*t.radius*.5;n[s*3+0]=t.baseX+Math.cos(o)*l,n[s*3+2]=t.baseZ+Math.sin(o)*l}n[r]=this.groundY+a}t.positions.needsUpdate=!0}}groundHeightAt(e,t){return this.groundY}dispose(){this.group.traverse(e=>{e instanceof Fl?(e.geometry.dispose(),e.material.dispose()):e instanceof Ue&&e.geometry.dispose()}),this.group.removeFromParent(),this.columns.length=0}}function Bd(i){return Array.isArray(i)?new w(i[0],i[1],i[2]):i.clone()}function q_(i,e){const t=Tx(e.span,e.count);return t.position.copy(Bd(e.position)),t.rotation.y=e.rotationY??0,e.scale!==void 0&&t.scale.setScalar(e.scale),i.add(t),t}function zd(i,e,t="eldunariGlow"){const n=Ex(t),s=Bd(e);n.position.copy(s);const r=s.y;let a=0;return{id:i,object:n,position:s.clone(),collected:!1,update(o){a+=o,n.rotation.y+=o*1.2,n.position.y=r+Math.sin(a*2)*.2}}}const Y_=["1","2","3","4"],j_=2.2,uu="aerial-duel:glaedr-shard",K_=new w;function Vo(i){i.traverse(e=>{const t=e;t.isMesh&&t.geometry?.dispose()}),i.removeFromParent()}class Z_{constructor(e,t){this.input=e,this.host=t}id="aerial-duel";title="The Aerial Duel";resolved=!1;entities=null;spawned=[];controller=null;spells=null;terrain=null;city=null;saphira=null;eragon=null;roran=null;thorn=null;murtagh=null;ballistae=[];army=null;vardenBreakLatched=!1;empireRoutLatched=!1;armyBeat=null;armyBeatTimer=0;urgentTimer=new Map;urgentFired=new Set;eldunari=null;load(e){this.entities=e.entities,this.host.setLightingMood("aerial");const t=new Ca;e.entities.add(t),ai(t),this.spawned.push(t);const n=new Fi;e.entities.add(n),Hn(n),this.spawned.push(n);const s=new Fd({frontZ:xe.frontBaseZ});e.entities.add(s),xa(s),this.spawned.push(s),this.army=s,this.spells=new Ua,this.terrain=new cc(e.scene,{size:1400,groundY:.01,smoke:[{x:-40,z:-120,height:36,radius:4,count:90},{x:10,z:-150,height:44,radius:5,count:110},{x:64,z:-130,height:30,radius:3.5,count:80}]}),this.city=q_(e.scene,{position:[10,0,-230],span:280,count:30}),ic(this.city,!1);const r=new Da(this.input,e.audio);r.position.set(-2,32,4),r.syncTransformImmediate(),r.setPost(r.position),this.saphira=r,this.spawn(r);const a=new Ia(this.input,this.spells,e.audio);a.position.set(0,be.groundY,0),a.syncTransformImmediate(),a.setPost(a.position),a.setMaxEnergy(a.maxEnergy+e.save.maxEnergyBonus),this.eragon=a,this.spawn(a);const o=new ar(this.input,e.audio);o.position.set(4,be.groundY,3),o.syncTransformImmediate(),o.setPost(o.position),this.roran=o,this.spawn(o),this.controller=new La(this.input,this.host),this.controller.setRoster([a,r,o],1);const l=new L_(e.audio);l.position.set(4,32,-38),l.syncTransformImmediate(),this.thorn=l,this.spawn(l);const c=new U_(this.spells,e.audio);c.position.set(2,be.groundY,-18),c.syncTransformImmediate(),this.murtagh=c,this.spawn(c);for(const[h,u]of[[-6,-22],[8,-24],[1,-29]]){const d=new fn(e.audio);d.position.set(h,be.groundY,u),d.syncTransformImmediate(),this.spawn(d)}for(const[h,u]of[[-28,-26],[32,-30]]){const d=new Od(e.audio);d.position.set(h,be.groundY,u),d.syncTransformImmediate(),this.ballistae.push(d),this.spawn(d)}if(!e.save.isCollected(uu)){const h=zd(uu,[-5,1.2,-6]);e.scene.add(h.object),this.eldunari=h}this.host.setHudInfoProvider(()=>this.buildHudInfo())}update(e,t){this.terrain?.update(e),this.eldunari?.update(e),this.controller?.update(e),this.armyBeatTimer>0&&(this.armyBeatTimer-=e,this.armyBeatTimer<=0&&(this.armyBeat=null)),!this.resolved&&(this.updateArmyInfluence(),this.updateUrgencyCue(e),this.tryCollectEldunari(t),this.checkWinLose(t))}unload(){if(this.entities)for(const e of this.spawned)this.entities.remove(e);this.eldunari&&!this.eldunari.collected&&Vo(this.eldunari.object),this.city&&Vo(this.city),this.terrain?.dispose(),ai(null),Hn(null),xa(null),this.host.setHudInfoProvider(null),this.host.setActiveEntity(null),this.spawned.length=0,this.ballistae.length=0,this.urgentTimer.clear(),this.urgentFired.clear(),this.controller=null,this.entities=null,this.spells=null,this.terrain=null,this.city=null,this.saphira=null,this.eragon=null,this.roran=null,this.thorn=null,this.murtagh=null,this.army=null,this.vardenBreakLatched=!1,this.empireRoutLatched=!1,this.armyBeat=null,this.armyBeatTimer=0,this.eldunari=null,this.resolved=!1}updateArmyInfluence(){const e=this.army;if(e){if(!this.vardenBreakLatched&&e.frontProgress>=xe.breakthroughProgress){this.vardenBreakLatched=!0;const t=this.controller?.active??null;t&&!t.downed&&(t.health=Math.min(t.maxHealth,t.health+xe.breakthroughHeal)),this.postArmyBeat("The Varden break through — they rally to you!")}!this.empireRoutLatched&&e.frontProgress<=xe.routProgress&&(this.empireRoutLatched=!0,this.postArmyBeat("The Varden are routed — hold the line yourself!"))}}postArmyBeat(e){this.armyBeat=e,this.armyBeatTimer=5}updateUrgencyCue(e){const t=this.controller?.active??null;for(const n of this.heroes()){if(!n)continue;const s=(this.urgentTimer.get(n)??0)-e;s>0?this.urgentTimer.set(n,s):this.urgentTimer.delete(n);const r=n.maxHealth>0?n.health/n.maxHealth:0;n!==t&&(n.downed||r>0&&r<Ut.urgencyHealthFrac)&&!this.urgentFired.has(n)&&(this.urgentFired.add(n),this.urgentTimer.set(n,Ut.urgencyFlashTime),n.shout(this.urgencyBark(n))),!n.downed&&r>=Ut.urgencyHealthFrac&&this.urgentFired.delete(n)}}urgencyBark(e){return e===this.saphira?"Thorn presses me!":e===this.roran?"To me, brother!":"I am beset!"}checkWinLose(e){const t=this.isAlive(this.thorn),n=this.isAlive(this.murtagh);if(!t&&!n){e.save.markLevelCleared(this.id),this.host.setEndText("WON","Victory","Thorn and Murtagh are broken — the road to Urûʼbaen lies open."),this.resolve(()=>this.host.win());return}const s=this.isDown(this.saphira),r=this.isDown(this.eragon),a=this.isDown(this.roran);if(s&&r&&a){this.host.setEndText("LOST","Defeated","Eragon and his companions have fallen on the field."),this.resolve(()=>this.host.lose());return}if(t&&s){this.host.setEndText("LOST","Saphira Falls","Thorn rules the skies unchallenged — the battle is lost."),this.resolve(()=>this.host.lose());return}n&&r&&a&&(this.host.setEndText("LOST","The Riders Fall","With Eragon and Roran down, Murtagh cannot be brought low."),this.resolve(()=>this.host.lose()))}tryCollectEldunari(e){const t=this.eldunari;if(!t||t.collected)return;const n=this.controller?.active;n&&(n.position.distanceTo(t.position)>j_||(t.collected=!0,e.save.collect(t.id),n.setMaxEnergy(n.maxEnergy+tc),e.audio.play("heal"),Be()?.burst(K_.copy(t.position),{count:28,color:9109440,speed:6,life:.7,gravity:-2}),Vo(t.object)))}resolve(e){this.resolved||(this.resolved=!0,e())}heroes(){return[this.saphira,this.eragon,this.roran]}isAlive(e){return!!e&&e.alive&&e.health>0}isDown(e){return!e||e.downed||e.health<=0}buildHudInfo(){const e=this.controller?.active??null,t=this.controller;return{objective:this.objectiveText(),spells:this.slotsFor(e),roster:this.rosterInfo(e),swapHint:{available:!!t?.canSwap(),name:t?.nextSwapTarget()?this.nameFor(t.nextSwapTarget()):null}}}nameFor(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].find(n=>n.char!==null&&n.char===e)?.name??"Ally"}objectiveText(){const e=this.isAlive(this.thorn),t=this.isAlive(this.murtagh);let n;return e&&t?n="Defeat Thorn (air) and Murtagh (ground) · F to swap":e?n="Finish Thorn in the air · F to swap":t?n="Finish Murtagh on the ground · F to swap":n="",n+this.armySuffix()}armySuffix(){const e=this.army;if(!e)return"";const t=Math.round(e.frontProgress*100),n=this.armyBeat?` · ${this.armyBeat}`:"";return` · Varden front ${t}%${n}`}slotsFor(e){if(e===this.eragon&&this.eragon&&this.spells){const t=this.spells,n=this.eragon;return rr.map((s,r)=>({key:Y_[r]??"",name:s.word,cooldownFrac:s.cooldown>0?t.remainingCooldown(n,s.id)/s.cooldown:0,ready:t.canCast(n,s)}))}return e===this.saphira&&this.saphira?[{key:"1",name:"Fire Breath",cooldownFrac:0,ready:this.saphira.energy>0},{key:"LMB",name:"Claw",cooldownFrac:0,ready:!0}]:e===this.roran?[{key:"LMB",name:"Hammer",cooldownFrac:0,ready:!0}]:[]}rosterInfo(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].filter(n=>n.char!==null).map(({char:n,name:s})=>({name:s,active:n===e,available:n.health>0&&!n.downed,urgent:(this.urgentTimer.get(n)??0)>0}))}spawn(e){this.entities?.add(e),this.spawned.push(e)}}const Q_=["1","2","3","4"];class J_{constructor(e,t){this.input=e,this.host=t}id="dev-sandbox";title="Dev Sandbox";entities=null;spawned=[];controller=null;spells=null;eragon=null;saphira=null;roran=null;load(e){this.entities=e.entities;const t=new Ca;e.entities.add(t),ai(t),this.spawned.push(t);const n=new Fi;e.entities.add(n),Hn(n),this.spawned.push(n);const s=new Ua;this.spells=s;const r=new Ia(this.input,s,e.audio);r.position.set(0,0,0),this.eragon=r,this.spawn(r);const a=new ar(this.input,e.audio);a.position.set(4,0,1),this.roran=a,this.spawn(a);const o=new Da(this.input,e.audio);o.position.set(0,28,12),this.saphira=o,this.spawn(o);const l=[r,o,a];this.controller=new La(this.input,this.host),this.controller.setRoster(l,0),this.host.setHudInfoProvider?.(()=>this.buildHudInfo())}update(e,t){this.controller?.update(e)}unload(){if(this.entities)for(const e of this.spawned)this.entities.remove(e);ai(null),Hn(null),this.host.setHudInfoProvider?.(null),this.host.setActiveEntity(null),this.spawned.length=0,this.controller=null,this.entities=null,this.spells=null,this.eragon=null,this.saphira=null,this.roran=null}buildHudInfo(){const e=this.controller?.active??null,t=this.controller;return{objective:"Dev Sandbox — F to swap · 1-4 cast · LMB melee",spells:this.slotsFor(e),roster:this.rosterInfo(e),swapHint:{available:!!t?.canSwap(),name:t?.nextSwapTarget()?this.nameFor(t.nextSwapTarget()):null}}}nameFor(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].find(n=>n.char!==null&&n.char===e)?.name??"Ally"}slotsFor(e){if(e===this.eragon&&this.eragon&&this.spells){const t=this.spells,n=this.eragon;return rr.map((s,r)=>{const a=t.remainingCooldown(n,s.id);return{key:Q_[r]??"",name:s.word,cooldownFrac:s.cooldown>0?a/s.cooldown:0,ready:t.canCast(n,s)}})}return e===this.saphira&&this.saphira?[{key:"1",name:"Fire Breath",cooldownFrac:0,ready:this.saphira.energy>0},{key:"LMB",name:"Claw",cooldownFrac:0,ready:!0}]:e===this.roran?[{key:"LMB",name:"Hammer",cooldownFrac:0,ready:!0}]:[]}rosterInfo(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].map(({char:n,name:s})=>({name:s,active:n!==null&&n===e,available:n!==null}))}spawn(e){this.entities?.add(e),this.spawned.push(e)}}const Et={maxHealth:45,aggroRange:90,colliderRadius:.7,moveSpeed:5.5,minRange:12,maxRange:24,reload:2.4,telegraph:.7,arrowSpeed:38,arrowDamage:12,arrowRadius:.4,arrowTtl:3,muzzleHeight:1.4,maxLeadTime:1.2},Wo=14540236,du=new w(0,0,-1),Ws=new w,fu=new ct,$n=new w,pu=new w,mu=new w,gu=new w,is=new w;class vu extends wn{rooftop;state="reload";timer=Et.reload;estVel=new w;prevTargetPos=new w;hasPrev=!1;lockedVel=new w(0,0,-38);riderAnim=new ws;constructor(e={},t=null){super({maxHealth:Et.maxHealth,colliderRadius:Et.colliderRadius,aggroRange:Et.aggroRange},t),this.rooftop=e.rooftop??!1;const n=Ni({garb:"bannerRed",hair:"eragonHair",tabard:"empireTabard"});this.mesh=n,this.rooftop||(this.position.y=be.groundY)}animateBody(e){this.mesh&&this.riderAnim.update(e,bs(this.mesh),this.position,"IDLE",0,Et.moveSpeed,!1)}think(e,t){this.rooftop||(this.position.y=be.groundY);const n=this.target;if(!n){this.hasPrev=!1;return}if(this.hasPrev&&e>0){const r=1-Math.exp(-8*e);mu.copy(n.position).sub(this.prevTargetPos).multiplyScalar(1/e),this.estVel.lerp(mu,r)}else this.hasPrev=!0;this.prevTargetPos.copy(n.position),Ws.set(n.position.x-this.position.x,0,n.position.z-this.position.z);const s=Ws.length();switch(Ws.lengthSq()>1e-6&&(Ws.normalize(),fu.setFromUnitVectors(du,Ws),this.quaternion.slerp(fu,1-Math.exp(-9*e)).normalize()),this.rooftop||(s<Et.minRange?(this.steer(is,"retreat",n.position),is.y=0,this.position.addScaledVector(is,Et.moveSpeed*e)):s>Et.maxRange&&(this.steer(is,"seek",n.position),is.y=0,this.position.addScaledVector(is,Et.moveSpeed*e)),this.position.y=be.groundY),this.timer-=e,this.state){case"reload":this.timer<=0&&(this.lockSolution(n.position),this.state="aim",this.timer=Et.telegraph);break;case"aim":this.muzzle($n),Be()?.burst($n,{count:2,color:Wo,speed:1.5,life:.2,gravity:-1}),this.timer<=0&&(this.fire(t),this.state="reload",this.timer=Et.reload);break}}lockSolution(e){this.muzzle($n),pu.copy(e).sub($n);const t=pu.length(),n=Math.min(t/Et.arrowSpeed,Et.maxLeadTime);gu.copy(e).addScaledVector(this.estVel,n),this.lockedVel.copy(gu).sub($n),this.lockedVel.lengthSq()<1e-6&&this.lockedVel.copy(du),this.lockedVel.normalize().multiplyScalar(Et.arrowSpeed)}fire(e){this.muzzle($n),e.spawnProjectile({position:$n.clone(),velocity:this.lockedVel.clone(),team:this.team,damage:Et.arrowDamage,radius:Et.arrowRadius,ttl:Et.arrowTtl,color:Wo}),Be()?.burst($n,{count:4,color:Wo,speed:5,life:.25,gravity:2}),this.audio?.play("ballista-fire")}muzzle(e){return e.set(this.position.x,this.position.y+Et.muzzleHeight,this.position.z)}}const ei={maxHealth:220,aggroRange:55,colliderRadius:1.1,moveSpeed:3.8,meleeRange:2.8,approachRange:2.2},$_={steps:[{windup:.55,active:.18,recovery:.7,damage:30,knockback:5,range:2.6,radius:1.4}],bufferTime:je.comboBuffer},eS=new w(0,0,-1),Xs=new w,xu=new w,Xo=new w,_u=new ct;class Su extends wn{combo;strike;riderAnim=new ws;constructor(e=null){super({maxHealth:ei.maxHealth,colliderRadius:ei.colliderRadius,aggroRange:ei.aggroRange},e),this.combo=new li($_);const t=Ni({garb:"ironDark",skin:"eragonSkin",heavyArmor:!0,helm:!0,bodyScale:1.25});t.userData.weaponMount.add(Td()),t.scale.setScalar(1.2),this.baseScale=1.2,this.mesh=t,this.position.y=be.groundY,this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,hitSet:this.combo.hitSet}}takeDamage(e,t,n){if(!this.alive)return;this.triggerHitFlash();const s=t instanceof ar?e:e*ux.nonRoranScale;ac(this,s),this.health<=0&&this.die()}currentStrike(){const e=this.combo.activeStep;return e?(xu.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector(xu,e.range),this.strike.center.y+=1,this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike):null}animateBody(e){this.mesh&&this.riderAnim.update(e,bs(this.mesh),this.position,this.combo.state,this.combo.progress,ei.moveSpeed,!1)}think(e,t){this.combo.update(e),this.position.y=be.groundY;const n=this.target;if(!n)return;Xs.set(n.position.x-this.position.x,0,n.position.z-this.position.z);const s=Xs.length();if(Xs.lengthSq()>1e-6&&(Xs.normalize(),_u.setFromUnitVectors(eS,Xs),this.quaternion.slerp(_u,1-Math.exp(-7*e)).normalize()),s>ei.approachRange){this.steer(Xo,"seek",n.position),Xo.y=0;const r=this.combo.isAttacking?ei.moveSpeed*be.attackMoveScale:ei.moveSpeed;this.position.addScaledVector(Xo,r*e),this.position.y=be.groundY}s<=ei.meleeRange&&this.combo.state==="IDLE"&&this.combo.pressAttack()}}const ti={maxHealth:200,aggroRange:55,colliderRadius:1,moveSpeed:4.8,meleeRange:2.5,approachRange:2},tS={steps:[{windup:.24,active:.14,recovery:.4,damage:16,knockback:1.4,range:2,radius:1.1},{windup:.28,active:.16,recovery:.5,damage:22,knockback:2.6,range:2.2,radius:1.2}],bufferTime:je.comboBuffer},yu=12582730,nS=new w(0,0,-1),qs=new w,Mu=new w,qo=new w,bu=new ct;class Hd extends wn{combo;strike;stagger=0;_staggered=!1;staggerTimer=0;flashPhase=0;riderAnim=new ws;glow;get staggered(){return this._staggered}constructor(e=null){super({maxHealth:ti.maxHealth,colliderRadius:ti.colliderRadius,aggroRange:ti.aggroRange},e),this.combo=new li(tS);const t=Ni({garb:"bannerRed",skin:"eragonSkin",hair:"eragonHair",tabard:"empireTabard",helm:!0});t.userData.weaponMount.add(Ra()),this.glow=new Ue(new ba(1.3,0),Di(yu,1.8)),this.glow.position.set(0,1.1,0),this.glow.visible=!1,t.add(this.glow),this.mesh=t,this.position.y=be.groundY,this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,hitSet:this.combo.hitSet}}takeDamage(e,t,n){if(this.alive){if(this.triggerHitFlash(),this._staggered){n?.finisher&&(this.health=0,this.die());return}this.stagger+=e+(n?.finisher?Is.finisherBonus:0),this.stagger>=Is.max&&(this.stagger=Is.max,this._staggered=!0,this.staggerTimer=Is.window,this.flashPhase=0,this.audio?.play("ward-break"))}}currentStrike(){if(this._staggered)return null;const e=this.combo.activeStep;return e?(Mu.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector(Mu,e.range),this.strike.center.y+=1,this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike):null}animateBody(e){this.mesh&&this.riderAnim.update(e,bs(this.mesh),this.position,this.combo.state,this.combo.progress,ti.moveSpeed,this._staggered)}think(e,t){if(this.combo.update(e),this.position.y=be.groundY,this._staggered){this.staggerTimer-=e,this.flashPhase+=e,this.glow.visible=Math.sin(this.flashPhase*26)>0,this.glow.scale.setScalar(1+.2*Math.sin(this.flashPhase*16)),this.mesh&&this.mesh.scale.set(1.18,.82,1.18),Be()?.burst(this.position,{count:3,color:yu,speed:2,life:.25,gravity:-2}),this.staggerTimer<=0&&(this.stagger*=Is.decay,this._staggered=!1,this.glow.visible=!1,this.mesh&&this.mesh.scale.setScalar(1));return}const n=this.target;if(!n)return;qs.set(n.position.x-this.position.x,0,n.position.z-this.position.z);const s=qs.length();if(qs.lengthSq()>1e-6&&(qs.normalize(),bu.setFromUnitVectors(nS,qs),this.quaternion.slerp(bu,1-Math.exp(-9*e)).normalize()),s>ti.approachRange){this.steer(qo,"seek",n.position),qo.y=0;const r=this.combo.isAttacking?ti.moveSpeed*be.attackMoveScale:ti.moveSpeed;this.position.addScaledVector(qo,r*e),this.position.y=be.groundY}s<=ti.meleeRange&&this.combo.state==="IDLE"&&this.combo.pressAttack()}}function wu(i){i.traverse(e=>{const t=e;t.isMesh&&t.geometry?.dispose()}),i.removeFromParent()}class iS{group;terrain;perchPositions=[];gateDoors;breachPosition;cathedralPosition;rubble;breached=!1;ownedGeometries=[];constructor(e,t={}){const n=t.wallZ??18,s=t.cathedralZ??-44,r=t.streetHalfWidth??6;this.group=new De,this.group.name="siege",this.terrain=new cc(e,{size:1400,smoke:[{x:-22,z:-10,height:26,radius:2.2},{x:24,z:-26,height:30,radius:2.6},{x:0,z:s-8,height:34,radius:3},{x:-30,z:20,height:22,radius:1.8}]}),e.background=fa("skyDusk"),e.fog&&e.fog.color.copy(fa(10248760));const a=n-s+16,o=new zn(r*2+4,a,1,1);this.ownedGeometries.push(o);const l=new Ue(o,G_());l.rotation.x=-Math.PI/2,l.position.set(0,.02,(n+s)/2-8),l.receiveShadow=!0,l.name="street",this.group.add(l);const c=Rx(!1);c.position.set(0,0,n),this.group.add(c);const h=c.userData;this.gateDoors=h.doors,this.rubble=h.rubble;const u=14;for(let b=1;b<=3;b++)for(const y of[-1,1]){const E=Ax(u,9);E.position.set(y*(4+(b-.5)*u),0,n),this.group.add(E)}const d=r+4.5,m=[{x:-d,z:n-8,w:6,h:8.5,d:6,banner:!0},{x:d,z:n-12,w:6,h:9.8,d:6},{x:-d,z:n-24,w:6,h:10.4,d:6,perch:!0},{x:d,z:n-22,w:6,h:9.1,d:6,perch:!0,banner:!0},{x:-d,z:s+30,w:6,h:9.5,d:6,banner:!0},{x:d,z:s+26,w:6,h:10,d:6,perch:!0},{x:-d,z:s+16,w:7,h:11,d:6},{x:-d,z:n-40,w:6,h:9.8,d:6},{x:d,z:n-38,w:6,h:8.5,d:6,banner:!0},{x:-d,z:s+6,w:7,h:11.7,d:7},{x:d,z:s+6,w:7,h:11.7,d:7}];for(const b of m)this.addBuilding(b);const v=Ch(16,16,8);v.position.set(0,0,s-4),this.group.add(v);const _=kl();_.position.set(-26,0,s-110),_.scale.setScalar(2.2),ic(_,!1),this.group.add(_),this.breachPosition=new w(0,0,n-6),this.cathedralPosition=new w(0,0,s+4);const p=St("wallStone"),f=V_();this.group.traverse(b=>{const y=b;y.isMesh&&y.material===p&&(y.material=f)}),e.add(this.group)}addBuilding(e){const t=Ch(e.w,e.h,e.d);if(t.position.set(e.x,0,e.z),this.group.add(t),e.banner){const n=Cx("bannerRed"),s=e.x<0?1:-1;n.position.set(e.x+s*(e.w/2+.05),e.h-.4,e.z),n.rotation.y=s>0?Math.PI/2:-Math.PI/2,this.group.add(n)}if(e.perch){const n=Px(),s=e.x<0?1:-1,r=e.x+s*(e.w/2-1),a=e.h,o=e.z;n.position.set(r,a,o),this.group.add(n),this.perchPositions.push(new w(r,a+.3,o))}}openBreach(){this.breached||(this.breached=!0,wu(this.gateDoors),this.rubble.visible=!0)}dispose(){this.terrain.dispose(),wu(this.group);for(const e of this.ownedGeometries)e.dispose();this.ownedGeometries.length=0,this.perchPositions.length=0}}const sS=["1","2","3","4"],Eu=4,Tu=2.4,rS=2.2,Au="siege:helgrind-shard",Yo=24,Ru=9,aS=new w;function Cu(i){i.traverse(e=>{const t=e;t.isMesh&&t.geometry?.dispose()}),i.removeFromParent()}class oS{constructor(e,t){this.waves=e,this.onSpawn=t,this.total=e.length}waveIndex=-1;current=[];done=!1;total;get wave(){return this.waveIndex+1}get cleared(){return this.done}get eliteStaggered(){return this.current.some(e=>e instanceof Hd&&e.staggered)}get active(){return this.waveIndex>=0&&!this.done&&this.current.length>0}start(e){this.spawnNext(e)}damageAll(e){for(const t of this.current)t.takeDamage(e)}reinforce(e){this.current.push(e),this.onSpawn(e)}update(e){if(this.done)return;const t=[];for(const n of this.current)n.alive&&n.health>0&&t.push(n);if(this.current=t,this.current.length===0){if(this.waveIndex+1>=this.waves.length){this.done=!0;return}this.spawnNext(e)}}spawnNext(e){this.waveIndex++;const t=this.waves[this.waveIndex](e);this.current=t;for(const n of t)this.onSpawn(n)}}class lS{constructor(e,t){this.input=e,this.host=t}id="siege";title="Siege of Dras-Leona";phase="SKY";resolved=!1;breachTimer=Tu;entities=null;spawned=[];controller=null;spells=null;siege=null;saphira=null;eragon=null;roran=null;ballistae=[];towerArchers=[];waves=null;army=null;ballistaBoostsCredited=0;vardenBreakLatched=!1;empireRoutLatched=!1;armyBeat=null;armyBeatTimer=0;eldunari=null;load(e){this.entities=e.entities,this.host.setLightingMood("siege");const t=new Ca;e.entities.add(t),ai(t),this.spawned.push(t);const n=new Fi;e.entities.add(n),Hn(n),this.spawned.push(n);const s=new Fd({frontZ:xe.frontBaseZ});e.entities.add(s),xa(s),this.spawned.push(s),this.army=s,this.spells=new Ua,this.siege=new iS(e.scene,{wallZ:Yo,cathedralZ:-58,streetHalfWidth:6});const r=new Da(this.input,e.audio);r.position.set(0,30,40),r.syncTransformImmediate(),this.saphira=r,this.spawn(r),this.controller=new La(this.input,this.host),this.controller.setRoster([r],0);const a=[-22,-8,8,22];for(const o of a){const l=new Od(e.audio);l.position.set(o,Ru,Yo),l.syncTransformImmediate(),this.ballistae.push(l),this.spawn(l)}for(const o of[-30,30]){const l=new vu({rooftop:!0},e.audio);l.position.set(o,Ru+1,Yo),l.syncTransformImmediate(),this.towerArchers.push(l),this.spawn(l)}this.host.setHudInfoProvider(()=>this.buildHudInfo())}update(e,t){if(this.siege?.terrain.update(e),this.eldunari?.update(e),this.controller?.update(e),this.armyBeatTimer>0&&(this.armyBeatTimer-=e,this.armyBeatTimer<=0&&(this.armyBeat=null)),!this.resolved)switch(this.updateArmyInfluence(t),this.phase){case"SKY":this.updateSky();break;case"BREACH":this.updateBreach(e,t);break;case"GROUND":this.updateGround(t);break}}unload(){if(this.entities)for(const e of this.spawned)this.entities.remove(e);this.eldunari&&!this.eldunari.collected&&Cu(this.eldunari.object),this.siege?.dispose(),ai(null),Hn(null),xa(null),this.host.setHudInfoProvider(null),this.host.setActiveEntity(null),this.spawned.length=0,this.ballistae.length=0,this.towerArchers.length=0,this.controller=null,this.entities=null,this.spells=null,this.siege=null,this.saphira=null,this.eragon=null,this.roran=null,this.waves=null,this.army=null,this.ballistaBoostsCredited=0,this.vardenBreakLatched=!1,this.empireRoutLatched=!1,this.armyBeat=null,this.armyBeatTimer=0,this.eldunari=null}updateSky(){const e=this.saphira;if(!e)return;if(e.downed||e.health<=0){this.host.setEndText("LOST","Saphira Falls","The wall guns cannot be silenced without her. Dras-Leona holds."),this.resolve(()=>this.host.lose());return}const t=this.ballistae.filter(n=>!n.alive||n.health<=0).length;for(;this.ballistaBoostsCredited<t;)this.army?.boostVarden(xe.ballistaBoost),this.ballistaBoostsCredited++;this.ballistae.every(n=>!n.alive||n.health<=0)&&this.beginBreach()}beginBreach(){this.phase="BREACH",this.breachTimer=Tu,this.army?.boostVarden(xe.breachBoost);for(const e of this.ballistae)this.entities?.remove(e);for(const e of this.towerArchers)this.entities?.remove(e);this.ballistae.length=0,this.towerArchers.length=0,pa()?.clearTeam("enemy"),this.siege?.openBreach()}updateBreach(e,t){const n=this.saphira;if(n&&(n.downed||n.health<=0)){this.host.setEndText("LOST","Saphira Falls","The wall guns cannot be silenced without her. Dras-Leona holds."),this.resolve(()=>this.host.lose());return}const s=this.siege?.breachPosition;if(n&&s){const r=1-Math.exp(-2.5*e);n.position.y+=(6-n.position.y)*r,n.position.x+=(s.x-4-n.position.x)*r,n.position.z+=(s.z+4-n.position.z)*r}this.breachTimer-=e,this.breachTimer<=0&&this.beginGround(t)}beginGround(e){this.phase="GROUND";const t=this.spells,n=this.saphira,s=this.siege;if(!t||!n||!s)return;const r=s.breachPosition;n.position.set(r.x-5,5,r.z+2),n.syncTransformImmediate();const a=new Ia(this.input,t,e.audio);a.position.set(r.x,be.groundY,r.z),a.syncTransformImmediate(),a.setMaxEnergy(a.maxEnergy+e.save.maxEnergyBonus),this.eragon=a,this.spawn(a);const o=new ar(this.input,e.audio);if(o.position.set(r.x+3,be.groundY,r.z+1),o.syncTransformImmediate(),this.roran=o,this.spawn(o),!e.save.isCollected(Au)){const l=zd(Au,[4,1.2,r.z-10]);e.scene.add(l.object),this.eldunari=l}this.controller?.setRoster([a,n,o],0),this.waves=new oS([l=>this.spawnWave1(l),l=>this.spawnWave2(l),l=>this.spawnWave3(l)],l=>this.spawn(l)),this.waves.start(e)}updateGround(e){if(this.tryCollectEldunari(e),this.waves?.update(e),this.waves?.cleared){e.save.markLevelCleared(this.id),this.host.setEndText("WON","Dras-Leona Falls","The cathedral approach is taken. The road to Urûʼbaen lies open."),this.resolve(()=>this.host.win());return}const t=!this.eragon||this.eragon.downed||this.eragon.health<=0,n=!this.roran||this.roran.downed||this.roran.health<=0;t&&n&&(this.host.setEndText("LOST","The Push Breaks","Eragon and Roran have fallen. Saphira cannot hold the streets alone."),this.resolve(()=>this.host.lose()))}spawnWave1(e){return[this.placeEnemy(new Su(e.audio),-5,-10),this.placeEnemy(new Su(e.audio),5,-10),this.placeEnemy(new fn(e.audio),-9,-8),this.placeEnemy(new fn(e.audio),0,-8),this.placeEnemy(new fn(e.audio),9,-8)]}spawnWave2(e){const t=[],n=this.siege?.perchPositions??[];for(const r of n){const a=new vu({rooftop:!0},e.audio);a.position.copy(r),a.syncTransformImmediate(),t.push(a)}const s=-14;return t.push(this.placeEnemy(new fn(e.audio),-6,s)),t.push(this.placeEnemy(new fn(e.audio),6,s)),t.push(this.placeEnemy(new fn(e.audio),0,s-4)),t}spawnWave3(e){const n=(this.siege?.cathedralPosition.z??-40)+8;return[this.placeEnemy(new Hd(e.audio),0,n-2),this.placeEnemy(new fn(e.audio),-6,n+2),this.placeEnemy(new fn(e.audio),6,n+2)]}placeEnemy(e,t,n){return e.position.set(t,be.groundY,n),e.syncTransformImmediate(),e}tryCollectEldunari(e){const t=this.eldunari;if(!t||t.collected)return;const n=this.controller?.active;n&&(n.position.distanceTo(t.position)>rS||(t.collected=!0,e.save.collect(t.id),this.eragon?.setMaxEnergy(this.eragon.maxEnergy+tc),e.audio.play("heal"),Be()?.burst(aS.copy(t.position),{count:28,color:9109440,speed:6,life:.7,gravity:-2}),Cu(t.object)))}updateArmyInfluence(e){const t=this.army;if(t){if(!this.vardenBreakLatched&&t.frontProgress>=xe.breakthroughProgress){this.vardenBreakLatched=!0;const n=this.controller?.active??null;n&&!n.downed&&(n.health=Math.min(n.maxHealth,n.health+xe.breakthroughHeal)),this.waves?.damageAll(xe.breakthroughWaveDamage),this.postArmyBeat("The Varden break through — they crash into the enemy line!")}if(!this.empireRoutLatched&&t.frontProgress<=xe.routProgress){if(this.empireRoutLatched=!0,this.waves?.active){const n=this.placeEnemy(new fn(e.audio),0,-10);this.waves.reinforce(n)}this.postArmyBeat("The Varden are routed — the Empire wheels on you!")}}}postArmyBeat(e){this.armyBeat=e,this.armyBeatTimer=5}resolve(e){this.resolved||(this.resolved=!0,this.phase="DONE",e())}buildHudInfo(){const e=this.controller?.active??null,t=this.controller;return{objective:this.objectiveText(),spells:this.slotsFor(e),roster:this.rosterInfo(e),swapHint:{available:!!t?.canSwap(),name:t?.nextSwapTarget()?this.nameFor(t.nextSwapTarget()):null}}}nameFor(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].find(n=>n.char!==null&&n.char===e)?.name??"Ally"}objectiveText(){switch(this.phase){case"SKY":return`Phase 1 — Destroy the siege ballistae (${Eu-this.ballistae.filter(t=>t.alive&&t.health>0).length}/${Eu})`+this.armySuffix();case"BREACH":return"The gate is breached!"+this.armySuffix();case"GROUND":{if(this.waves?.eliteStaggered)return"Finish the laughing soldier! (heavy attack — RMB)";const e=this.waves,t=e?.wave??1,n=e?.total??3;let s;switch(t){case 1:s="Armored brutes — only Roran's hammer can break their plate.";break;case 2:s="Snipers on the rooftops — fly Saphira to reach them.";break;default:s="Push the laughing soldier back to the cathedral.";break}return`${s} · Wave ${t}/${n} · F to swap`+this.armySuffix()}case"DONE":return""}}armySuffix(){const e=this.army;if(!e)return"";const t=Math.round(e.frontProgress*100),n=this.armyBeat?` · ${this.armyBeat}`:"";return` · Varden front ${t}%${n}`}slotsFor(e){if(e===this.eragon&&this.eragon&&this.spells){const t=this.spells,n=this.eragon;return rr.map((s,r)=>({key:sS[r]??"",name:s.word,cooldownFrac:s.cooldown>0?t.remainingCooldown(n,s.id)/s.cooldown:0,ready:t.canCast(n,s)}))}if(e===this.saphira&&this.saphira)return[{key:"1",name:"Fire Breath",cooldownFrac:0,ready:this.saphira.energy>0},{key:"LMB",name:"Claw",cooldownFrac:0,ready:!0}];if(e===this.roran&&this.roran){const t=this.roran;return[{key:"LMB",name:"Hammer",cooldownFrac:0,ready:!0},{key:"RMB",name:"Finisher",cooldownFrac:0,ready:!0},{key:"1",name:"Rally",cooldownFrac:t.rallyCd>0?t.rallyCd/Qs.cooldown:0,ready:t.rallyCd<=0}]}return[]}rosterInfo(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].filter(n=>n.char!==null).map(({char:n,name:s})=>({name:s,active:n===e,available:n.health>0}))}spawn(e){this.entities?.add(e),this.spawned.push(e)}}const ze={maxHealth:420,aggroRange:300,colliderRadius:11.5,meshScale:4.6,speed:24,preferredMin:30,preferredMax:56,altitudeMin:22,breathRange:56,breathFacingDot:.85,breathWindup:.6,breathDuration:.95,breathCooldown:3,breathTickInterval:.05,breathDamage:9,breathSpeed:70,clawRange:28,strafeFlipInterval:3.5,diveRangeMin:26,diveRangeMax:64,diveWindup:.7,diveDuration:.5,diveRecover:.5,diveCooldown:4.5,diveSpeed:84,diveStandoff:5,diveStrikeRange:13,diveStrikeRadius:10,diveStrikeDamage:38,diveStrikeKnockback:7},cS={steps:[{windup:.2,active:.18,recovery:.4,damage:28,knockback:3,range:20,radius:10},{windup:.22,active:.2,recovery:.55,damage:38,knockback:4,range:21,radius:10.5}]},hS=new w(0,0,-1),Ys=new w,Vt=new w,Pu=new w,xi=new w,js=new w,Lu=new ct;class uS extends wn{combo;strike;breathState="ready";breathTimer=0;breathTick=0;strafeSign=1;strafeFlip=ze.strafeFlipInterval;diveState="ready";diveTimer=0;diveDir=new w(0,0,-1);diveHitSet=new Set;diveStrike;dragonParts;animT=0;constructor(e=null){super({maxHealth:ze.maxHealth,colliderRadius:ze.colliderRadius,aggroRange:ze.aggroRange},e),this.combo=new li(cS);const t=sc("shruikan");t.scale.setScalar(ze.meshScale),this.baseScale=ze.meshScale,this.mesh=t,this.dragonParts=rc(t),this.position.y=32,this.strike={team:this.team,center:new w,radius:0,damage:0,knockback:0,hitstop:je.hitstop,impact:2.8,hitSet:this.combo.hitSet},this.diveStrike={team:this.team,center:new w,radius:ze.diveStrikeRadius,damage:ze.diveStrikeDamage,knockback:ze.diveStrikeKnockback,hitstop:je.hitstop,impact:3.4,hitSet:this.diveHitSet}}currentStrike(){if(this.diveState==="diving")return Vt.set(0,0,-1).applyQuaternion(this.quaternion),this.diveStrike.center.copy(this.position).addScaledVector(Vt,ze.diveStrikeRange),this.diveStrike.team=this.team,this.diveStrike;const e=this.combo.activeStep;return e?(Vt.set(0,0,-1).applyQuaternion(this.quaternion),this.strike.center.copy(this.position).addScaledVector(Vt,e.range),this.strike.radius=e.radius,this.strike.damage=e.damage,this.strike.knockback=e.knockback,this.strike.team=this.team,this.strike):null}animateBody(e){this.animT+=e;const n=this.diveState==="windup"||this.diveState==="diving"?1.6:this.combo.isAttacking||this.breathState==="breathing"?1.2:.9;oc(this.dragonParts,this.animT,n)}think(e,t){this.combo.update(e);const n=this.target;if(!n){this.position.y<ze.altitudeMin&&(this.position.y=ze.altitudeMin);return}Ys.copy(n.position).sub(this.position);const s=Ys.length();if(s>1e-4&&(Ys.multiplyScalar(1/s),Lu.setFromUnitVectors(hS,Ys),this.quaternion.slerp(Lu,1-Math.exp(-1.9*e)).normalize()),this.diveState==="windup"||this.diveState==="diving"||this.diveState==="recover"){this.updateDive(e),this.position.y<ze.altitudeMin&&(this.position.y=ze.altitudeMin);return}this.diveState==="cooldown"&&(this.diveTimer-=e,this.diveTimer<=0&&(this.diveState="ready")),this.strafeFlip-=e,this.strafeFlip<=0&&(this.strafeFlip=ze.strafeFlipInterval,this.strafeSign=this.strafeSign===1?-1:1);const r=s>ze.preferredMax?"seek":s<ze.preferredMin?"retreat":"strafe";this.steer(Pu,r,n.position,this.strafeSign),this.position.addScaledVector(Pu,ze.speed*e),this.position.y<ze.altitudeMin&&(this.position.y=ze.altitudeMin),s<=ze.clawRange&&this.combo.state==="IDLE"&&this.combo.pressAttack(),Vt.set(0,0,-1).applyQuaternion(this.quaternion);const a=Vt.dot(Ys)>=ze.breathFacingDot;this.updateBreath(e,t,s,a),this.diveState==="ready"&&s>=ze.diveRangeMin&&s<=ze.diveRangeMax&&a&&this.breathState==="ready"&&!this.combo.isAttacking&&this.startDive(n.position)}startDive(e){this.diveState="windup",this.diveTimer=ze.diveWindup,this.diveDir.copy(e).sub(this.position),this.diveDir.lengthSq()<1e-6&&this.diveDir.set(0,0,-1).applyQuaternion(this.quaternion),this.diveDir.normalize()}updateDive(e){switch(this.diveTimer-=e,this.diveState){case"windup":{Vt.set(0,0,-1).applyQuaternion(this.quaternion),xi.copy(this.position).addScaledVector(Vt,this.collider.radius+.6),Be()?.burst(xi,{count:8,color:16722474,speed:3,life:.3,gravity:-3}),this.diveTimer<=0&&(this.diveState="diving",this.diveTimer=ze.diveDuration,this.diveHitSet.clear(),this.audio?.play("dragon-roar"));break}case"diving":{const t=this.target;let n=ze.diveSpeed*e;if(t){const s=this.position.distanceTo(t.position)-(this.collider.radius+ze.diveStandoff);n=Math.min(n,Math.max(0,s))}this.position.addScaledVector(this.diveDir,n),Be()?.burst(this.position,{count:5,color:5579298,speed:4,life:.25,gravity:2}),this.diveTimer<=0&&(this.diveState="recover",this.diveTimer=ze.diveRecover);break}case"recover":{this.diveTimer<=0&&(this.diveState="cooldown",this.diveTimer=ze.diveCooldown);break}}}updateBreath(e,t,n,s){switch(this.breathState){case"ready":n<=ze.breathRange&&s&&!this.combo.isAttacking&&(this.breathState="windup",this.breathTimer=ze.breathWindup);break;case"windup":this.breathTick-=e,this.breathTick<=0&&(this.breathTick=.08,Vt.set(0,0,-1).applyQuaternion(this.quaternion),xi.copy(this.position).addScaledVector(Vt,this.collider.radius+.5),Be()?.fireBurst(xi,8)),this.breathTimer-=e,this.breathTimer<=0&&(this.breathState="breathing",this.breathTimer=ze.breathDuration,this.audio?.play("fire"));break;case"breathing":this.emitBreath(e,t),this.breathTimer-=e,this.breathTimer<=0&&(this.breathState="cooldown",this.breathTimer=ze.breathCooldown);break;case"cooldown":this.breathTimer-=e,this.breathTimer<=0&&(this.breathState="ready");break}}emitBreath(e,t){this.breathTick-=e,!(this.breathTick>0)&&(this.breathTick=ze.breathTickInterval,Vt.set(0,0,-1).applyQuaternion(this.quaternion),xi.copy(this.position).addScaledVector(Vt,this.collider.radius+.6),js.copy(Vt).multiplyScalar(ze.breathSpeed),js.x+=(Math.random()-.5)*10,js.y+=(Math.random()-.5)*10,js.z+=(Math.random()-.5)*10,t.spawnProjectile({position:xi,velocity:js.clone(),team:this.team,damage:ze.breathDamage,radius:2.6,ttl:.7,color:16734746}),Be()?.fireBreath(xi,Vt,30))}}const _i=10181119,Qr=1.9,dS=new w(0,0,-1),Ks=new w,nn=new w,Si=new w,Du=new ct;class fS extends wn{wardTier=0;exposed=!1;castState="idle";castTimer=xt.attackCadence;attackCount=0;pendingRadial=!1;deflectTimer=0;constructor(e=null){super({maxHealth:xt.maxHealth,colliderRadius:xt.colliderRadius,aggroRange:xt.aggroRange},e),this.mesh=Lx(),this.position.y=be.groundY}takeDamage(e,t,n){this.maybeDeflect()}maybeDeflect(){this.deflectTimer>0||(this.deflectTimer=xt.deflectThrottle,nn.set(this.position.x,this.position.y+Qr,this.position.z),this.wardTier>0?(Be()?.burst(nn,{count:14,color:_i,speed:6,life:.4,gravity:0}),this.audio?.play("ward-break")):Be()?.burst(nn,{count:6,color:_i,speed:3,life:.3,gravity:0}))}think(e,t){if(this.deflectTimer>0&&(this.deflectTimer=Math.max(0,this.deflectTimer-e)),this.exposed){this.castState="idle";return}const n=this.target;if(!n)return;Ks.set(n.position.x-this.position.x,0,n.position.z-this.position.z);const s=Ks.length();if(Ks.lengthSq()>1e-6&&(Ks.normalize(),Du.setFromUnitVectors(dS,Ks),this.quaternion.slerp(Du,1-Math.exp(-4*e)).normalize()),this.castTimer-=e,this.castState==="telegraph"){nn.set(this.position.x,this.position.y+Qr,this.position.z),Be()?.burst(nn,{count:3,color:_i,speed:2,life:.2,gravity:-1}),this.castTimer<=0&&(this.pendingRadial?this.castRadial(t):this.castBolt(t,n.position),this.castState="idle",this.castTimer=xt.attackCadence);return}this.castTimer<=0&&s<=xt.aggroRange&&(this.attackCount+=1,this.pendingRadial=this.attackCount%xt.aoeEvery===0,this.castState="telegraph",this.castTimer=xt.telegraph)}castBolt(e,t){nn.set(this.position.x,this.position.y+Qr,this.position.z),Si.copy(t).sub(nn),Si.lengthSq()<1e-6&&Si.set(0,0,-1).applyQuaternion(this.quaternion),Si.normalize(),e.spawnProjectile({position:nn.clone(),velocity:Si.clone().multiplyScalar(xt.projSpeed),team:this.team,damage:xt.projDamage,radius:xt.projRadius,ttl:xt.projTtl,color:_i}),Be()?.burst(nn,{count:8,color:_i,speed:5,life:.3,gravity:0}),this.audio?.play("cast")}castRadial(e){nn.set(this.position.x,this.position.y+Qr,this.position.z);for(let t=0;t<xt.aoeCount;t++){const n=t/xt.aoeCount*Math.PI*2;Si.set(Math.cos(n),0,Math.sin(n)),e.spawnProjectile({position:nn.clone(),velocity:Si.clone().multiplyScalar(xt.aoeSpeed),team:this.team,damage:xt.aoeDamage,radius:xt.projRadius,ttl:xt.projTtl,color:_i})}Be()?.burst(nn,{count:20,color:_i,speed:8,life:.45,gravity:0}),this.audio?.play("cast")}}class pS extends wn{constructor(e,t,n=null){super({maxHealth:t?.maxHealth??Us.hp,colliderRadius:t?.colliderRadius??Us.colliderRadius,aggroRange:t?.aggroRange??0},n),this.onDestroyed=e;const s=Ux();this.mesh=s,this.gem=s.userData.gem??null}gem;bobPhase=Math.random()*Math.PI*2;baseY=0;anchored=!1;think(e,t){this.anchored||(this.baseY=this.position.y,this.anchored=!0),this.bobPhase+=e*Us.bobSpeed,this.position.y=this.baseY+Math.sin(this.bobPhase)*Us.bobAmplitude,this.gem&&(this.gem.rotation.y+=e*Us.spinSpeed)}onDeath(){this.onDestroyed()}}function Iu(i){i.traverse(e=>{const t=e;t.isMesh&&t.geometry&&!Ed(t.geometry)&&t.geometry.dispose()}),i.removeFromParent()}class mS{skyGroup;throneGroup;terrain;thronePosition;anchorPoints;constructor(e,t={}){const n=t.throneZ??-30,s=t.roomHalfWidth??34,r=be.groundY;this.terrain=new cc(e,{size:1300,groundY:r}),e.background=fa(1446688),e.fog&&(e.fog.color.copy(fa(1446688)),e.fog instanceof ir&&(e.fog.near=55,e.fog.far=620)),this.skyGroup=this.buildSky(),ic(this.skyGroup,!1),this.throneGroup=this.buildThroneRoom(n,s,r),this.throneGroup.visible=!1,this.thronePosition=new w(0,r,n),this.anchorPoints=[new w(16,r+1.6,n+12),new w(-16,r+1.6,n+12),new w(9,r+4,n+6),new w(-11,r+4.6,n+9)],e.add(this.skyGroup,this.throneGroup)}buildSky(){const e=new De;e.name="citadelSky";const t=[[0,-130,70,78,40,0],[-26,-120,26,117,26,0],[22,-124,30,143,28,0],[0,-110,20,169,20,0]];for(const[a,o,l,c,h,u]of t){const d=new Ue(new Tt(l,c,h),St("citadelBlack"));d.position.set(a,u+c/2,o),d.castShadow=!0,e.add(d)}const n=new Ue(new Tt(160,14,90),St("throneDark"));n.position.set(-6,96,-96),n.rotation.set(.12,.18,-.06),n.castShadow=!0,e.add(n);const s=kl();s.position.set(-30,0,-210),s.scale.setScalar(3),e.add(s);const r=kl();return r.position.set(60,0,-180),r.scale.setScalar(2.2),r.rotation.y=.6,e.add(r),e}buildThroneRoom(e,t,n){const s=new De;s.name="citadelThroneRoom";const r=24,a=e-6,o=r-a,l=(r+a)/2,c=30,h=new Ue(new zn(t*2,o),W_());h.rotation.x=-Math.PI/2,h.position.set(0,n+.02,l),h.receiveShadow=!0,h.name="throneFloor",s.add(h);const u=new Ue(new Tt(t*2+2,c,1.5),St("citadelBlack"));u.position.set(0,n+c/2,a-.75),u.castShadow=!0,s.add(u);for(const _ of[-1,1]){const p=new Ue(new Tt(1.5,c,o),St("citadelBlack"));p.position.set(_*(t+.75),n+c/2,l),p.castShadow=!0,s.add(p)}const d=t-4,m=6;for(let _=0;_<m;_++){const p=r-5-_*((o-8)/(m-1));for(const f of[-1,1]){const b=Ix(c);b.position.set(f*d,n,p),s.add(b)}}const v=Dx();return v.position.set(0,n,e),v.rotation.y=Math.PI,v.scale.setScalar(1.35),s.add(v),s}setPhase(e){const t=e==="throne";this.skyGroup.visible=!t,this.throneGroup.visible=t}dispose(){this.terrain.dispose(),Iu(this.skyGroup),Iu(this.throneGroup),this.anchorPoints.length=0}}const gS=["1","2","3","4"],Uu=2.4,vS=4,xS=3,Nu="waise neiat",ni=new w;function Jr(i){return i.replace(/ /g,"")}class _S{constructor(e,t){this.input=e,this.host=t}id="urubaen";title="Assault on Urûʼbaen";phase="SKY";finaleState="ANCHORS";resolved=!1;descendTimer=Uu;exposedTimer=0;entities=null;ctx=null;spawned=[];controller=null;spells=null;citadel=null;saphira=null;eragon=null;roran=null;shruikan=null;galbatorix=null;anchors=[];guards=[];typedBuffer="";keyListenerAttached=!1;load(e){this.entities=e.entities,this.ctx=e,this.host.setLightingMood("citadel");const t=new Ca;e.entities.add(t),ai(t),this.spawned.push(t);const n=new Fi;e.entities.add(n),Hn(n),this.spawned.push(n),this.spells=new Ua,this.citadel=new mS(e.scene),this.citadel.setPhase("sky");const s=new Da(this.input,e.audio);s.position.set(0,32,40),s.syncTransformImmediate(),this.saphira=s,this.spawn(s),this.controller=new La(this.input,this.host),this.controller.setRoster([s],0);const r=new uS(e.audio);r.position.set(0,52,4),r.syncTransformImmediate(),this.shruikan=r,this.spawn(r),this.host.setHudInfoProvider(()=>this.buildHudInfo()),this.phase="SKY"}update(e,t){if(this.citadel?.terrain.update(e),this.controller?.update(e),!this.resolved)switch(this.phase){case"SKY":this.updateSky();break;case"DESCENDING":this.updateDescending(e,t);break;case"THRONE":this.updateThrone(e,t);break}}unload(){if(this.removeKeyListener(),this.input.setFrozen(!1),this.entities)for(const e of this.spawned)this.entities.remove(e);this.citadel?.dispose(),ai(null),Hn(null),this.host.setHudInfoProvider(null),this.host.setActiveEntity(null),this.spawned.length=0,this.anchors.length=0,this.guards.length=0,this.controller=null,this.entities=null,this.ctx=null,this.spells=null,this.citadel=null,this.saphira=null,this.eragon=null,this.roran=null,this.shruikan=null,this.galbatorix=null}updateSky(){const e=this.saphira;if(e){if(e.downed||e.health<=0){this.host.setEndText("LOST","Saphira Falls","Shruikan cannot be beaten without her. The skies over Urûʼbaen are lost."),this.resolve(()=>this.host.lose());return}this.shruikan&&(!this.shruikan.alive||this.shruikan.health<=0)&&this.beginDescent()}}beginDescent(){this.phase="DESCENDING",this.descendTimer=Uu,this.shruikan&&this.entities?.remove(this.shruikan),this.shruikan=null,pa()?.clearTeam("enemy")}updateDescending(e,t){const n=this.saphira;if(n&&(n.downed||n.health<=0)){this.host.setEndText("LOST","Saphira Falls","Shruikan cannot be beaten without her. The skies over Urûʼbaen are lost."),this.resolve(()=>this.host.lose());return}if(n){const s=1-Math.exp(-2.5*e);n.position.y+=(6-n.position.y)*s,n.position.x+=(0-n.position.x)*s,n.position.z+=(14-n.position.z)*s}this.descendTimer-=e,this.descendTimer<=0&&this.beginThrone(t)}beginThrone(e){this.phase="THRONE";const t=this.spells,n=this.saphira,s=this.citadel;if(!t||!n||!s)return;s.setPhase("throne"),n.position.set(5,4,12),n.syncTransformImmediate();const r=new Ia(this.input,t,e.audio);r.position.set(0,be.groundY,12),r.syncTransformImmediate(),r.setMaxEnergy(r.maxEnergy+e.save.maxEnergyBonus),this.eragon=r,this.spawn(r);const a=new ar(this.input,e.audio);a.position.set(3,be.groundY,13),a.syncTransformImmediate(),this.roran=a,this.spawn(a),this.controller?.setRoster([r,n,a],0);const o=new fS(e.audio);o.position.copy(s.thronePosition),o.syncTransformImmediate(),o.wardTier=vS,this.galbatorix=o,this.spawn(o);for(let l=0;l<s.anchorPoints.length;l++){const c=new pS(()=>this.onAnchorDestroyed(),void 0,e.audio);c.position.copy(s.anchorPoints[l]),c.syncTransformImmediate(),this.anchors.push(c),this.spawn(c)}for(const[l,c]of[[-7,8],[7,8]]){const h=new fn(e.audio);h.position.set(l,be.groundY,c),h.syncTransformImmediate(),this.guards.push(h),this.spawn(h)}this.finaleState="ANCHORS"}updateThrone(e,t){switch(this.reap(this.anchors),this.reap(this.guards),this.finaleState){case"ANCHORS":break;case"EXPOSED":this.exposedTimer+=e;break}this.checkLose()}onAnchorDestroyed(){const e=this.galbatorix;e&&(e.wardTier=Math.max(0,e.wardTier-1),this.ctx?.audio.play("ward-break"),e.wardTier===0&&this.finaleState==="ANCHORS"&&this.enterExposed())}enterExposed(){const e=this.galbatorix,t=this.citadel;if(!(!e||!t)){this.finaleState="EXPOSED",this.exposedTimer=0,e.exposed=!0,pa()?.clearTeam("enemy");for(const n of this.guards)this.entities?.remove(n);this.guards.length=0,this.input.setFrozen(!0),e.position.set(0,be.groundY,t.thronePosition.z+6),e.syncTransformImmediate(),ni.set(e.position.x,e.position.y+2,e.position.z),Be()?.burst(ni,{count:80,color:15397631,speed:5,life:1.2,gravity:-1}),Be()?.burst(ni,{count:60,color:12374271,speed:9,life:.9,gravity:0}),ni.y+=1.5,Be()?.burst(ni,{count:40,color:16777215,speed:3,life:1.4,gravity:-.5}),this.ctx?.audio.play("cast"),this.typedBuffer="",this.addKeyListener()}}unmake(){if(this.finaleState!=="EXPOSED")return;this.finaleState="UNMADE",this.removeKeyListener(),this.input.setFrozen(!1);const e=this.galbatorix;e&&(ni.set(e.position.x,e.position.y+2,e.position.z),Be()?.burst(ni,{count:120,color:16777215,speed:14,life:1,gravity:2}),Be()?.burst(ni,{count:80,color:10181119,speed:18,life:.8,gravity:0}),this.entities?.remove(e),this.galbatorix=null),this.ctx?.audio.play("death"),this.ctx?.save.markLevelCleared(this.id),this.host.setEndText("WON","The Empire Falls","Galbatorix is unmade. Arya rises with the green dragon Fírnen — a new age of Riders begins."),this.resolve(()=>this.host.win())}checkLose(){const e=!this.eragon||this.eragon.downed||this.eragon.health<=0,t=!this.roran||this.roran.downed||this.roran.health<=0;e&&t&&(this.host.setEndText("LOST","The King Stands","Eragon and Roran have fallen. Urûʼbaen holds."),this.resolve(()=>this.host.lose()))}addKeyListener(){this.keyListenerAttached||(window.addEventListener("keydown",this.onKeyDown),this.keyListenerAttached=!0)}removeKeyListener(){this.keyListenerAttached&&(window.removeEventListener("keydown",this.onKeyDown),this.keyListenerAttached=!1)}onKeyDown=e=>{if(this.finaleState!=="EXPOSED")return;if(e.key==="Backspace"){e.preventDefault(),this.typedBuffer=this.typedBuffer.slice(0,-1);return}if(e.key.length!==1)return;const t=this.typedBuffer+e.key.toLowerCase();this.typedBuffer=Jr(Nu).startsWith(Jr(t))?t:"",Jr(this.typedBuffer)===Jr(Nu)&&this.unmake()};reap(e){for(let t=e.length-1;t>=0;t--){const n=e[t];(!n.alive||n.health<=0)&&e.splice(t,1)}}resolve(e){this.resolved||(this.resolved=!0,this.phase="DONE",e())}buildHudInfo(){const e=this.controller?.active??null,t=this.controller;return{objective:this.objectiveText(),spells:this.slotsFor(e),roster:this.rosterInfo(e),swapHint:{available:!!t?.canSwap(),name:t?.nextSwapTarget()?this.nameFor(t.nextSwapTarget()):null}}}nameFor(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].find(n=>n.char!==null&&n.char===e)?.name??"Ally"}objectiveText(){switch(this.phase){case"SKY":return"Phase 1 — Defeat Shruikan, the black dragon (juke his fire and dive)";case"DESCENDING":return"Saphira descends into the citadel…";case"THRONE":return this.throneObjective();case"DONE":return""}}throneObjective(){switch(this.finaleState){case"ANCHORS":return`Galbatorix is shielded by the Eldunarí — destroy them (${this.galbatorix?.wardTier??0} left) · F to swap`;case"EXPOSED":return this.exposedTimer<xS?"Murtagh strips the last ward — 'I know your true name!'":`Speak the unmaking — type WAISE NEIAT:  ${this.typedBuffer.toUpperCase()}`;case"UNMADE":return"The unmaking is spoken…"}}slotsFor(e){if(e===this.eragon&&this.eragon&&this.spells){const t=this.spells,n=this.eragon;return rr.map((s,r)=>({key:gS[r]??"",name:s.word,cooldownFrac:s.cooldown>0?t.remainingCooldown(n,s.id)/s.cooldown:0,ready:t.canCast(n,s)}))}if(e===this.saphira&&this.saphira)return[{key:"1",name:"Fire Breath",cooldownFrac:0,ready:this.saphira.energy>0},{key:"LMB",name:"Claw",cooldownFrac:0,ready:!0}];if(e===this.roran&&this.roran){const t=this.roran;return[{key:"LMB",name:"Hammer",cooldownFrac:0,ready:!0},{key:"RMB",name:"Finisher",cooldownFrac:0,ready:!0},{key:"1",name:"Rally",cooldownFrac:t.rallyCd>0?t.rallyCd/Qs.cooldown:0,ready:t.rallyCd<=0}]}return[]}rosterInfo(e){return[{char:this.saphira,name:"Saphira"},{char:this.eragon,name:"Eragon"},{char:this.roran,name:"Roran"}].filter(n=>n.char!==null).map(({char:n,name:s})=>({name:s,active:n===e,available:n.health>0}))}spawn(e){this.entities?.add(e),this.spawned.push(e)}}const Gd=document.getElementById("game"),Vd=document.getElementById("ui-root");if(!(Gd instanceof HTMLCanvasElement))throw new Error('Expected a <canvas id="game"> element.');if(!(Vd instanceof HTMLElement))throw new Error('Expected a <div id="ui-root"> element.');const bn=new Jx(Gd,Vd);Pa("aerial-duel",()=>new Z_(bn.input,bn));Pa("dev-sandbox",()=>new J_(bn.input,bn));Pa("siege",()=>new lS(bn.input,bn));Pa("urubaen",()=>new _S(bn.input,bn));const SS=location.hash==="#urubaen"?"urubaen":location.hash==="#siege"?"siege":location.hash==="#dev"?"dev-sandbox":"aerial-duel";bn.bootInto(SS);bn.start();
//# sourceMappingURL=index-BTufYPY0.js.map
