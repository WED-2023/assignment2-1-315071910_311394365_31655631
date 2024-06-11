<template>
  <div id="app" class="background">
    <b-navbar toggleable="lg" type="dark" class="navbar-custom">
      <b-navbar-brand href="#">Vue Recipes</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'main' }" exact>Home</b-nav-item>
          <b-nav-item :to="{ name: 'search' }" exact>Search</b-nav-item>
          <b-nav-item :to="{ name: 'about' }" exact>About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="!$root.store.username">
            <span class="d-flex align-items-center">
              <span class="mr-2">Hello guest:</span>
              <b-button variant="outline-light" :to="{ name: 'register' }" class="mr-2">Register</b-button>
              <b-button variant="outline-light" :to="{ name: 'login' }">Login</b-button>
            </span>
          </template>
          <template v-else>
            <div class="user-box d-flex align-items-center">
              <span class="mr-2">Hello, {{ $root.store.username }}:</span>
              <b-dropdown id="dropdown-1" text="Personal Area" right class="personal-dropdown">
                <b-dropdown-item :to="{ name: 'favorites' }">My Favorites</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'my-recipes' }">My Recipes</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'family-recipes' }">My Family Recipes</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'createRecipe' }">Create New Recipe</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click="logout" class="logout-item">
                  <b-icon icon="box-arrow-right" class="mr-2"></b-icon>Logout
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url('https://thumbs.dreamstime.com/b/different-spices-herbs-stone-table-top-view-ingredients-cooking-food-background-different-spices-herbs-black-120232209.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Navbar Custom Styles */
.navbar-custom {
  background-color: transparent !important; /* Make navbar background transparent */
  box-shadow: none; /* Remove any shadow from the navbar */
}

/* Brand Name Styles */
b-navbar-brand {
  font-weight: 700; /* Make the brand name bold */
  color: #ffffff !important; /* Set the brand name color to white */
  font-size: 1.5rem; /* Increase the font size */
}

/* Navbar Item Styles */
b-nav-item {
  font-weight: 600; /* Make the navbar items bold */
  color: #ffffff !important; /* Set the navbar items color to white */
  position: relative;
  margin: 0 10px; /* Add margin between the navbar items */
  transition: color 0.3s, transform 0.3s; /* Smooth transition for color and transform */
}

b-nav-item:hover,
b-nav-item:focus,
b-nav-item.router-link-exact-active {
  color: #f8cdda !important; /* Change color on hover, focus, and when active */
  transform: scale(1.1); /* Slightly increase size on hover */
}

b-nav-item::before {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(45deg, #42b983, #42b983); /* Gradient color */
  transition: all 0.3s ease; /* Smooth transition for width */
  border-radius: 2px; /* Rounded corners */
}

b-nav-item:hover::before,
b-nav-item:focus::before,
b-nav-item.router-link-exact-active::before {
  width: 100%; /* Full width on hover, focus, and when active */
  left: 0;
}

/* Dropdown Item Styles */
.b-dropdown-item {
  color: #2c3e50; /* Set the dropdown item color */
  transition: background-color 0.3s; /* Smooth transition for background color */
}

.b-dropdown-item:hover {
  background-color: #42b983 !important; /* Change background color on hover */
}

/* Button Styles */
.b-button {
  color: #ffffff;
  border-color: #ffffff;
  transition: background-color 0.3s, border-color 0.3s;
}

.b-button:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Slight background change on hover */
  border-color: #ffffff;
}

.b-nav-item.router-link-exact-active {
  color: #f8cdda !important;
}

/* Create Recipe Button Styles */
.btn-create-recipe {
  color: #ffffff !important;
  background-color: #42b983 !important;
  border-radius: 4px;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

.btn-create-recipe:hover {
  background-color: #2c3e50 !important;
}

/* Custom styles for Personal Area dropdown */
.personal-dropdown {
  .dropdown-toggle {
    color: #ffffff !important; /* Set dropdown button text color to white */
    background: none !important; /* Remove background color */
    border: 1px solid #ffffff !important; /* Add white border */
    display: flex;
    align-items: center;
    padding: 5px 20px; /* Add padding for spacing */
    border-radius: 4px; /* Rounded corners */
    transition: background-color 0.3s, border-color 0.3s;
  }

  .dropdown-toggle:hover {
    background-color: rgba(255, 255, 255, 0.1) !important; /* Slight background change on hover */
  }

  .dropdown-menu {
    background: rgba(0, 0, 0, 0.8); /* Set dropdown menu background to a semi-transparent black */
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    right: 0; /* Align dropdown menu to the right */
  }

  .dropdown-item {
    color: #ffffff !important; /* Set dropdown item text color to white */
    font-weight: 600; /* Make dropdown item text bold */
    transition: background-color 0.3s;
  }

  .dropdown-item:hover {
    background-color: #42b983 !important; /* Change background color on hover */
  }

  .logout-item {
    color: #ff4d4d !important; /* Set logout item text color to red */
  }

  .logout-item:hover {
    background-color: rgba(255, 77, 77, 0.1) !important; /* Light red background on hover */
  }
}

/* Custom styles for user box */
.user-box {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  border-radius: 8px; /* Rounded corners */
  padding: 8px 12px; /* Add padding */
  display: flex;
  align-items: center;
  color: #ffffff; /* Set text color to white */
}

.user-box span {
  margin-right: 8px; /* Add margin to the right of the greeting text */
}
</style>
