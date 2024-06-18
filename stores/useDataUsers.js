import { defineStore } from "pinia";
import usersData from  '@/db/users.json';

export const useDataUsersStores = defineStore('users', {
    state:() =>{
        return{
            users: usersData
        };
    }
});