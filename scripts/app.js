
Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#vue-root',
        //app variables
        data: {
            url : 'https://flynn.boolean.careers/exercises/api/random/mail',
            mails : [],
            loadingMails : [],
            apiHandler : 0
        },
        methods : {
            getApiResponse(){
                axios.get(this.url).then((response) => {
                    this.loadingMails.push(response.data.response)
                    if(this.loadingMails.length === 10){
                        this.mails.push(...this.loadingMails)
                    }
                }) 
            }
        },
        mounted(){
            for (let i = 0; i < 10; i++) {
                this.getApiResponse()
            }
            
        }
    })
})