import{b as Jc,c as $c,e as Kc,h as jc,j as Qc}from"./chunk-O6MSK6EN.js";import"./chunk-DCANE7XH.js";var Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lh=0,ic=1,Uh=2;var sc=1,aa=2,qn=3,ri=0,$e=1,cn=2,li=0,Wi=1,rc=2,oc=3,ac=4,Nh=5,wi=100,Fh=101,Oh=102,Bh=103,zh=104,kh=200,Vh=201,Gh=202,Hh=203,Io=204,Do=205,Wh=206,Xh=207,qh=208,Yh=209,Zh=210,Jh=211,$h=212,Kh=213,jh=214,la=0,ca=1,ha=2,Xi=3,ua=4,da=5,fa=6,pa=7,ma=0,Qh=1,tu=2,ci=0,eu=1,nu=2,iu=3,ga=4,su=5,ru=6,ou=7;var lc=300,ji=301,Qi=302,_a=303,xa=304,Zr=306,Lo=1e3,bi=1001,Uo=1002,hn=1003,au=1004;var Jr=1005;var Ln=1006,ya=1007;var Li=1008;var On=1009,cc=1010,hc=1011,Ws=1012,va=1013,Ui=1014,vn=1015,Xs=1016,Ma=1017,Sa=1018,qs=1020,uc=35902,dc=35899,fc=1021,pc=1022,fn=1023,As=1026,Ys=1027,ba=1028,wa=1029,mc=1030,Ta=1031;var Ea=1033,$r=33776,Kr=33777,jr=33778,Qr=33779,Aa=35840,Ca=35841,Ra=35842,Pa=35843,Ia=36196,Da=37492,La=37496,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,ka=37814,Va=37815,Ga=37816,Ha=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,Za=36492,Ja=36494,$a=36495,Ka=36283,ja=36284,Qa=36285,tl=36286;var gr=2300,No=2301,Po=2302,Xl=2400,ql=2401,Yl=2402;var lu=3200,Zs=3201;var el=0,cu=1,hi="",nn="srgb",qi="srgb-linear",_r="linear",Te="srgb";var Gi=7680;var Zl=519,hu=512,uu=513,du=514,gc=515,fu=516,pu=517,mu=518,gu=519,Jl=35044,Ni=35048;var _c="300 es",Dn=2e3,xr=2001;var Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=1234567,dr=Math.PI/180,Cs=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function gd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _d(i,t,e){return i!==t?(e-i)/(t-i):0}function fr(i,t,e){return(1-e)*i+e*t}function xd(i,t,e,n){return fr(i,t,1-Math.exp(-e*n))}function yd(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bd(i,t){return i+Math.random()*(t-i)}function wd(i){return i*(.5-Math.random())}function Td(i){i!==void 0&&(th=i);let t=th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ed(i){return i*dr}function Ad(i){return i*Cs}function Cd(i){return(i&i-1)===0&&i!==0}function Rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Id(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ui={DEG2RAD:dr,RAD2DEG:Cs,generateUUID:ts,clamp:he,euclideanModulo:xc,mapLinear:gd,inverseLerp:_d,lerp:fr,damp:xd,pingpong:yd,smoothstep:vd,smootherstep:Md,randInt:Sd,randFloat:bd,randFloatSpread:wd,seededRandom:Td,degToRad:Ed,radToDeg:Ad,isPowerOfTwo:Cd,ceilPowerOfTwo:Rd,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Id,normalize:on,denormalize:Ts},Tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let R=Math.sqrt(b),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let y=a*w;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xl.copy(this).projectOnVector(t),this.sub(xl)}reflect(t){return this.sub(xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xl=new P,eh=new un,ce=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],b=s[4],y=s[7],R=s[2],A=s[5],I=s[8];return r[0]=o*x+a*w+l*R,r[3]=o*m+a*b+l*A,r[6]=o*p+a*y+l*I,r[1]=c*x+h*w+u*R,r[4]=c*m+h*b+u*A,r[7]=c*p+h*y+u*I,r[2]=d*x+f*w+g*R,r[5]=d*m+f*b+g*A,r[8]=d*p+f*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new ce;function yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _u(){let i=yr("canvas");return i.style.display="block",i}var nh={};function Rs(i){i in nh||(nh[i]=!0,console.warn(i))}function xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ih=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){let i={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qi]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var ye=Dd();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,Fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=yr("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,Ps=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vl(s[o].image)):r.push(vl(s[o]))}else r=vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ud=0,Ml=new P,an=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=Ln,o=Li,a=fn,l=On,c=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ts(),this.name="",this.source=new Ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=lc;an.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(f+1)/2,R=(p+1)/2,A=(h+d)/4,I=(u+x)/4,L=(g+m)/4;return b>y&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=I/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=L/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oo=class extends Gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new an(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vr=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bo=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),oo.subVectors(this.max,ir),fs.subVectors(t.a,ir),ps.subVectors(t.b,ir),ms.subVectors(t.c,ir),gi.subVectors(ps,fs),_i.subVectors(ms,ps),Bi.subVectors(fs,ms);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!Sl(e,fs,ps,ms,oo)||(e=[1,0,0,0,1,0,0,0,1],!Sl(e,fs,ps,ms,oo))?!1:(ao.crossVectors(gi,_i),e=[ao.x,ao.y,ao.z],Sl(e,fs,ps,ms,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,ro=new Wn,fs=new P,ps=new P,ms=new P,gi=new P,_i=new P,Bi=new P,ir=new P,oo=new P,ao=new P,zi=new P;function Sl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nd=new Wn,sr=new P,bl=new P,oi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(bl)),this.expandByPoint(sr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ti=new P,wl=new P,lo=new P,xi=new P,Tl=new P,co=new P,El=new P,Ti=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wl.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(wl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=xi.dot(this.direction),l=-xi.dot(lo),c=xi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wl).addScaledVector(lo,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){Tl.subVectors(e,t),co.subVectors(n,t),El.crossVectors(Tl,co);let o=this.direction.dot(El),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);let l=a*this.direction.dot(co.crossVectors(xi,co));if(l<0)return null;let c=a*this.direction.dot(Tl.cross(xi));if(c<0||l+c>o)return null;let h=-a*xi.dot(El);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Od)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),yi.crossVectors(n,gn),yi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),yi.crossVectors(n,gn)),yi.normalize(),ho.crossVectors(gn,yi),s[0]=yi.x,s[4]=ho.x,s[8]=gn.x,s[1]=yi.y,s[5]=ho.y,s[9]=gn.y,s[2]=yi.z,s[6]=ho.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],b=n[7],y=n[11],R=n[15],A=s[0],I=s[4],L=s[8],S=s[12],v=s[1],D=s[5],O=s[9],J=s[13],j=s[2],q=s[6],Q=s[10],mt=s[14],Y=s[3],$=s[7],et=s[11],xt=s[15];return r[0]=o*A+a*v+l*j+c*Y,r[4]=o*I+a*D+l*q+c*$,r[8]=o*L+a*O+l*Q+c*et,r[12]=o*S+a*J+l*mt+c*xt,r[1]=h*A+u*v+d*j+f*Y,r[5]=h*I+u*D+d*q+f*$,r[9]=h*L+u*O+d*Q+f*et,r[13]=h*S+u*J+d*mt+f*xt,r[2]=g*A+x*v+m*j+p*Y,r[6]=g*I+x*D+m*q+p*$,r[10]=g*L+x*O+m*Q+p*et,r[14]=g*S+x*J+m*mt+p*xt,r[3]=w*A+b*v+y*j+R*Y,r[7]=w*I+b*D+y*q+R*$,r[11]=w*L+b*O+y*Q+R*et,r[15]=w*S+b*J+y*mt+R*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,b=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,A=e*w+n*b+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=w*I,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*I,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*I,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*I,t[4]=b*I,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*I,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*I,t[8]=y*I,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*I,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*I,t[12]=R*I,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*I,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,w=l*c,b=l*h,y=l*u,R=n.x,A=n.y,I=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+y)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+b)*I,s[9]=(m-w)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);let c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Dn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Dn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===xr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new P,Pn=new Ce,Fd=new P(0,0,0),Od=new P(1,1,1),yi=new P,ho=new P,gn=new P,rh=new Ce,oh=new un,En=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bd=0,ah=new P,_s=new un,ei=new Ce,uo=new P,rr=new P,zd=new P,kd=new un,lh=new P(1,0,0),ch=new P(0,1,0),hh=new P(0,0,1),uh={type:"added"},Vd={type:"removed"},xs={type:"childadded",child:null},Al={type:"childremoved",child:null},Ee=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new En,n=new un,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ce}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(rr,uo,this.up):ei.lookAt(uo,rr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ei),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),Al.child=t,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new P,ni=new P,Cl=new P,ii=new P,ys=new P,vs=new P,dh=new P,Rl=new P,Pl=new P,Il=new P,Dl=new we,Ll=new we,Ul=new we,Si=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),ni.subVectors(n,e),Cl.subVectors(t,e);let o=In.dot(In),a=In.dot(ni),l=In.dot(Cl),c=ni.dot(ni),h=ni.dot(Cl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dl.setScalar(0),Ll.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Ll,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),ni.subVectors(t,e),In.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),In.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),vs.subVectors(r,n),Rl.subVectors(t,n);let l=ys.dot(Rl),c=vs.dot(Rl);if(l<=0&&c<=0)return e.copy(n);Pl.subVectors(t,s);let h=ys.dot(Pl),u=vs.dot(Pl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ys,o);Il.subVectors(t,r);let f=ys.dot(Il),g=vs.dot(Il);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(vs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(dh,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ys,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Nl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=xc(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Nl(o,r,t+1/3),this.g=Nl(o,r,t),this.b=Nl(o,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return ye.workingToColorSpace(en.copy(this),t),Math.round(he(en.r*255,0,255))*65536+Math.round(he(en.g*255,0,255))*256+Math.round(he(en.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=nn){ye.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(fo);let n=fr(vi.h,fo.h,e),s=fr(vi.s,fo.s,e),r=fr(vi.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new ie;ie.NAMES=yu;var Gd=0,Un=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Wi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Do,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ai=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new P,po=new Tt,Hd=0,Ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}};var Mr=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wd=0,wn=new Ce,Fl=new Ee,Ms=new P,_n=new Wn,or=new Wn,Ye=new P,Ue=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yc(t)?Sr:Mr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Fl.lookAt(t),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(_n.min,or.min),_n.expandByPoint(Ye),Ye.addVectors(_n.max,or.max),_n.expandByPoint(Ye)):(_n.expandByPoint(or.min),_n.expandByPoint(or.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Ye.add(Ms)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new P,l[L]=new P;let c=new P,h=new P,u=new P,d=new Tt,f=new Tt,g=new Tt,x=new P,m=new P;function p(L,S,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(x),a[S].add(x),a[v].add(x),l[L].add(m),l[S].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,S=w.length;L<S;++L){let v=w[L],D=v.start,O=v.count;for(let J=D,j=D+O;J<j;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let b=new P,y=new P,R=new P,A=new P;function I(L){R.fromBufferAttribute(s,L),A.copy(R);let S=a[L];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(A,S);let D=y.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,D)}for(let L=0,S=w.length;L<S;++L){let v=w[L],D=v.start,O=v.count;for(let J=D,j=D+O;J<j;J+=3)I(t.getX(J+0)),I(t.getX(J+1)),I(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new Ce,ki=new Ti,mo=new oi,ph=new P,go=new P,_o=new P,xo=new P,Ol=new P,yo=new P,mh=new P,vo=new P,be=class extends Ee{constructor(t=new Ue,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ol.fromBufferAttribute(u,t),o?yo.addScaledVector(Ol,h):yo.addScaledVector(Ol.sub(e),h))}e.add(yo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(mo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(mo,ph)===null||ki.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(fh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(fh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=b;y<R;y+=3){let A=a.getX(y),I=a.getX(y+1),L=a.getX(y+2);s=Mo(this,p,t,n,c,h,u,A,I,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Mo(this,o,t,n,c,h,u,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=b;y<R;y+=3){let A=y,I=y+1,L=y+2;s=Mo(this,p,t,n,c,h,u,A,I,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,b=m+1,y=m+2;s=Mo(this,o,t,n,c,h,u,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Xd(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ri,a),l===null)return null;vo.copy(a),vo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vo);return c<e.near||c>e.far?null:{distance:c,point:vo.clone(),object:i}}function Mo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,go),i.getVertexPosition(l,_o),i.getVertexPosition(c,xo);let h=Xd(i,t,e,n,go,_o,xo,mh);if(h){let u=new P;Si.getBarycoord(mh,go,_o,xo,u),s&&(h.uv=Si.getInterpolatedAttribute(s,a,l,c,u,new Tt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,l,c,u,new Tt)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Si.getNormal(go,_o,xo,d.normal),h.face=d,h.barycoord=u}return h}var sn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(x,m,p,w,b,y,R,A,I,L,S){let v=y/I,D=R/L,O=y/2,J=R/2,j=A/2,q=I+1,Q=L+1,mt=0,Y=0,$=new P;for(let et=0;et<Q;et++){let xt=et*D-J;for(let Et=0;Et<q;Et++){let Pt=Et*v-O;$[x]=Pt*w,$[m]=xt*b,$[p]=j,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[p]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(Et/I),u.push(1-et/L),mt+=1}}for(let et=0;et<L;et++)for(let xt=0;xt<I;xt++){let Et=d+xt+q*et,Pt=d+xt+q*(et+1),Jt=d+(xt+1)+q*(et+1),te=d+(xt+1)+q*et;l.push(Et,Pt,te),l.push(Pt,Jt,te),Y+=6}a.addGroup(f,Y,S),f+=Y,d+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=es(i[e]);for(let s in n)t[s]=n[s]}return t}function qd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var vu={clone:es,merge:rn},Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},br=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new P,gh=new Tt,_h=new Tt,Je=class extends br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,gh,_h),e.subVectors(_h,gh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,bs=1,zo=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Ss,bs,t,e);s.layers=this.layers,this.add(s);let r=new Je(Ss,bs,t,e);r.layers=this.layers,this.add(r);let o=new Je(Ss,bs,t,e);o.layers=this.layers,this.add(o);let a=new Je(Ss,bs,t,e);a.layers=this.layers,this.add(a);let l=new Je(Ss,bs,t,e);l.layers=this.layers,this.add(l);let c=new Je(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wr=class extends an{constructor(t=[],e=ji,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ko=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:li});r.uniforms.tEquirect.value=e;let o=new be(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Ln),new zo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ae=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jd={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Tr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yi=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ls=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=hn,h=hn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new Ce,xh=new Ce,So=[],yh=new Wn,$d=new Ce,ar=new be,lr=new oi,Fe=class extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$d)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),yh.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),lr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),xh.multiplyMatrices(n,ws),ar.matrixWorld=xh,ar.raycast(t,So);for(let o=0,a=So.length;o<a;o++){let l=So[o];l.instanceId=r,l.object=this,e.push(l)}So.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,ba,vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bl=new P,Kd=new P,jd=new ce,Tn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bl.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jd.getNormalMatrix(t),s=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new oi,Qd=new Tt(.5,.5),bo=new P,Ns=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],w=r[12],b=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-g,R-w).normalize(),s[1].setComponents(c+o,f+h,p+g,R+w).normalize(),s[2].setComponents(c+a,f+u,p+x,R+b).normalize(),s[3].setComponents(c-a,f-u,p-x,R-b).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-y).normalize(),e===Dn)s[5].setComponents(c+l,f+d,p+m,R+y).normalize();else if(e===xr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);let e=Qd.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zi=class extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vo=new P,Go=new P,vh=new Ce,cr=new Ti,wo=new oi,zl=new P,Mh=new P,Fs=class extends Ee{constructor(t=new Ue,e=new Zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Vo.fromBufferAttribute(e,s-1),Go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Go);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;vh.copy(s).invert(),cr.copy(t.ray).applyMatrix4(vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),w=h.getX(x+1),b=To(this,t,cr,l,p,w,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=To(this,t,cr,l,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=To(this,t,cr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=To(this,t,cr,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function To(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Vo.fromBufferAttribute(a,s),Go.fromBufferAttribute(a,r),e.distanceSqToSegment(Vo,Go,zl,Mh)>n)return;zl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zl);if(!(c<t.near||c>t.far))return{distance:c,point:Mh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Sh=new P,bh=new P,Os=class extends Fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Sh.fromBufferAttribute(e,s),bh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sh.distanceTo(bh);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bs=class extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Er=class extends an{constructor(t,e,n=Ui,s,r,o,a=hn,l=hn,c,h=As,u=1){if(h!==As&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ar=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Oe=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;w(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function w(){let y=new P,R=new P,A=0,I=(e-t)/n;for(let L=0;L<=r;L++){let S=[],v=L/r,D=v*(e-t)+t;for(let O=0;O<=s;O++){let J=O/s,j=J*l+a,q=Math.sin(j),Q=Math.cos(j);R.x=D*q,R.y=-v*n+m,R.z=D*Q,u.push(R.x,R.y,R.z),y.set(q,I,Q).normalize(),d.push(y.x,y.y,y.z),f.push(J,1-v),S.push(g++)}x.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){let v=x[S][L],D=x[S+1][L],O=x[S+1][L+1],J=x[S][L+1];(t>0||S!==0)&&(h.push(v,D,J),A+=3),(e>0||S!==r-1)&&(h.push(D,O,J),A+=3)}c.addGroup(p,A,0),p+=A}function b(y){let R=g,A=new Tt,I=new P,L=0,S=y===!0?t:e,v=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let j=O/s*l+a,q=Math.cos(j),Q=Math.sin(j);I.x=S*Q,I.y=m*v,I.z=S*q,u.push(I.x,I.y,I.z),d.push(0,v,0),A.x=q*.5+.5,A.y=Q*.5*v+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let J=R+O,j=D+O;y===!0?h.push(j,j+1,J):h.push(j+1,j,J),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class i extends Oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ho=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let b=new P,y=new P,R=new P;for(let A=0;A<e.length;A+=3)f(e[A+0],b),f(e[A+1],y),f(e[A+2],R),l(b,y,R,w)}function l(w,b,y,R){let A=R+1,I=[];for(let L=0;L<=A;L++){I[L]=[];let S=w.clone().lerp(y,L/A),v=b.clone().lerp(y,L/A),D=A-L;for(let O=0;O<=D;O++)O===0&&L===A?I[L][O]=S:I[L][O]=S.clone().lerp(v,O/D)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){let v=Math.floor(S/2);S%2===0?(d(I[L][v+1]),d(I[L+1][v]),d(I[L][v])):(d(I[L][v+1]),d(I[L+1][v+1]),d(I[L+1][v]))}}function c(w){let b=new P;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(w),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let w=new P;for(let b=0;b<r.length;b+=3){w.x=r[b+0],w.y=r[b+1],w.z=r[b+2];let y=m(w)/2/Math.PI+.5,R=p(w)/Math.PI+.5;o.push(y,1-R)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){let b=o[w+0],y=o[w+2],R=o[w+4],A=Math.max(b,y,R),I=Math.min(b,y,R);A>.9&&I<.1&&(b<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),R<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,b){let y=w*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){let w=new P,b=new P,y=new P,R=new P,A=new Tt,I=new Tt,L=new Tt;for(let S=0,v=0;S<r.length;S+=9,v+=6){w.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),A.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),L.set(o[v+4],o[v+5]),R.copy(w).add(b).add(y).divideScalar(3);let D=m(R);x(A,v+0,w,D),x(I,v+2,b,D),x(L,v+4,y,D)}}function x(w,b,y,R){R<0&&w.x===1&&(o[b]=w.x-1),y.x===0&&y.z===0&&(o[b]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new Ce;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wo=class extends zs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Eo=new P,kl=new Mc,Vl=new Mc,Gl=new Mc,ks=class extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Eo.subVectors(s[0],s[1]).add(s[0]),c=Eo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),kl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Vl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Gl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Gl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(kl.calc(l),Vl.calc(l),Gl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function tf(i,t){let e=1-i;return e*e*t}function ef(i,t){return 2*(1-i)*i*t}function nf(i,t){return i*i*t}function pr(i,t,e,n){return tf(i,t)+ef(i,e)+nf(i,n)}function sf(i,t){let e=1-i;return e*e*e*t}function rf(i,t){let e=1-i;return 3*e*e*i*t}function of(i,t){return 3*(1-i)*i*i*t}function af(i,t){return i*i*i*t}function mr(i,t,e,n,s){return sf(i,t)+rf(i,e)+of(i,n)+af(i,s)}var Rr=class extends xn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xo=class extends xn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y),mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pr=class extends xn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends xn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends xn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends xn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y),pr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(wh(a,l.x,c.x,h.x,u.x),wh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},Yo=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:ks,CubicBezierCurve:Rr,CubicBezierCurve3:Xo,EllipseCurve:zs,LineCurve:Pr,LineCurve3:qo,QuadraticBezierCurve:Ir,QuadraticBezierCurve3:Dr,SplineCurve:Lr}),Zo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yo[s.type]().fromJSON(s))}return this}},Ji=class extends Zo{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pr(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ir(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Rr(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new zs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fn=class extends Ji{constructor(t){super(t),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ji().fromJSON(s))}return this}};function lf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Mu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ff(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ur(r,o,e,a,l,c,0),o}function Mu(i,t,e,n,s){let r;if(s===wf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Th(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Th(o/n|0,i[o],i[o+1],r);return r&&Vs(r,r.next)&&(Fr(r),r=r.next),r}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||Le(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?hf(i,n,s,r):cf(i)){t.push(l.i,i.i,c.i),Fr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=uf($i(i),t),Ur(i,t,e,n,s,r,2)):o===2&&df(i,t,e,n,s,r):Ur($i(i),t,e,n,s,r,1);break}}}function cf(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ur(s,a,r,l,o,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),p=$l(f,g,t,e,n),w=$l(x,m,t,e,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=w;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ur(a,h,l,u,c,d,b.x,b.y)&&Le(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ur(a,h,l,u,c,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ur(a,h,l,u,c,d,b.x,b.y)&&Le(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ur(a,h,l,u,c,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function uf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Vs(n,s)&&bu(n,e,e.next,s)&&Nr(n,s)&&Nr(s,n)&&(t.push(n.i,e.i,s.i),Fr(e),Fr(e.next),e=i=s),e=e.next}while(e!==i);return $i(e)}function df(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mf(o,a)){let l=wu(o,a);o=$i(o,o.next),l=$i(l,l.next),Ur(o,t,e,n,s,r,0),Ur(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ff(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Mu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(vf(c))}s.sort(pf);for(let r=0;r<s.length;r++)e=mf(s[r],e);return e}function pf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mf(i,t){let e=gf(i,t);if(!e)return t;let n=wu(e,i);return $i(n,n.next),$i(e,e.next)}function gf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Vs(i,e))return e;do{if(Vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Su(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Nr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_f(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _f(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function xf(i,t,e,n){let s=i;do s.z===0&&(s.z=$l(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yf(s)}function yf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function $l(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Su(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ur(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Su(i,t,e,n,s,r,o,a)}function Mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sf(i,t)&&(Nr(i,t)&&Nr(t,i)&&bf(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||Vs(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vs(i,t){return i.x===t.x&&i.y===t.y}function bu(i,t,e,n){let s=Co(Le(i,t,e)),r=Co(Le(i,t,n)),o=Co(Le(e,n,i)),a=Co(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&Ao(i,e,t)||r===0&&Ao(i,n,t)||o===0&&Ao(e,i,n)||a===0&&Ao(e,t,n))}function Ao(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Co(i){return i>0?1:i<0?-1:0}function Sf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Nr(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function bf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wu(i,t){let e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Th(i,t,e,n){let s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var jl=class{static triangulate(t,e,n=2){return lf(t,e,n)}},Hi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eh(t),Ah(n,t);let o=t.length;e.forEach(Eh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ah(n,e[l]);let a=jl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Eh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ah(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xn=class i extends Ue{constructor(t=new Fn([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Tf,b,y=!1,R,A,I,L;p&&(b=p.getSpacedPoints(h),y=!0,d=!1,R=p.computeFrenetFrames(h,!1),A=new P,I=new P,L=new P),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),v=S.shape,D=S.holes;if(!Hi.isClockWise(v)){v=v.reverse();for(let rt=0,V=D.length;rt<V;rt++){let H=D[rt];Hi.isClockWise(H)&&(D[rt]=H.reverse())}}function J(rt){let H=10000000000000001e-36,G=rt[0];for(let ht=1;ht<=rt.length;ht++){let st=ht%rt.length,ut=rt[st],Ot=ut.x-G.x,Wt=ut.y-G.y,T=Ot*Ot+Wt*Wt,_=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(G.x),Math.abs(G.y)),z=H*_*_;if(T<=z){rt.splice(st,1),ht--;continue}G=ut}}J(v),D.forEach(J);let j=D.length,q=v;for(let rt=0;rt<j;rt++){let V=D[rt];v=v.concat(V)}function Q(rt,V,H){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(V,H)}let mt=v.length;function Y(rt,V,H){let G,ht,st,ut=rt.x-V.x,Ot=rt.y-V.y,Wt=H.x-rt.x,T=H.y-rt.y,_=ut*ut+Ot*Ot,z=ut*T-Ot*Wt;if(Math.abs(z)>Number.EPSILON){let X=Math.sqrt(_),ot=Math.sqrt(Wt*Wt+T*T),it=V.x-Ot/X,qt=V.y+ut/X,At=H.x-T/ot,Gt=H.y+Wt/ot,Xt=((At-it)*T-(Gt-qt)*Wt)/(ut*T-Ot*Wt);G=it+ut*Xt-rt.x,ht=qt+Ot*Xt-rt.y;let yt=G*G+ht*ht;if(yt<=2)return new Tt(G,ht);st=Math.sqrt(yt/2)}else{let X=!1;ut>Number.EPSILON?Wt>Number.EPSILON&&(X=!0):ut<-Number.EPSILON?Wt<-Number.EPSILON&&(X=!0):Math.sign(Ot)===Math.sign(T)&&(X=!0),X?(G=-Ot,ht=ut,st=Math.sqrt(_)):(G=ut,ht=Ot,st=Math.sqrt(_/2))}return new Tt(G/st,ht/st)}let $=[];for(let rt=0,V=q.length,H=V-1,G=rt+1;rt<V;rt++,H++,G++)H===V&&(H=0),G===V&&(G=0),$[rt]=Y(q[rt],q[H],q[G]);let et=[],xt,Et=$.concat();for(let rt=0,V=j;rt<V;rt++){let H=D[rt];xt=[];for(let G=0,ht=H.length,st=ht-1,ut=G+1;G<ht;G++,st++,ut++)st===ht&&(st=0),ut===ht&&(ut=0),xt[G]=Y(H[G],H[st],H[ut]);et.push(xt),Et=Et.concat(xt)}let Pt;if(m===0)Pt=Hi.triangulateShape(q,D);else{let rt=[],V=[];for(let H=0;H<m;H++){let G=H/m,ht=f*Math.cos(G*Math.PI/2),st=g*Math.sin(G*Math.PI/2)+x;for(let ut=0,Ot=q.length;ut<Ot;ut++){let Wt=Q(q[ut],$[ut],st);_t(Wt.x,Wt.y,-ht),G===0&&rt.push(Wt)}for(let ut=0,Ot=j;ut<Ot;ut++){let Wt=D[ut];xt=et[ut];let T=[];for(let _=0,z=Wt.length;_<z;_++){let X=Q(Wt[_],xt[_],st);_t(X.x,X.y,-ht),G===0&&T.push(X)}G===0&&V.push(T)}}Pt=Hi.triangulateShape(rt,V)}let Jt=Pt.length,te=g+x;for(let rt=0;rt<mt;rt++){let V=d?Q(v[rt],Et[rt],te):v[rt];y?(I.copy(R.normals[0]).multiplyScalar(V.x),A.copy(R.binormals[0]).multiplyScalar(V.y),L.copy(b[0]).add(I).add(A),_t(L.x,L.y,L.z)):_t(V.x,V.y,0)}for(let rt=1;rt<=h;rt++)for(let V=0;V<mt;V++){let H=d?Q(v[V],Et[V],te):v[V];y?(I.copy(R.normals[rt]).multiplyScalar(H.x),A.copy(R.binormals[rt]).multiplyScalar(H.y),L.copy(b[rt]).add(I).add(A),_t(L.x,L.y,L.z)):_t(H.x,H.y,u/h*rt)}for(let rt=m-1;rt>=0;rt--){let V=rt/m,H=f*Math.cos(V*Math.PI/2),G=g*Math.sin(V*Math.PI/2)+x;for(let ht=0,st=q.length;ht<st;ht++){let ut=Q(q[ht],$[ht],G);_t(ut.x,ut.y,u+H)}for(let ht=0,st=D.length;ht<st;ht++){let ut=D[ht];xt=et[ht];for(let Ot=0,Wt=ut.length;Ot<Wt;Ot++){let T=Q(ut[Ot],xt[Ot],G);y?_t(T.x,T.y+b[h-1].y,b[h-1].x+H):_t(T.x,T.y,u+H)}}}tt(),ct();function tt(){let rt=s.length/3;if(d){let V=0,H=mt*V;for(let G=0;G<Jt;G++){let ht=Pt[G];dt(ht[2]+H,ht[1]+H,ht[0]+H)}V=h+m*2,H=mt*V;for(let G=0;G<Jt;G++){let ht=Pt[G];dt(ht[0]+H,ht[1]+H,ht[2]+H)}}else{for(let V=0;V<Jt;V++){let H=Pt[V];dt(H[2],H[1],H[0])}for(let V=0;V<Jt;V++){let H=Pt[V];dt(H[0]+mt*h,H[1]+mt*h,H[2]+mt*h)}}n.addGroup(rt,s.length/3-rt,0)}function ct(){let rt=s.length/3,V=0;Mt(q,V),V+=q.length;for(let H=0,G=D.length;H<G;H++){let ht=D[H];Mt(ht,V),V+=ht.length}n.addGroup(rt,s.length/3-rt,1)}function Mt(rt,V){let H=rt.length;for(;--H>=0;){let G=H,ht=H-1;ht<0&&(ht=rt.length-1);for(let st=0,ut=h+m*2;st<ut;st++){let Ot=mt*st,Wt=mt*(st+1),T=V+G+Ot,_=V+ht+Ot,z=V+ht+Wt,X=V+G+Wt;wt(T,_,z,X)}}}function _t(rt,V,H){l.push(rt),l.push(V),l.push(H)}function dt(rt,V,H){Lt(rt),Lt(V),Lt(H);let G=s.length/3,ht=w.generateTopUV(n,s,G-3,G-2,G-1);C(ht[0]),C(ht[1]),C(ht[2])}function wt(rt,V,H,G){Lt(rt),Lt(V),Lt(G),Lt(V),Lt(H),Lt(G);let ht=s.length/3,st=w.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);C(st[0]),C(st[1]),C(st[3]),C(st[1]),C(st[2]),C(st[3])}function Lt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function C(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ef(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yo[s.type]().fromJSON(s)),new i(n,t.options)}},Tf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Tt(r,o),new Tt(a,l),new Tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Tt(o,1-l),new Tt(c,1-u),new Tt(d,1-g),new Tt(x,1-p)]:[new Tt(a,1-l),new Tt(h,1-u),new Tt(f,1-g),new Tt(m,1-p)]}};function Ef(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Or=class i extends Ho{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ei=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let w=p*d-o;for(let b=0;b<c;b++){let y=b*u-r;g.push(y,-w,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let b=w+c*p,y=w+c*(p+1),R=w+1+c*(p+1),A=w+1+c*p;f.push(b,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var dn=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],b=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-b),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let b=h[p][w+1],y=h[p][w],R=h[p+1][w],A=h[p+1][w+1];(p!==0||o>0)&&f.push(b,y,A),(p!==n-1||l<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ln=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(x,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Br=class i extends Ue{constructor(t=new Dr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new Tt,h=new P,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),w(),p()}function m(b){h=t.getPointAt(b/e,h);let y=o.normals[b],R=o.binormals[b];for(let A=0;A<=s;A++){let I=A/s*Math.PI*2,L=Math.sin(I),S=-Math.cos(I);l.x=S*y.x+L*R.x,l.y=S*y.y+L*R.y,l.z=S*y.z+L*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){let R=(s+1)*(b-1)+(y-1),A=(s+1)*b+(y-1),I=(s+1)*b+y,L=(s+1)*(b-1)+y;g.push(R,A,L),g.push(A,I,L)}}function w(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)c.x=b/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Yo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var zr=class extends Un{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Ve=class extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kr=class extends Ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Vr=class extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ai=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jo=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ro(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Af(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$o=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ql:r=t,a=2*e-n;break;case Yl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:o=t,l=2*n-e;break;case Yl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+w*o[c+R]+b*o[l+R]+y*o[u+R];return r}},Ko=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},jo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ro(e,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ro(t.times,Array),values:Ro(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $o(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case No:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Af(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Po,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=No;var Ci=class extends yn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=gr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};Qo.prototype.ValueTypeName="color";var ta=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="number";var ea=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gr=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends yn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=gr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};na.prototype.ValueTypeName="vector";var ia=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Tu=new ia,sa=class{constructor(t){this.manager=t!==void 0?t:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hr=class extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Hl=new Ce,Ch=new P,Rh=new P,ra=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ph=new Ce,hr=new P,Wl=new P,Ql=class extends ra{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),Wl.copy(n.position),Wl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),Ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph,n.coordinateSystem,n.reversedDepth)}},Wr=class extends Gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xr=class extends br{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},tc=class extends ra{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oa=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sc="\\[\\]\\.:\\/",Cf=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",Rf="[^"+Sc.replace("\\.","")+"]",Pf=/((?:WC+[\/:])*)/.source.replace("WC",bc),If=/(WCOD+)?/.source.replace("WCOD",Rf),Df=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Uf=new RegExp("^"+Pf+If+Df+Lf+"$"),Nf=["material","materials","bones","map"],ec=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cf,"")}static parseTrackName(t){let e=Uf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=ec;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);var Ih=new Ce,qr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ti(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(t,e=!0,n=[]){return nc(t,this,n,e),n.sort(Dh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)nc(t[s],this,n,e);return n.sort(Dh),n}};function Dh(i,t){return i.distance-t.distance}function nc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)nc(r[o],t,e,!0)}}var Pi=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Yr=class extends Gn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function wc(i,t,e,n){let s=Ff(n);switch(e){case fc:return i*t;case ba:return i*t/s.components*s.byteLength;case wa:return i*t/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case Ta:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Ea:return i*t*4/s.components*s.byteLength;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ra:return Math.max(i,8)*Math.max(t,8)/2;case Ia:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Za:case Ja:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ka:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ff(i){switch(i){case On:case cc:return{byteLength:1,components:1};case Ws:case hc:case Xs:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case Ui:case va:case vn:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ju(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Gp=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,vg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:qf,alphamap_pars_fragment:Yf,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:$f,aomap_pars_fragment:Kf,batching_pars_vertex:jf,batching_vertex:Qf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:yp,colorspace_fragment:vp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:wp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Fp,envmap_vertex:Ep,fog_vertex:Ap,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Dp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:kp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Hp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:$p,map_pars_fragment:Kp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:am,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:ym,project_vertex:vm,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Em,shadowmap_vertex:Am,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Pm,skinning_vertex:Im,skinnormal_vertex:Dm,specularmap_fragment:Lm,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:km,uv_vertex:Vm,worldpos_vertex:Gm,background_vert:Hm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:Zm,depth_vert:Jm,depth_frag:$m,distanceRGBA_vert:Km,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:xg,shadow_vert:yg,shadow_frag:vg,sprite_vert:Mg,sprite_frag:Sg},Ft={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Yn={basic:{uniforms:rn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:rn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:rn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:rn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:rn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:rn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:rn([Ft.points,Ft.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:rn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:rn([Ft.common,Ft.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:rn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:rn([Ft.sprite,Ft.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:rn([Ft.common,Ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:rn([Ft.lights,Ft.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Yn.physical={uniforms:rn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var nl={r:0,b:0,g:0},ns=new En,bg=new Ce;function wg(i,t,e,n,s,r,o){let a=new ie(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1,R=g(b);R===null?p(a,l):R&&R.isColor&&(p(R,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===Zr)?(h===void 0&&(h=new be(new sn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:es(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(y.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(ns)),h.material.toneMapped=ye.getTransfer(R.colorSpace)!==Te,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new be(new Ei(2,2),new Nn({name:"BackgroundMaterial",uniforms:es(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ye.getTransfer(R.colorSpace)!==Te,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(nl,vc(i)),n.buffers.color.setClear(nl.r,nl.g,nl.b,y,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:m,dispose:w}}function Tg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,D,O,J,j){let q=!1,Q=u(J,O,D);r!==Q&&(r=Q,c(r.object)),q=f(v,J,O,j),q&&g(v,J,O,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(v,D,O,J),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,D,O){let J=O.wireframe===!0,j=n[v.id];j===void 0&&(j={},n[v.id]=j);let q=j[D.id];q===void 0&&(q={},j[D.id]=q);let Q=q[J];return Q===void 0&&(Q=d(l()),q[J]=Q),Q}function d(v){let D=[],O=[],J=[];for(let j=0;j<e;j++)D[j]=0,O[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:J,object:v,attributes:{},index:null}}function f(v,D,O,J){let j=r.attributes,q=D.attributes,Q=0,mt=O.getAttributes();for(let Y in mt)if(mt[Y].location>=0){let et=j[Y],xt=q[Y];if(xt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor)),et===void 0||et.attribute!==xt||xt&&et.data!==xt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==J}function g(v,D,O,J){let j={},q=D.attributes,Q=0,mt=O.getAttributes();for(let Y in mt)if(mt[Y].location>=0){let et=q[Y];et===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(et=v.instanceColor));let xt={};xt.attribute=et,et&&et.data&&(xt.data=et.data),j[Y]=xt,Q++}r.attributes=j,r.attributesNum=Q,r.index=J}function x(){let v=r.newAttributes;for(let D=0,O=v.length;D<O;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){let O=r.newAttributes,J=r.enabledAttributes,j=r.attributeDivisors;O[v]=1,J[v]===0&&(i.enableVertexAttribArray(v),J[v]=1),j[v]!==D&&(i.vertexAttribDivisor(v,D),j[v]=D)}function w(){let v=r.newAttributes,D=r.enabledAttributes;for(let O=0,J=D.length;O<J;O++)D[O]!==v[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function b(v,D,O,J,j,q,Q){Q===!0?i.vertexAttribIPointer(v,D,O,j,q):i.vertexAttribPointer(v,D,O,J,j,q)}function y(v,D,O,J){x();let j=J.attributes,q=O.getAttributes(),Q=D.defaultAttributeValues;for(let mt in q){let Y=q[mt];if(Y.location>=0){let $=j[mt];if($===void 0&&(mt==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),mt==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),$!==void 0){let et=$.normalized,xt=$.itemSize,Et=t.get($);if(Et===void 0)continue;let Pt=Et.buffer,Jt=Et.type,te=Et.bytesPerElement,tt=Jt===i.INT||Jt===i.UNSIGNED_INT||$.gpuType===va;if($.isInterleavedBufferAttribute){let ct=$.data,Mt=ct.stride,_t=$.offset;if(ct.isInstancedInterleavedBuffer){for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let dt=0;dt<Y.locationSize;dt++)b(Y.location+dt,xt/Y.locationSize,Jt,et,Mt*te,(_t+xt/Y.locationSize*dt)*te,tt)}else{if($.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)p(Y.location+ct,$.meshPerAttribute);v.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ct=0;ct<Y.locationSize;ct++)m(Y.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ct=0;ct<Y.locationSize;ct++)b(Y.location+ct,xt/Y.locationSize,Jt,et,xt*te,xt/Y.locationSize*ct*te,tt)}}else if(Q!==void 0){let et=Q[mt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Y.location,et);break;case 3:i.vertexAttrib3fv(Y.location,et);break;case 4:i.vertexAttrib4fv(Y.location,et);break;default:i.vertexAttrib1fv(Y.location,et)}}}}w()}function R(){L();for(let v in n){let D=n[v];for(let O in D){let J=D[O];for(let j in J)h(J[j].object),delete J[j];delete D[O]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let D=n[v.id];for(let O in D){let J=D[O];for(let j in J)h(J[j].object),delete J[j];delete D[O]}delete n[v.id]}function I(v){for(let D in n){let O=n[D];if(O[v.id]===void 0)continue;let J=O[v.id];for(let j in J)h(J[j].object),delete J[j];delete O[v.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Eg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ag(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==fn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==On&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==vn&&!L)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Cg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Tn,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,b=w*4,y=p.clippingState||null;l.value=y,y=h(g,d,b,f);for(let R=0;R!==b;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Rg(i){let t=new WeakMap;function e(o,a){return a===_a?o.mapping=ji:a===xa&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_a||a===xa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ko(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $s=4,Eu=[.125,.215,.35,.446,.526,.582],rs=20,Tc=new Xr,Au=new ie,Ec=null,Ac=0,Cc=0,Rc=!1,ss=(1+Math.sqrt(5))/2,Js=1/ss,Cu=[new P(-ss,Js,0),new P(ss,Js,0),new P(-Js,0,ss),new P(Js,0,ss),new P(0,ss,-Js),new P(0,ss,Js),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Pg=new P,js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Pg}=r;Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,Ac,Cc),this._renderer.xr.enabled=Rc,t.scissorTest=!1,il(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Xs,format:fn,colorSpace:qi,depthBuffer:!1},s=Ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(r)),this._blurMaterial=Dg(r,t,e)}return s}_compileMaterial(t){let e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,n,s,r){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Au),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new ai({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new be(new sn,x),p=!1,w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,p=!0):(x.color.copy(Au),p=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let R=this._cubeSize;il(s,y*R,b>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;il(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Tc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(s-r-1)%Cu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new be(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let p=[],w=0;for(let I=0;I<rs;++I){let L=I/x,S=Math.exp(-L*L/2);p.push(S),I===0?w+=S:I<m&&(w+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[s],R=3*y*(s>b-$s?s-b+$s:0),A=4*(this._cubeSize-y);il(e,R,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Tc)}};function Ig(i){let t=[],e=[],n=[],s=i,r=i-$s+1+Eu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-$s?l=Eu[o-i+$s-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,L=A>2?0:-1,S=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];w.set(S,x*g*A),b.set(d,m*g*A);let v=[A,A,A,A,A,A];y.set(v,p*g*A)}let R=new Ue;R.setAttribute("position",new Ze(w,x)),R.setAttribute("uv",new Ze(b,m)),R.setAttribute("faceIndex",new Ze(y,p)),t.push(R),s>$s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ru(i,t,e){let n=new Hn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function il(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){let n=new Float32Array(rs),s=new P(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Pu(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Iu(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function Lg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_a||l===xa,h=l===ji||l===Qi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new js(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new js(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ug(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let b=0,y=w.length;b<y;b+=3){let R=w[b+0],A=w[b+1],I=w[b+2];d.push(R,A,A,I,I,R)}}else if(g!==void 0){let w=g.array;x=g.version;for(let b=0,y=w.length/3-1;b<y;b+=3){let R=b+0,A=b+1,I=b+2;d.push(R,A,A,I,I,R)}}else return;let m=new(yc(d)?Sr:Mr)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bg(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*R*4*u),I=new vr(A,y,R,u);I.type=vn,I.needsUpdate=!0;let L=b*4;for(let v=0;v<u;v++){let D=m[v],O=p[v],J=w[v],j=y*R*4*v;for(let q=0;q<D.count;q++){let Q=q*L;f===!0&&(s.fromBufferAttribute(D,q),A[j+Q+0]=s.x,A[j+Q+1]=s.y,A[j+Q+2]=s.z,A[j+Q+3]=0),g===!0&&(s.fromBufferAttribute(O,q),A[j+Q+4]=s.x,A[j+Q+5]=s.y,A[j+Q+6]=s.z,A[j+Q+7]=0),x===!0&&(s.fromBufferAttribute(J,q),A[j+Q+8]=s.x,A[j+Q+9]=s.y,A[j+Q+10]=s.z,A[j+Q+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new Tt(y,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var $u=new an,Du=new Er(1,1),Ku=new vr,ju=new Bo,Qu=new wr,Lu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function Qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ol(i,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Ou.set(n),i.uniformMatrix2fv(this.addr,!1,Ou),He(e,n)}}function Xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),He(e,n)}}function qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),He(e,n)}}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=gc,r=Du):r=$u,e.setTexture2D(t||r,s)}function n0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function i0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ku,s)}function r0(i){switch(i){case 5126:return kg;case 35664:return Vg;case 35665:return Gg;case 35666:return Hg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(i,t){i.uniform1fv(this.addr,t)}function a0(i,t){let e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function l0(i,t){let e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function c0(i,t){let e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function h0(i,t){let e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function u0(i,t){let e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function d0(i,t){let e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f0(i,t){i.uniform1iv(this.addr,t)}function p0(i,t){i.uniform2iv(this.addr,t)}function m0(i,t){i.uniform3iv(this.addr,t)}function g0(i,t){i.uniform4iv(this.addr,t)}function _0(i,t){i.uniform1uiv(this.addr,t)}function x0(i,t){i.uniform2uiv(this.addr,t)}function y0(i,t){i.uniform3uiv(this.addr,t)}function v0(i,t){i.uniform4uiv(this.addr,t)}function M0(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$u,r[o])}function S0(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ju,r[o])}function b0(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qu,r[o])}function w0(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ku,r[o])}function T0(i){switch(i){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return y0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}var Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r0(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}},Lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Bu(i,t){i.seq.push(t),i.map[t.id]=t}function E0(i,t,e){let n=i.name,s=n.length;for(Pc.lastIndex=0;;){let r=Pc.exec(n),o=Pc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bu(e,c===void 0?new Ic(a,i,t):new Dc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Lc(a),Bu(e,u)),e=u}}}var Ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);E0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function zu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var A0=37297,C0=0;function R0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ku=new ce;function P0(i){ye._getMatrix(ku,ye.workingColorSpace,i);let t=`mat3( ${ku.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case _r:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+R0(i.getShaderSource(t),a)}else return r}function I0(i,t){let e=P0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function D0(i,t){let e;switch(t){case eu:e="Linear";break;case nu:e="Reinhard";break;case iu:e="Cineon";break;case ga:e="ACESFilmic";break;case ru:e="AgX";break;case ou:e="Neutral";break;case su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new P;function L0(){ye.getLuminanceCoefficients(sl);let i=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function N0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function to(i){return i!==""}function Gu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(O0,z0)}var B0=new Map;function z0(i,t){let e=de[t];if(e===void 0){let n=B0.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uc(e)}var k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(k0,V0)}function V0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function G0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===aa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function H0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qi&&(t="ENVMAP_MODE_REFRACTION"),t}function X0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case tu:t="ENVMAP_BLENDING_ADD";break}return t}function q0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Y0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=G0(e),c=H0(e),h=W0(e),u=X0(e),d=q0(e),f=U0(e),g=N0(r),x=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?de.tonemapping_pars_fragment:"",e.toneMapping!==ci?D0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,I0("linearToOutputTexel",e.outputColorSpace),L0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=Uc(o),o=Gu(o,e),o=Hu(o,e),a=Uc(a),a=Gu(a,e),a=Hu(a,e),o=Wu(o),a=Wu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+m+o,y=w+p+a,R=zu(s,s.VERTEX_SHADER,b),A=zu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",J=s.getShaderInfoLog(R)||"",j=s.getShaderInfoLog(A)||"",q=O.trim(),Q=J.trim(),mt=j.trim(),Y=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,A);else{let et=Vu(s,R,"vertex"),xt=Vu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+et+`
`+xt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Q===""||mt==="")&&($=!1);$&&(D.diagnostics={runnable:Y,programLog:q,vertexShader:{log:Q,prefix:m},fragmentShader:{log:mt,prefix:p}})}s.deleteShader(R),s.deleteShader(A),L=new Ks(s,x),S=F0(s,x)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,A0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var Z0=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=Z0++,this.code=t,this.usedTimes=0}};function J0(i,t,e,n,s,r,o){let a=new Is,l=new Nc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,D,O,J){let j=O.fog,q=J.geometry,Q=S.isMeshStandardMaterial?O.environment:null,mt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Q),Y=mt&&mt.mapping===Zr?mt.image.height:null,$=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=et!==void 0?et.length:0,Et=0;q.morphAttributes.position!==void 0&&(Et=1),q.morphAttributes.normal!==void 0&&(Et=2),q.morphAttributes.color!==void 0&&(Et=3);let Pt,Jt,te,tt;if($){let me=Yn[$];Pt=me.vertexShader,Jt=me.fragmentShader}else Pt=S.vertexShader,Jt=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),tt=l.getFragmentShaderID(S);let ct=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),_t=J.isInstancedMesh===!0,dt=J.isBatchedMesh===!0,wt=!!S.map,Lt=!!S.matcap,C=!!mt,rt=!!S.aoMap,V=!!S.lightMap,H=!!S.bumpMap,G=!!S.normalMap,ht=!!S.displacementMap,st=!!S.emissiveMap,ut=!!S.metalnessMap,Ot=!!S.roughnessMap,Wt=S.anisotropy>0,T=S.clearcoat>0,_=S.dispersion>0,z=S.iridescence>0,X=S.sheen>0,ot=S.transmission>0,it=Wt&&!!S.anisotropyMap,qt=T&&!!S.clearcoatMap,At=T&&!!S.clearcoatNormalMap,Gt=T&&!!S.clearcoatRoughnessMap,Xt=z&&!!S.iridescenceMap,yt=z&&!!S.iridescenceThicknessMap,Dt=X&&!!S.sheenColorMap,jt=X&&!!S.sheenRoughnessMap,Zt=!!S.specularMap,at=!!S.specularColorMap,re=!!S.specularIntensityMap,N=ot&&!!S.transmissionMap,ft=ot&&!!S.thicknessMap,Rt=!!S.gradientMap,zt=!!S.alphaMap,vt=S.alphaTest>0,lt=!!S.alphaHash,kt=!!S.extensions,ne=ci;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Se={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Pt,fragmentShader:Jt,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:dt,batchingColor:dt&&J._colorsTexture!==null,instancing:_t,instancingColor:_t&&J.instanceColor!==null,instancingMorph:_t&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:qi,alphaToCoverage:!!S.alphaToCoverage,map:wt,matcap:Lt,envMap:C,envMapMode:C&&mt.mapping,envMapCubeUVHeight:Y,aoMap:rt,lightMap:V,bumpMap:H,normalMap:G,displacementMap:d&&ht,emissiveMap:st,normalMapObjectSpace:G&&S.normalMapType===cu,normalMapTangentSpace:G&&S.normalMapType===el,metalnessMap:ut,roughnessMap:Ot,anisotropy:Wt,anisotropyMap:it,clearcoat:T,clearcoatMap:qt,clearcoatNormalMap:At,clearcoatRoughnessMap:Gt,dispersion:_,iridescence:z,iridescenceMap:Xt,iridescenceThicknessMap:yt,sheen:X,sheenColorMap:Dt,sheenRoughnessMap:jt,specularMap:Zt,specularColorMap:at,specularIntensityMap:re,transmission:ot,transmissionMap:N,thicknessMap:ft,gradientMap:Rt,opaque:S.transparent===!1&&S.blending===Wi&&S.alphaToCoverage===!1,alphaMap:zt,alphaTest:vt,alphaHash:lt,combine:S.combine,mapUv:wt&&x(S.map.channel),aoMapUv:rt&&x(S.aoMap.channel),lightMapUv:V&&x(S.lightMap.channel),bumpMapUv:H&&x(S.bumpMap.channel),normalMapUv:G&&x(S.normalMap.channel),displacementMapUv:ht&&x(S.displacementMap.channel),emissiveMapUv:st&&x(S.emissiveMap.channel),metalnessMapUv:ut&&x(S.metalnessMap.channel),roughnessMapUv:Ot&&x(S.roughnessMap.channel),anisotropyMapUv:it&&x(S.anisotropyMap.channel),clearcoatMapUv:qt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:jt&&x(S.sheenRoughnessMap.channel),specularMapUv:Zt&&x(S.specularMap.channel),specularColorMapUv:at&&x(S.specularColorMap.channel),specularIntensityMapUv:re&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:ft&&x(S.thicknessMap.channel),alphaMapUv:zt&&x(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(G||Wt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!q.attributes.uv&&(wt||zt),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:J.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Et,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:wt&&S.map.isVideoTexture===!0&&ye.getTransfer(S.map.colorSpace)===Te,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&ye.getTransfer(S.emissiveMap.colorSpace)===Te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)v.push(D),v.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(w(v,S),b(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function w(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let v=g[S.type],D;if(v){let O=Yn[v];D=vu.clone(O.uniforms)}else D=S.uniforms;return D}function R(S,v){let D;for(let O=0,J=h.length;O<J;O++){let j=h[O];if(j.cacheKey===v){D=j,++D.usedTimes;break}}return D===void 0&&(D=new Y0(i,v,S,r),h.push(D)),D}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:L}}function $0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function K0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||K0),n.length>1&&n.sort(d||qu),s.length>1&&s.sort(d||qu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function j0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Yu,i.set(n,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ie};break;case"SpotLight":e={position:new P,direction:new P,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function t_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var e_=0;function n_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i_(i){let t=new Q0,e=t_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Ce,o=new Ce;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,b=0,y=0,R=0,A=0,I=0;c.sort(n_);for(let S=0,v=c.length;S<v;S++){let D=c[S],O=D.color,J=D.intensity,j=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*J,u+=O.g*J,d+=O.b*J;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],J);I++}else if(D.isDirectionalLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let mt=D.shadow,Y=e.get(D);Y.shadowIntensity=mt.intensity,Y.shadowBias=mt.bias,Y.shadowNormalBias=mt.normalBias,Y.shadowRadius=mt.radius,Y.shadowMapSize=mt.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=Q,f++}else if(D.isSpotLight){let Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(O).multiplyScalar(J),Q.distance=j,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[x]=Q;let mt=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,mt.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=mt.matrix,D.castShadow){let Y=e.get(D);Y.shadowIntensity=mt.intensity,Y.shadowBias=mt.bias,Y.shadowNormalBias=mt.normalBias,Y.shadowRadius=mt.radius,Y.shadowMapSize=mt.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=q,y++}x++}else if(D.isRectAreaLight){let Q=t.get(D);Q.color.copy(O).multiplyScalar(J),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Q,m++}else if(D.isPointLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let mt=D.shadow,Y=e.get(D);Y.shadowIntensity=mt.intensity,Y.shadowBias=mt.bias,Y.shadowNormalBias=mt.normalBias,Y.shadowRadius=mt.radius,Y.shadowMapSize=mt.mapSize,Y.shadowCameraNear=mt.camera.near,Y.shadowCameraFar=mt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=Q,g++}else if(D.isHemisphereLight){let Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(J),Q.groundColor.copy(D.groundColor).multiplyScalar(J),n.hemi[p]=Q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=I,n.version=e_++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let b=c[p];if(b.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Zu(i){let t=new i_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function s_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Zu(i),t.set(s,[a])):r>=o.length?(a=new Zu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`;function a_(i,t,e){let n=new Ns,s=new Tt,r=new Tt,o=new we,a=new Ai({depthPacking:Zs}),l=new Jo,c={},h=e.maxTextureSize,u={[ri]:$e,[$e]:ri,[cn]:cn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let p=this.type;this.render=function(A,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(li),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=p!==qn&&this.type===qn,j=p===qn&&this.type!==qn;for(let q=0,Q=A.length;q<Q;q++){let mt=A[q],Y=mt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let $=Y.getFrameExtents();if(s.multiply($),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Y.mapSize.y=r.y)),Y.map===null||J===!0||j===!0){let xt=this.type!==qn?{minFilter:hn,magFilter:hn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Hn(s.x,s.y,xt),Y.map.texture.name=mt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let et=Y.getViewportCount();for(let xt=0;xt<et;xt++){let Et=Y.getViewport(xt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),O.viewport(o),Y.updateMatrices(mt,xt),n=Y.getFrustum(),y(I,L,Y.camera,mt,this.type)}Y.isPointLightShadow!==!0&&this.type===qn&&w(Y,L),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,D)};function w(A,I){let L=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,L,f,x,null)}function b(A,I,L,S){let v=null,D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let O=v.uuid,J=I.uuid,j=c[O];j===void 0&&(j={},c[O]=j);let q=j[J];q===void 0&&(q=v.clone(),j[J]=q,I.addEventListener("dispose",R)),v=q}if(v.visible=I.visible,v.wireframe=I.wireframe,S===qn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:u[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let O=i.properties.get(v);O.light=L}return v}function y(A,I,L,S,v){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let J=t.update(A),j=A.material;if(Array.isArray(j)){let q=J.groups;for(let Q=0,mt=q.length;Q<mt;Q++){let Y=q[Q],$=j[Y.materialIndex];if($&&$.visible){let et=b(A,$,S,v);A.onBeforeShadow(i,A,I,L,J,et,Y),i.renderBufferDirect(L,null,J,et,A,Y),A.onAfterShadow(i,A,I,L,J,et,Y)}}}else if(j.visible){let q=b(A,j,S,v);A.onBeforeShadow(i,A,I,L,J,q,null),i.renderBufferDirect(L,null,J,q,A,null),A.onAfterShadow(i,A,I,L,J,q,null)}}let O=A.children;for(let J=0,j=O.length;J<j;J++)y(O[J],I,L,S,v)}function R(A){A.target.removeEventListener("dispose",R);for(let L in c){let S=c[L],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var l_={[la]:ca,[ha]:fa,[ua]:pa,[Xi]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:Xi};function c_(i,t){function e(){let N=!1,ft=new we,Rt=null,zt=new we(0,0,0,0);return{setMask:function(vt){Rt!==vt&&!N&&(i.colorMask(vt,vt,vt,vt),Rt=vt)},setLocked:function(vt){N=vt},setClear:function(vt,lt,kt,ne,Se){Se===!0&&(vt*=ne,lt*=ne,kt*=ne),ft.set(vt,lt,kt,ne),zt.equals(ft)===!1&&(i.clearColor(vt,lt,kt,ne),zt.copy(ft))},reset:function(){N=!1,Rt=null,zt.set(-1,0,0,0)}}}function n(){let N=!1,ft=!1,Rt=null,zt=null,vt=null;return{setReversed:function(lt){if(ft!==lt){let kt=t.get("EXT_clip_control");lt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),ft=lt;let ne=vt;vt=null,this.setClear(ne)}},getReversed:function(){return ft},setTest:function(lt){lt?ct(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(lt){Rt!==lt&&!N&&(i.depthMask(lt),Rt=lt)},setFunc:function(lt){if(ft&&(lt=l_[lt]),zt!==lt){switch(lt){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=lt}},setLocked:function(lt){N=lt},setClear:function(lt){vt!==lt&&(ft&&(lt=1-lt),i.clearDepth(lt),vt=lt)},reset:function(){N=!1,Rt=null,zt=null,vt=null,ft=!1}}}function s(){let N=!1,ft=null,Rt=null,zt=null,vt=null,lt=null,kt=null,ne=null,Se=null;return{setTest:function(me){N||(me?ct(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(me){ft!==me&&!N&&(i.stencilMask(me),ft=me)},setFunc:function(me,ke,Xe){(Rt!==me||zt!==ke||vt!==Xe)&&(i.stencilFunc(me,ke,Xe),Rt=me,zt=ke,vt=Xe)},setOp:function(me,ke,Xe){(lt!==me||kt!==ke||ne!==Xe)&&(i.stencilOp(me,ke,Xe),lt=me,kt=ke,ne=Xe)},setLocked:function(me){N=me},setClear:function(me){Se!==me&&(i.clearStencil(me),Se=me)},reset:function(){N=!1,ft=null,Rt=null,zt=null,vt=null,lt=null,kt=null,ne=null,Se=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,b=null,y=null,R=null,A=null,I=new ie(0,0,0),L=0,S=!1,v=null,D=null,O=null,J=null,j=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,mt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=mt>=1):Y.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=mt>=2);let $=null,et={},xt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Pt=new we().fromArray(xt),Jt=new we().fromArray(Et);function te(N,ft,Rt,zt){let vt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(N,lt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Rt;kt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ft+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return lt}let tt={};tt[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Xi),H(!1),G(ic),ct(i.CULL_FACE),rt(li);function ct(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Mt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function _t(N,ft){return u[N]!==ft?(i.bindFramebuffer(N,ft),u[N]=ft,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function dt(N,ft){let Rt=f,zt=!1;if(N){Rt=d.get(ft),Rt===void 0&&(Rt=[],d.set(ft,Rt));let vt=N.textures;if(Rt.length!==vt.length||Rt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,kt=vt.length;lt<kt;lt++)Rt[lt]=i.COLOR_ATTACHMENT0+lt;Rt.length=vt.length,zt=!0}}else Rt[0]!==i.BACK&&(Rt[0]=i.BACK,zt=!0);zt&&i.drawBuffers(Rt)}function wt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Lt={[wi]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};Lt[Bh]=i.MIN,Lt[zh]=i.MAX;let C={[kh]:i.ZERO,[Vh]:i.ONE,[Gh]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Do]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(N,ft,Rt,zt,vt,lt,kt,ne,Se,me){if(N===li){x===!0&&(Mt(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),N!==Nh){if(N!==m||me!==S){if((p!==wi||y!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,y=wi),me)switch(N){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,b=null,R=null,A=null,I.set(0,0,0),L=0,m=N,S=me}return}vt=vt||ft,lt=lt||Rt,kt=kt||zt,(ft!==p||vt!==y)&&(i.blendEquationSeparate(Lt[ft],Lt[vt]),p=ft,y=vt),(Rt!==w||zt!==b||lt!==R||kt!==A)&&(i.blendFuncSeparate(C[Rt],C[zt],C[lt],C[kt]),w=Rt,b=zt,R=lt,A=kt),(ne.equals(I)===!1||Se!==L)&&(i.blendColor(ne.r,ne.g,ne.b,Se),I.copy(ne),L=Se),m=N,S=!1}function V(N,ft){N.side===cn?Mt(i.CULL_FACE):ct(i.CULL_FACE);let Rt=N.side===$e;ft&&(Rt=!Rt),H(Rt),N.blending===Wi&&N.transparent===!1?rt(li):rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let zt=N.stencilWrite;a.setTest(zt),zt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(N){v!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),v=N)}function G(N){N!==Lh?(ct(i.CULL_FACE),N!==D&&(N===ic?i.cullFace(i.BACK):N===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),D=N}function ht(N){N!==O&&(Q&&i.lineWidth(N),O=N)}function st(N,ft,Rt){N?(ct(i.POLYGON_OFFSET_FILL),(J!==ft||j!==Rt)&&(i.polygonOffset(ft,Rt),J=ft,j=Rt)):Mt(i.POLYGON_OFFSET_FILL)}function ut(N){N?ct(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Ot(N){N===void 0&&(N=i.TEXTURE0+q-1),$!==N&&(i.activeTexture(N),$=N)}function Wt(N,ft,Rt){Rt===void 0&&($===null?Rt=i.TEXTURE0+q-1:Rt=$);let zt=et[Rt];zt===void 0&&(zt={type:void 0,texture:void 0},et[Rt]=zt),(zt.type!==N||zt.texture!==ft)&&($!==Rt&&(i.activeTexture(Rt),$=Rt),i.bindTexture(N,ft||tt[N]),zt.type=N,zt.texture=ft)}function T(){let N=et[$];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){Pt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Pt.copy(N))}function jt(N){Jt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Jt.copy(N))}function Zt(N,ft){let Rt=c.get(ft);Rt===void 0&&(Rt=new WeakMap,c.set(ft,Rt));let zt=Rt.get(N);zt===void 0&&(zt=i.getUniformBlockIndex(ft,N.name),Rt.set(N,zt))}function at(N,ft){let zt=c.get(ft).get(N);l.get(ft)!==zt&&(i.uniformBlockBinding(ft,zt,N.__bindingPointIndex),l.set(ft,zt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,et={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,b=null,y=null,R=null,A=null,I=new ie(0,0,0),L=0,S=!1,v=null,D=null,O=null,J=null,j=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Mt,bindFramebuffer:_t,drawBuffers:dt,useProgram:wt,setBlending:rt,setMaterial:V,setFlipSided:H,setCullFace:G,setLineWidth:ht,setPolygonOffset:st,setScissorTest:ut,activeTexture:Ot,bindTexture:Wt,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Xt,texImage3D:yt,updateUBOMapping:Zt,uniformBlockBinding:at,texStorage2D:At,texStorage3D:Gt,texSubImage2D:X,texSubImage3D:ot,compressedTexSubImage2D:it,compressedTexSubImage3D:qt,scissor:Dt,viewport:jt,reset:re}}function h_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):yr("canvas")}function x(T,_,z){let X=1,ot=Wt(T);if((ot.width>z||ot.height>z)&&(X=z/Math.max(ot.width,ot.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let it=Math.floor(X*ot.width),qt=Math.floor(X*ot.height);u===void 0&&(u=g(it,qt));let At=_?g(it,qt):u;return At.width=it,At.height=qt,At.getContext("2d").drawImage(T,0,0,it,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+it+"x"+qt+")."),At}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,z,X,ot=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let it=_;if(_===i.RED&&(z===i.FLOAT&&(it=i.R32F),z===i.HALF_FLOAT&&(it=i.R16F),z===i.UNSIGNED_BYTE&&(it=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(it=i.R8UI),z===i.UNSIGNED_SHORT&&(it=i.R16UI),z===i.UNSIGNED_INT&&(it=i.R32UI),z===i.BYTE&&(it=i.R8I),z===i.SHORT&&(it=i.R16I),z===i.INT&&(it=i.R32I)),_===i.RG&&(z===i.FLOAT&&(it=i.RG32F),z===i.HALF_FLOAT&&(it=i.RG16F),z===i.UNSIGNED_BYTE&&(it=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(it=i.RG8UI),z===i.UNSIGNED_SHORT&&(it=i.RG16UI),z===i.UNSIGNED_INT&&(it=i.RG32UI),z===i.BYTE&&(it=i.RG8I),z===i.SHORT&&(it=i.RG16I),z===i.INT&&(it=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(it=i.RGB8UI),z===i.UNSIGNED_SHORT&&(it=i.RGB16UI),z===i.UNSIGNED_INT&&(it=i.RGB32UI),z===i.BYTE&&(it=i.RGB8I),z===i.SHORT&&(it=i.RGB16I),z===i.INT&&(it=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),z===i.UNSIGNED_INT&&(it=i.RGBA32UI),z===i.BYTE&&(it=i.RGBA8I),z===i.SHORT&&(it=i.RGBA16I),z===i.INT&&(it=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),_===i.RGBA){let qt=ot?_r:ye.getTransfer(X);z===i.FLOAT&&(it=i.RGBA32F),z===i.HALF_FLOAT&&(it=i.RGBA16F),z===i.UNSIGNED_BYTE&&(it=qt===Te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(T,_){let z;return T?_===null||_===Ui||_===qs?z=i.DEPTH24_STENCIL8:_===vn?z=i.DEPTH32F_STENCIL8:_===Ws&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===qs?z=i.DEPTH_COMPONENT24:_===vn?z=i.DEPTH_COMPONENT32F:_===Ws&&(z=i.DEPTH_COMPONENT16),z}function R(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==Ln?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){let _=T.target;_.removeEventListener("dispose",A),L(_),_.isVideoTexture&&h.delete(_)}function I(T){let _=T.target;_.removeEventListener("dispose",I),v(_)}function L(T){let _=n.get(T);if(_.__webglInit===void 0)return;let z=T.source,X=d.get(z);if(X){let ot=X[_.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(T),Object.keys(X).length===0&&d.delete(z)}n.remove(T)}function S(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let z=T.source,X=d.get(z);delete X[_.__cacheKey],o.memory.textures--}function v(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let ot=0;ot<_.__webglFramebuffer[X].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[X][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let X=0,ot=z.length;X<ot;X++){let it=n.get(z[X]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(T)}let D=0;function O(){D=0}function J(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function j(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function q(T,_){let z=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Q(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){tt(z,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function mt(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){tt(z,T,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function Y(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){ct(z,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let $={[Lo]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},et={[hn]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},xt={[hu]:i.NEVER,[gu]:i.ALWAYS,[uu]:i.LESS,[gc]:i.LEQUAL,[du]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function Et(T,_){if(_.type===vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ln||_.magFilter===ya||_.magFilter===Jr||_.magFilter===Li||_.minFilter===Ln||_.minFilter===ya||_.minFilter===Jr||_.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,et[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==Jr&&_.minFilter!==Li||_.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Pt(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));let X=_.source,ot=d.get(X);ot===void 0&&(ot={},d.set(X,ot));let it=j(_);if(it!==T.__cacheKey){ot[it]===void 0&&(ot[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ot[it].usedTimes++;let qt=ot[T.__cacheKey];qt!==void 0&&(ot[T.__cacheKey].usedTimes--,qt.usedTimes===0&&S(_)),T.__cacheKey=it,T.__webglTexture=ot[it].texture}return z}function Jt(T,_,z){return Math.floor(Math.floor(T/z)/_)}function te(T,_,z,X){let it=T.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,X,_.data);else{it.sort((yt,Dt)=>yt.start-Dt.start);let qt=0;for(let yt=1;yt<it.length;yt++){let Dt=it[qt],jt=it[yt],Zt=Dt.start+Dt.count,at=Jt(jt.start,_.width,4),re=Jt(Dt.start,_.width,4);jt.start<=Zt+1&&at===re&&Jt(jt.start+jt.count-1,_.width,4)===at?Dt.count=Math.max(Dt.count,jt.start+jt.count-Dt.start):(++qt,it[qt]=jt)}it.length=qt+1;let At=i.getParameter(i.UNPACK_ROW_LENGTH),Gt=i.getParameter(i.UNPACK_SKIP_PIXELS),Xt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let yt=0,Dt=it.length;yt<Dt;yt++){let jt=it[yt],Zt=Math.floor(jt.start/4),at=Math.ceil(jt.count/4),re=Zt%_.width,N=Math.floor(Zt/_.width),ft=at,Rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,re),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,re,N,ft,Rt,z,X,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,At),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Xt)}}function tt(T,_,z){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);let ot=Pt(T,_),it=_.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+z);let qt=n.get(it);if(it.version!==qt.__version||ot===!0){e.activeTexture(i.TEXTURE0+z);let At=ye.getPrimaries(ye.workingColorSpace),Gt=_.colorSpace===hi?null:ye.getPrimaries(_.colorSpace),Xt=_.colorSpace===hi||At===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let yt=x(_.image,!1,s.maxTextureSize);yt=Ot(_,yt);let Dt=r.convert(_.format,_.colorSpace),jt=r.convert(_.type),Zt=b(_.internalFormat,Dt,jt,_.colorSpace,_.isVideoTexture);Et(X,_);let at,re=_.mipmaps,N=_.isVideoTexture!==!0,ft=qt.__version===void 0||ot===!0,Rt=it.dataReady,zt=R(_,yt);if(_.isDepthTexture)Zt=y(_.format===Ys,_.type),ft&&(N?e.texStorage2D(i.TEXTURE_2D,1,Zt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,yt.width,yt.height,0,Dt,jt,null));else if(_.isDataTexture)if(re.length>0){N&&ft&&e.texStorage2D(i.TEXTURE_2D,zt,Zt,re[0].width,re[0].height);for(let vt=0,lt=re.length;vt<lt;vt++)at=re[vt],N?Rt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,at.width,at.height,Dt,jt,at.data):e.texImage2D(i.TEXTURE_2D,vt,Zt,at.width,at.height,0,Dt,jt,at.data);_.generateMipmaps=!1}else N?(ft&&e.texStorage2D(i.TEXTURE_2D,zt,Zt,yt.width,yt.height),Rt&&te(_,yt,Dt,jt)):e.texImage2D(i.TEXTURE_2D,0,Zt,yt.width,yt.height,0,Dt,jt,yt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Zt,re[0].width,re[0].height,yt.depth);for(let vt=0,lt=re.length;vt<lt;vt++)if(at=re[vt],_.format!==fn)if(Dt!==null)if(N){if(Rt)if(_.layerUpdates.size>0){let kt=wc(at.width,at.height,_.format,_.type);for(let ne of _.layerUpdates){let Se=at.data.subarray(ne*kt/at.data.BYTES_PER_ELEMENT,(ne+1)*kt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,ne,at.width,at.height,1,Dt,Se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,at.width,at.height,yt.depth,Dt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Zt,at.width,at.height,yt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,at.width,at.height,yt.depth,Dt,jt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Zt,at.width,at.height,yt.depth,0,Dt,jt,at.data)}else{N&&ft&&e.texStorage2D(i.TEXTURE_2D,zt,Zt,re[0].width,re[0].height);for(let vt=0,lt=re.length;vt<lt;vt++)at=re[vt],_.format!==fn?Dt!==null?N?Rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,at.width,at.height,Dt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Rt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,at.width,at.height,Dt,jt,at.data):e.texImage2D(i.TEXTURE_2D,vt,Zt,at.width,at.height,0,Dt,jt,at.data)}else if(_.isDataArrayTexture)if(N){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Zt,yt.width,yt.height,yt.depth),Rt)if(_.layerUpdates.size>0){let vt=wc(yt.width,yt.height,_.format,_.type);for(let lt of _.layerUpdates){let kt=yt.data.subarray(lt*vt/yt.data.BYTES_PER_ELEMENT,(lt+1)*vt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,yt.width,yt.height,1,Dt,jt,kt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Dt,jt,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,yt.width,yt.height,yt.depth,0,Dt,jt,yt.data);else if(_.isData3DTexture)N?(ft&&e.texStorage3D(i.TEXTURE_3D,zt,Zt,yt.width,yt.height,yt.depth),Rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Dt,jt,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,yt.width,yt.height,yt.depth,0,Dt,jt,yt.data);else if(_.isFramebufferTexture){if(ft)if(N)e.texStorage2D(i.TEXTURE_2D,zt,Zt,yt.width,yt.height);else{let vt=yt.width,lt=yt.height;for(let kt=0;kt<zt;kt++)e.texImage2D(i.TEXTURE_2D,kt,Zt,vt,lt,0,Dt,jt,null),vt>>=1,lt>>=1}}else if(re.length>0){if(N&&ft){let vt=Wt(re[0]);e.texStorage2D(i.TEXTURE_2D,zt,Zt,vt.width,vt.height)}for(let vt=0,lt=re.length;vt<lt;vt++)at=re[vt],N?Rt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Dt,jt,at):e.texImage2D(i.TEXTURE_2D,vt,Zt,Dt,jt,at);_.generateMipmaps=!1}else if(N){if(ft){let vt=Wt(yt);e.texStorage2D(i.TEXTURE_2D,zt,Zt,vt.width,vt.height)}Rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,jt,yt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Dt,jt,yt);m(_)&&p(X),qt.__version=it.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ct(T,_,z){if(_.image.length!==6)return;let X=Pt(T,_),ot=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let it=n.get(ot);if(ot.version!==it.__version||X===!0){e.activeTexture(i.TEXTURE0+z);let qt=ye.getPrimaries(ye.workingColorSpace),At=_.colorSpace===hi?null:ye.getPrimaries(_.colorSpace),Gt=_.colorSpace===hi||qt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Xt=_.isCompressedTexture||_.image[0].isCompressedTexture,yt=_.image[0]&&_.image[0].isDataTexture,Dt=[];for(let lt=0;lt<6;lt++)!Xt&&!yt?Dt[lt]=x(_.image[lt],!0,s.maxCubemapSize):Dt[lt]=yt?_.image[lt].image:_.image[lt],Dt[lt]=Ot(_,Dt[lt]);let jt=Dt[0],Zt=r.convert(_.format,_.colorSpace),at=r.convert(_.type),re=b(_.internalFormat,Zt,at,_.colorSpace),N=_.isVideoTexture!==!0,ft=it.__version===void 0||X===!0,Rt=ot.dataReady,zt=R(_,jt);Et(i.TEXTURE_CUBE_MAP,_);let vt;if(Xt){N&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,re,jt.width,jt.height);for(let lt=0;lt<6;lt++){vt=Dt[lt].mipmaps;for(let kt=0;kt<vt.length;kt++){let ne=vt[kt];_.format!==fn?Zt!==null?N?Rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,0,0,ne.width,ne.height,Zt,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,re,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,0,0,ne.width,ne.height,Zt,at,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,re,ne.width,ne.height,0,Zt,at,ne.data)}}}else{if(vt=_.mipmaps,N&&ft){vt.length>0&&zt++;let lt=Wt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,re,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(yt){N?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt[lt].width,Dt[lt].height,Zt,at,Dt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,re,Dt[lt].width,Dt[lt].height,0,Zt,at,Dt[lt].data);for(let kt=0;kt<vt.length;kt++){let Se=vt[kt].image[lt].image;N?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,0,0,Se.width,Se.height,Zt,at,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,re,Se.width,Se.height,0,Zt,at,Se.data)}}else{N?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Zt,at,Dt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,re,Zt,at,Dt[lt]);for(let kt=0;kt<vt.length;kt++){let ne=vt[kt];N?Rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,0,0,Zt,at,ne.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,re,Zt,at,ne.image[lt])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),it.__version=ot.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Mt(T,_,z,X,ot,it){let qt=r.convert(z.format,z.colorSpace),At=r.convert(z.type),Gt=b(z.internalFormat,qt,At,z.colorSpace),Xt=n.get(_),yt=n.get(z);if(yt.__renderTarget=_,!Xt.__hasExternalTextures){let Dt=Math.max(1,_.width>>it),jt=Math.max(1,_.height>>it);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,Gt,Dt,jt,_.depth,0,qt,At,null):e.texImage2D(ot,it,Gt,Dt,jt,0,qt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ot,yt.__webglTexture,0,ht(_)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ot,yt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let X=_.depthTexture,ot=X&&X.isDepthTexture?X.type:null,it=y(_.stencilBuffer,ot),qt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=ht(_);st(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,it,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qt,i.RENDERBUFFER,T)}else{let X=_.textures;for(let ot=0;ot<X.length;ot++){let it=X[ot],qt=r.convert(it.format,it.colorSpace),At=r.convert(it.type),Gt=b(it.internalFormat,qt,At,it.colorSpace),Xt=ht(_);z&&st(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Gt,_.width,_.height):st(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,Gt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Gt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let ot=X.__webglTexture,it=ht(_);if(_.depthTexture.format===As)st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(_.depthTexture.format===Ys)st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function wt(T){let _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let X=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let ot=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",ot)};X.addEventListener("dispose",ot),_.__depthDisposeCallback=ot}_.__boundDepthTexture=X}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let X=T.texture.mipmaps;X&&X.length>0?dt(_.__webglFramebuffer[0],T):dt(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),_t(_.__webglDepthbuffer[X],T,!1);else{let ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,it)}}else{let X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),_t(_.__webglDepthbuffer,T,!1);else{let ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,_,z){let X=n.get(T);_!==void 0&&Mt(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&wt(T)}function C(T){let _=T.texture,z=n.get(T),X=n.get(_);T.addEventListener("dispose",I);let ot=T.textures,it=T.isWebGLCubeRenderTarget===!0,qt=ot.length>1;if(qt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,o.memory.textures++),it){z.__webglFramebuffer=[];for(let At=0;At<6;At++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[At]=[];for(let Gt=0;Gt<_.mipmaps.length;Gt++)z.__webglFramebuffer[At][Gt]=i.createFramebuffer()}else z.__webglFramebuffer[At]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let At=0;At<_.mipmaps.length;At++)z.__webglFramebuffer[At]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(qt)for(let At=0,Gt=ot.length;At<Gt;At++){let Xt=n.get(ot[At]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&st(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let At=0;At<ot.length;At++){let Gt=ot[At];z.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[At]);let Xt=r.convert(Gt.format,Gt.colorSpace),yt=r.convert(Gt.type),Dt=b(Gt.internalFormat,Xt,yt,Gt.colorSpace,T.isXRRenderTarget===!0),jt=ht(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Dt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,z.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Et(i.TEXTURE_CUBE_MAP,_);for(let At=0;At<6;At++)if(_.mipmaps&&_.mipmaps.length>0)for(let Gt=0;Gt<_.mipmaps.length;Gt++)Mt(z.__webglFramebuffer[At][Gt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Gt);else Mt(z.__webglFramebuffer[At],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(qt){for(let At=0,Gt=ot.length;At<Gt;At++){let Xt=ot[At],yt=n.get(Xt),Dt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,yt.__webglTexture),Et(Dt,Xt),Mt(z.__webglFramebuffer,T,Xt,i.COLOR_ATTACHMENT0+At,Dt,0),m(Xt)&&p(Dt)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(At=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,X.__webglTexture),Et(At,_),_.mipmaps&&_.mipmaps.length>0)for(let Gt=0;Gt<_.mipmaps.length;Gt++)Mt(z.__webglFramebuffer[Gt],T,_,i.COLOR_ATTACHMENT0,At,Gt);else Mt(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,At,0);m(_)&&p(At),e.unbindTexture()}T.depthBuffer&&wt(T)}function rt(T){let _=T.textures;for(let z=0,X=_.length;z<X;z++){let ot=_[z];if(m(ot)){let it=w(T),qt=n.get(ot).__webglTexture;e.bindTexture(it,qt),p(it),e.unbindTexture()}}}let V=[],H=[];function G(T){if(T.samples>0){if(st(T)===!1){let _=T.textures,z=T.width,X=T.height,ot=i.COLOR_BUFFER_BIT,it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qt=n.get(T),At=_.length>1;if(At)for(let Xt=0;Xt<_.length;Xt++)e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);let Gt=T.texture.mipmaps;Gt&&Gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Xt=0;Xt<_.length;Xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qt.__webglColorRenderbuffer[Xt]);let yt=n.get(_[Xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,ot,i.NEAREST),l===!0&&(V.length=0,H.length=0,V.push(i.COLOR_ATTACHMENT0+Xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(V.push(it),H.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Xt=0;Xt<_.length;Xt++){e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,qt.__webglColorRenderbuffer[Xt]);let yt=n.get(_[Xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ht(T){return Math.min(s.maxSamples,T.samples)}function st(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ut(T){let _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Ot(T,_){let z=T.colorSpace,X=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==qi&&z!==hi&&(ye.getTransfer(z)===Te?(X!==fn||ot!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=mt,this.setTextureCube=Y,this.rebindTextures=Lt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=st}function u_(i,t){function e(n,s=hi){let r,o=ye.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return i.BYTE;if(n===hc)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===fn)return i.RGBA;if(n===As)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===mc)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===$r||n===Kr||n===jr||n===Qr)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ca||n===Ra||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Da||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Da)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ja||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===ja||n===Qa||n===tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Oc,p={},w=e.getContextAttributes(),b=null,y=null,R=[],A=[],I=new Tt,L=null,S=new Je;S.viewport=new we;let v=new Je;v.viewport=new we;let D=[S,v],O=new oa,J=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ct=R[tt];return ct===void 0&&(ct=new Ds,R[tt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let ct=R[tt];return ct===void 0&&(ct=new Ds,R[tt]=ct),ct.getGripSpace()},this.getHand=function(tt){let ct=R[tt];return ct===void 0&&(ct=new Ds,R[tt]=ct),ct.getHandSpace()};function q(tt){let ct=A.indexOf(tt.inputSource);if(ct===-1)return;let Mt=R[ct];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,c||o),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Q(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",mt);for(let tt=0;tt<R.length;tt++){let ct=A[tt];ct!==null&&(A[tt]=null,R[tt].disconnect(ct))}J=null,j=null,m.reset();for(let tt in p)delete p[tt];t.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",mt),w.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,_t=null,dt=null;w.depth&&(dt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=w.stencil?Ys:As,_t=w.stencil?qs:Ui);let wt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Hn(d.textureWidth,d.textureHeight,{format:fn,type:On,depthTexture:new Er(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Hn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function mt(tt){for(let ct=0;ct<tt.removed.length;ct++){let Mt=tt.removed[ct],_t=A.indexOf(Mt);_t>=0&&(A[_t]=null,R[_t].disconnect(Mt))}for(let ct=0;ct<tt.added.length;ct++){let Mt=tt.added[ct],_t=A.indexOf(Mt);if(_t===-1){for(let wt=0;wt<R.length;wt++)if(wt>=A.length){A.push(Mt),_t=wt;break}else if(A[wt]===null){A[wt]=Mt,_t=wt;break}if(_t===-1)break}let dt=R[_t];dt&&dt.connect(Mt)}}let Y=new P,$=new P;function et(tt,ct,Mt){Y.setFromMatrixPosition(ct.matrixWorld),$.setFromMatrixPosition(Mt.matrixWorld);let _t=Y.distanceTo($),dt=ct.projectionMatrix.elements,wt=Mt.projectionMatrix.elements,Lt=dt[14]/(dt[10]-1),C=dt[14]/(dt[10]+1),rt=(dt[9]+1)/dt[5],V=(dt[9]-1)/dt[5],H=(dt[8]-1)/dt[0],G=(wt[8]+1)/wt[0],ht=Lt*H,st=Lt*G,ut=_t/(-H+G),Ot=ut*-H;if(ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ot),tt.translateZ(ut),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),dt[10]===-1)tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Wt=Lt+ut,T=C+ut,_=ht-Ot,z=st+(_t-Ot),X=rt*C/T*Wt,ot=V*C/T*Wt;tt.projectionMatrix.makePerspective(_,z,X,ot,Wt,T),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function xt(tt,ct){ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ct=tt.near,Mt=tt.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),O.near=v.near=S.near=ct,O.far=v.far=S.far=Mt,(J!==O.near||j!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),J=O.near,j=O.far),O.layers.mask=tt.layers.mask|6,S.layers.mask=O.layers.mask&3,v.layers.mask=O.layers.mask&5;let _t=tt.parent,dt=O.cameras;xt(O,_t);for(let wt=0;wt<dt.length;wt++)xt(dt[wt],_t);dt.length===2?et(O,S,v):O.projectionMatrix.copy(S.projectionMatrix),Et(tt,O,_t)};function Et(tt,ct,Mt){Mt===null?tt.matrix.copy(ct.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Cs*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(tt){return p[tt]};let Pt=null;function Jt(tt,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let _t=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,_t=!0);for(let C=0;C<Mt.length;C++){let rt=Mt[C],V=null;if(f!==null)V=f.getViewport(rt);else{let G=u.getViewSubImage(d,rt);V=G.viewport,C===0&&(t.setRenderTargetTextures(y,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(y))}let H=D[C];H===void 0&&(H=new Je,H.layers.enable(C),H.viewport=new we,D[C]=H),H.matrix.fromArray(rt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(rt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(V.x,V.y,V.width,V.height),C===0&&(O.matrix.copy(H.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),_t===!0&&O.cameras.push(H)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let C=u.getDepthInformation(Mt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(dt&&dt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<Mt.length;C++){let rt=Mt[C].camera;if(rt){let V=p[rt];V||(V=new Ar,p[rt]=V);let H=u.getCameraImage(rt);V.sourceTexture=H}}}}for(let Mt=0;Mt<R.length;Mt++){let _t=A[Mt],dt=R[Mt];_t!==null&&dt!==void 0&&dt.update(_t,ct,c||o)}Pt&&Pt(tt,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let te=new Ju;te.setAnimationLoop(Jt),this.setAnimationLoop=function(tt){Pt=tt},this.dispose=function(){}}},is=new En,p_=new Ce;function m_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,is.copy(y),is.x*=-1,is.y*=-1,is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(is)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let y=b.program;n.uniformBlockBinding(w,y)}function c(w,b){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));let R=b.program;n.updateUBOMapping(w,R);let A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){let b=u();w.__bindingPointIndex=b;let y=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let b=s[w.id],y=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,I=y.length;A<I;A++){let L=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,v=L.length;S<v;S++){let D=L[S];if(f(D,A,S,R)===!0){let O=D.__offset,J=Array.isArray(D.value)?D.value:[D.value],j=0;for(let q=0;q<J.length;q++){let Q=J[q],mt=x(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,O+j,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,j),j+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,b,y,R){let A=w.value,I=b+"_"+y;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{let L=R[I];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[I]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){let b=w.uniforms,y=0,R=16;for(let I=0,L=b.length;I<L;I++){let S=Array.isArray(b[I])?b[I]:[b[I]];for(let v=0,D=S.length;v<D;v++){let O=S[v],J=Array.isArray(O.value)?O.value:[O.value];for(let j=0,q=J.length;j<q;j++){let Q=J[j],mt=x(Q),Y=y%R,$=Y%mt.boundary,et=Y+$;y+=$,et!==0&&R-et<mt.storage&&(y+=R-et),O.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=mt.storage}}}let A=y%R;return A>0&&(y+=R-A),w.__size=y,w.__cache={},this}function x(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var rl=class{constructor(t={}){let{canvas:e=_u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=nn;let A=0,I=0,L=null,S=-1,v=null,D=new we,O=new we,J=null,j=new ie(0),q=0,Q=e.width,mt=e.height,Y=1,$=null,et=null,xt=new we(0,0,Q,mt),Et=new we(0,0,Q,mt),Pt=!1,Jt=new Ns,te=!1,tt=!1,ct=new Ce,Mt=new P,_t=new we,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Lt(){return L===null?Y:1}let C=n;function rt(M,F){return e.getContext(M,F)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),C===null){let F="webgl2";if(C=rt(F,M),C===null)throw rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let V,H,G,ht,st,ut,Ot,Wt,T,_,z,X,ot,it,qt,At,Gt,Xt,yt,Dt,jt,Zt,at,re;function N(){V=new Ug(C),V.init(),Zt=new u_(C,V),H=new Ag(C,V,t,Zt),G=new c_(C,V),H.reversedDepthBuffer&&d&&G.buffers.depth.setReversed(!0),ht=new Og(C),st=new $0,ut=new h_(C,V,G,st,H,Zt,ht),Ot=new Rg(y),Wt=new Lg(y),T=new Hf(C),at=new Tg(C,T),_=new Ng(C,T,ht,at),z=new zg(C,_,T,ht),yt=new Bg(C,H,ut),At=new Cg(st),X=new J0(y,Ot,Wt,V,H,at,At),ot=new m_(y,st),it=new j0,qt=new s_(V),Xt=new wg(y,Ot,Wt,G,z,f,l),Gt=new a_(y,z,H),re=new g_(C,ht,H,G),Dt=new Eg(C,V,ht),jt=new Fg(C,V,ht),ht.programs=X.programs,y.capabilities=H,y.extensions=V,y.properties=st,y.renderLists=it,y.shadowMap=Gt,y.state=G,y.info=ht}N();let ft=new Bc(y,C);this.xr=ft,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=V.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=V.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(Q,mt,!1))},this.getSize=function(M){return M.set(Q,mt)},this.setSize=function(M,F,Z=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,mt=F,e.width=Math.floor(M*Y),e.height=Math.floor(F*Y),Z===!0&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Q*Y,mt*Y).floor()},this.setDrawingBufferSize=function(M,F,Z){Q=M,mt=F,Y=Z,e.width=Math.floor(M*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,F,Z,W){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,F,Z,W),G.viewport(D.copy(xt).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy(Et)},this.setScissor=function(M,F,Z,W){M.isVector4?Et.set(M.x,M.y,M.z,M.w):Et.set(M,F,Z,W),G.scissor(O.copy(Et).multiplyScalar(Y).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(M){G.setScissorTest(Pt=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){et=M},this.getClearColor=function(M){return M.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,Z=!0){let W=0;if(M){let k=!1;if(L!==null){let bt=L.texture.format;k=bt===Ea||bt===Ta||bt===wa}if(k){let bt=L.texture.type,Nt=bt===On||bt===Ui||bt===Ws||bt===qs||bt===Ma||bt===Sa,Yt=Xt.getClearColor(),Vt=Xt.getClearAlpha(),E=Yt.r,U=Yt.g,B=Yt.b;Nt?(g[0]=E,g[1]=U,g[2]=B,g[3]=Vt,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=E,x[1]=U,x[2]=B,x[3]=Vt,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}F&&(W|=C.DEPTH_BUFFER_BIT),Z&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Xt.dispose(),it.dispose(),qt.dispose(),st.dispose(),Ot.dispose(),Wt.dispose(),z.dispose(),at.dispose(),re.dispose(),X.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Xe),ft.removeEventListener("sessionend",Ke),je.stop()};function Rt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=ht.autoReset,F=Gt.enabled,Z=Gt.autoUpdate,W=Gt.needsUpdate,k=Gt.type;N(),ht.autoReset=M,Gt.enabled=F,Gt.autoUpdate=Z,Gt.needsUpdate=W,Gt.type=k}function vt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function lt(M){let F=M.target;F.removeEventListener("dispose",lt),kt(F)}function kt(M){ne(M),st.remove(M)}function ne(M){let F=st.get(M).programs;F!==void 0&&(F.forEach(function(Z){X.releaseProgram(Z)}),M.isShaderMaterial&&X.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,Z,W,k,bt){F===null&&(F=dt);let Nt=k.isMesh&&k.matrixWorld.determinant()<0,Yt=Fi(M,F,Z,W,k);G.setMaterial(W,Nt);let Vt=Z.index,E=1;if(W.wireframe===!0){if(Vt=_.getWireframeAttribute(Z),Vt===void 0)return;E=2}let U=Z.drawRange,B=Z.attributes.position,K=U.start*E,nt=(U.start+U.count)*E;bt!==null&&(K=Math.max(K,bt.start*E),nt=Math.min(nt,(bt.start+bt.count)*E)),Vt!==null?(K=Math.max(K,0),nt=Math.min(nt,Vt.count)):B!=null&&(K=Math.max(K,0),nt=Math.min(nt,B.count));let gt=nt-K;if(gt<0||gt===1/0)return;at.setup(k,W,Yt,Z,Vt);let It,Ut=Dt;if(Vt!==null&&(It=T.get(Vt),Ut=jt,Ut.setIndex(It)),k.isMesh)W.wireframe===!0?(G.setLineWidth(W.wireframeLinewidth*Lt()),Ut.setMode(C.LINES)):Ut.setMode(C.TRIANGLES);else if(k.isLine){let St=W.linewidth;St===void 0&&(St=1),G.setLineWidth(St*Lt()),k.isLineSegments?Ut.setMode(C.LINES):k.isLineLoop?Ut.setMode(C.LINE_LOOP):Ut.setMode(C.LINE_STRIP)}else k.isPoints?Ut.setMode(C.POINTS):k.isSprite&&Ut.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))Ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let St=k._multiDrawStarts,Bt=k._multiDrawCounts,$t=k._multiDrawCount,oe=Vt?T.get(Vt).bytesPerElement:1,De=st.get(W).currentProgram.getUniforms();for(let se=0;se<$t;se++)De.setValue(C,"_gl_DrawID",se),Ut.render(St[se]/oe,Bt[se])}else if(k.isInstancedMesh)Ut.renderInstances(K,gt,k.count);else if(Z.isInstancedBufferGeometry){let St=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bt=Math.min(Z.instanceCount,St);Ut.renderInstances(K,gt,Bt)}else Ut.render(K,gt)};function Se(M,F,Z){M.transparent===!0&&M.side===cn&&M.forceSinglePass===!1?(M.side=$e,M.needsUpdate=!0,Bn(M,F,Z),M.side=ri,M.needsUpdate=!0,Bn(M,F,Z),M.side=cn):Bn(M,F,Z)}this.compile=function(M,F,Z=null){Z===null&&(Z=M),p=qt.get(Z),p.init(F),b.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==Z&&M.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let W=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let bt=k.material;if(bt)if(Array.isArray(bt))for(let Nt=0;Nt<bt.length;Nt++){let Yt=bt[Nt];Se(Yt,Z,k),W.add(Yt)}else Se(bt,Z,k),W.add(bt)}),p=b.pop(),W},this.compileAsync=function(M,F,Z=null){let W=this.compile(M,F,Z);return new Promise(k=>{function bt(){if(W.forEach(function(Nt){st.get(Nt).currentProgram.isReady()&&W.delete(Nt)}),W.size===0){k(M);return}setTimeout(bt,10)}V.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let me=null;function ke(M){me&&me(M)}function Xe(){je.stop()}function Ke(){je.start()}let je=new Ju;je.setAnimationLoop(ke),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(M){me=M,ft.setAnimationLoop(M),M===null?je.stop():je.start()},ft.addEventListener("sessionstart",Xe),ft.addEventListener("sessionend",Ke),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(F),F=ft.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,L),p=qt.get(M,b.length),p.init(F),b.push(p),ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Jt.setFromProjectionMatrix(ct,Dn,F.reversedDepth),tt=this.localClippingEnabled,te=At.init(this.clippingPlanes,tt),m=it.get(M,w.length),m.init(),w.push(m),ft.enabled===!0&&ft.isPresenting===!0){let bt=y.xr.getDepthSensingMesh();bt!==null&&$n(bt,F,-1/0,y.sortObjects)}$n(M,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,et),wt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,wt&&Xt.addToRenderList(m,M),this.info.render.frame++,te===!0&&At.beginShadows();let Z=p.state.shadowsArray;Gt.render(Z,M,F),te===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){let bt=F.cameras;if(k.length>0)for(let Nt=0,Yt=bt.length;Nt<Yt;Nt++){let Vt=bt[Nt];cs(W,k,M,Vt)}wt&&Xt.render(M);for(let Nt=0,Yt=bt.length;Nt<Yt;Nt++){let Vt=bt[Nt];ls(m,M,Vt,Vt.viewport)}}else k.length>0&&cs(W,k,M,F),wt&&Xt.render(M),ls(m,M,F);L!==null&&I===0&&(ut.updateMultisampleRenderTarget(L),ut.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(y,M,F),at.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],te===!0&&At.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function $n(M,F,Z,W){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Jt.intersectsSprite(M)){W&&_t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);let Nt=z.update(M),Yt=M.material;Yt.visible&&m.push(M,Nt,Yt,Z,_t.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Jt.intersectsObject(M))){let Nt=z.update(M),Yt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_t.copy(M.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),_t.copy(Nt.boundingSphere.center)),_t.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(Yt)){let Vt=Nt.groups;for(let E=0,U=Vt.length;E<U;E++){let B=Vt[E],K=Yt[B.materialIndex];K&&K.visible&&m.push(M,Nt,K,Z,_t.z,B)}}else Yt.visible&&m.push(M,Nt,Yt,Z,_t.z,null)}}let bt=M.children;for(let Nt=0,Yt=bt.length;Nt<Yt;Nt++)$n(bt[Nt],F,Z,W)}function ls(M,F,Z,W){let k=M.opaque,bt=M.transmissive,Nt=M.transparent;p.setupLightsView(Z),te===!0&&At.setGlobalState(y.clippingPlanes,Z),W&&G.viewport(D.copy(W)),k.length>0&&Mn(k,F,Z),bt.length>0&&Mn(bt,F,Z),Nt.length>0&&Mn(Nt,F,Z),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function cs(M,F,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Hn(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?Xs:On,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));let bt=p.state.transmissionRenderTarget[W.id],Nt=W.viewport||D;bt.setSize(Nt.z*y.transmissionResolutionScale,Nt.w*y.transmissionResolutionScale);let Yt=y.getRenderTarget(),Vt=y.getActiveCubeFace(),E=y.getActiveMipmapLevel();y.setRenderTarget(bt),y.getClearColor(j),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),wt&&Xt.render(Z);let U=y.toneMapping;y.toneMapping=ci;let B=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),te===!0&&At.setGlobalState(y.clippingPlanes,W),Mn(M,Z,W),ut.updateMultisampleRenderTarget(bt),ut.updateRenderTargetMipmap(bt),V.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let nt=0,gt=F.length;nt<gt;nt++){let It=F[nt],Ut=It.object,St=It.geometry,Bt=It.material,$t=It.group;if(Bt.side===cn&&Ut.layers.test(W.layers)){let oe=Bt.side;Bt.side=$e,Bt.needsUpdate=!0,Ie(Ut,Z,W,St,Bt,$t),Bt.side=oe,Bt.needsUpdate=!0,K=!0}}K===!0&&(ut.updateMultisampleRenderTarget(bt),ut.updateRenderTargetMipmap(bt))}y.setRenderTarget(Yt,Vt,E),y.setClearColor(j,q),B!==void 0&&(W.viewport=B),y.toneMapping=U}function Mn(M,F,Z){let W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,bt=M.length;k<bt;k++){let Nt=M[k],Yt=Nt.object,Vt=Nt.geometry,E=Nt.group,U=Nt.material;U.allowOverride===!0&&W!==null&&(U=W),Yt.layers.test(Z.layers)&&Ie(Yt,F,Z,Vt,U,E)}}function Ie(M,F,Z,W,k,bt){M.onBeforeRender(y,F,Z,W,k,bt),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(y,F,Z,W,M,bt),k.transparent===!0&&k.side===cn&&k.forceSinglePass===!1?(k.side=$e,k.needsUpdate=!0,y.renderBufferDirect(Z,F,W,k,M,bt),k.side=ri,k.needsUpdate=!0,y.renderBufferDirect(Z,F,W,k,M,bt),k.side=cn):y.renderBufferDirect(Z,F,W,k,M,bt),M.onAfterRender(y,F,Z,W,k,bt)}function Bn(M,F,Z){F.isScene!==!0&&(F=dt);let W=st.get(M),k=p.state.lights,bt=p.state.shadowsArray,Nt=k.state.version,Yt=X.getParameters(M,k.state,bt,F,Z),Vt=X.getProgramCacheKey(Yt),E=W.programs;W.environment=M.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(M.isMeshStandardMaterial?Wt:Ot).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,E===void 0&&(M.addEventListener("dispose",lt),E=new Map,W.programs=E);let U=E.get(Vt);if(U!==void 0){if(W.currentProgram===U&&W.lightsStateVersion===Nt)return Qe(M,Yt),U}else Yt.uniforms=X.getUniforms(M),M.onBeforeCompile(Yt,y),U=X.acquireProgram(Yt,Vt),E.set(Vt,U),W.uniforms=Yt.uniforms;let B=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(B.clippingPlanes=At.uniform),Qe(M,Yt),W.needsLights=pt(M),W.lightsStateVersion=Nt,W.needsLights&&(B.ambientLightColor.value=k.state.ambient,B.lightProbe.value=k.state.probe,B.directionalLights.value=k.state.directional,B.directionalLightShadows.value=k.state.directionalShadow,B.spotLights.value=k.state.spot,B.spotLightShadows.value=k.state.spotShadow,B.rectAreaLights.value=k.state.rectArea,B.ltc_1.value=k.state.rectAreaLTC1,B.ltc_2.value=k.state.rectAreaLTC2,B.pointLights.value=k.state.point,B.pointLightShadows.value=k.state.pointShadow,B.hemisphereLights.value=k.state.hemi,B.directionalShadowMap.value=k.state.directionalShadowMap,B.directionalShadowMatrix.value=k.state.directionalShadowMatrix,B.spotShadowMap.value=k.state.spotShadowMap,B.spotLightMatrix.value=k.state.spotLightMatrix,B.spotLightMap.value=k.state.spotLightMap,B.pointShadowMap.value=k.state.pointShadowMap,B.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=U,W.uniformsList=null,U}function di(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Ks.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Qe(M,F){let Z=st.get(M);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Fi(M,F,Z,W,k){F.isScene!==!0&&(F=dt),ut.resetTextureUnits();let bt=F.fog,Nt=W.isMeshStandardMaterial?F.environment:null,Yt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qi,Vt=(W.isMeshStandardMaterial?Wt:Ot).get(W.envMap||Nt),E=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,U=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),B=!!Z.morphAttributes.position,K=!!Z.morphAttributes.normal,nt=!!Z.morphAttributes.color,gt=ci;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(gt=y.toneMapping);let It=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ut=It!==void 0?It.length:0,St=st.get(W),Bt=p.state.lights;if(te===!0&&(tt===!0||M!==v)){let Ae=M===v&&W.id===S;At.setState(W,M,Ae)}let $t=!1;W.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Bt.state.version||St.outputColorSpace!==Yt||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==Vt||W.fog===!0&&St.fog!==bt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==At.numPlanes||St.numIntersection!==At.numIntersection)||St.vertexAlphas!==E||St.vertexTangents!==U||St.morphTargets!==B||St.morphNormals!==K||St.morphColors!==nt||St.toneMapping!==gt||St.morphTargetsCount!==Ut)&&($t=!0):($t=!0,St.__version=W.version);let oe=St.currentProgram;$t===!0&&(oe=Bn(W,F,k));let De=!1,se=!1,Ne=!1,ve=oe.getUniforms(),ge=St.uniforms;if(G.useProgram(oe.program)&&(De=!0,se=!0,Ne=!0),W.id!==S&&(S=W.id,se=!0),De||v!==M){G.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ve.setValue(C,"projectionMatrix",M.projectionMatrix),ve.setValue(C,"viewMatrix",M.matrixWorldInverse);let Me=ve.map.cameraPosition;Me!==void 0&&Me.setValue(C,Mt.setFromMatrixPosition(M.matrixWorld)),H.logarithmicDepthBuffer&&ve.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,se=!0,Ne=!0)}if(k.isSkinnedMesh){ve.setOptional(C,k,"bindMatrix"),ve.setOptional(C,k,"bindMatrixInverse");let Ae=k.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ve.setValue(C,"boneTexture",Ae.boneTexture,ut))}k.isBatchedMesh&&(ve.setOptional(C,k,"batchingTexture"),ve.setValue(C,"batchingTexture",k._matricesTexture,ut),ve.setOptional(C,k,"batchingIdTexture"),ve.setValue(C,"batchingIdTexture",k._indirectTexture,ut),ve.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(C,"batchingColorTexture",k._colorsTexture,ut));let _e=Z.morphAttributes;if((_e.position!==void 0||_e.normal!==void 0||_e.color!==void 0)&&yt.update(k,Z,oe),(se||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,ve.setValue(C,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ge.envMap.value=Vt,ge.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(ge.envMapIntensity.value=F.environmentIntensity),se&&(ve.setValue(C,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&fi(ge,Ne),bt&&W.fog===!0&&ot.refreshFogUniforms(ge,bt),ot.refreshMaterialUniforms(ge,W,Y,mt,p.state.transmissionRenderTarget[M.id]),Ks.upload(C,di(St),ge,ut)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ks.upload(C,di(St),ge,ut),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(C,"center",k.center),ve.setValue(C,"modelViewMatrix",k.modelViewMatrix),ve.setValue(C,"normalMatrix",k.normalMatrix),ve.setValue(C,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ae=W.uniformsGroups;for(let Me=0,zn=Ae.length;Me<zn;Me++){let kn=Ae[Me];re.update(kn,oe),re.bind(kn,oe)}}return oe}function fi(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function pt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,F,Z){let W=st.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),st.get(M.texture).__webglTexture=F,st.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let Z=st.get(M);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0};let Qt=C.createFramebuffer();this.setRenderTarget=function(M,F=0,Z=0){L=M,A=F,I=Z;let W=!0,k=null,bt=!1,Nt=!1;if(M){let Vt=st.get(M);if(Vt.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Vt.__webglFramebuffer===void 0)ut.setupRenderTarget(M);else if(Vt.__hasExternalTextures)ut.rebindTextures(M,st.get(M.texture).__webglTexture,st.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let B=M.depthTexture;if(Vt.__boundDepthTexture!==B){if(B!==null&&st.has(B)&&(M.width!==B.image.width||M.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(M)}}let E=M.texture;(E.isData3DTexture||E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Nt=!0);let U=st.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(U[F])?k=U[F][Z]:k=U[F],bt=!0):M.samples>0&&ut.useMultisampledRTT(M)===!1?k=st.get(M).__webglMultisampledFramebuffer:Array.isArray(U)?k=U[Z]:k=U,D.copy(M.viewport),O.copy(M.scissor),J=M.scissorTest}else D.copy(xt).multiplyScalar(Y).floor(),O.copy(Et).multiplyScalar(Y).floor(),J=Pt;if(Z!==0&&(k=Qt),G.bindFramebuffer(C.FRAMEBUFFER,k)&&W&&G.drawBuffers(M,k),G.viewport(D),G.scissor(O),G.setScissorTest(J),bt){let Vt=st.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Vt.__webglTexture,Z)}else if(Nt){let Vt=F;for(let E=0;E<M.textures.length;E++){let U=st.get(M.textures[E]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+E,U.__webglTexture,Z,Vt)}}else if(M!==null&&Z!==0){let Vt=st.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Vt.__webglTexture,Z)}S=-1},this.readRenderTargetPixels=function(M,F,Z,W,k,bt,Nt,Yt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Nt!==void 0&&(Vt=Vt[Nt]),Vt){G.bindFramebuffer(C.FRAMEBUFFER,Vt);try{let E=M.textures[Yt],U=E.format,B=E.type;if(!H.textureFormatReadable(U)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(B)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-W&&Z>=0&&Z<=M.height-k&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Yt),C.readPixels(F,Z,W,k,Zt.convert(U),Zt.convert(B),bt))}finally{let E=L!==null?st.get(L).__webglFramebuffer:null;G.bindFramebuffer(C.FRAMEBUFFER,E)}}},this.readRenderTargetPixelsAsync=async function(M,F,Z,W,k,bt,Nt,Yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Nt!==void 0&&(Vt=Vt[Nt]),Vt)if(F>=0&&F<=M.width-W&&Z>=0&&Z<=M.height-k){G.bindFramebuffer(C.FRAMEBUFFER,Vt);let E=M.textures[Yt],U=E.format,B=E.type;if(!H.textureFormatReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(B))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let K=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,K),C.bufferData(C.PIXEL_PACK_BUFFER,bt.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Yt),C.readPixels(F,Z,W,k,Zt.convert(U),Zt.convert(B),0);let nt=L!==null?st.get(L).__webglFramebuffer:null;G.bindFramebuffer(C.FRAMEBUFFER,nt);let gt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await xu(C,gt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,K),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,bt),C.deleteBuffer(K),C.deleteSync(gt),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,Z=0){let W=Math.pow(2,-Z),k=Math.floor(M.image.width*W),bt=Math.floor(M.image.height*W),Nt=F!==null?F.x:0,Yt=F!==null?F.y:0;ut.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,Nt,Yt,k,bt),G.unbindTexture()};let ue=C.createFramebuffer(),ee=C.createFramebuffer();this.copyTextureToTexture=function(M,F,Z=null,W=null,k=0,bt=null){bt===null&&(k!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=k,k=0):bt=0);let Nt,Yt,Vt,E,U,B,K,nt,gt,It=M.isCompressedTexture?M.mipmaps[bt]:M.image;if(Z!==null)Nt=Z.max.x-Z.min.x,Yt=Z.max.y-Z.min.y,Vt=Z.isBox3?Z.max.z-Z.min.z:1,E=Z.min.x,U=Z.min.y,B=Z.isBox3?Z.min.z:0;else{let _e=Math.pow(2,-k);Nt=Math.floor(It.width*_e),Yt=Math.floor(It.height*_e),M.isDataArrayTexture?Vt=It.depth:M.isData3DTexture?Vt=Math.floor(It.depth*_e):Vt=1,E=0,U=0,B=0}W!==null?(K=W.x,nt=W.y,gt=W.z):(K=0,nt=0,gt=0);let Ut=Zt.convert(F.format),St=Zt.convert(F.type),Bt;F.isData3DTexture?(ut.setTexture3D(F,0),Bt=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ut.setTexture2DArray(F,0),Bt=C.TEXTURE_2D_ARRAY):(ut.setTexture2D(F,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let $t=C.getParameter(C.UNPACK_ROW_LENGTH),oe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),De=C.getParameter(C.UNPACK_SKIP_PIXELS),se=C.getParameter(C.UNPACK_SKIP_ROWS),Ne=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,It.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,It.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,E),C.pixelStorei(C.UNPACK_SKIP_ROWS,U),C.pixelStorei(C.UNPACK_SKIP_IMAGES,B);let ve=M.isDataArrayTexture||M.isData3DTexture,ge=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let _e=st.get(M),Ae=st.get(F),Me=st.get(_e.__renderTarget),zn=st.get(Ae.__renderTarget);G.bindFramebuffer(C.READ_FRAMEBUFFER,Me.__webglFramebuffer),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kn=0;kn<Vt;kn++)ve&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,st.get(M).__webglTexture,k,B+kn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,st.get(F).__webglTexture,bt,gt+kn)),C.blitFramebuffer(E,U,Nt,Yt,K,nt,Nt,Yt,C.DEPTH_BUFFER_BIT,C.NEAREST);G.bindFramebuffer(C.READ_FRAMEBUFFER,null),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||st.has(M)){let _e=st.get(M),Ae=st.get(F);G.bindFramebuffer(C.READ_FRAMEBUFFER,ue),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,ee);for(let Me=0;Me<Vt;Me++)ve?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.__webglTexture,k,B+Me):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,k),ge?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ae.__webglTexture,bt,gt+Me):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ae.__webglTexture,bt),k!==0?C.blitFramebuffer(E,U,Nt,Yt,K,nt,Nt,Yt,C.COLOR_BUFFER_BIT,C.NEAREST):ge?C.copyTexSubImage3D(Bt,bt,K,nt,gt+Me,E,U,Nt,Yt):C.copyTexSubImage2D(Bt,bt,K,nt,E,U,Nt,Yt);G.bindFramebuffer(C.READ_FRAMEBUFFER,null),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ge?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Bt,bt,K,nt,gt,Nt,Yt,Vt,Ut,St,It.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,bt,K,nt,gt,Nt,Yt,Vt,Ut,It.data):C.texSubImage3D(Bt,bt,K,nt,gt,Nt,Yt,Vt,Ut,St,It):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,bt,K,nt,Nt,Yt,Ut,St,It.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,bt,K,nt,It.width,It.height,Ut,It.data):C.texSubImage2D(C.TEXTURE_2D,bt,K,nt,Nt,Yt,Ut,St,It);C.pixelStorei(C.UNPACK_ROW_LENGTH,$t),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,De),C.pixelStorei(C.UNPACK_SKIP_ROWS,se),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ne),bt===0&&F.generateMipmaps&&C.generateMipmap(Bt),G.unbindTexture()},this.initRenderTarget=function(M){st.get(M).__webglFramebuffer===void 0&&ut.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ut.setTextureCube(M,0):M.isData3DTexture?ut.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ut.setTexture2DArray(M,0):ut.setTexture2D(M,0),G.unbindTexture()},this.resetState=function(){A=0,I=0,L=null,G.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var td={type:"change"},Vc={type:"start"},nd={type:"end"},al=new Ti,ed=new Tn,__=Math.cos(70*ui.DEG2RAD),We=new P,pn=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6,ll=class extends Yr{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new un,this._lastTargetPosition=new P,this._quat=new un().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pi,this._sphericalDelta=new Pi,this._scale=1,this._panOffset=new P,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new P,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y_.bind(this),this._onPointerDown=x_.bind(this),this._onPointerUp=v_.bind(this),this._onContextMenu=A_.bind(this),this._onMouseWheel=b_.bind(this),this._onKeyDown=w_.bind(this),this._onTouchStart=T_.bind(this),this._onTouchMove=E_.bind(this),this._onMouseDown=M_.bind(this),this._onMouseMove=S_.bind(this),this._interceptControlDown=C_.bind(this),this._interceptControlUp=R_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(td),this.update(),this.state=Re.NONE}update(t=null){let e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=We.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(al.origin.copy(this.object.position),al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(al.direction))<__?this.object.lookAt(this.target):(ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),al.intersectPlane(ed,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent(td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;We.copy(s).sub(this.target);let r=We.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function x_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function y_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function v_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nd),this.state=Re.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function M_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Re.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Vc)}function S_(i){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function b_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(i.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nd))}function w_(i){this.enabled!==!1&&this._handleKeyDown(i)}function T_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Re.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Re.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Vc)}function E_(i){switch(this._trackPointer(i),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Re.NONE}}function A_(i){this.enabled!==!1&&i.preventDefault()}function C_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var cl=class extends Yi{constructor(){super();let t=new sn;t.deleteAttribute("uv");let e=new Ve({side:$e}),n=new Ve,s=new Wr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new be(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Fe(t,n,6),a=new Ee;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new be(t,tr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new be(t,tr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new be(t,tr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new be(t,tr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new be(t,tr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new be(t,tr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function tr(i){return new Vr({color:0,emissive:16777215,emissiveIntensity:i})}var no=new P;function An(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;no.copy(t),no[n]=0,no.normalize();let c=.5*o/(o+a),h=1-no.angleTo(i)/l;return Math.sign(no[e])===1?h*c:a/(o+a)+c+c*(1-h)}var os=class i extends sn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new P,m=.5/o;for(let p=0,w=0;p<u.length;p+=3,w+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[w+0]=An(x,c,"z","y",r,n),f[w+1]=1-An(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[w+0]=1-An(x,c,"z","y",r,n),f[w+1]=1-An(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[w+0]=1-An(x,c,"x","z",r,t),f[w+1]=An(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[w+0]=1-An(x,c,"x","z",r,t),f[w+1]=1-An(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[w+0]=1-An(x,c,"x","y",r,t),f[w+1]=1-An(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[w+0]=An(x,c,"x","y",r,t),f[w+1]=1-An(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function er(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ue,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=id(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=id(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function id(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ze(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function sd(i,t){i.width=2048,i.height=1024;let e=i.getContext("2d"),{id:n,accent:s,secondary:r,ink:o}=t;if(e.clearRect(0,0,2048,1024),n==="none")return;e.lineJoin="round";let a=(l,c,h,u,d)=>{e.fillStyle=d,e.fillRect(l,c,h,u)};if(n==="madbro")for(let l of[-1,1]){e.save(),e.translate(1024,0),e.scale(l,1),e.fillStyle=s,e.beginPath(),e.moveTo(155,205),e.lineTo(930,230),e.lineTo(875,455),e.lineTo(165,445),e.closePath(),e.fill();for(let c=0;c<11;c++)a(230+c*56,510,28,28,c%2?o:s),a(230+c*56,538,28,28,c%2?s:o);e.restore()}else if(n==="github"){a(170,205,1708,255,s),e.strokeStyle=s,e.lineWidth=9;for(let l of[-1,1]){e.beginPath(),e.moveTo(1024+l*150,560),e.lineTo(1024+l*420,560),e.lineTo(1024+l*550,690),e.lineTo(1024+l*810,690),e.stroke();for(let c of[420,650,810])e.beginPath(),e.arc(1024+l*c,c===420?560:690,17,0,Math.PI*2),e.stroke()}}else if(n==="abyss"){e.strokeStyle=r,e.globalAlpha=.4,e.lineWidth=5;for(let l=0;l<12;l++)e.beginPath(),e.ellipse(1024,850,260+l*82,160+l*38,0,Math.PI,Math.PI*2),e.stroke();e.globalAlpha=1,e.strokeStyle=s,e.lineWidth=24,e.beginPath(),e.ellipse(1024,850,750,520,0,Math.PI,Math.PI*2),e.stroke(),a(240,660,1568,8,s)}else if(n==="rescue"){for(let l of[-1,1])e.save(),e.translate(1024,0),e.scale(l,1),e.fillStyle=s,e.beginPath(),e.moveTo(180,180),e.lineTo(800,225),e.lineTo(880,390),e.lineTo(180,350),e.closePath(),e.fill(),e.restore();for(let l of[490,1558])a(l-32,420,64,210,s),a(l-105,492,210,64,s);for(let l=0;l<28;l++)a(270+l*55,710,25,25,l%2?r:s)}else if(n==="aurora"){let l=e.createLinearGradient(200,180,1800,650);l.addColorStop(0,r),l.addColorStop(.5,s),l.addColorStop(1,r),e.strokeStyle=l,e.lineWidth=135,e.beginPath(),e.moveTo(160,400),e.bezierCurveTo(590,60,1320,700,1880,260),e.stroke(),e.strokeStyle=s,e.lineWidth=16,e.beginPath(),e.moveTo(200,620),e.bezierCurveTo(600,320,1300,850,1850,520),e.stroke()}else if(n==="tide"){a(170,215,1708,245,r);for(let l=0;l<3;l++)e.strokeStyle=l===0?s:r,e.lineWidth=l===0?12:5,e.beginPath(),e.moveTo(190,520+l*26),e.bezierCurveTo(650,380+l*26,1260,720+l*26,1850,490+l*26),e.stroke()}if(jc.has(n))for(let l of[-1,1])Qc(e,n,1024+l*545,335,n==="tide"?620:650,n==="tide"?210:194,o,n==="tide"?r:s)}var hl=i=>Math.max(0,Math.min(1,i));function pe(i,t,e){let n=hl((i-t)/(e-t));return n*n*n*(n*(n*6-15)+10)}var ul=class{constructor(){this.value=0,this.velocity=0,this.target=0}to(t){this.target=hl(t)}snap(t){this.value=this.target=hl(t),this.velocity=0}get active(){return Math.abs(this.target-this.value)>1e-4||Math.abs(this.velocity)>1e-4}step(t){let e=Math.max(1,Math.ceil(t/.008)),n=t/e;for(let s=0;s<e;s++){let r=this.target-this.value,o=r>=0?1/6.6:1/5.4,a=Math.sign(r)*Math.min(o,Math.sqrt(2*.32*Math.abs(r)));this.velocity+=(a-this.velocity)*(1-Math.exp(-n*12));let l=this.value+this.velocity*n;(l-this.target)*r>=0&&Math.abs(r)<.002?(this.value=this.target,this.velocity=0):(this.value=hl(l),(l<0||l>1)&&(this.velocity=0))}return this.value}},Zn=class{constructor(t=0,e=5){this.value=t,this.target=t,this.velocity=0,this.omega=e}snap(t){this.value=this.target=t,this.velocity=0}step(t){let e=this.value-this.target,n=this.omega,s=this.velocity+n*e,r=Math.exp(-n*t);return this.value=this.target+(e+s*t)*r,this.velocity=(this.velocity-n*s*t)*r,this.value}get active(){return Math.abs(this.value-this.target)>5e-4||Math.abs(this.velocity)>5e-4}};var dl={amplitude:1,rate:1,bank:0,fold:0,brake:0,curl:0,scan:0,thrust:0,gyro:0,pitch:0,twist:0,fan:0,yaw:0,breathe:0,jaw:0,camber:0,corrugate:0,asymFold:0,radiator:0,canard:0,outrigger:0,sensor:0,stabilizer:0,pulse:0,roll:0,bob:0},Hc={cruise:{title:"舒展巡航",view:"hero",pose:{}},glide:{title:"低速滑翔",view:"sweep",pose:{amplitude:.36,rate:.62}},surge:{title:"矢量推进",view:"drive",pose:{thrust:1,amplitude:1.3,rate:1.25}},bankLeft:{title:"左翼侧倾",view:"port",pose:{bank:-1,rate:.85}},bankRight:{title:"右翼回旋",view:"starboard",pose:{bank:1,rate:1.1}},ripple:{title:"翼面波浪",view:"bus",pose:{amplitude:1.65,rate:.85}},fold:{title:"双翼收拢",view:"front",pose:{fold:1,amplitude:.25,rate:.6}},brake:{title:"翼缘制动",view:"sweep",pose:{brake:1,fold:.25,amplitude:.55,rate:.7}},hover:{title:"悬停调姿",view:"hero",pose:{brake:.5,curl:.65,amplitude:1.15,rate:.65}},scan:{title:"镜组追踪",view:"optic",pose:{scan:1,amplitude:.5,rate:.75}},gyro:{title:"三轴联动",view:"core",pose:{gyro:1,amplitude:.55}},tail:{title:"尾节盘旋",view:"tail",pose:{curl:1,rate:1.1,amplitude:.6}},dive:{title:"俯冲推进",view:"sweep",pose:{pitch:-.65,thrust:.4,rate:1.3,amplitude:.7}},climb:{title:"仰角攀升",view:"front",pose:{pitch:.65,fold:.35,thrust:.65,rate:1.15}},scull:{title:"交替划翼",view:"bus",pose:{twist:1,amplitude:1.2,rate:.9}},fan:{title:"翼缘扇展",view:"bus",pose:{fan:1,brake:.4,amplitude:.3,rate:.6}},weave:{title:"蛇形巡游",view:"hero",pose:{yaw:1,curl:.65,twist:.5,rate:.9}},breathe:{title:"脊板呼吸",view:"core",pose:{breathe:1,gyro:.65,rate:.6,amplitude:.35}},precision:{title:"前鳍展开",view:"optic",pose:{jaw:1,scan:.65,amplitude:.3}},counter:{title:"反向翼波",view:"front",pose:{fan:.5,twist:-1,rate:.8,bank:-.25}},cool:{title:"散热鳃展开",view:"core",pose:{brake:1,gyro:.6,rate:.7,amplitude:.35}},accordion:{title:"分节折叠波",view:"bus",pose:{corrugate:1,amplitude:.45,rate:.8}},bow:{title:"双翼弓形舒展",view:"front",pose:{camber:1,amplitude:.4,fan:.6}},scissor:{title:"剪式错翼",view:"hero",pose:{twist:1.4,asymFold:.35,amplitude:.65}},featherPulse:{title:"翼缘逐片翻转",view:"bus",pose:{fan:1,brake:.65,corrugate:.5,rate:1.2}},radiate:{title:"脊侧散热鳃展开",view:"core",pose:{radiator:1,breathe:1,amplitude:.25}},canardSweep:{title:"前置导流翼转向",view:"optic",pose:{canard:1,jaw:.75,scan:.5}},outrigger:{title:"外伸驱动展开",view:"drive",pose:{outrigger:1,thrust:.8,amplitude:.4}},stabilize:{title:"尾翼差动稳定",view:"tail",pose:{stabilizer:1,curl:.7,yaw:.7}},sensorBloom:{title:"四轴镜组展开",view:"optic",pose:{sensor:1,scan:1,canard:.4}},reactorPulse:{title:"内核环序列开合",view:"core",pose:{pulse:1,gyro:1,breathe:.6,radiator:.5}},tailWhip:{title:"尾节甩动",view:"tail",pose:{curl:1.3,rate:1.5,stabilizer:1,amplitude:.55}},ribbon:{title:"尾节螺旋摆动",view:"sweep",pose:{curl:1.1,yaw:1,roll:.35,rate:.8}},slowRoll:{title:"长周期滚转",view:"hero",pose:{roll:1,camber:.6,amplitude:.6,rate:.7}},corkscrew:{title:"螺旋转向",view:"sweep",pose:{roll:.8,yaw:1,thrust:.6,twist:1}},reverse:{title:"交错反向波",view:"front",pose:{corrugate:-1,twist:-1,amplitude:1.1,rate:.7}},portFold:{title:"左翼单侧收拢",view:"port",pose:{asymFold:-1,amplitude:.3,canard:.6}},starFold:{title:"右翼单侧收拢",view:"starboard",pose:{asymFold:1,amplitude:.3,canard:.6}},breach:{title:"上浮收翼",view:"front",pose:{bob:1,pitch:.8,fold:.55,thrust:.7,rate:1.2}}},P_=[[6,"cruise"],[5,"scull"],[5,"bow"],[5,"bankLeft"],[5,"bankRight"],[9,"hover",1,"pods","plugins"],[5,"sensorBloom",1,"pods","plugins"],[7,"canardSweep",0],[5,"accordion"],[5,"featherPulse"],[5,"scissor"],[9,"glide",1,"port","port"],[5,"fan",1,"port","bus"],[7,"portFold",0],[5,"surge"],[5,"dive"],[5,"breach"],[5,"climb"],[9,"glide",1,"starboard","starboard"],[5,"counter",1,"starboard","bus"],[7,"starFold",0],[5,"slowRoll"],[5,"corkscrew"],[5,"weave"],[9,"reactorPulse",1,"core","core"],[5,"radiate",1,"core","bus"],[7,"breathe",0],[5,"ripple"],[5,"reverse"],[5,"brake"],[5,"precision"],[9,"sensorBloom",1,"optic","optic"],[5,"scan",1,"optic","front"],[7,"canardSweep",0],[5,"outrigger"],[5,"cool"],[5,"radiate"],[9,"outrigger",1,"drive","underside"],[5,"reactorPulse",1,"drive","drive"],[7,"hover",0],[5,"tailWhip"],[5,"ribbon"],[5,"stabilize"],[9,"tail",1,"tail","tail"],[5,"stabilize",1,"tail","rear"],[7,"glide",0],[5,"fan"],[5,"fold"],[5,"counter"],[10,"gyro",1,"full","hero"],[6,"reactorPulse",1,"full","bus"],[6,"sensorBloom",1,"full","front"],[6,"radiate",1,"full","rear"],[8,"glide",0,"full","hero"],[5,"surge",0,"full","hero"],[5,"cruise"]],Gc=0,fl=P_.map(([i,t,e=0,n="full",s])=>{let r={at:Gc,action:t,goal:e,profile:n,view:s};return Gc+=i,r}),rd=Gc;function od(i){return{...dl,...Hc[i]?.pose}}function Jn(i,t,e,n){return Math.sin(e*1.35-i*2.5)*(.08+.95*i*i)*Math.sin(Math.min(1,i*3)*Math.PI/2)*n.amplitude*(1+.65*n.thrust)*(1+t*n.bank*.3)+n.fold*2.7*i*i+t*n.bank*.55*i*i+(n.twist||0)*Math.sin(e*.9+i*5)*i*i*t*.65+(n.camber||0)*Math.sin(i*Math.PI)*.9+(n.corrugate||0)*Math.sin(i*12-e*1.7)*i*.42+Math.max(0,t*(n.asymFold||0))*i*i*2.5}function as(i,t,e,n){return(Jn(Math.min(1,i+.001),t,e,n)-Jn(Math.max(0,i-.001),t,e,n))/.0097}var ad=`
  uniform float mantaFold;
  uniform float mantaBank;
  uniform float mantaTwist;
  uniform float mantaCamber;
  uniform float mantaCorrugate;
  uniform float mantaAsymFold;
  float mantaWave(float s,float side) {
    float wave=sin(mantaTime*1.35-s*2.5)*(.08+.95*s*s)*sin(min(1.0,s*3.0)*1.5707963);
    return wave*mantaAmplitude*(1.0+.65*mantaThrust)*(1.0+side*mantaBank*.3)+mantaFold*2.7*s*s+side*mantaBank*.55*s*s+mantaTwist*sin(mantaTime*.9+s*5.0)*s*s*side*.65+mantaCamber*sin(s*3.14159265)*.9+mantaCorrugate*sin(s*12.0-mantaTime*1.7)*s*.42+max(0.0,side*mantaAsymFold)*s*s*2.5;
  }
`;function ld(i,t,e){let n=new Ee,s=new P,r=new P,o=new P(0,1,0),a=[],l=40,c=24;function h(_t,dt,wt){let Lt=new Fe(_t,dt,wt);return Lt.instanceMatrix.setUsage(Ni),Lt.frustumCulled=!1,Lt.castShadow=!0,Lt.receiveShadow=!0,i.add(Lt),a.push(Lt),Lt}function u(_t,dt,wt,Lt,C,rt=0,V=0,H=0,G=1,ht=1,st=1){n.position.set(wt,Lt,C),n.rotation.set(rt,V,H),n.scale.set(G,ht,st),n.updateMatrix(),_t.setMatrixAt(dt,n.matrix)}function d(_t,dt,wt,Lt,C=1){n.position.copy(wt).add(Lt).multiplyScalar(.5),n.quaternion.setFromUnitVectors(o,r.copy(Lt).sub(wt).normalize()),n.scale.set(C,wt.distanceTo(Lt),C),n.updateMatrix(),_t.setMatrixAt(dt,n.matrix)}let f=new Fn;f.moveTo(-.09,0),f.lineTo(.09,0),f.lineTo(.065,-.45),f.quadraticCurveTo(0,-.64,-.065,-.45),f.closePath();let g=new Xn(f,{depth:.028,bevelEnabled:!0,bevelSegments:1,bevelSize:.012,bevelThickness:.012,curveSegments:5});g.rotateX(Math.PI/2);let x=h(g,t.ceramic,l),m=h(new sn(.024,.028,.46),t.graphite,l),p=h(new Oe(.055,.055,.19,10).rotateZ(Math.PI/2),t.copper,l),w=new Fn;for(let _t=0;_t<=80;_t++){let dt=_t/80*Math.PI*2,wt=_t%4<2?.126:.106,Lt=Math.cos(dt)*wt,C=Math.sin(dt)*wt;_t?w.lineTo(Lt,C):w.moveTo(Lt,C)}let b=new Ji;b.absarc(0,0,.052,0,Math.PI*2,!0),w.holes.push(b);let y=new Xn(w,{depth:.026,bevelEnabled:!1,curveSegments:12});y.rotateX(Math.PI/2);let R=h(y,t.titanium,c*2),A=h(new Oe(.044,.044,.12,12),t.orange,c),I=h(new Oe(.043,.043,1,10),t.graphite,c),L=h(new Oe(.021,.021,1,8),t.chrome,c),S=h(new Oe(.014,.014,1,6),t.copper,c*2),v=h(new sn(.28,.025,.16),t.titanium,20),D=h(new Oe(.027,.027,.32,8).rotateZ(Math.PI/2),t.graphite,20),O=h(new sn(.105,.035,.34),t.ceramic,24),J=h(new dn(.038,8,6),t.orange,24),j=h(new sn(.2,.035,.19),t.ceramic,16),q=h(new Oe(.034,.034,.27,10).rotateZ(Math.PI/2),t.chrome,16),Q=h(new ln(.17,.023,6,24),t.titanium,8),mt=h(new dn(.095,12,8),t.graphite,8),Y=h(new ln(.16,.027,6,24).rotateX(Math.PI/2),t.chrome,8),$=h(new sn(.055,.018,.11),t.titanium,64),et=new ae;i.add(et);let xt=[];for(let _t=0;_t<3;_t++){let dt=new be(new ln(.31+_t*.1,.018,6,56),_t===1?t.copper:t.chrome);et.add(dt),xt.push(dt)}let Et=new be(new Or(.16,1),t.glow);et.add(Et);let Pt=Array.from({length:l},(_t,dt)=>e(dt<20?-1:1,.07+dt%20*.045,.99)),Jt=Array.from({length:c},(_t,dt)=>e(dt<12?-1:1,.055+dt%12*.073,.43)),te=new P,tt=new P,ct=new P;function Mt(_t,dt,wt,Lt={}){let C=pe(Lt.drive??dt,.5,.79),rt=pe(Lt.armor??dt,.57,.91);for(let V=0;V<l;V++){let H=V<20?-1:1,G=V%20,ht=.07+G*.045,st=Pt[V],ut=(H<0?Lt.wingL:Lt.wingR)??dt,Ot=pe(ut,.5,.79),Wt=pe(ut,.42,.76),T=Math.atan(as(ht,H,_t,wt))*H,_=wt.brake*.9+Math.sin(_t*1.8-G*.28)*.16*wt.amplitude+wt.fan*(.28+.2*Math.sin(_t*1.4-G*.4)),z=st.x+H*Ot*(.55+ht*.85),X=st.y+Jn(ht,H,_t,wt)-Wt*.45,ot=st.z-Wt*.25;u(x,V,z,X,ot,_,H*(.05+wt.brake*.18+wt.fan*(G/20-.5)*.9),T,1,1,.8+ht*.55),u(m,V,z,X-.025+Math.sin(_)*.22,ot-.22*Math.cos(_),_,H*.05,T,1,1,.8+ht*.55),u(p,V,z,X,ot,0,0,T)}for(let V=0;V<c;V++){let H=V<12?-1:1,G=V%12,ht=.055+G*.073,st=Jt[V],ut=_t*.65+H*G*.21,Ot=(H<0?Lt.wingL:Lt.wingR)??dt,Wt=pe(Ot,.5,.79),T=pe(Ot,.57,.91),_=st.x+H*Wt*(.55+ht*.85),z=st.y+Jn(ht,H,_t,wt)-.12-T*.72,X=st.z;u(R,V*2,_,z,X,0,ut,0),u(R,V*2+1,_,z-.06-T*.13,X-.21,0,-ut+.08,0,.8,1,.8),u(A,V,_,z,X),te.set(_,z-.1,X+.3),tt.set(_+H*.045,z-.1+Math.sin(ut)*.04,X-.05),ct.set(_+H*.07,z-.08,X-.38-Math.sin(_t*1.35-ht*2.5)*.08),d(I,V,te,tt),d(L,V,tt,ct),te.set(_-.09,z-.12,X+.3),tt.set(_+.09,z-.12,X-.35),d(S,V*2,te,tt),te.set(_+.09,z-.12,X+.3),tt.set(_-.09,z-.12,X-.35),d(S,V*2+1,te,tt)}for(let V=0;V<20;V++){let H=V<10?-1:1,G=V%10,ht=.12+wt.brake*.85+Math.sin(_t*.8-G*.22)*(.1+wt.breathe*.3),st=H*(.75+rt*.42),ut=.22+Math.sin(G/10*Math.PI)*.08+rt*.45,Ot=1.15-G*.25;u(v,V,st,ut,Ot,ht,0,-H*.35),u(D,V,st,ut,Ot,0,0,-H*.35)}for(let V=0;V<24;V++){let H=V<12?-1:1,G=V%12,ht=G/12*Math.PI*2,st=.24+wt.thrust*.07+rt*.18,ut=H*.62+Math.cos(ht)*st,Ot=-.55-Math.sin(ht)*st-C*.9,Wt=-1.1-rt*.35;u(O,V,ut,Ot,Wt,-Math.sin(ht)*(.18+wt.thrust*.3),Math.cos(ht)*(.18+wt.thrust*.3),-ht,1,1,1),u(J,V,ut,Ot,Wt+.17)}for(let V=0;V<16;V++){let H=V<8?-1:1,G=V%8,ht=1.2-G*.36,st=rt*(.4+G*.035),ut=H*(.15+wt.breathe*(.35+.16*Math.sin(_t*1.7-G*.4)));u(j,V,H*(.23+rt*.28),.53+st,ht,0,0,ut),u(q,V,H*(.23+rt*.28),.51+st,ht,0,0,ut)}for(let V=0;V<8;V++){let H=V<4?-1:1,G=V%4,ht=.92-G*.68,st=H*(.99+C*.28),ut=.06-C*.35;u(Q,V,st,ut,ht,.35*Math.sin(_t*1.3-G*.4),Math.PI/2,H*wt.fold*.4),u(mt,V,st,ut,ht);let Ot=H*.4,Wt=-.44-C*.9;u(Y,V,Ot,Wt,ht);for(let T=0;T<8;T++){let _=T*Math.PI/4+_t*(2+wt.thrust*3)*(H>0?1:-1);u($,V*8+T,Ot+Math.cos(_)*.085,Wt-.005,ht+Math.sin(_)*.085,0,-_+.5,0)}}et.position.set(0,.63+pe(Lt.core??dt,.66,.96)*1.25,-.25),xt.forEach((V,H)=>{V.rotation.set(_t*(.24+H*.13)*(1+wt.gyro),H*Math.PI/3+_t*.3,_t*.16*(H%2?1:-1)),V.position.y=pe(Lt.core??dt,.66,.96)*(H-1)*.24}),Et.rotation.set(_t*.6,_t*.8,0),Et.scale.setScalar(1+Math.sin(_t*1.8)*.08),a.forEach(V=>V.instanceMatrix.needsUpdate=!0)}return{update:Mt,counts:{feathers:40,gears:48,actuators:24,vents:20,nozzlePetals:24,gyroRings:3,spinePlates:16,shoulderJoints:8,bellyTurbines:8}}}function cd(i,t,e){let n=new Ee,s=new P(0,1,0),r=new P,o=new P,a=new P,l=new os(1,1,1,1,.06),c=new Oe(1,1,1,10),h=new ln(1,.12,6,28),u=new dn(1,12,8),d=new Fn;d.moveTo(-.08,.2),d.bezierCurveTo(.12,.28,.2,.04,.13,-.3),d.bezierCurveTo(.04,-.46,-.04,-.45,-.075,-.3),d.closePath();let f=new Xn(d,{depth:.018,bevelEnabled:!0,bevelSegments:1,bevelSize:.009,bevelThickness:.006,curveSegments:8});f.rotateX(Math.PI/2);let g={};function x(y,R,A,I){let L=new Fe(R,A,I);L.instanceMatrix.setUsage(Ni),L.frustumCulled=!1,L.castShadow=!0,L.receiveShadow=!0,i.add(L),g[y]={mesh:L,n:I,index:0}}x("gill",f,t.titanium,6),x("shell",l,t.ceramic,64),x("metal",l,t.titanium,80),x("dark",l,t.graphite,64),x("copper",l,t.copper,48),x("rod",c,t.chrome,96),x("ring",h,t.copper,64),x("orb",u,t.titanium,24),x("lens",u,t.lens,8),x("blade",l,t.titanium,64),x("glow",l,t.glow,8);let m=Array.from({length:24},(y,R)=>e(R<12?-1:1,.08+R%12*.073,.015));function p(y,R,A,I,L,S,v,D=0,O=0,J=0){let j=g[y];n.position.set(R,A,I),n.rotation.set(D,O,J),n.scale.set(L,S,v),n.updateMatrix(),j.mesh.setMatrixAt(j.index++,n.matrix)}function w(y,R,A,I,L,S,v){let D=g.rod;r.set(y,R,A),o.set(I,L,S),n.position.copy(r).add(o).multiplyScalar(.5),n.quaternion.setFromUnitVectors(s,a.copy(o).sub(r).normalize()),n.scale.set(v,r.distanceTo(o),v),n.updateMatrix(),D.mesh.setMatrixAt(D.index++,n.matrix)}function b(y,R,A,I={}){for(let $ of Object.values(g))$.index=0;let L=pe(I.armor??R,.28,.78),S=pe(I.drive??R,.4,.9),v=pe(I.optic??R,.46,.94),D=pe(I.core??R,.5,.96),O=pe(I.tail??R,.65,1),J=A.radiator||0,j=A.canard||0,q=A.outrigger||0,Q=A.sensor||0,mt=A.stabilizer||0,Y=A.pulse||0;for(let $=0;$<24;$++){let et=$<12?-1:1,xt=$%12,Et=.08+xt*.073,Pt=m[$],Jt=(et<0?I.wingL:I.wingR)??R,te=pe(Jt,.45,.8),tt=pe(Jt,.25,.65),ct=et*Math.atan(as(Et,et,y,A)),Mt=Pt.x+et*te*(.55+Et*.85),_t=Pt.y+Jn(Et,et,y,A)+.06+tt*.55,dt=Pt.z+.1,wt=.1+j*.3+Math.sin(y*1.6-xt*.4)*.09*(A.fan||0);p("shell",Mt,_t,dt,.26,.055,.34,wt,et*.12,ct),p("copper",Mt,_t-.04,dt-.12,.29,.045,.045,0,0,ct),w(Mt,_t-.06,dt-.2,Mt,_t-.06+tt*.13,dt+.12,.018)}for(let $=0;$<6;$++){let et=$<3?-1:1,xt=$%3,Et=et*(.47+L*.3),Pt=.78-xt*.72,Jt=.5+.5*Math.sin(y*1.8-xt*.65),te=et*(.1+J*(.45+.2*Jt)),tt=.4+L*(.65+xt*.1)+J*.06;p("gill",Et,tt,Pt,1,1,1,0,et*.16,te),w(Et-et*.06,tt-.025,Pt-.18,Et-et*.06,tt-.025,Pt+.15,.017);for(let ct=0;ct<4;ct++){let Mt=ct/4,_t=(ct+1)/4;w(Et+et*Math.sin(Mt*Math.PI)*.12,tt-.045+Math.sin(Mt*Math.PI)*.04,Pt-.23+Mt*.4,Et+et*Math.sin(_t*Math.PI)*.12,tt-.045+Math.sin(_t*Math.PI)*.04,Pt-.23+_t*.4,.012)}}for(let $=0;$<4;$++){let et=$<2?-1:1,xt=$%2,Et=et*(.72+xt*.24+Q*.27+v*.38),Pt=.11+Q*.22+v*.3,Jt=1.05+xt*.55+v*.75;w(et*.56,.02,1+xt*.4,Et,Pt,Jt,.025),p("ring",Et,Pt,Jt,.135,.135,.135,0,Math.PI/2,0),p("orb",Et,Pt,Jt,.115,.115,.16,Math.sin(y*.8+$)*Q*.25,et*.3+Math.sin(y*.5+$)*.18),p("lens",Et,Pt,Jt+.13,.083,.083,.033,0,et*.2)}for(let $=0;$<4;$++){let et=$<2?-1:1,xt=$%2,Et=et*(.35+j*(.45+.15*Math.sin(y*1.3-xt*.8))),Pt=et*(.92+xt*.34+v*.45),Jt=-.16+v*.26,te=1.45-xt*.22+v*.75;p("shell",Pt,Jt,te,.5,.05,.34,j*.4,Et,et*.14),p("dark",Pt,Jt-.045,te,.42,.025,.26,j*.4,Et,et*.14),w(et*.62,-.18,1.08,Pt,Jt-.04,te,.022)}for(let $ of[-1,1]){let et=$*(1.12+q*.56+S*.7),xt=-.37-S*.5,Et=-.9-S*.22;w($*.6,-.22,-.55,et,xt,Et,.035),w($*.65,-.28,-1.22,et,xt,Et-.2,.022);for(let Pt=0;Pt<3;Pt++)p("ring",et,xt,Et-Pt*.11,.23-Pt*.035,.23-Pt*.035,.23-Pt*.035,0,0,0);p("orb",et,xt,Et-.12,.075,.075,.12);for(let Pt=0;Pt<12;Pt++){let Jt=Pt*Math.PI/6+y*(2+(A.thrust||0)*5)*$;p("blade",et+Math.cos(Jt)*.13,xt+Math.sin(Jt)*.13,Et-.13,.105,.035,.06,0,.3,Jt)}}for(let $=0;$<12;$++){let et=$*Math.PI/6+y*.12*Y,xt=.4+D*.35+Y*Math.sin(y*1.6-$*.3)*.035,Et=Math.cos(et)*xt,Pt=-.25+Math.sin(et)*xt,Jt=.2+D*.64;p("dark",Et,Jt,Pt,.085,.3,.085,0,-et),p("metal",Et,Jt+.02,Pt,.065,.22,.065,0,-et);for(let te of[-1,1])p("ring",Et,Jt+te*(.12+D*.13),Pt,.05,.05,.05,Math.PI/2)}for(let $=0;$<4;$++){let et=$<2?-1:1,xt=$%2,Et=et*(.48+xt*.32+O*.55),Pt=-1.65-xt*.4-O*.5,Jt=et*(.3+mt*(.4+.22*Math.sin(y*1.4-xt*.8)));p("shell",Et,.04+O*.55,Pt,.37,.055,.52,0,et*.35,Jt),p("metal",Et,-.01+O*.55,Pt,.3,.03,.44,0,et*.35,Jt),w(et*.25,-.08,-1.4,Et,.02+O*.55,Pt,.021)}for(let $ of Object.values(g)){if($.index>$.n)throw new Error("Mechanical instance capacity exceeded");n.position.set(0,0,0),n.scale.setScalar(0),n.updateMatrix();for(let et=$.index;et<$.n;et++)$.mesh.setMatrixAt(et,n.matrix);$.mesh.instanceMatrix.needsUpdate=!0}}return{update:b,counts:{leadingPlates:24,coolingGills:6,sensorGimbals:4,canards:4,driveOutriggers:2,outriggerBlades:24,capacitorCells:12,stabilizers:4}}}var Wc=new P(0,1,0),le=(i,t,e)=>new P(i,t,e),Cn=ui.lerp;function hd(i,t){let e={ceramic:new Ve({color:14410460,metalness:.48,roughness:.3,side:cn}),pearl:new Ve({color:15789796,metalness:.38,roughness:.28,side:cn}),graphite:new Ve({color:1055774,metalness:.72,roughness:.36,side:cn}),rubber:new Ve({color:1322540,metalness:.12,roughness:.72}),titanium:new Ve({color:9349796,metalness:.94,roughness:.25}),chrome:new Ve({color:12372417,metalness:1,roughness:.19}),orange:new Ve({color:15814958,metalness:.4,roughness:.3}),copper:new Ve({color:11102781,metalness:.92,roughness:.25}),teal:new Ve({color:1938051,metalness:.7,roughness:.28}),glow:new Ve({color:10549466,emissive:2202500,emissiveIntensity:.75,metalness:.3,roughness:.18}),lens:new kr({color:470576,metalness:.5,roughness:.08,clearcoat:1,clearcoatRoughness:.05})},n=new ae;i.add(n);let s=new ae;n.add(s);let r=new ae;s.add(r);let o=new ae;s.add(o);let a=new ae;a.position.z=1.65,s.add(a);let l=[],c=[],h=[],u=[],d=[],f=[],g=[],x=[],m=[],p=[],w=[],b=[],y=[],R=new Oe(.022,.022,.018,6),A=new ln(.027,.006,4,10);function I(E,U,B,K=[0,0,0]){let nt=new be(E,U);return nt.position.set(...K),nt.castShadow=!0,nt.receiveShadow=!0,B.add(nt),nt}function L(E,U,B,K,nt=24){return I(new Br(new ks(E),nt,U,7,!1),B,K)}function S(E,U,B,K,nt,gt=[0,0,0],It=32){return I(new Oe(E,U,B,It),K,nt,gt)}function v(E,U,B,K,nt=[0,0,0],gt="y",It=Math.PI*2){let Ut=I(new ln(E,U,8,64,It),B,K,nt);return gt==="y"?Ut.rotation.x=Math.PI/2:gt==="x"&&(Ut.rotation.y=Math.PI/2),Ut}function D(E,U,B,K,nt,gt=[0,0,0],It=.025){return I(new os(E,U,B,1,It),K,nt,gt)}function O(E,U,B,K,nt){let gt=E.clone().add(U).multiplyScalar(.5),It=S(B,B,E.distanceTo(U),K,nt,gt.toArray(),12);return It.quaternion.setFromUnitVectors(Wc,U.clone().sub(E).normalize()),It}function J(E,U,B,K,nt=!1){let gt=I(R,e.graphite,E,[U,B,K]);return nt?gt.rotation.x=Math.PI/2:gt.rotation.y=Math.PI/6,gt}function j(E,U,B,K,nt,gt=[-Math.PI/2,0,0],It=!1){let Ut=document.createElement("canvas");Ut.width=1024,Ut.height=192;let St=Ut.getContext("2d");St.fillStyle=It?"#142926":"#dde5dd",St.fillRect(0,0,Ut.width,Ut.height),St.fillStyle=It?"#c6dbcd":"#314d43",St.font="500 72px monospace",St.textAlign="center",St.textBaseline="middle",St.fillText(E,512,98);let Bt=new Bs(Ut);Bt.colorSpace=nn,Bt.anisotropy=4;let $t=I(new Ei(U,B),new Ve({map:Bt,roughness:.55,metalness:.25}),K,nt);return $t.rotation.set(...gt),$t.userData.labelCanvas=Ut,$t}function q(E){let U=new Map;for(let B of[...E.children]){if(!B.isMesh||B.isInstancedMesh||B.userData.keep)continue;B.updateMatrix();let K=B.geometry.clone().applyMatrix4(B.matrix),nt=B.material.uuid;U.has(nt)||U.set(nt,{material:B.material,geometries:[]}),U.get(nt).geometries.push(K),E.remove(B)}for(let{material:B,geometries:K}of U.values()){let nt=er(K.map(gt=>gt.index?gt.toNonIndexed():gt),!1);if(nt){let gt=I(nt,B,E);gt.userData.batched=!0}K.forEach(gt=>gt.dispose())}}function Q(E,U=16,B=18){let K=[],nt=[],gt=[];for(let Ut=0;Ut<=U;Ut++)for(let St=0;St<=B;St++){let Bt=E(Ut/U,St/B);K.push(Bt.x,Bt.y,Bt.z),nt.push(Ut/U,St/B)}for(let Ut=0;Ut<U;Ut++)for(let St=0;St<B;St++){let Bt=Ut*(B+1)+St,$t=Bt+B+1;gt.push(Bt,$t,Bt+1,$t,$t+1,Bt+1)}let It=new Ue;return It.setAttribute("position",new fe(K,3)),It.setAttribute("uv",new fe(nt,2)),It.setIndex(gt),It.computeVertexNormals(),It}function mt(E,U,B,K,nt,gt,It=0,Ut=Math.PI*2,St=0,Bt=Math.PI){let $t=I(new dn(1,32,20,It,Ut,St,Bt),K,nt,gt);return $t.scale.set(E,U,B),$t}mt(.92,.32,1.78,e.graphite,o,[0,-.16,0]);for(let E of[-1,1]){let U=new ae;s.add(U),p.push({group:U,side:E}),L([le(E*.35,.12,1.6),le(E*.55,.06,.8),le(E*.55,.02,-.8),le(E*.2,-.1,-1.8)],.064,e.titanium,U),L([le(E*.65,.05,1.15),le(E*.78,.16,.3),le(E*.72,.1,-.75),le(E*.25,-.1,-1.8)],.024,e.orange,U),L([le(E*.48,-.2,1.3),le(E*.65,-.24,0),le(E*.48,-.24,-1.45)],.035,e.copper,U);for(let B=0;B<13;B++){let K=1.38-B*.235,nt=.45+.18*Math.cos(K);O(le(E*.05,-.12,K),le(E*nt,.12,K-.12),.025,e.chrome,s),D(.09,.09,.035,e.graphite,s,[E*nt,.13,K])}q(U)}S(.48,.48,.52,e.graphite,s,[0,.13,-.25]);for(let E=0;E<8;E++){let U=new ae;s.add(U),v(.49,.022,E%2?e.copper:e.titanium,U,[0,-.09+E*.066,-.25]);for(let B=0;B<6;B++){let K=B*Math.PI/3;D(.04,.04,.06,e.graphite,U,[Math.sin(K)*.46,-.09+E*.066,Math.cos(K)*.46-.25],.005)}q(U),f.push({group:U,index:E})}let Y=new ae;s.add(Y),S(.43,.48,.08,e.orange,Y,[0,.42,-.25]),S(.36,.36,.07,e.lens,Y,[0,.48,-.25]),v(.37,.023,e.glow,Y,[0,.52,-.25]);let $=new ae;$.position.set(0,.53,-.25),s.add($),h.push($);for(let E=0;E<14;E++){let U=D(.08,.025,.27,e.chrome,$,[Math.sin(E/14*Math.PI*2)*.2,0,Math.cos(E/14*Math.PI*2)*.2],.006);U.rotation.y=E/14*Math.PI*2+.65}S(.1,.1,.08,e.graphite,$,[0,.02,0]);for(let E=0;E<8;E++){let U=E*Math.PI/4;J(Y,Math.sin(U)*.43,.47,Math.cos(U)*.43-.25)}q(Y),q($);for(let E of[-1,1])for(let U=0;U<6;U++){let B=-1.55+U*.48,K=B+.445,nt=new ae;r.add(nt),I(Q((Ut,St)=>{let Bt=Cn(B,K,Ut),$t=Math.max(.2,Math.sqrt(1-(Bt/1.9)**2)),oe=E*(.19+St*.71*$t),De=.12+.44*Math.sqrt(Math.max(0,1-(oe/.98)**2))*$t;return le(oe,De,Bt)},8,12),U%3===0?e.pearl:e.ceramic,nt);let gt=(B+K)/2,It=Math.sqrt(1-(gt/1.9)**2);O(le(E*.22,.13+.4*It,B+.035),le(E*.77*It,.3*It,B+.035),.014,e.chrome,nt),J(nt,E*.28,.15+.42*It,B+.07),J(nt,E*.7*It,.32*It,B+.07),u.push({group:nt,side:E,index:U}),q(nt)}let et=S(.4,.49,.27,e.graphite,a,[0,-.03,0]);et.rotation.x=Math.PI/2;for(let[E,[U,B,K]]of[[.44,.12,e.ceramic],[.385,.18,e.orange],[.345,.235,e.chrome],[.3,.27,e.graphite],[.255,.29,e.teal]].entries()){let nt=new ae;if(a.add(nt),v(U,.035,K,nt,[0,-.03,B],"z"),E===0)for(let gt=0;gt<12;gt++){let It=gt*Math.PI/6;J(nt,Math.cos(It)*.39,Math.sin(It)*.39-.03,.159,!0)}q(nt),g.push({group:nt,index:E})}let xt=new ae;a.add(xt),mt(.255,.255,.1,e.lens,xt,[0,-.03,.29]),v(.165,.009,e.glow,xt,[0,-.03,.385],"z");let Et=new ae;Et.position.set(0,-.03,.402),a.add(Et);for(let E=0;E<8;E++){let U=new ae;U.rotation.z=E*Math.PI/4,Et.add(U);let B=D(.13,.065,.012,e.titanium,U,[.12,0,0],.012);b.push({pivot:U,blade:B,index:E})}q(xt);for(let E of[-1,1]){let U=new ae;U.position.set(E*.62,.05,-.17),U.rotation.y=E*.28,a.add(U),mt(.24,.18,.32,e.ceramic,U,[0,0,0]);let B=S(.135,.17,.18,e.graphite,U,[0,0,.24]);B.rotation.x=Math.PI/2,v(.14,.02,e.chrome,U,[0,0,.33],"z"),v(.105,.012,e.orange,U,[0,0,.35],"z"),mt(.095,.095,.025,e.lens,U,[0,0,.36]);for(let K=0;K<5;K++)D(.02,.025,.1,e.graphite,U,[E*.22,.04,K*.065-.1],.004);q(U),x.push({eye:U,side:E})}let Pt=new ae;a.add(Pt);let Jt=new ai({color:4310449,transparent:!0,opacity:0,depthWrite:!1,side:cn}),te=I(new Cr(.85,3.2,40,1,!0),Jt,Pt,[0,-.03,2.04]);te.rotation.x=-Math.PI/2,te.castShadow=!1;let tt=[];for(let E=0;E<3;E++){let U=new ai({color:2730395,transparent:!0,opacity:0,depthWrite:!1}),B=v(.45,.007,U,Pt,[0,-.03,.45],"z");B.castShadow=!1,tt.push(B)}let ct=[];for(let E of[-1,1]){let B=new Fe(new Oe(.12,.145,.045,16,1,!0),e.ceramic,24),K=new Fe(new dn(.125,12,10),e.graphite,24),nt=new Fe(new ln(.13,.012,5,18),e.orange,24);for(let gt of[B,K,nt])gt.castShadow=!0,n.add(gt),gt.frustumCulled=!1;ct.push({side:E,count:24,sleeve:B,bearing:K,seal:nt})}function Mt(E,U,B){let K=E*(.74+4.85*U),nt=1.17-2.8*Math.pow(U,1.75),gt=-1.55-1.23*Math.sin(U*Math.PI*.94),It=Cn(nt,gt,B),Ut=.04+.34*Math.sin(U*Math.PI)-.17*U+.12*Math.sin(B*Math.PI)*(1-U);return le(K,Ut,It)}function _t(E,U){return Math.sin(U*1.35-E*2.5)*(.08+.95*E*E)*Math.sin(Math.min(1,E*3)*Math.PI/2)}let dt=15;for(let E of[-1,1]){let U=[];for(let B=0;B<dt;B++){let K=B/dt+.003,nt=(B+1)/dt-.003,gt=(K+nt)/2,It=Mt(E,gt,.5),Ut=new ae;Ut.position.copy(It),n.add(Ut);let St=new ae;Ut.add(St);let Bt=new ae;Ut.add(Bt);let $t=new ae;Ut.add($t);let oe=(ge,_e,Ae=0)=>{let Me=Mt(E,Cn(K,nt,ge),_e).sub(It);return Me.y+=Ae,Me};for(let[ge,_e]of[[0,.1],[.9,1]])I(Q((Ae,Me)=>oe(Cn(ge,_e,Ae),Me,-.045),2,12),e.graphite,St);for(let ge of[.12,.45,.84])O(oe(.05,ge,-.05),oe(.95,ge,-.05),.022,e.titanium,St);for(let[ge,_e]of[[.025,.43],[.52,.96]]){I(Q((Me,zn)=>oe(Me,Cn(ge,_e,zn),.025),6,10),B%4===2?e.pearl:e.ceramic,Bt);let Ae=[oe(0,ge,.018),oe(1,ge,.018),oe(1,_e,.018),oe(0,_e,.018),oe(0,ge,.018)];for(let Me=0;Me<4;Me++)O(Ae[Me],Ae[Me+1],.012,e.titanium,Bt)}let De=Array.from({length:9},(ge,_e)=>oe(.13,.02+_e*.12,-.065));L(De,.028,e.chrome,St,12);let se=Array.from({length:9},(ge,_e)=>oe(.87,.02+_e*.12,-.07));L(se,.025,e.titanium,St,12),O(oe(.5,.1,-.075),oe(.5,.62,-.075),.035,e.graphite,$t),O(oe(.5,.57,-.075),oe(.5,.93,-.075),.019,e.chrome,$t);let Ne=[oe(.28,.12,-.1),oe(.36,.48,-.14),oe(.3,.87,-.1)];L(Ne,.01,e.copper,St,8),I(Q((ge,_e)=>oe(ge,Cn(.445,.485,_e),.002),4,2),e.teal,St),(B%4===0||B===14)&&I(Q((ge,_e)=>oe(Cn(.3,.75,ge),Cn(.055,.14,_e),.033),3,2),e.orange,Bt);for(let ge of[.14,.86])for(let _e of[.07,.38,.56,.91]){let Ae=oe(ge,_e,.04);m.push({position:Ae,center:It,side:E,s:gt,index:B})}if(B<13){let ge=oe(.5,.47,.002),_e=S(.045,.045,.14,e.titanium,St,ge.toArray(),12);_e.rotation.z=Math.PI/2;for(let Ae of[.15,.85]){let Me=oe(Ae,.47,.01),zn=S(.035,.035,.05,e.orange,St,Me.toArray(),12);zn.rotation.z=Math.PI/2}}q(St),q(Bt),q($t);let ve={side:E,s:gt,index:B,section:Ut,frame:St,cover:Bt,actuator:$t,center:It};l.push(ve),U.push(ve)}for(let B=0;B<4;B++){let K=.88-B*.65,nt=S(.11,.11,.45,e.graphite,s,[E*.88,.04,K]);nt.rotation.z=Math.PI/2;let gt=v(.115,.023,e.chrome,s,[E*1.04,.04,K],"x");O(le(E*.43,-.1,K+.12),le(E*1.16,-.1,K-.12),.045,e.titanium,s),O(le(E*.5,-.15,K-.02),le(E*1.13,-.17,K-.18),.016,e.orange,s)}}let wt=er([new Oe(.022,.022,.018,6),new Oe(.01,.012,.085,8).translate(0,-.045,0)]),Lt=new Fe(wt,e.graphite,m.length),C=new Fe(A,e.chrome,m.length);for(let E of[Lt,C])n.add(E),E.castShadow=!0,E.frustumCulled=!1,E.instanceMatrix.setUsage(Ni);for(let E=0;E<8;E++){let U=E<4?-1:1,K=.08+E%4*.105,nt=e.orange.clone(),gt=Mt(U,K,.43),It=new ae;n.add(It);let Ut=new ae,St=new ae,Bt=new ae,$t=new ae;It.add(Ut,St,$t),Ut.add(Bt);let oe=[];mt(.17,.14,.48,e.graphite,It,[0,.055,0]),mt(.18,.17,.42,e.ceramic,Ut,[0,.13,0],0,Math.PI*2,0,Math.PI*.58),v(.155,.015,nt,Ut,[0,.12,.3],"z"),D(.2,.025,.2,e.lens,Bt,[0,.29,.05],.015),D(.13,.012,.025,e.glow,Bt,[0,.31,.075],.005);for(let se=0;se<4;se++)D(.2,.017,.022,e.graphite,Ut,[0,.245,-.12-se*.045],.004);for(let se of[-.33,.33])J(Ut,0,.2,se);let De=j(`${String(E+1).padStart(2,"0")} ${t[E]||"EMPTY"}`,.16,.04,Ut,[0,.3,.2]);D(.25,.018,.62,e.teal,St,[0,.13,0],.012);for(let se=0;se<3;se++){D(.105,.026,.085,e.graphite,St,[0,.155,-.18+se*.16],.008);for(let Ne of[-1,1])for(let ve=0;ve<4;ve++)D(.024,.006,.006,e.copper,St,[Ne*.066,.158,-.21+se*.16+ve*.017],.001)}for(let se of[-1,1]){O(le(se*.095,.143,-.27),le(se*.095,.143,.27),.004,e.copper,St);let Ne=new ae;Ne.position.set(se*.16,.07,.19),It.add(Ne),D(.035,.075,.07,e.titanium,Ne,[0,.02,0],.008),D(.05,.025,.04,e.orange,Ne,[se*-.012,.058,0],.005),q(Ne),oe.push({group:Ne,sign:se})}for(let se=0;se<6;se++)D(.025,.06,.045,e.copper,$t,[-.085+se*.034,-.1,-.12],.003);for(let se of[It,Ut,St,$t,Bt])q(se);It.traverse(se=>{se.isMesh&&(se.userData.pod=E)}),c.push({group:It,side:U,s:K,base:gt,index:E,lid:Ut,board:St,display:Bt,contacts:$t,latches:oe,statusMaterial:nt,label:De,labelText:t[E]||"EMPTY"})}let rt=64,V=new ae;n.add(V);let H=new Fe(new Oe(.16,.185,.082,18,1,!0),e.ceramic,rt),G=new Fe(new dn(.167,12,10),e.graphite,rt),ht=new Fe(new ln(.177,.012,5,18),e.teal,rt),st=new Fe(new ln(.178,.01,5,18),e.chrome,rt),ut=new Fe(new os(.14,.05,.13,1,.015),e.titanium,rt);for(let E of[H,G,ht,st,ut])V.add(E),E.castShadow=!0,E.receiveShadow=!0,E.frustumCulled=!1,E.instanceMatrix.setUsage(Ni);let Ot=new ae;n.add(Ot);for(let E of[-1,1]){let U=new ae;Ot.add(U),w.push({leaf:U,side:E});let B=new Fn;B.moveTo(0,0),B.bezierCurveTo(E*.25,.15,E*.68,.08,E*.85,-.25),B.quadraticCurveTo(E*.35,-.2,0,-.9),B.closePath();let K=I(new Xn(B,{depth:.025,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:2}),e.ceramic,U);K.rotation.x=Math.PI/2,O(le(E*.04,-.03,-.04),le(E*.72,-.03,.2),.025,e.graphite,U),O(le(E*.04,-.03,-.04),le(E*.5,-.03,.37),.012,e.orange,U),q(U)}for(let E of[-1,1]){let U=new ae;U.position.set(E*.62,-.35,-.85),o.add(U);let B=new ae;U.add(B),v(.28,.04,e.graphite,B),v(.31,.018,e.chrome,B),v(.25,.013,e.orange,B);let K=new ae;U.add(K),h.push(K);for(let nt=0;nt<9;nt++){let gt=D(.07,.025,.19,e.titanium,K,[Math.cos(nt/9*Math.PI*2)*.14,0,Math.sin(nt/9*Math.PI*2)*.14],.008);gt.rotation.y=-nt/9*Math.PI*2+.4}S(.075,.075,.05,e.graphite,K),q(K),q(B),q(U),y.push({fan:U,shroud:B,spinner:K,side:E})}let Wt=new dn(.022,8,6);for(let E=0;E<8;E++)for(let U=0;U<3;U++){let B=I(Wt,U===0?e.orange:e.glow,n);B.castShadow=!1,d.push({dot:B,index:E,offset:U/3})}let T=new Fe(new dn(.025,6,5),new ai({color:2723714,transparent:!0,opacity:.45,depthWrite:!1}),56);T.frustumCulled=!1,n.add(T);let _=new ae;n.add(_),q(s),q(o),q(a),q(r);let z=document.createElement("canvas"),X=new Bs(z);X.colorSpace=nn,X.anisotropy=4;let ot={mantaLivery:{value:X},mantaCarbon:{value:0},mantaBrushed:{value:0},mantaTwist:{value:0},mantaCamber:{value:0},mantaCorrugate:{value:0},mantaAsymFold:{value:0},mantaWingL:{value:0},mantaWingR:{value:0},mantaFold:{value:0},mantaBank:{value:0},mantaTime:{value:0},mantaProgress:{value:0},mantaThrust:{value:0},mantaAmplitude:{value:1}},it=`
    varying vec2 mantaPaintUV;
    uniform float mantaTime;
    uniform float mantaWingL;
    uniform float mantaWingR;
    uniform float mantaThrust;
    uniform float mantaAmplitude;
    attribute float mantaSpan;
    attribute float mantaSide;
    attribute float mantaLayer;
    attribute vec3 mantaCenter;
    float assemblyPhase(float x,float a,float b){float t=clamp((x-a)/(b-a),0.0,1.0);return t*t*t*(t*(t*6.0-15.0)+10.0);}
    float mantaPeel(float s,float side){return assemblyPhase(side<0.0?mantaWingL:mantaWingR,.32+s*.075,.63+s*.075);}
    float mantaDrive(float s,float side){return assemblyPhase(side<0.0?mantaWingL:mantaWingR,.51+s*.05,.79+s*.05);}
    ${ad}
    mat2 mantaRotation(float s,float side,float layer) {
      float slope=(mantaWave(min(s+.001,1.0),side)-mantaWave(max(s-.001,0.0),side))/.0097;
      float angle=atan(slope)*side;
      if(layer>.5&&layer<1.5)angle+=side*mantaPeel(s,side)*(.12+s*.09);
      if(layer>1.5)angle-=side*mantaDrive(s,side)*.12;
      float c=cos(angle),q=sin(angle);return mat2(c,q,-q,c);
    }
  `,qt=`
    mantaPaintUV=vec2((position.x+5.65)/11.3,1.0-(position.z+3.15)/4.45);
    float mantaProgress=mantaSide<0.0?mantaWingL:mantaWingR;
    vec3 transformed=vec3(position);
    transformed.xy=mantaRotation(mantaSpan,mantaSide,mantaLayer)*(transformed.xy-mantaCenter.xy)+mantaCenter.xy;
    transformed.y+=mantaWave(mantaSpan,mantaSide);
    float bone=assemblyPhase(mantaProgress,.50,.79);
    transformed.x+=mantaSide*bone*(.55+mantaSpan*.85);
    if(mantaLayer>.5&&mantaLayer<1.5){
      float peel=mantaPeel(mantaSpan,mantaSide);
      float panelSide=position.z>mantaCenter.z?1.0:-1.0;
      transformed.y+=peel*(1.05+.30*mantaSpan+(panelSide>0.0?.12:0.0));
      transformed.x+=mantaSide*peel*(.20+mantaSpan*.25);
      transformed.z+=panelSide*peel*.22;
    }
    if(mantaLayer>1.5){float drive=mantaDrive(mantaSpan,mantaSide);transformed.y-=drive*.64;transformed.z+=drive*.16;}
  `,At=E=>{Object.assign(E.uniforms,ot),E.vertexShader=it+E.vertexShader.replace("#include <begin_vertex>",qt).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal.xy=mantaRotation(mantaSpan,mantaSide,mantaLayer)*objectNormal.xy;`),E.fragmentShader=`varying vec2 mantaPaintUV; uniform sampler2D mantaLivery; uniform float mantaCarbon; uniform float mantaBrushed;
`+E.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float weave=sin(mantaPaintUV.x*1450.0+mantaPaintUV.y*820.0)*sin(mantaPaintUV.x*1450.0-mantaPaintUV.y*820.0);
        float grain=sin(mantaPaintUV.y*2350.0)+.4*sin(mantaPaintUV.y*3710.0);
        diffuseColor.rgb*=1.0+mantaCarbon*weave*.16+mantaBrushed*grain*.045;
        vec4 paint=texture2D(mantaLivery,mantaPaintUV);
        diffuseColor.rgb=mix(diffuseColor.rgb,paint.rgb,paint.a);`)};n.updateMatrixWorld(!0);let Gt=new Map,Xt=[];for(let E of l){for(let[U,B]of[[E.frame,0],[E.cover,1],[E.actuator,2]])U.traverse(K=>{if(!K.isMesh)return;let nt=K.geometry.clone().applyMatrix4(K.matrixWorld),gt=nt.getAttribute("position").count;nt.setAttribute("mantaSpan",new fe(new Float32Array(gt).fill(E.s),1)),nt.setAttribute("mantaSide",new fe(new Float32Array(gt).fill(E.side),1)),nt.setAttribute("mantaLayer",new fe(new Float32Array(gt).fill(B),1));let It=new Float32Array(gt*3);for(let St=0;St<gt;St++)It.set(E.center.toArray(),St*3);nt.setAttribute("mantaCenter",new fe(It,3));let Ut=K.material.uuid;Gt.has(Ut)||Gt.set(Ut,{material:K.material,geometry:[]}),Gt.get(Ut).geometry.push(nt)});E.frame.visible=!1,E.cover.visible=!1,E.actuator.visible=!1}for(let E of Gt.values()){let U=E.material.clone();U.onBeforeCompile=gt=>{At(gt),E.material!==e.ceramic&&E.material!==e.pearl&&(gt.fragmentShader=gt.fragmentShader.replace("paint.a);","0.0);"))},U.customProgramCacheKey=()=>"manta-wing-v4-"+(E.material===e.ceramic||E.material===e.pearl?"skin":"frame");let B=er(E.geometry,!1),K=I(B,U,n);K.frustumCulled=!1,K.userData.shaderWing=!0;let nt=new Ai({depthPacking:Zs});nt.onBeforeCompile=At,nt.customProgramCacheKey=()=>"manta-wing-depth-v3",K.customDepthMaterial=nt,E.geometry.forEach(gt=>gt.dispose()),Xt.push({source:E.material,material:U})}let yt=-2.3,Dt=new Zi({color:7311489,transparent:!0,opacity:.18}),jt=new be(new Ei(150,150),new zr({opacity:.055}));jt.rotation.x=-Math.PI/2,jt.position.y=yt,jt.receiveShadow=!0,i.add(jt);for(let E of[3,5.4,8.8,13]){let U=Array.from({length:181},(B,K)=>le(Math.cos(K/180*Math.PI*2)*E,yt+.01,Math.sin(K/180*Math.PI*2)*E));i.add(new Fs(new Ue().setFromPoints(U),Dt))}let Zt=[];for(let E=0;E<120;E++){let U=E/120*Math.PI*2;for(let B of[5.4,8.8]){let K=E%5===0?.13:.05;Zt.push(le(Math.cos(U)*(B-K),yt+.02,Math.sin(U)*(B-K)),le(Math.cos(U)*(B+K),yt+.02,Math.sin(U)*(B+K)))}}for(let[E,U]of[[1,0],[0,1],[.707,.707]])Zt.push(le(-E*35,yt,-U*35),le(E*35,yt,U*35));i.add(new Os(new Ue().setFromPoints(Zt),Dt));let at=new Ee,re=new un,N=new P,ft=new P,Rt=new P,zt=new P;function vt(E,U,B,K,nt,gt=0){at.position.copy(B),at.quaternion.setFromUnitVectors(Wc,K),gt&&at.rotateX(gt),at.scale.setScalar(nt),at.updateMatrix(),E.setMatrixAt(U,at.matrix)}function lt(E,U,B,K=ft){let nt=E*E,gt=1-B*.93;return K.set(Math.sin(E*4.3)*nt*.75+Math.sin(E*5.4-U*1.1)*nt*.95*gt+Mn*Math.sin(E*5)*E*1.5,-.1+Math.sin(E*4-U*1.1+.5)*nt*.55*gt+Mn*nt*.65,-1.65-E*6.6-B*.9*E+Mn*E*E*1.3)}let kt=new Float32Array(256*6),ne=new Ue;ne.setAttribute("position",new Ze(kt,3));let Se=new Zi({color:13081470,transparent:!0,opacity:0,depthWrite:!1}),me=new Os(ne,Se);me.frustumCulled=!1,n.add(me);let ke=0;function Xe(E,U){!me.visible||ke>=256||(E.toArray(kt,ke*6),U.toArray(kt,ke*6+3),ke++)}let Ke=new P,je=new P,$n=le(0,0,-1),ls=new P,cs=new P,Mn=0,Ie={amplitude:1,thrust:0,bank:0,fold:0,brake:0,gyro:0},Bn=ld(n,e,Mt),di=cd(n,e,Mt),Qe=new P,Fi=new P,fi=le(0,0,1);function pt(E,U,{flowing:B=!0,flowTime:K=E,selected:nt=-1,scan:gt=0,thrust:It=0,guides:Ut=!0,activeModules:St=null,motion:Bt={},lookX:$t=0,lookY:oe=0,parts:De={}}={}){let se=De.wingL??U,Ne=De.wingR??U,ve=De.podL??U,ge=De.podR??U,_e=De.armor??U,Ae=De.drive??U,Me=De.optic??U,zn=De.core??U,kn=De.tail??U,pd=pe(_e,.32,.7),hs=pe(Ae,.5,.79),Kn=pe(Me,.61,.87),io=pe(zn,.66,.96),Sn=pe(kn,.7,1),so=(1-U*.92)*(Bt.amplitude??1);Object.assign(Ie,Bt,{camber:(Bt.camber||0)*(1-U),corrugate:(Bt.corrugate||0)*(1-U),asymFold:(Bt.asymFold||0)*(1-U),amplitude:so,thrust:It,bank:(Bt.bank||0)*(1-U),fold:(Bt.fold||0)*(1-U),brake:Bt.brake||0,gyro:Bt.gyro||0,twist:(Bt.twist||0)*(1-U),fan:Bt.fan||0,breathe:(Bt.breathe||0)*(1-U),jaw:(Bt.jaw||0)*(1-U)}),Mn=(Bt.curl||0)*(1-Sn),Bn.update(E,U,Ie,De),di.update(E,U,Ie,De),ot.mantaCamber.value=Ie.camber,ot.mantaCorrugate.value=Ie.corrugate,ot.mantaAsymFold.value=Ie.asymFold,ot.mantaWingL.value=se,ot.mantaWingR.value=Ne,ot.mantaTwist.value=Ie.twist,ot.mantaFold.value=Ie.fold,ot.mantaBank.value=Ie.bank,ot.mantaTime.value=E,ot.mantaProgress.value=U,ot.mantaAmplitude.value=so,ot.mantaThrust.value=It,ke=0,me.visible=Ut&&U>.02,Se.opacity=pe(U,.04,.3)*.22,n.rotation.x=(Math.sin(E*.65)*.025+It*Math.sin(E*1.8)*.025)*so,n.rotation.z=(Math.sin(E*.43)*.018-Ie.bank*.16)*so+(Bt.roll||0)*Math.sin(E*.55)*.48*(1-U),n.rotation.x+=Ie.brake*.08+(Bt.pitch||0)*.3*(1-U);for(let Ct of l){let{section:Ht,cover:Kt,center:xe,side:qe,s:Be}=Ct,bn=qe<0?se:Ne,Vn=pe(bn,.5,.79),jn=Jn(Be,qe,E,Ie),pi=as(Be,qe,E,Ie);Ct.dy=jn,Ct.slope=pi;let mn=pe(bn,.32+Be*.075,.63+Be*.075);if(Ht.position.copy(xe),Ht.position.y+=jn,Ht.position.x+=qe*Vn*(.55+Be*.85),Ht.rotation.z=Math.atan(pi)*qe,Kt.position.y=mn*(1.05+.3*Be),Ct.index%3===0){let mi=Ht.position.clone();Xe(mi,mi.clone().add(le(qe*mn*(.2+Be*.25),mn*(1.05+.3*Be),0)))}}for(let Ct of u){let Ht=pe(_e,.32+Ct.index*.013,.65+Ct.index*.013);Ct.group.position.set(Ct.side*Ht*.62,Ht*(1.03+(5-Ct.index)*.07),0),Ct.group.rotation.z=-Ct.side*(Ht*.2+Ie.breathe*(.1+.07*Math.sin(E*1.7-Ct.index*.35))),Ct.group.position.y+=Ie.breathe*(.09+.06*Math.sin(E*1.7-Ct.index*.35))}r.position.y=pd*.18,o.position.y=-hs*.9,p.forEach(({group:Ct,side:Ht})=>Ct.position.set(Ht*hs*.42,-hs*.28,0)),f.forEach(({group:Ct,index:Ht})=>{let Kt=pe(zn,.66+Ht*.008,.91+Ht*.008);Ct.position.y=Kt*(.42+Ht*.19),Ct.rotation.y=Kt*.1*(Ht%2?1:-1)}),Y.position.y=io*2.18,Y.rotation.y=io*.28,$.position.y=.53+io*2.6,Xe(le(0,.42,-.25),le(0,.53+io*2.6,-.25)),a.position.z=1.65+Kn*.68,a.rotation.y=(Math.sin(K*.55)*gt*.22+$t*.18)*(1-Kn),a.rotation.x=(Math.sin(K*.8)*gt*.12-oe*.12)*(1-Kn),g.forEach(({group:Ct,index:Ht})=>{let Kt=pe(Me,.61+Ht*.018,.82+Ht*.018);Ct.position.z=Kt*(.2+Ht*.255),Ct.rotation.z=Kt*(Ht%2?.18:-.12)}),xt.position.z=Kn*1.6,Et.position.z=.402+Kn*1.98;let Xc=.3+Math.sin(K*.65)*.055+gt*.2*(.5+.5*Math.sin(K*1.3));b.forEach(({pivot:Ct,blade:Ht,index:Kt})=>{Ct.rotation.z=Kt*Math.PI/4+Xc,Ht.position.x=.116+gt*Math.sin(K*.8)*.02,Ht.rotation.z=-.48+Xc*.6}),x.forEach(({eye:Ct,side:Ht})=>{Ct.position.set(Ht*(.62+Kn*.4),.05+Kn*.12,-.17),Ct.rotation.y=Ht*.28+gt*Math.sin(K*.6+Ht)*.16*(1-Kn)}),Xe(le(0,-.03,1.65),le(0,-.03,a.position.z+Et.position.z)),Pt.visible=gt>.01&&U<.25,Jt.opacity=gt*.034*(1-pe(U,0,.25)),Pt.rotation.y=Math.sin(K*.55)*.11,Pt.rotation.x=Math.sin(K*.7)*.07,tt.forEach((Ct,Ht)=>{let Kt=(K*.32+Ht/3)%1;Ct.position.z=.48+Kt*3,Ct.scale.setScalar(.4+Kt*1.6),Ct.material.opacity=gt*(1-Kt)*.33}),c.forEach(({group:Ct,side:Ht,s:Kt,base:xe,index:qe,lid:Be,board:bn,display:Vn,contacts:jn,latches:pi})=>{let mn=qe%4*.012+(Ht>0?.012:0),mi=Ht<0?ve:ge,us=pe(Ht<0?se:Ne,.5,.79),nr=pe(mi,.1+mn,.29+mn),Oi=pe(mi,.24+mn,.44+mn),qc=pe(mi,.01+mn,.12+mn);Ct.position.copy(xe),Ct.position.y+=Jn(Kt,Ht,E,Ie)+.05+nr*(1.23+qe%4*.14),Ct.position.x+=Ht*us*(.55+Kt*.85);let md=as(Kt,Ht,E,Ie);Ct.rotation.z=Ht*Math.atan(md),Ct.rotation.y=Ht*nr*.1,Be.position.set(Ht*Oi*.2,Oi*.63,Oi*.12),Be.rotation.z=-Ht*Oi*.24,bn.position.y=Oi*.2,Vn.position.y=Oi*.16,jn.position.y=-Oi*.22,pi.forEach(({group:Yc,sign:Zc})=>{Yc.rotation.z=-Zc*qc*.9,Yc.position.x=Zc*(.16+qc*.045)}),Xe(xe.clone().add(le(0,.05,0)),Ct.position.clone())}),m.forEach(({position:Ct,center:Ht,side:Kt,s:xe,index:qe},Be)=>{let bn=Kt<0?se:Ne,Vn=pe(bn,.5,.79),jn=pe(bn,.32+xe*.075,.63+xe*.075),pi=pe(bn,.01+xe*.045,.13+xe*.045),mn=l[(Kt>0?dt:0)+qe],mi=mn.slope,us=Math.atan(mi)*Kt+Kt*jn*(.12+xe*.09),nr=Ct.z>0?1:-1;ft.copy(Ct).applyAxisAngle(fi,us).add(Ht),ft.y+=mn.dy+jn*(1.05+.3*xe+(nr>0?.12:0)),ft.x+=Kt*(Vn*(.55+xe*.85)+jn*(.2+xe*.25)),ft.z+=nr*jn*.22,Qe.set(-Math.sin(us),Math.cos(us),0),at.position.copy(ft).addScaledVector(Qe,pi*.21),at.quaternion.setFromAxisAngle(fi,us),at.rotateY(pi*Math.PI*3),at.scale.setScalar(1),at.updateMatrix(),Lt.setMatrixAt(Be,at.matrix),at.position.copy(ft).addScaledVector(Qe,pi*.07),at.quaternion.setFromUnitVectors(fi,Qe),at.updateMatrix(),C.setMatrixAt(Be,at.matrix)}),Lt.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,h.forEach((Ct,Ht)=>{Ct.rotation.y=E*(Ht===0?.8:2.8)+K*It*(Ht===0?1:6)}),y.forEach(({shroud:Ct,spinner:Ht,fan:Kt,side:xe})=>{Ct.position.y=-hs*.32,Ht.position.y=-hs*.65,Kt.rotation.z=xe*hs*.16}),e.glow.emissiveIntensity=.5+.12*Math.sin(K*2.1)+It*.35;for(let Ct=0;Ct<rt;Ct++){let Ht=Ct/(rt-1),Kt=pe(kn,.7+Ht*.06,.94+Ht*.06);lt(Ht,E,Sn,ft),lt(Math.min(1,Ht+.009),E,Sn,Rt),Ct===rt-1&&Rt.copy(ft).sub(lt(Ht-.009,E,Sn,Ke)).add(ft),N.copy(Rt).sub(ft).normalize(),Qe.copy(Wc).addScaledVector(N,-N.y).normalize(),Fi.crossVectors(N,Qe).normalize();let xe=1-Ht*.73,qe=Ke.copy(ft).addScaledVector(Qe,Kt*.48);vt(H,Ct,qe,N,xe),at.scale.y=1,at.updateMatrix(),H.setMatrixAt(Ct,at.matrix),vt(G,Ct,Ke.copy(ft).addScaledVector(N,-.075*xe),N,xe),vt(ht,Ct,Ke.copy(ft).addScaledVector(N,.075*xe).addScaledVector(Qe,-Kt*.25),N,xe,Math.PI/2),vt(st,Ct,Ke.copy(ft).addScaledVector(N,-.06*xe).addScaledVector(Qe,Kt*.24).addScaledVector(Fi,Kt*.16),N,xe,Math.PI/2),at.position.copy(ft).addScaledVector(Qe,.17*xe+Kt*.84),at.quaternion.setFromUnitVectors($n,N),at.scale.setScalar(xe),at.updateMatrix(),ut.setMatrixAt(Ct,at.matrix),Ct%10===0&&Xe(ft.clone(),at.position.clone())}for(let Ct of[H,G,ht,st,ut])Ct.instanceMatrix.needsUpdate=!0;lt(1,E,Sn,Ot.position),Ot.quaternion.setFromUnitVectors($n,N),Ot.rotateX(Math.sin(E*1.1)*.12*(1-Sn)),w.forEach(({leaf:Ct,side:Ht})=>{Ct.position.set(Ht*Sn*.45,Sn*.14,Sn*.2),Ct.rotation.z=Ht*Sn*.3}),lt(.52,E,Sn,_.position);for(let Ct of ct){let Ht=function(Kt,xe){return xe.set(Ct.side*(.66+.44*Math.sin(Kt*3.8)+Ie.jaw*.3*Kt),-.03-.28*Kt+.24*Math.sin(Kt*3.4+E*.3)*Kt*(1-Sn),1.35+Kt*1.45-.5*Kt*Kt+Kn*.3+Ie.jaw*.35*Kt)};for(let Kt=0;Kt<Ct.count;Kt++){let xe=Kt/(Ct.count-1),qe=Ht(xe,ls),Be=Ht(xe+.01,cs).sub(qe).normalize(),bn=1-xe*.48,Vn=pe(Me,.75+xe*.04,.96+xe*.04);vt(Ct.sleeve,Kt,Ke.copy(qe).add(je.set(Ct.side*Vn*.3,Vn*.2,0)),Be,bn),vt(Ct.bearing,Kt,Ke.copy(qe).addScaledVector(Be,-.065),Be,bn),vt(Ct.seal,Kt,Ke.copy(qe).addScaledVector(Be,.06).add(je.set(Ct.side*Vn*.48,Vn*.08,0)),Be,bn,Math.PI/2)}for(let Kt of[Ct.sleeve,Ct.bearing,Ct.seal])Kt.instanceMatrix.needsUpdate=!0}for(let Ct of d){let Ht=(K*.55+Ct.offset)%1,Kt=c[Ct.index];Ke.set(0,.15,-.25),je.copy(Kt.group.position),je.y-=.08,Ct.dot.position.copy(Ke.lerp(je,Ht)),Ct.dot.position.y+=Math.sin(Ht*Math.PI)*.07,Ct.dot.visible=B&&(!St||St[Ct.index])}if(T.visible=It>.01&&U<.3,T.visible){for(let Ct=0;Ct<56;Ct++){let Ht=Ct<28?-1:1,Kt=(K*.9+Ct/28)%1;at.position.set(Ht*.62+Math.sin(Ct*7.3+Kt*8)*Kt*.12,-.5-Kt*1.7,-.85-Kt*.8),at.quaternion.identity(),at.scale.setScalar((1-Kt)*(.5+It*1.2)),at.updateMatrix(),T.setMatrixAt(Ct,at.matrix)}T.instanceMatrix.needsUpdate=!0}ne.setDrawRange(0,ke*2),ne.attributes.position.needsUpdate=!0}pt(0,0);let Qt={...Bn.counts,...di.counts,wingSegments:dt*2,tailVertebrae:rt,cephalicJoints:48,pluginCartridges:8};function ue(E,U){let B=c[E];if(!B||B.labelText===U)return;B.labelText=U;let K=B.label.userData.labelCanvas,nt=K.getContext("2d");nt.fillStyle="#dde5dd",nt.fillRect(0,0,K.width,K.height),nt.fillStyle="#314d43",nt.textAlign="center",nt.textBaseline="middle";let gt=String(E+1).padStart(2,"0")+" "+U;nt.font="500 72px monospace";let It=Math.min(72,72*960/Math.max(1,nt.measureText(gt).width));nt.font=`500 ${It}px monospace`,nt.fillText(gt,512,98),B.label.material.map.needsUpdate=!0}let ee={material:"ceramic",livery:"none"},M="",F=new ie,Z=new ie,W=new ie,k=new ie,bt=new ie(1452584),Nt=new ie(12636360);function Yt(E){ee=Kc(E);let U=$c.find(B=>B.id===ee.livery);M!==U.id&&(M=U.id,sd(z,U),X.needsUpdate=!0),F.set(U.base),Z.set(U.pearl),W.set(U.accent),k.set(U.secondary),ee.material==="carbon"&&(F.lerp(bt,.87),Z.lerp(bt,.68)),ee.material==="chrome"&&(F.lerp(Nt,.75),Z.lerp(Nt,.7)),ee.material==="titanium"&&(F.multiplyScalar(.52),Z.multiplyScalar(.75))}function Vt(E=1){let U=Jc.find(nt=>nt.id===ee.material),B=1-Math.exp(-E*8),K=ee.material==="wire";e.ceramic.color.lerp(F,B),e.pearl.color.lerp(Z,B),e.orange.color.lerp(W,B),e.teal.color.lerp(k,B);for(let nt of[e.ceramic,e.pearl])nt.wireframe=K,nt.metalness=Cn(nt.metalness,U.metalness,B),nt.roughness=Cn(nt.roughness,U.roughness,B);ot.mantaCarbon.value=Cn(ot.mantaCarbon.value,ee.material==="carbon"?1:0,B),ot.mantaBrushed.value=Cn(ot.mantaBrushed.value,ee.material==="brushed"?1:0,B),Xt.forEach(({source:nt,material:gt})=>{gt.color.copy(nt.color),gt.wireframe=nt.wireframe,gt.metalness=nt.metalness,gt.roughness=nt.roughness})}return Yt(ee),Vt(1),{finish:Vt,setAppearance:Yt,disposePaint:()=>X.dispose(),materials:Object.values(e),setModuleLabel:ue,root:n,body:s,dorsal:r,belly:o,head:a,lensGlass:xt,reactorCap:Y,tailAnchor:_,wings:l,modules:c,update:pt,counts:Qt,anchors:[{object:s,offset:le(0,.65,-.25)},{object:l[8].section,offset:le(0,.18,0)},{object:c[5].group,offset:le(0,.4,0)}]}}function ud(i,t,e){let n=[],s=new Map,r=new Set(e);i.traverseVisible(d=>{d.isMesh&&!d.isInstancedMesh&&!d.userData.shaderWing&&r.has(d.material)&&!d.material.map&&n.push(d)});let o=ui.ceilPowerOfTwo(Math.max(1,n.length)),a=new Float32Array(o*16),l=new Ls(a,4,o,fn,vn);l.needsUpdate=!0;let c=`uniform sampler2D rigMatrices; uniform float rigRows; attribute float rigIndex;
    mat4 rigTransform(){float y=(rigIndex+.5)/rigRows;return mat4(texture2D(rigMatrices,vec2(.125,y)),texture2D(rigMatrices,vec2(.375,y)),texture2D(rigMatrices,vec2(.625,y)),texture2D(rigMatrices,vec2(.875,y)));}`,h=d=>{d.uniforms.rigMatrices={value:l},d.uniforms.rigRows={value:o},d.vertexShader=c+`
`+d.vertexShader.replace("#include <begin_vertex>","vec3 transformed=(rigTransform()*vec4(position,1.0)).xyz;").replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        mat3 rn=mat3(rigTransform());
        rn[0]/=max(dot(rn[0],rn[0]),.000001);rn[1]/=max(dot(rn[1],rn[1]),.000001);rn[2]/=max(dot(rn[2],rn[2]),.000001);
        objectNormal=rn*objectNormal;`)},u=[];n.forEach((d,f)=>{let g=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();g.setAttribute("rigIndex",new fe(new Float32Array(g.attributes.position.count).fill(f),1)),s.has(d.material)||s.set(d.material,[]),s.get(d.material).push(g),d.visible=!1});for(let[d,f]of s){let g=d.clone();g.onBeforeCompile=h,g.customProgramCacheKey=()=>"tide-rigid-v1";let x=er(f,!1);f.forEach(w=>w.dispose());let m=new be(x,g);m.frustumCulled=!1,m.castShadow=!0,m.receiveShadow=!0,t.add(m);let p=new Ai({depthPacking:Zs});p.onBeforeCompile=h,p.customProgramCacheKey=()=>"tide-rigid-depth-v1",m.customDepthMaterial=p,u.push({source:d,material:g})}return{update(){i.updateMatrixWorld(!0),n.forEach((d,f)=>{let g=!0;for(let x=d.parent;x;x=x.parent)if(!x.visible){g=!1;break}g?d.matrixWorld.toArray(a,f*16):a.fill(0,f*16,f*16+16)}),l.needsUpdate=!0,u.forEach(({source:d,material:f})=>{f.color.copy(d.color),f.emissive.copy(d.emissive),f.emissiveIntensity=d.emissiveIntensity,f.wireframe=d.wireframe,f.roughness=d.roughness,f.metalness=d.metalness})},dispose(){l.dispose()},count:n.length}}var ml=class{constructor(t=4200){this.delay=t,this.held=!1,this.until=0,this.pending="hero",this.due=!0}begin(t){this.held=!0,this.until=t+this.delay,this.due=!0}end(t){this.held=!1,this.until=t+this.delay,this.due=!0}request(t){this.pending=t,this.due=!0}take(t){return this.held||t<this.until||!this.due?null:(this.due=!1,this.pending)}reset(t="hero"){this.held=!1,this.until=0,this.request(t)}},pl=["wingL","wingR","podL","podR","armor","drive","optic","core","tail"],dd={full:{},pods:{wingL:0,wingR:0,podL:1,podR:1,armor:0,drive:0,optic:0,core:0,tail:0},port:{wingL:1,wingR:0,podL:1,podR:0,armor:.55,drive:0,optic:0,core:0,tail:0},starboard:{wingL:0,wingR:1,podL:0,podR:1,armor:.55,drive:0,optic:0,core:0,tail:0},core:{wingL:.46,wingR:.46,podL:.55,podR:.55,armor:1,drive:.35,optic:0,core:1,tail:0},optic:{wingL:0,wingR:0,podL:0,podR:0,armor:0,drive:0,optic:1,core:0,tail:0},tail:{wingL:0,wingR:0,podL:0,podR:0,armor:0,drive:0,optic:0,core:0,tail:1},drive:{wingL:.7,wingR:.7,podL:.65,podR:.65,armor:.65,drive:1,optic:0,core:.45,tail:0}},gl=class{constructor(){this.tracks=Object.fromEntries(pl.map(t=>[t,new ul])),this.values=Object.fromEntries(pl.map(t=>[t,0])),this.profile="full"}to(t,e="full",n=!1){this.profile=e;let s=dd[e]||dd.full;for(let r of pl)this.tracks[r][n?"snap":"to"](t*(s[r]??1))}step(t){for(let e of pl)this.values[e]=this.tracks[e].step(t);return Math.max(...Object.values(this.values))}get target(){return Math.max(...Object.values(this.tracks).map(t=>t.target))}get active(){return Object.values(this.tracks).some(t=>t.active)}};function fd(i,t){let e=new URLSearchParams(location.search).has("manta-metrics"),n=[],s=[],r=0;return(o,a,l,c=()=>({}))=>{if(!e||a<=0||a>500||(n.push(a),s.push(l),o-r<3e3))return;let h=[...n].sort((d,f)=>d-f),u=n.reduce((d,f)=>d+f,0)/n.length;i.dataset.mantaMetrics=JSON.stringify({...c(),frames:n.length,fps:+(1e3/u).toFixed(1),p95ms:+h[Math.floor(h.length*.95)].toFixed(1),cpuMs:+(s.reduce((d,f)=>d+f,0)/s.length).toFixed(2),calls:t.info.render.calls,triangles:t.info.render.triangles,dpr:t.getPixelRatio()}),n=[],s=[],r=o}}var _l={hero:{position:[7,8.7,12.9],look:[.7,-.15,-1.65]},sweep:{position:[9,6.5,13],look:[0,-.1,-1.3]},port:{position:[-8,8,14],look:[0,0,-1]},starboard:{position:[8,8,14],look:[0,0,-1]},front:{position:[.5,7,15.5],look:[0,.5,-.7]},core:{position:[4.2,7.5,9.2],look:[0,.7,-.25]},plugins:{position:[3.3,10.8,11.7],look:[0,0,-.7]},bus:{position:[3.5,14.6,6.4],look:[0,-.2,-2.8]},drive:{position:[7,3.9,-11.8],look:[0,-.3,-1.6]},optic:{position:[4.4,4.7,10.4],look:[0,.35,1.8]},tail:{position:[6.8,5.9,-10.2],look:[0,-.1,-5]},rear:{position:[-8,8.5,-14],look:[0,.1,-1.8]},underside:{position:[8,-1.5,13],look:[0,.15,-1]}},I_={cruise:"plugins",glide:"base",bankLeft:"plugins",bankRight:"plugins",surge:"tasks",ripple:"runtime",fold:"plugins",brake:"tasks",hover:"base",scan:"connection",gyro:"runtime",tail:"runtime",cool:"resources",dive:"tasks",climb:"base",scull:"plugins",fan:"plugins",weave:"base",breathe:"resources",precision:"connection",counter:"runtime"};function sM(i,t,{onPhase:e,onSelect:n,onError:s,onHover:r,onAppearance:o,presentation:a=!1}){let l=!1,c=!0,h=0,u=0,d=0,f=0,g=0,x=-1,m=!1,p=!0,w=matchMedia("(prefers-reduced-motion: reduce)").matches,b="hero",y={plugins:[],running:0,runtimes:0},R=!0,A=0,I=0,L=0,S=0,v=0,D="cruise",O=1,J=1,j=-1,q=!1,Q=[],mt=[],Y=[],$=new Yi,et=new rl({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"}),xt=Math.min(devicePixelRatio,1.5),Et=xt;et.setPixelRatio(Et),et.setClearColor(15726321,0),et.toneMapping=ga,et.toneMappingExposure=1.1,et.shadowMap.enabled=!0,et.shadowMap.type=aa;let Pt=new js(et),Jt=new cl,te=Pt.fromScene(Jt,.04);$.environment=te.texture,$.environmentIntensity=.8,Jt.dispose(),Pt.dispose(),$.fog=new Tr(15726321,35,85),$.add(new Hr(16056313,9808282,1.35));let tt=new Hs(16775402,3);tt.position.set(-4,8,5),tt.castShadow=!0,tt.shadow.mapSize.set(768,768),Object.assign(tt.shadow.camera,{left:-10,right:10,top:10,bottom:-10}),tt.shadow.bias=-8e-4,tt.shadow.normalBias=.04,$.add(tt);let ct=new Hs(12970462,1.8);ct.position.set(5,3,-4),$.add(ct);let Mt=hd($,Array(8).fill("EMPTY")),_t=ud(Mt.root,$,Mt.materials),dt=new Je(36,1,.1,160),wt=new ll(dt,i);wt.enableDamping=!0,wt.dampingFactor=.08,wt.enablePan=!1,wt.minDistance=5,wt.maxDistance=65,wt.minPolarAngle=.2,wt.maxPolarAngle=Math.PI*.83,wt.rotateSpeed=.65,wt.zoomSpeed=.7;let Lt=new gl,C=new ml,rt=["hero","port","bus","starboard","rear","front"],V=Object.fromEntries(Object.entries(dl).map(([pt,Qt])=>[pt,new Zn(Qt,3.2)])),H={...dl},G={active:!1,radius:new Zn(20,2.7),theta:new Zn(0,2.7),phi:new Zn(1,2.7),look:[new Zn(0,2.7),new Zn(0,2.7),new Zn(0,2.7)]},ht=[G.radius,G.theta,G.phi,...G.look],st=new Pi,ut=new P,Ot=new P,Wt=new P;function T(pt,Qt,ue=!1){G.active||(st.setFromVector3(ut.copy(dt.position).sub(wt.target)),G.radius.snap(st.radius),G.theta.snap(st.theta),G.phi.snap(st.phi),G.look.forEach((ee,M)=>ee.snap(wt.target.getComponent(M)))),st.setFromVector3(ut.copy(pt).sub(Qt)),G.radius.target=st.radius,G.phi.target=st.phi,G.theta.target=G.theta.value+Math.atan2(Math.sin(st.theta-G.theta.value),Math.cos(st.theta-G.theta.value)),G.look.forEach((ee,M)=>ee.target=Qt.getComponent(M)),G.active=!0,(ue||w)&&(dt.position.copy(pt),wt.target.copy(Qt),G.active=!1,wt.update())}function _(pt,Qt=!1){b=pt;let ue=_l[pt]||_l.hero,ee=O<650?1.4:O<1080?1.08:1.02,M=Lt.target>0&&["hero","bus","plugins"].includes(pt)?1.32:1,F=pt==="hero"&&Lt.target===0?.84:1;Ot.fromArray(ue.position).multiplyScalar(ee*M*F*(a?pt==="bus"?1.02:.9:1)),Wt.fromArray(ue.look),pt==="core"&&(Ot.y+=Lt.target*1.15,Wt.y+=Lt.target*1.15),pt==="optic"&&(Ot.z+=Lt.target,Wt.z+=Lt.target),Ot.applyAxisAngle(Ee.DEFAULT_UP,Mt.root.rotation.y),Wt.applyAxisAngle(Ee.DEFAULT_UP,Mt.root.rotation.y),["core","tail","optic"].includes(pt)&&(Ot.y+=Mt.root.position.y,Wt.y+=Mt.root.position.y),T(Ot,Wt,Qt),at()}function z(pt,Qt="full"){Lt.to(pt,Qt,w),at()}function X(pt){C.request(pt),S=0}function ot(pt){D=pt;let Qt=od(pt);for(let ue in V)V[ue].target=Qt[ue],w&&V[ue].snap(Qt[ue])}function it(pt=!1){let Qt=fl.findLastIndex(M=>g>=M.at);if(Qt===x&&!pt)return;x=Qt;let ue=fl[Qt],ee=Hc[ue.action];ot(ue.action),p&&z(ue.goal,ue.profile),X(p?ue.view||ee.view:rt[v++%rt.length]),e({title:ue.title||ee.title,exploded:Lt.target>0,automatic:p,chapter:Qt+1,total:fl.length,context:Lt.target>0?"structure":I_[ue.action]||"base"})}function qt(){if(l)return;let pt=t.getBoundingClientRect();!pt.width||!pt.height||(O=pt.width,J=pt.height,et.setSize(O,J,!1),dt.aspect=O/J,dt.fov=O<650?44:36,dt.updateProjectionMatrix(),$.fog.near=O<650?60:35,$.fog.far=O<650?130:85,_(b),at())}function At(pt){G.active&&(st.set(G.radius.step(pt),G.phi.step(pt),G.theta.step(pt)),G.look.forEach((Qt,ue)=>wt.target.setComponent(ue,Qt.step(pt))),dt.position.copy(wt.target).add(ut.setFromSpherical(st)),G.active=ht.some(Qt=>Qt.active))}let Gt=fd(i,et),Xt=new URLSearchParams(location.search).has("manta-metrics"),yt=0,Dt=0,jt=5;function Zt(pt){if(h=0,l||document.hidden||!c)return;let Qt=performance.now(),ue=u?pt-u:0,ee=u?Math.min(ue/1e3,.05):1/60;u=pt;let M=!m&&!w,F=m?0:ee;if(M){d+=ee,f+=ee*H.rate,a||(g=(g+ee)%rd,it(),S+=ee,S>8&&X(rt[v++%rt.length]));let W=C.take(pt);W&&_(W)}A=Lt.step(F);for(let W in V)H[W]=V[W].step(F);Mt.root.rotation.y=-.18+(Math.sin(d*.045)*.12+H.yaw*Math.sin(d*.65)*.32)*(1-A),Mt.root.position.y=.55+(O<650?.7:0)+(w?0:(Math.sin(f*.7)*.09+(H.bob||0)*Math.sin(d*.9)*.42)*(1-A*.9)),Mt.update(f,A,{flowing:R&&(y.running>0||y.runtimes>0),flowTime:d,scan:H.scan,thrust:H.thrust,guides:A>.02,activeModules:Q,motion:H,parts:Lt.values,selected:j}),Mt.modules.forEach((W,k)=>{let bt=Y[k];W.group.visible=!!bt,bt&&(W.statusMaterial.emissiveIntensity=Q[k]?.65+Math.sin(d*4+k)*.25:k===j?.3:0)}),Mt.finish(w?1:ee),_t.update(),At(ee),Xt&&(i.dataset.mantaView=b,i.dataset.mantaSettled=String(!G.active),i.dataset.mantaAssembly=A.toFixed(2)),wt.dampingFactor=1-Math.exp(-ee*6);let Z=wt.update();if(et.render($,dt),Gt(pt,ue,performance.now()-Qt,()=>({sequence:+g.toFixed(2),action:D,profile:Lt.profile,parts:{...Lt.values},cameraOwner:C.held||pt<C.until?"pointer":"automatic",cameraHeld:C.held,cameraReleaseMs:Math.max(0,Math.round(C.until-pt)),camera:b,cameraPosition:dt.position.toArray().map(W=>+W.toFixed(3))})),pt-I>180&&(e({progress:Math.round(A*100),settled:!Lt.active}),I=pt),M&&ue>0&&ue<100&&(yt+=ue,Dt++,jt-=ee,yt>3e3&&jt<=0)){let W=yt/Dt,k=Et;W>23?k=Math.max(.8,Et-.15):W<17&&(k=Math.min(xt,Et+.1)),Math.abs(k-Et)>.01&&(Et=k,et.setPixelRatio(Et),et.setSize(O,J,!1),jt=8),yt=0,Dt=0}(M||G.active||Z||pt<L||!m&&(Lt.active||Object.values(V).some(W=>W.active)))&&at()}function at(){!h&&!l&&!document.hidden&&c&&(h=requestAnimationFrame(Zt))}let re=()=>{G.active=!1,C.begin(performance.now()),q=!0,at()},N=()=>{!q&&!C.held||(q=!1,C.end(performance.now()))};wt.addEventListener("start",re),wt.addEventListener("end",N),wt.addEventListener("change",at);let ft=new qr,Rt=new Tt,zt=null,vt=0;function lt(pt){let Qt=i.getBoundingClientRect();return Rt.set((pt.clientX-Qt.left)/O*2-1,-(pt.clientY-Qt.top)/J*2+1),ft.setFromCamera(Rt,dt),ft.intersectObjects(mt,!0)[0]}function kt(pt){if(j===pt)return;j=pt,i.style.cursor=pt>=0?"pointer":"";let Qt=Y[pt];r?.(Qt?{name:Qt.name}:null),at()}let ne=pt=>{zt=pt.button===0?[pt.clientX,pt.clientY,Y[lt(pt)?.object.userData.pod]?.id]:null},Se=pt=>{let Qt=zt;if(zt=null,pt.button!==0||!Qt||Math.hypot(pt.clientX-Qt[0],pt.clientY-Qt[1])>5)return;let ue=Qt[2]??Y[lt(pt)?.object.userData.pod]?.id;ue&&Y.some(ee=>ee?.id===ue)&&n(ue)},me=pt=>{if(q&&pt.buttons===0&&N(),!(pt.pointerType==="touch"||q)){if(performance.now()-vt>70){let Qt=lt(pt);kt(Qt?.object.userData.pod??-1),vt=performance.now()}at()}},ke=()=>kt(-1),Xe=pt=>{lt(pt)||(C.end(performance.now()),_(rt[v++%rt.length]))};function Ke(pt){m=pt,u=0,e({paused:pt}),at()}function je(){p=!1,m=!1,z(Lt.target>0?0:1,"full"),X("hero"),e({title:Lt.target?"全结构拆解":"分级对位装配",exploded:Lt.target>0,automatic:!1,paused:!1,context:"structure"}),at()}function $n(){p=!0,g=0,x=-1,m=!1,C.reset(),it(),e({paused:!1}),at()}function ls(pt,Qt=!1){Mt.setAppearance(pt),(Qt||w)&&Mt.finish(1),L=performance.now()+1400,at()}let cs=pt=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"," ","e","E","m","M","v","V","Escape"].includes(pt.key)){if(pt.preventDefault(),pt.key===" "){Ke(!m);return}if(pt.key.toLowerCase()==="e"){je();return}if(pt.key.toLowerCase()==="m"){o?.();return}if(pt.key.toLowerCase()==="v"){C.end(performance.now()),_(rt[v++%rt.length]);return}if(pt.key==="Escape"){$n();return}if(re(),N(),pt.key==="Home"){_("hero");return}ut.copy(dt.position).sub(wt.target),pt.key==="ArrowLeft"||pt.key==="ArrowRight"?ut.applyAxisAngle(Ee.DEFAULT_UP,pt.key==="ArrowLeft"?-.3:.3):ut.setLength(ui.clamp(ut.length()*(pt.key==="ArrowUp"?.88:1.14),5,65)),Ot.copy(wt.target).add(ut),T(Ot,wt.target),at()}},Mn=()=>{u=0,yt=0,Dt=0,document.hidden?(cancelAnimationFrame(h),h=0):at()},Ie=pt=>{pt.preventDefault(),m=!0,cancelAnimationFrame(h),h=0,s("三维画面暂时中断，状态和管理功能仍可使用。")},Bn=matchMedia("(prefers-reduced-motion: reduce)"),di=pt=>{if(w=pt.matches,w){Lt.to(Lt.target,Lt.profile,!0);for(let Qt of Object.values(V))Qt.snap(Qt.target);_("hero",!0)}u=0,at()},Qe={pointerdown:ne,pointerup:Se,pointermove:me,pointerleave:ke,pointercancel:()=>{zt=null,N(),ke()},dblclick:Xe,keydown:cs,webglcontextlost:Ie};for(let[pt,Qt]of Object.entries(Qe))i.addEventListener(pt,Qt);window.addEventListener("pointerup",N),window.addEventListener("pointercancel",N),window.addEventListener("blur",N),document.addEventListener("visibilitychange",Mn),Bn.addEventListener("change",di);let Fi=new ResizeObserver(qt);Fi.observe(t);let fi=new IntersectionObserver(([pt])=>{c=pt.isIntersecting,u=0,c?at():(cancelAnimationFrame(h),h=0)},{threshold:.01});return fi.observe(t),Mt.root.rotation.y=-.18,Mt.root.position.y=.55,dt.position.fromArray(_l.hero.position),wt.target.fromArray(_l.hero.look),qt(),_("hero",!0),it(),at(),{update(pt,Qt,ue,ee){if(y=pt,R=Qt,Y=ee||pt.plugins.slice(0,8),Q=Y.map(F=>R&&F?.status==="running"),mt=Mt.modules.filter((F,Z)=>Y[Z]).map(F=>F.group),Mt.modules.forEach((F,Z)=>{let W=Y[Z];F.group.visible=!!W,F.statusMaterial.color.set(R&&W?.color||"#7b8d87"),F.statusMaterial.emissive.copy(F.statusMaterial.color),Mt.setModuleLabel(Z,W?.name||"EMPTY")}),j>=0){let F=j;j=-1,kt(F)}let M=ue==="dark";$.fog.color.set(M?1057567:15726321),$.environmentIntensity=M?.58:.8,et.toneMappingExposure=M?.92:1.1,at()},pause:Ke,explode:je,reset:$n,setAppearance:ls,present(pt,Qt="full",ue="hero"){p=!1,m=!1,ot("glide"),z(pt,Qt),C.reset(ue),e({paused:!1,exploded:pt>0}),at()},camera(pt,Qt=!1){C.reset(pt),_(pt,Qt)},dispose(){if(l)return;l=!0,cancelAnimationFrame(h),Fi.disconnect(),fi.disconnect(),Bn.removeEventListener("change",di),document.removeEventListener("visibilitychange",Mn),window.removeEventListener("pointerup",N),window.removeEventListener("pointercancel",N),window.removeEventListener("blur",N);for(let[ee,M]of Object.entries(Qe))i.removeEventListener(ee,M);wt.dispose(),_t.dispose(),Mt.disposePaint();let pt=new Set,Qt=new Set,ue=new Set;$.traverse(ee=>{if(ee.geometry&&pt.add(ee.geometry),ee.material)for(let M of Array.isArray(ee.material)?ee.material:[ee.material])Qt.add(M);ee.customDepthMaterial&&Qt.add(ee.customDepthMaterial)});for(let ee of Qt){for(let M of Object.values(ee))M?.isTexture&&ue.add(M);ee.dispose()}for(let ee of pt)ee.dispose();for(let ee of ue)ee.dispose();te.dispose(),et.dispose(),et.forceContextLoss()}}}export{sM as mountManta};
/*! For license information please see scene-B6T6VCDK.js.LEGAL.txt */
