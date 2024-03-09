//API isteği atıp isteğin durumuna göre (yükleniyor, başarılı, hata)
//göre store'u güncelleme
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading,setUsers } from "../redux/slices/userSlice";

const Classic = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.userSlice);
  useEffect(() => {
    //yükleme durumununda store'u güncelle
    dispatch(setLoading());

    //api istegi at

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(setUsers(res.data)))
      .catch((err) => dispatch(setError(err.message)));

    // Başarılı olursa verileri store'a aktar

    //Basarısız olursa hatayı store'a aktar
  }, []);
  return( 
  <div>
    {state.isLoading ? (
      <h1>Yükleniyor...</h1>
    ) : state.isError ? (
      <h1> Uzgunuz hata olustu </h1>
    ) : (
      state.users.map((user) => <h1>{user.name}</h1>)
    )}
  </div>)
};

export default Classic;
