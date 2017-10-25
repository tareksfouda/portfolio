(function(){var t,e,n,i,o,a,s,r,l,c,h,d,p,u,f,g,m,v,y={}.hasOwnProperty,w=function(t,e){function n(){this.constructor=t}for(var i in e)y.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};!function(){var t,e,n,i,o,a,s;for(o=["ms","moz","webkit","o"],a=0,s=o.length;s>a&&(i=o[a],!window.requestAnimationFrame);a++)window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"];return t=null,n=0,e={},requestAnimationFrame?window.cancelAnimationFrame?void 0:(t=window.requestAnimationFrame,window.requestAnimationFrame=function(i,o){var a;return a=++n,t(function(){return e[a]?void 0:i()},o),a},window.cancelAnimationFrame=function(t){return e[t]=!0}):(window.requestAnimationFrame=function(t){var e,n,i,o;return e=(new Date).getTime(),o=Math.max(0,16-(e-i)),n=window.setTimeout(function(){return t(e+o)},o),i=e+o,n},window.cancelAnimationFrame=function(t){return clearTimeout(t)})}(),String.prototype.hashCode=function(){var t,e,n,i,o;if(e=0,0===this.length)return e;for(n=i=0,o=this.length;o>=0?o>i:i>o;n=o>=0?++i:--i)t=this.charCodeAt(n),e=(e<<5)-e+t,e&=e;return e},f=function(t){var e,n;for(e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),t-=3600*e+60*n,t+="",n+="";n.length<2;)n="0"+n;for(;t.length<2;)t="0"+t;return e=e?e+":":"",e+n+":"+t},p=function(t){return h(t.toFixed(0))},g=function(t,e){var n,i;for(n in e)y.call(e,n)&&(i=e[n],t[n]=i);return t},u=function(t,e){var n,i,o;i={};for(n in t)y.call(t,n)&&(o=t[n],i[n]=o);for(n in e)y.call(e,n)&&(o=e[n],i[n]=o);return i},h=function(t){var e,n,i,o;for(t+="",n=t.split("."),i=n[0],o="",n.length>1&&(o="."+n[1]),e=/(\d+)(\d{3})/;e.test(i);)i=i.replace(e,"$1,$2");return i+o},d=function(t){return"#"===t.charAt(0)?t.substring(1,7):t},c=function(){function t(t,e){null==t&&(t=!0),this.clear=null!=e?e:!0,t&&AnimationUpdater.add(this)}return t.prototype.animationSpeed=32,t.prototype.update=function(t){var e;return null==t&&(t=!1),t||this.displayedValue!==this.value?(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),e=this.value-this.displayedValue,this.displayedValue=Math.abs(e/this.animationSpeed)<=.001?this.value:this.displayedValue+e/this.animationSpeed,this.render(),!0):!1},t}(),o=function(t){function e(){return m=e.__super__.constructor.apply(this,arguments)}return w(e,t),e.prototype.displayScale=1,e.prototype.setTextField=function(t){return this.textField=t instanceof l?t:new l(t)},e.prototype.setMinValue=function(t,e){var n,i,o,a,s;if(this.minValue=t,null==e&&(e=!0),e){for(this.displayedValue=this.minValue,a=this.gp||[],s=[],i=0,o=a.length;o>i;i++)n=a[i],s.push(n.displayedValue=this.minValue);return s}},e.prototype.setOptions=function(t){return null==t&&(t=null),this.options=u(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),this.options.angle>.5&&(this.gauge.options.angle=.5),this.configDisplayScale(),this},e.prototype.configDisplayScale=function(){var t,e,n,i,o;return i=this.displayScale,this.options.highDpiSupport===!1?delete this.displayScale:(e=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=e/t),this.displayScale!==i&&(o=this.canvas.G__width||this.canvas.width,n=this.canvas.G__height||this.canvas.height,this.canvas.width=o*this.displayScale,this.canvas.height=n*this.displayScale,this.canvas.style.width=""+o+"px",this.canvas.style.height=""+n+"px",this.canvas.G__width=o,this.canvas.G__height=n),this},e}(c),l=function(){function t(t){this.el=t}return t.prototype.render=function(t){return this.el.innerHTML=p(t.displayedValue)},t}(),t=function(t){function e(t,e){this.elem=t,this.text=null!=e?e:!1,this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return w(e,t),e.prototype.displayedValue=0,e.prototype.value=0,e.prototype.setVal=function(t){return this.value=1*t},e.prototype.render=function(){var t;return t=this.text?f(this.displayedValue.toFixed(0)):h(p(this.displayedValue)),this.elem.innerHTML=t},e}(c),e={create:function(e){var n,i,o,a;for(i=[],o=0,a=e.length;a>o;o++)n=e[o],i.push(new t(n));return i}},r=function(t){function e(t){this.gauge=t,this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,e.__super__.constructor.call(this,!1,!1),this.setOptions()}return w(e,t),e.prototype.displayedValue=0,e.prototype.value=0,e.prototype.options={strokeWidth:.035,length:.1,color:"#000000"},e.prototype.setOptions=function(t){return null==t&&(t=null),g(this.options,t),this.length=this.canvas.height*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle},e.prototype.render=function(){var t,e,n,i,o,a,s,r,l;return t=this.gauge.getAngle.call(this,this.displayedValue),e=this.canvas.width/2,n=.9*this.canvas.height,r=Math.round(e+this.length*Math.cos(t)),l=Math.round(n+this.length*Math.sin(t)),a=Math.round(e+this.strokeWidth*Math.cos(t-Math.PI/2)),s=Math.round(n+this.strokeWidth*Math.sin(t-Math.PI/2)),i=Math.round(e+this.strokeWidth*Math.cos(t+Math.PI/2)),o=Math.round(n+this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.fillStyle=this.options.color,this.ctx.beginPath(),this.ctx.arc(e,n,this.strokeWidth,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(a,s),this.ctx.lineTo(r,l),this.ctx.lineTo(i,o),this.ctx.fill()},e}(c),n=function(){function t(t){this.elem=t}return t.prototype.updateValues=function(t){return this.value=t[0],this.maxValue=t[1],this.avgValue=t[2],this.render()},t.prototype.render=function(){var t,e;return this.textField&&this.textField.text(p(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),e=this.value/this.maxValue*100,t=this.avgValue/this.maxValue*100,$(".bar-value",this.elem).css({width:e+"%"}),$(".typical-value",this.elem).css({width:t+"%"})},t}(),s=function(t){function e(t){this.canvas=t,e.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.gp=[new r(this)],this.setOptions(),this.render()}return w(e,t),e.prototype.elem=null,e.prototype.value=[20],e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.displayedAngle=0,e.prototype.displayedValue=0,e.prototype.lineWidth=40,e.prototype.paddingBottom=.1,e.prototype.percentColors=null,e.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035},angle:.15,lineWidth:.44,fontSize:40,limitMax:!1},e.prototype.setOptions=function(t){var n,i,o,a;for(null==t&&(t=null),e.__super__.setOptions.call(this,t),this.configPercentColors(),this.lineWidth=this.canvas.height*(1-this.paddingBottom)*this.options.lineWidth,this.radius=this.canvas.height*(1-this.paddingBottom)-this.lineWidth,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.render(),a=this.gp,i=0,o=a.length;o>i;i++)n=a[i],n.setOptions(this.options.pointer),n.render();return this},e.prototype.configPercentColors=function(){var t,e,n,i,o,a,s;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,s=[],n=o=0,a=this.options.percentColors.length-1;a>=0?a>=o:o>=a;n=a>=0?++o:--o)i=parseInt(d(this.options.percentColors[n][1]).substring(0,2),16),e=parseInt(d(this.options.percentColors[n][1]).substring(2,4),16),t=parseInt(d(this.options.percentColors[n][1]).substring(4,6),16),s.push(this.percentColors[n]={pct:this.options.percentColors[n][0],color:{r:i,g:e,b:t}});return s}},e.prototype.set=function(t){var e,n,i,o,a,s,l;if(t instanceof Array||(t=[t]),t.length>this.gp.length)for(e=o=0,l=t.length-this.gp.length;l>=0?l>o:o>l;e=l>=0?++o:--o)this.gp.push(new r(this));for(e=0,n=!1,a=0,s=t.length;s>a;a++)i=t[a],i>this.maxValue&&(this.maxValue=1.1*this.value,n=!0),this.gp[e].value=i,this.gp[e++].setOptions({maxValue:this.maxValue,angle:this.options.angle});return this.value=t[t.length-1],n&&this.options.limitMax?void 0:AnimationUpdater.run()},e.prototype.getAngle=function(t){return(1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},e.prototype.getColorForPercentage=function(t,e){var n,i,o,a,s,r,l;if(0===t)n=this.percentColors[0].color;else for(n=this.percentColors[this.percentColors.length-1].color,o=r=0,l=this.percentColors.length-1;l>=0?l>=r:r>=l;o=l>=0?++r:--r)if(t<=this.percentColors[o].pct){e===!0?(s=this.percentColors[o-1],i=this.percentColors[o],a=(t-s.pct)/(i.pct-s.pct),n={r:Math.floor(s.color.r*(1-a)+i.color.r*a),g:Math.floor(s.color.g*(1-a)+i.color.g*a),b:Math.floor(s.color.b*(1-a)+i.color.b*a)}):n=this.percentColors[o].color;break}return"rgb("+[n.r,n.g,n.b].join(",")+")"},e.prototype.getColorForValue=function(t,e){var n;return n=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(n,e)},e.prototype.render=function(){var t,e,n,i,o,a,s,r,l;for(o=this.canvas.width/2,i=this.canvas.height*(1-this.paddingBottom),t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",void 0!==this.options.customFillStyle?e=this.options.customFillStyle(this):null!==this.percentColors?e=this.getColorForValue(this.displayedValue,!0):void 0!==this.options.colorStop?(e=0===this.options.gradientType?this.ctx.createRadialGradient(o,i,9,o,i,70):this.ctx.createLinearGradient(0,0,o,0),e.addColorStop(0,this.options.colorStart),e.addColorStop(1,this.options.colorStop)):e=this.options.colorStart,this.ctx.strokeStyle=e,this.ctx.beginPath(),this.ctx.arc(o,i,this.radius,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(o,i,this.radius,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke(),r=this.gp,l=[],a=0,s=r.length;s>a;a++)n=r[a],l.push(n.update(!0));return l},e}(o),i=function(t){function e(t){this.canvas=t,e.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return w(e,t),e.prototype.lineWidth=15,e.prototype.displayedValue=0,e.prototype.value=33,e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35},e.prototype.getAngle=function(t){return(1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},e.prototype.setOptions=function(t){return null==t&&(t=null),e.__super__.setOptions.call(this,t),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.canvas.height/2-this.lineWidth/2,this},e.prototype.set=function(t){return this.value=t,this.value>this.maxValue&&(this.maxValue=1.1*this.value),AnimationUpdater.run()},e.prototype.render=function(){var t,e,n,i,o,a;return t=this.getAngle(this.displayedValue),a=this.canvas.width/2,n=this.canvas.height/2,this.textField&&this.textField.render(this),e=this.ctx.createRadialGradient(a,n,39,a,n,70),e.addColorStop(0,this.options.colorStart),e.addColorStop(1,this.options.colorStop),i=this.radius-this.lineWidth/2,o=this.radius+this.lineWidth/2,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(a,n,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=e,this.ctx.beginPath(),this.ctx.arc(a,n,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},e}(o),a=function(t){function e(){return v=e.__super__.constructor.apply(this,arguments)}return w(e,t),e.prototype.strokeGradient=function(t,e,n,i){var o;return o=this.ctx.createRadialGradient(t,e,n,t,e,i),o.addColorStop(0,this.options.shadowColor),o.addColorStop(.12,this.options._orgStrokeColor),o.addColorStop(.88,this.options._orgStrokeColor),o.addColorStop(1,this.options.shadowColor),o},e.prototype.setOptions=function(t){var n,i,o,a;return null==t&&(t=null),e.__super__.setOptions.call(this,t),a=this.canvas.width/2,n=this.canvas.height/2,i=this.radius-this.lineWidth/2,o=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(a,n,i,o),this},e}(i),window.AnimationUpdater={elements:[],animId:null,addAll:function(t){var e,n,i,o;for(o=[],n=0,i=t.length;i>n;n++)e=t[n],o.push(AnimationUpdater.elements.push(e));return o},add:function(t){return AnimationUpdater.elements.push(t)},run:function(){var t,e,n,i,o;for(t=!0,o=AnimationUpdater.elements,n=0,i=o.length;i>n;n++)e=o[n],e.update()&&(t=!1);return t?cancelAnimationFrame(AnimationUpdater.animId):AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run)}},window.Gauge=s,window.Donut=a,window.BaseDonut=i,window.TextRenderer=l}).call(this);