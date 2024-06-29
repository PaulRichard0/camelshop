const state ={
    planeDetails : [
        {
            itemNumber: 1,
            itemName : "PARIS",
            itemQuantity : 30,
            itemImage: './../Images/istockphoto-465027569-1024x1024',
            description: "Bussiness class"
        },
        {
            itemNumber: 2,
            itemName : "DUBAI",
            itemQuantity : 4,
            itemImage: '../Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
            description: "Bussiness class"
        },
        {
            itemNumber: 3,
            itemName : "WASHINGTON",
            itemQuantity : 30,
            itemImage: '../images/istockphoto-1813641051-1024x1024',
            description: "First class"
        }, 
       
  ],


}
const getters ={
    plane: (state) => state.planeDetailsDetails,

}
const actions ={

}
const mutations ={

}
export default{
    state,
    getters,
    actions,
    mutations,

}
