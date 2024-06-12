<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img
        v-if="image_load"
        :src="recipe.image"
        class="recipe-image"
        @load="onImageLoad"
        @error="onImageError"
      />
      <i
        v-if="$root.store.username"
        :class="favorite ? 'fas fa-heart favorite-icon' : 'far fa-heart favorite-icon'"
        @click.stop="toggleFavorite"
      ></i>
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>
          <img
            src="https://banner2.cleanpng.com/20180604/kwx/kisspng-computer-icons-time-attendance-clocks-font-aweso-clock-icon-5b14c6364f6622.2216713915280881183252.jpg"
            alt="Time"
            class="icon"
          />
          {{ recipe.readyInMinutes }} minutes
        </li>
        <li>
          <img
            src="https://w7.pngwing.com/pngs/116/409/png-transparent-social-media-computer-icons-like-button-thumb-signal-social-networking-service-like-rectangle-social-media-marketing-black-thumbnail.png"
            alt="Likes"
            class="icon_like"
          />
          {{ recipe.aggregateLikes }} likes
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      image_load: false,
      favorite: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const img = new Image();
    img.src = this.recipe.image;
    img.onload = () => {
      this.image_load = true;
    };
    img.onerror = () => {
      this.image_load = false;
      console.error("Image failed to load: " + this.recipe.image);
    };
    this.favorite = this.$root.store.favorites.includes(this.recipe.id);
    console.log("Logged in user:", this.$root.store.username);
  },
  methods: {
    onImageLoad() {
      this.image_load = true;
    },
    onImageError() {
      console.error("Image failed to load: " + this.recipe.image);
      this.image_load = false;
    },
    toggleFavorite() {
      if (!this.$root.store.username) {
        this.$root.toast("Error", "You need to log in to favorite recipes", "danger");
        return;
      }
      this.favorite = !this.favorite;
      if (this.favorite) {
        this.$root.store.favorites.push(this.recipe.id);
      } else {
        this.$root.store.favorites = this.$root.store.favorites.filter(
          (id) => id !== this.recipe.id
        );
      }
      localStorage.setItem("favorites", JSON.stringify(this.$root.store.favorites));
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.recipe-preview {
  display: inline-block;
  width: 450px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px;
  text-decoration: none;
  color: inherit;
  background-color: #fff;
}

.recipe-preview:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.favorite-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #e74c3c;
  font-size: 24px;
  cursor: pointer;
}

.recipe-footer {
  padding: 15px;
  background-color: #fafafa;
  border-top: 1px solid #eee;
}

.recipe-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}

.recipe-overview {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #777;
}

.recipe-overview li {
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recipe-overview li .icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.icon_like {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.recipe-overview li:last-child .icon {
  margin-left: 5px;
}

@media (max-width: 600px) {
  .recipe-preview {
    width: 100%;
    margin: 10px 0;
  }

  .recipe-title {
    font-size: 1rem;
  }

  .recipe-overview {
    font-size: 0.8rem;
  }
}
</style>
