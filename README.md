<h1> Toolkit Thunk</h1>
Bu proje Redux ile normal kullanım ve Redux Thunk kullanımı arasındaki farkı göstermek amacıyla oluşturulmuştur. İki farklı yöntem kullanılarak API isteği gönderilmiş ve alınan veriler Redux store'unda yönetilmiştir.

<h2>Proje Yapısı</h2>
<ul>
<li><b>components:</b>Projenin bileşenlerini içerir.</li>
<li><b>redux:</b> Redux yapılandırması ve eylemleri içerir.</li>
<li><b>action:</b>API isteği göndermek için kullanılan eylemleri içerir.</li> 
<li><b>slices:</b>Redux dilimleri (slices) burada tanımlanmıştır.</li>
<li><b>App.jsx:</b> Redux store'unu yapılandırır.</li>
<li><b>store.js:</b> Ana bileşen dosyası.</li>
<li><b>index.js:</b>Uygulamanın giriş noktası.</li>
<li><b>index.css:</b>Genel stil dosyası.</li>

</ul>

<h2>Classic Redux Kullanımı:</h2>
<ul>
<li> <b>Senkron Eylemler:</b>
<ul>
<li>Classic Redux kullanımında, eylemler senkron olarak çalışır.</li>
<li>Eylemler hemen çağrıldığında işlemler gerçekleştirilir ve durum güncellemeleri yapılır.</li>
</ul>
</li>

<li><b>Middleware Kullanımı Gereksinimi Yok:</b>
<ul>
<li>Classic Redux kullanımında ek bir middleware (örneğin, Redux Thunk) kullanılmasına gerek yoktur.</li>
<li>Proje yapılandırması daha basit olabilir.</li>
</ul>
</li>

<li><b>API İstekleri Zor:</b>
<ul>
<li>API istekleri gibi asenkron işlemleri yönetmek zordur. </li>
<li>İşlemi başlatma, başarılı ve başarısız senaryoları için ayrı eylemler ve bu eylemleri çağıran yardımcı işlevler gerekebilir.
 </li>
</ul>
</li>

</ul>

<h2>Redux Thunk Kullanımı:</h2>
<ul>
<li><b> Asenkron Eylemler:</b>
<ul>
<li>Redux Thunk kullanımında eylemler asenkron olarak çalışabilir.</li>
<li>API istekleri gibi asenkron işlemler kolayca yönetilebilir..</li>
</ul>
</li>

<li><b>Middleware Kullanımı:</b>
<ul>
<li>Redux Thunk, Redux middleware olarak kullanılır.</li>
<li>Async işlemleri kolayca yönetmek için kullanılır.</li>
</ul>
</li>

<li><b>API İstekleri Kolay:</b>
<ul>
<li>Redux Thunk API istekleri gibi asenkron işlemleri kolayca yönetmeyi sağlar. </li>
<li>Tek bir eylem ile başlatma, başarılı ve başarısız senaryoları ele alınabilir.
 </li>
</ul>
</li>

<li><b>Daha Karmaşık Eylemler:</b>
<ul>
<li>Redux Thunk, eylemleri daha karmaşık hale getirebilir. </li>
<li>Asenkron işlemlerin yanı sıra, farklı eylemler arasında koşullu olarak işlem yapmak mümkündür. </li>
</ul>
</li>
<br>
<br>
Bu listede Classic Redux ve Redux Thunk kullanımının farklı yönlerini görebilirsiniz. Normal Redux, daha basit senaryolar için kullanılabilirken, Redux Thunk daha karmaşık işlemleri yönetmek için daha uygun olabilir.

</ul>

<h2>Kullanılan Teknolojiler </h2>
<ul>

<li>React</li>
<li>Redux Toolkit: </li>
<li>Redux Thunk </li>
<li>Axios</li>
<li>Node.js</li>
<li>React-Redux</li>
</ul>

<h2>Ekran Görüntüsü</h2>

![](./public/ToolkitjobApp.gif)
