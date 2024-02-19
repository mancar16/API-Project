async function getDataAndRenderCards() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const cardContainer = document.getElementById("cardContainer");

    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");

      card.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${item.id}-${item.username}</h5>
              <p class="card-text">${item.name}</p>
              <p class="card-text">${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</p>
              <p class="card-text">${item.phone}</p>
              <p class="card-text">${item.email}</p>
              <a href="http://127.0.0.1:5500/posts.html?postId=${item.id}" class="btn btn-primary">Posts</a>
            </div>
          </div>
        `;

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
  }
}

document.addEventListener("DOMContentLoaded", getDataAndRenderCards);
