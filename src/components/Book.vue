<template>
    <h1>BOOK</h1>
    <p>{{total }}</p>

    <v-card-title>Yourbooking
                    {{ total }}
                    <v-btn
                        color="deep-purple-lighten-2"
                        text="checkout">
                    </v-btn>
                </v-card-title>
                <v-card-text class="bg-surface-light pt-4">
                    <v-row>
            <v-col cols="12" md="4"  v-for="Book in planeDetails" :key=Book>

                <v-card
                    class="mx-auto my-12"
                    max-width="374"
                > 
                    

                    <v-img
                    height="250"
                    :src="Book.itemImage"
                    cover
                    ></v-img>

                    <v-card-item>
                    <v-card-title>{{Book.itemName}}</v-card-title>

                    
                    </v-card-item>

                    <v-card-text class="bg-surface-light pt-4">
                    
                    <div class="my-4 text-subtitle-1">
                        {{Book.itemPrice}}
                    </div>

                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    <div>{{Book.desciption}}</div>
                    </v-card-text>
                     
                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-actions>
                    <v-btn
                        color="deep-purple-lighten-2"
                        text="REMOVE"
                        block
                        border 
                        @click="removeFromYourbooking(Book)"
                    ></v-btn>
                    </v-card-actions>
                </v-card> 
            </v-col> 
        </v-row>   
                </v-card-text>
    
    <div>
         <v-row>
            <v-col cols="12" md="4"  v-for="Book in planeDetails" :key=Book>

                <v-card
                    class="mx-auto my-12"
                    max-width="374"
                > 
                    

                    <v-img
                    height="250"
                    :src="Book.itemImage"
                    cover
                    ></v-img>

                    <v-card-item>
                    <v-card-title>{{Book.itemName}}</v-card-title>

                    
                    </v-card-item>

                    <v-card-text class="bg-surface-light pt-4">
                    
                    <div class="my-4 text-subtitle-1">
                        {{Book.itemPrice}}
                    </div>

                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    <div>{{Book.desciption}}</div>
                    </v-card-text>
                     
                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-actions>
                    <v-btn
                        color="deep-purple-lighten-2"
                        text="BOOK"
                        block
                        border 
                        @click="addToYourbooking(Book)"
                    ></v-btn>
                    </v-card-actions>
                </v-card> 
            </v-col> 
        </v-row>
    </div>
</template>
<script>
import Book from '@/store/modules/Book';
import {mapActions, mapGetters }  from 'vuex'
    export default{
        data(){
            return{
                Book: [1,2,3,4,5,6,7,8,9,10],
                planeDetails : [
            {
                itemNumber: 1,
                itemName : "PARIS",
                itemPrice : Ksh2000,
                itemQuantity : 30,
                itemImage: './../Images/istockphoto-465027569-1024x1024',
                description: "Bussiness class"
            },
            {
                itemNumber: 2,
                itemName : "DUBAI",
                itemPrice : Ksh2500,
                itemQuantity : 4,
                itemImage: '../Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Bussiness class"
            },
            {
                itemNumber: 3,
                itemName : "WASHINGTON",
                itemPrice :Ksh500000,
                itemQuantity : 30,
                itemImage: '../images/istockphoto-1813641051-1024x1024',
                description: "First class"
            },
            
           
      ],
        total: 0,
        YourbookingItem : []
            }
           
      },
        methods:{
            calculateTotal(itemPrice){
               this.total +=itemPrice
            },
            addToYourbooking(Book){
                this.YourbookingItem.push(Book)
               this.calculateTotal(Book.itemPrice)

            },
            removeFromYourbookings(Book){
                  this.YourbookingItem.pop(Book)
                  this.total-=Book.itemPrice
            },
          

        },
        computed: {
            ...mapGetters({
                stock: 'Yourbooking'

            })
        },
    }
</script>