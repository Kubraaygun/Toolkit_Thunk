//Thunk Aksiyonu
//Asenkron işlemler (veritabanı istekleri) yapıp
//sonucunu store'a aktarmamız istediğimiz aksiyonları toolkitte createAsyncThunk methodu ile oluştururuz.

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  Bizden iki parametre ister
//1-Aksiyon Tipi
//2-Asenkron islem yapip sonuc donduren fonksiyon

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  //asenkron islem
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  //store'a aksiyonun payload'i olarak gidecek veriyi return eder

  return res.data;
});

//asenkron thunk aksiyonlari yaptigi istegin
// durumuna gore store'a 3 farkli aksiyon gonderebilir

// 1) Pending: istegi yaptigi anda gonderir
//isteğin başladığını belirtir

// 2) Fullfilled: istek başarılı olursa gönderir
//isteğin başarıyla sonuçlandığını belirtlir
//ve payload'ın //return edılen veri olur.

// 3) Rejected: Istekte hata olursa gönderir
