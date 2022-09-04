import VueRouter from "vue-router"
import Home from "../pages/Home"
import Category from "@/pages/Category"
import Blog from "../pages/Blog"
import Article from "@/pages/Article"

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
                    component: Blog,
                    children:[
                        {
                            name:'article',
                            // path:'article',
                            path:'article/:id/:title',
                            component: Article
                        }
                    ]
                }
            ]
        }
    ]
})