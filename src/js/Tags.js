export const addTagsClickHandler = () => {
  document.querySelector(".tag-container")?.addEventListener("click", (e) => {
    if (e.target.classList.contains("tag")) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);

      if (clickedTag.innerText === "ALL") {
        showAllStrategies();
      } else {
        filterGiftsBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll(".tag-container .tag");
  tags.forEach((tag) => {
    tag.classList.remove("tag-active");
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add("tag-active");
};

const showAllStrategies = () => {
  let gifts = document.querySelectorAll(".gifts__list .gifts__item");

  gifts.forEach((gift) => {
    gift.classList.remove("gifts_hidden");
  });
};

const filterGiftsBySelectedTag = (selectedTag) => {
  let gifts = document.querySelectorAll(".gifts__list .gifts__item");

  gifts.forEach((gift) => {
    gift.classList.add("gifts_hidden");

    gift.querySelectorAll(".tag").forEach((tag) => {
      if (tag.innerText.toUpperCase() === selectedTag) {
        gift.classList.remove("gifts_hidden");
      }
    });
  });
};
