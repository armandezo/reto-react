import axios from "axios";
import { ApiCategory } from 'constants/Urls';
import authHeader from "services/auth-header";


class CategoryService {
  async create(data: object) { 
    const response = await axios.post(ApiCategory.create, data, { headers: authHeader() });
    return response.data;
  }

  async update(data: object) { 
    const response = await axios.post(ApiCategory.update, data, { headers: authHeader() });
   
    return response.data;
  }
  
  async show(id: string)  { 
    const response = await axios.get(ApiCategory.show+`${id}`, { headers: authHeader() }); 
     
    return response.data.data;
  }

  async delete(id: string)  { 
    const response = await axios.get(ApiCategory.delete+`${id}`, { headers: authHeader() }); 
     
    return response.data;
  }

  async listAll() { 
    const response = await axios.get(ApiCategory.list, { headers: authHeader() }); 
    return response.data.data;
  }

}

export default new CategoryService();
