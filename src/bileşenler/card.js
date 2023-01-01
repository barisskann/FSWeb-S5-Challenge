import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const div = document.createElement("div");
  div.classList.add("card");
  const div2 = document.createElement("div");
  div2.classList.add("headline");
  div2.textContent = makale.anabaslik;
  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");
  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  const img = document.createElement("img");
  img.src = makale.yazarFoto;
  const span = document.createElement("span");
  span.textContent = makale.yazarAdi;
  divImg.appendChild(img);
  divAuthor.appendChild(divImg);
  divAuthor.appendChild(span);
  div.appendChild(divAuthor);
  div.appendChild(div2);
  return div;
};

const cardEkleyici = async (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  let render = await axios.get("http://localhost:5001/api/makaleler");
  const total = render.data.makaleler;
  for (let x in total) {
    total[x].forEach((item) => {
      const newCard = Card(item);
      document.querySelector(secici).appendChild(newCard);
    });
  }
};
export { Card, cardEkleyici };
