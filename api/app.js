const app = Vue.createApp({
    data() {
        return {
            title : 'List of countries',
            countries : [],
            country: {},
            showCountry: false,

        }
    },
    methods:{
        fetchCountries: function(){
            let url = 'https://restcountries.com/v3.1/all'
            axios.get(url).then(response => {
                this.countries = response.data
                console.log(response.data)
            })
        },
        DetailCountry: function(alpha2Code){
            let allCountries = this.countries
            let selectedCountry = allCountries.filter(country => country.cca2 === alpha2Code)
            this.country = selectedCountry
            this.showCountry = true
        },
        ShowCountries: function(){
            this.showCountry = false
        }
        },
    mounted(){
        this.fetchCountries()
    }
})
app.mount('#app')