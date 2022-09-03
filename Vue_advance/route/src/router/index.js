import VueRouter from "vue-router"
import Home from "../components/Home"
import Category from "@/components/Category"

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component: Home
        },
        {
            path:'/category',
            component: Category
        }
    ]
})