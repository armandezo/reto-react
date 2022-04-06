import API_URL  from "./Conection";
 
const ApiUser = {
    'login': API_URL+'/login', 
    'register': API_URL+'/register', 
    'logout': API_URL+'/auth/logout', 
}

const ApiProduct = {
    'create': API_URL+'/product/create',
    'update': API_URL+'/product/update/',
    'delete': API_URL+'/product/delete/',
    'list': API_URL+'/product/list',
    'show': API_URL+'/product/show/',
}

const ApiCategory = {
    'create': API_URL+'/category/create',
    'update': API_URL+'/category/update/',
    'delete': API_URL+'/category/delete/',
    'list': API_URL+'/category/list',
    'show': API_URL+'/category/show/',
}

const ApiOrder = {
    'create': API_URL+'/category/create',  
    'list': API_URL+'/category/list',
    'show': API_URL+'/category/show/',
}



export { ApiUser, ApiProduct, ApiCategory, ApiOrder };