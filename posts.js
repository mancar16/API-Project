async function getDataAndRenderCards() {
  try {
    const myBaseURL = "https://jsonplaceholder.typicode.com/posts";
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("postId");
    const finalUserId = userId;
    const newURL = myBaseURL + "?userId=" + finalUserId;
    const response = await fetch(newURL);
    const data = await response.json();
    const cardContainer = document.getElementById("cardContainer");

    data.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");

      card.innerHTML = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${post.id}-${post.title}</h5>
                  <p class="card-text">${post.body}</p>
              </div>
            `;

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
  }
}

document.addEventListener("DOMContentLoaded", getDataAndRenderCards);
