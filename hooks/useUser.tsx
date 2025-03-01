import {useEffect, useState} from 'react'
import { User } from "../types/User";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState<String | null> (null);
  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      setError('error al obtener la informacion')
    }finally{
      setloading(false)
    }
  }
  useEffect(()=>{
    fetchUsers();
  },[]);
  return {users, loading, error}
}