var app = new Vue ({
    el: "#app",
    data: {
        serviceBtns : false,
        errors : {
            main: {
                title : "404",
                description : "Страница не найдена"
            },
            other : {
                title : "Уууууупс, что-то пошло не так :(",
                description : "Мы обязательно разберемся в чем дело, и уволим кого-нибудь"
            }
        },
        backBtnText : "Вернуться на главную",
        forwardBtnText : "Или выбрать сервис", 
        lang : 'RU'
    },
    methods : {
        changeLanguage() {
            this.lang = this.lang === "ENG" ? 'RU' : "ENG"

            this.errors.main.description = this.lang === "RU" ? "Страница не найдена" : "Page not found";
            this.errors.other.main = this.lang === "RU" ? "Уууууупс, что-то пошло не так :(" : "Ooooops, something went wrong :(";
            this.errors.other.description = this.lang === "RU" ? "Мы обязательно разберемся в чем дело, и уволим кого нибудь" : "We'll figure out what the reason is and fire someone:)";
            this.backBtnText = this.lang === "RU" ? "Вернуться на главную страницу" : "Back to mainpage";
            this.forwardBtnText = this.lang === "RU" ? "Или выбрать сервис" : "Or choose service";
        } 
    }
})