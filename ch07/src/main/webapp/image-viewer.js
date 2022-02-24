var imageViewer = {
	init : function() {
		this.onJQuery(this);	
	},
	
	onJQuery : function(obj) {
		$(function() {	
			// 첫 화면 사진
			obj.getImage();
			
			// 이미지 변경버튼 클릭 시 기능
			$("#btn-change").click(function() {
				obj.getImage();
			});
			
			// 이미지 사진 클릭 시 기능
			$(".image-viewer img").click(function() {
				obj.getImage();
			});
			
			// 슬라이드 기능
			$("#btn-slideshow").click(function() {
				obj.slide(this);
			});	
		})
	},
	
	getImage : function() {
		var index = Math.floor(Math.random() * this.images.length);
		
		$(".image-viewer img").attr({
			alt: this.images[index].name,
			src: "images/" + this.images[index].file
		}) 
	},
	
	slide : function(param) {
		this.variables.isBlink = !(this.variables.isBlink);
			
		$(param).html(this.variables.isBlink? "슬라이드쇼 시작" :"슬라이드쇼 중지");
			
		if (this.variables.isBlink) {
			clearInterval(this.variables.interval);
		} else {
			this.variables.interval = setInterval(function() {
				this.getImage();
			}.bind(this), 3000);
		}
	},
	
	images : [
		{
			name : "국화",
			file : "Chrysanthemum.jpg"	
		},
		{
			name : "사막",
			file : "Desert.jpg"	
		},
		{
			name : "수국",
			file : "Hydrangeas.jpg"	
		},
		{
			name : "해파리",
			file : "Jellyfish.jpg"	
		},
		{
			name : "코알라",
			file : "Koala.jpg"	
		},
		{
			name : "등대",
			file : "Lighthouse.jpg"	
		},
		{
			name : "펭귄",
			file : "Penguins.jpg"	
		},
		{
			name : "툴립",
			file : "Tulips.jpg"	
		}	
	],
	
	variables : {
		isBlink : true,	
		interval : null
	}
	
}