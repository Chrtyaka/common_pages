var app = new Vue({
    el: '#app',
    data: {
	  radioBtns: ['NoiseSearch','CityLogistics','Scatter','ClusteringLight','PassFlow','WeatherHistory',
	'RoadSigns', 'Открытая недвижимость','LandProber'],
	serviceName: '',
	commentService: '',
    rating: 1,
    },
	methods:{
		sendEmail(){
			let service_id = "gmail"
			let template_id = "feedback"
			let template_params = {
				service_name : this.serviceName,
				service_rating: this.rating,
				comment_service : this.commentService
            }
			emailjs.send(service_id,template_id,template_params).then(function(response) {
                alert('Успешно! Спасибо за ваш отзыв:)')
			}, function(error) {
                alert('Неудачно! Попробуйте еще раз! Или обратитесь в техподдержку: urbanbasis@gmail.com')
            });
            
		}
	},
    mounted(){
		(function(){
			emailjs.init("user_ToxHDx4frRFOEHUO33Muw");
   		})();
    }
  })