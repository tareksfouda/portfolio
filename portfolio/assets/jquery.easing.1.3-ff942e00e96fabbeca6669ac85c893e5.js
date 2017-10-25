/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,i,o){return jQuery.easing[jQuery.easing.def](t,e,n,i,o)},easeInQuad:function(t,e,n,i,o){return i*(e/=o)*e+n},easeOutQuad:function(t,e,n,i,o){return-i*(e/=o)*(e-2)+n},easeInOutQuad:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,o){return i*(e/=o)*e*e+n},easeOutCubic:function(t,e,n,i,o){return i*((e=e/o-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,o){return i*(e/=o)*e*e*e+n},easeOutQuart:function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,o){return i*(e/=o)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,o){return i*((e=e/o-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,o){return-i*Math.cos(e/o*(Math.PI/2))+i+n},easeOutSine:function(t,e,n,i,o){return i*Math.sin(e/o*(Math.PI/2))+n},easeInOutSine:function(t,e,n,i,o){return-i/2*(Math.cos(Math.PI*e/o)-1)+n},easeInExpo:function(t,e,n,i,o){return 0==e?n:i*Math.pow(2,10*(e/o-1))+n},easeOutExpo:function(t,e,n,i,o){return e==o?n+i:i*(-Math.pow(2,-10*e/o)+1)+n},easeInOutExpo:function(t,e,n,i,o){return 0==e?n:e==o?n+i:(e/=o/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,i,o){return-i*(Math.sqrt(1-(e/=o)*e)-1)+n},easeOutCirc:function(t,e,n,i,o){return i*Math.sqrt(1-(e=e/o-1)*e)+n},easeInOutCirc:function(t,e,n,i,o){return(e/=o/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+n:i/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,i,o){var s=1.70158,a=0,r=i;if(0==e)return n;if(1==(e/=o))return n+i;if(a||(a=.3*o),r<Math.abs(i)){r=i;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(i/r);return-(r*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-s)*Math.PI/a))+n},easeOutElastic:function(t,e,n,i,o){var s=1.70158,a=0,r=i;if(0==e)return n;if(1==(e/=o))return n+i;if(a||(a=.3*o),r<Math.abs(i)){r=i;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(i/r);return r*Math.pow(2,-10*e)*Math.sin(2*(e*o-s)*Math.PI/a)+i+n},easeInOutElastic:function(t,e,n,i,o){var s=1.70158,a=0,r=i;if(0==e)return n;if(2==(e/=o/2))return n+i;if(a||(a=.3*o*1.5),r<Math.abs(i)){r=i;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(i/r);return 1>e?-.5*r*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-s)*Math.PI/a)+n:r*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*o-s)*Math.PI/a)*.5+i+n},easeInBack:function(t,e,n,i,o,s){return void 0==s&&(s=1.70158),i*(e/=o)*e*((s+1)*e-s)+n},easeOutBack:function(t,e,n,i,o,s){return void 0==s&&(s=1.70158),i*((e=e/o-1)*e*((s+1)*e+s)+1)+n},easeInOutBack:function(t,e,n,i,o,s){return void 0==s&&(s=1.70158),(e/=o/2)<1?i/2*e*e*(((s*=1.525)+1)*e-s)+n:i/2*((e-=2)*e*(((s*=1.525)+1)*e+s)+2)+n},easeInBounce:function(t,e,n,i,o){return i-jQuery.easing.easeOutBounce(t,o-e,0,i,o)+n},easeOutBounce:function(t,e,n,i,o){return(e/=o)<1/2.75?7.5625*i*e*e+n:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,i,o){return o/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,i,o)+n:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,i,o)+.5*i+n}});