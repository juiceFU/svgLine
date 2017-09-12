var Svg = (function(){
	var _Svg = function(dom,line){
		this.name = "果果的划线程序";
		var strArray = [];

		var changeNum = function(WorH,num){

			var baseW = 750;
			var baseH = 1290;
			var baseDom = $('body');
			num = parseInt(num);

			if(WorH == 'w'){
				return (num/baseW) * baseDom.width();
			}else{
				return (num/baseH) * baseDom.height();
			}
		}

		var Span =function(){

			domX = changeNum('w',arguments[0][0]);
			domY = changeNum('y',arguments[0][1]);	

			strArray.push('<span class="checks" style="left:'+(domX/18)+'rem;top:'+(domY/12)+'rem">');


			strArray.push('<input name="choose5" value="'+arguments[0][2]+'" type="checkbox"  class="iconfont j-input" data-type="radio">');

			//strArray.push('<svg class="iconfont" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-yuanquanshixin"></use></svg>');

			//strArray.push('<svg class="iconfont active" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-yuanquanshixingou"></use></svg>');

			strArray.push('<span>'+arguments[0][2]+'</span>');
			return this;
		}
		var svgAddress = function(){
			var startX = changeNum('w',arguments[0][0]);
			var startY = changeNum('y',arguments[0][1]);
			var endX = changeNum('w',arguments[0][2]);
			var endY = changeNum('y',arguments[0][3]);
			var base_reduct = changeNum('y',8);
			var style = "";
			if(arguments[1]){
				var right = changeNum('w',arguments[1]);
				style = 'style="left:-'+right+'"';
				if(startY == 0 && endY != 0){
					style = 'style="left:-'+right+';top:-'+(endY/2+base_reduct)+'"';
				}
			}else{
				if(startY != 0){
					style = 'style="top:-'+(startY/2+base_reduct)+'"';
				}
			}

			strArray.push('<svg class="svg" '+style+' >');
		}
		var Svgline = function(){

				var startX = changeNum('w',arguments[0][0]);
				var startY = changeNum('y',arguments[0][1]);
				var endX = changeNum('w',arguments[0][2]);
				var endY = changeNum('y',arguments[0][3]);
				strArray.push('<line  class="line" x1="'+startX+'" y1="'+startY+'" x2="'+endX+'" y2="'+endY+'" stroke-width="1" />');
				return this;
		}

		var end = function(){
			strArray.push('</svg>');
			strArray.push('</span>');
			
			return this;
		}
		
		var Append = (function(){
			for (var i = 0; i < line.length; i++) {
				//添加span开始标签 位置 input 和名称
				Span(line[i].span);
				//添加svg开始标签 位置
				svgAddress(line[i].Svgline[0].split(','),line[i].isR);
				//添加线
				for (var t = 0; t < line[i].Svgline.length; t++) {
					Svgline(line[i].Svgline[t].split(','));
				}
				//结束
				end();
			}
			$(dom).append(strArray.join(''));
		})()
	}
	return _Svg;
})();