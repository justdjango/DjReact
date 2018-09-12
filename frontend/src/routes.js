import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const Routes = [
    {
        path: "/articles/:articleID/",
        component: ArticleDetail
    },
    {
        path: "/login/",
        component: Login
    },
    {
        path: "/signup/",
        component: Signup
    },
    {
        path: "/",
        component: ArticleList
    }
];

export default Routes;
