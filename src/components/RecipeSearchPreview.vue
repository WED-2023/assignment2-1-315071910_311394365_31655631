<!-- not in use -->


<template>
    <router-link 
      :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
      class="recipe-search-preview"
    >
      <div class="recipe-body">
        <img
          v-if="image_load"
          :src="recipe.image"
          class="recipe-image"
          @load="onImageLoad"
          @error="onImageError"
          alt="Recipe Image"
        />
        <div v-else class="image-placeholder">
          <i class="fas fa-spinner fa-pulse placeholder-icon"></i>
        </div>
        <div class="favorite-icon-container" v-if="$root.store.username">
          <i
            :class="favorite ? 'fas fa-heart favorite-icon active' : 'far fa-heart favorite-icon'"
            @click.stop.prevent="toggleFavorite"
          ></i>
        </div>
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
  import { mockAddFavorite, mockRemoveFavorite, mockIsRecipeMarkAsFavorite } from "@/services/user";
  
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
    async mounted() {
      await this.isRecipeMarkAsFavorite();
      await this.loadRecipeImage();
    },
    methods: {
      async loadRecipeImage() {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.src = this.recipe.image;
            img.onload = () => {
              this.image_load = true;
              resolve();
            };
            img.onerror = () => {
              this.image_load = false;
              console.error("Image failed to load: " + this.recipe.image);
              reject();
            };
          });
        } catch (error) {
          console.error("Error loading image:", error);
        }
      },
      async isRecipeMarkAsFavorite() {
        const response = await mockIsRecipeMarkAsFavorite(this.recipe.id);
        this.favorite = response.data.favorite;
      },
      onImageLoad() {
        this.image_load = true;
      },
      onImageError() {
        console.error("Image failed to load: " + this.recipe.image);
        this.image_load = false;
      },
      toggleFavorite() {
        this.favorite = !this.favorite;
        if (this.favorite) {
          mockAddFavorite(this.recipe.id);
        } else {
          mockRemoveFavorite(this.recipe.id);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  
  .recipe-search-preview {
    display: block;
    max-width: 600px;
    height: 300px;
    margin: 20px auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
    background-color: #fff;
  }
  
  .recipe-search-preview:hover {
    transform: translateY(-5px);
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
    animation: fadeIn 0.5s;
  }
  
  .image-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #f0f0f0;
  }
  
  .placeholder-icon {
    font-size: 2rem;
    color: #ccc;
  }
  
  .favorite-icon-container {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(231, 76, 60, 0.5);
    transition: box-shadow 0.3s ease;
  }
  
  .favorite-icon-container:hover {
    box-shadow: 0 0 25px rgba(231, 76, 60, 0.7);
  }
  
  .favorite-icon {
    color: #e74c3c;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .favorite-icon.active {
    animation: pulse 0.3s;
  }
  
  .favorite-icon:hover {
    color: #c0392b;
    transform: scale(1.2);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .recipe-footer {
    padding: 10px 15px;
    background-color: #fafafa;
    border-top: 1px solid #eee;
    text-align: center;
  }
  
  .recipe-title {
    font-family: 'Lora', serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 3.3rem;
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
    margin: 0 5px;
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
  
  @media (max-width: 600px) {
    .recipe-search-preview {
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
  