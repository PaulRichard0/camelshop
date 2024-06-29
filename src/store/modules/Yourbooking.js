import Yourbookings from "@/components/Yourbookings.vue"

const state ={
    YourbookingItems:[]


}
const getters ={
    Yourbooking: (state) => state.stockDetails,

}
const actions ={
    Yourbooking: (state) =>state.Yourbooking

}
const mutations ={
    

}
export default{
    state,
    getters,
    actions,
    mutations,
    
}
