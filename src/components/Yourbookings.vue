<template>
    <h1>Yourbooking</h1><v-card>
    <v-card-title>BOOK
                    {{ total }}
                    <v-btn
                        color="deep-purple-lighten-2"
                        text="checkout">
                    </v-btn>
                </v-card-title>
                <v-card-text class="bg-surface-light pt-4">
                    <v-row>
            <v-col cols="12" md="4"  v-for="Book in YourbookingItems" :key=Book>

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
                        @click="removeFromYourbbooking(Book)"
                    ></v-btn>
                    </v-card-actions>
                </v-card> 
            </v-col> 
        </v-row>   
                </v-card-text>
</v-card>

</template>
<script>


import Book from '@/store/modules/Book';
import Yourbooking from '@/store/modules/Yourbooking';
import { mapGetters, mapActions } from 'vuex';
export{

}


export default {
    
    data(){
        return{

        }
    },
    methods: {
        
    },
    computed: {
        ...mapGetters({
            YourbookingItems: 'Yourbooking'
        })
    }
}
</script>