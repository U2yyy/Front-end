import VueRouter from "vue-router"
import Home from "../pages/Home"
import Category from "@/pages/Category"
import Blog from "../pages/Blog"

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component: Home
        },
        {
            path:'/category',
            component: Category,
            children:[
                {
                    path:'blog',
                    component: Blog
                }
            ]
        }
    ]
})