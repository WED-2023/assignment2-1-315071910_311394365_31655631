<template>
  <div class="about">
    <br>
    <h1 class="title">About</h1>
    <b-container class="narrow-container">
      <b-row class="my-4">
        <b-col>
          <p>
          We are third-year Software and Information Systems Engineering students at Ben-Gurion University of the Negev.
          </p>
          <p>
            Our goal is to provide users with an extensive collection of family recipes, preserved and shared in a modern and convenient way. This application allows users to search for recipes, save their favorite recipes, and manage their personal collection of family recipes. Users can view detailed recipes, add new ones, and share their family culinary heritage.
          </p>
          <p class="lead">
            This web application was created by:
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" class="mb-4" v-for="member in teamMembers" :key="member.name">
          <div class="team-member">
            <img :src="member.image" class="member-image mb-3" alt="Team member image">
            <h5>{{ member.name }}</h5>
            <p>{{ member.bio }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      teamMembers: [
        {
          name: "Oded Atias",
          image: 'https://media.licdn.com/dms/image/C4D03AQFYmgayN6_G9w/profile-displayphoto-shrink_800_800/0/1664228380340?e=1723680000&v=beta&t=rnCZyuOw2QkPkLjAcGi6AsYjiBpoqhCjEi77NXvzq8I',
          // bio: "Oded is passionate about web development, focusing on front-end technologies. He enjoys creating interactive and user-friendly interfaces."
        },
        {
          name: "Amit Avraham",
          image: "https://media.licdn.com/dms/image/D4D03AQEPNB1CpHaK8g/profile-displayphoto-shrink_800_800/0/1695924838848?e=1723680000&v=beta&t=Z64WYFPm6qnnPS3ORkS5JwJllrWPxcr2kqF3MjiEzs4",
          // bio: "Amit specializes in full-stack development and loves creating seamless user experiences. He ensures the integration between front-end and back-end systems runs smoothly."
        },
        {
          name: "Barak Haziz",
          image: 'https://media.licdn.com/dms/image/D5603AQFoSnq2sdVyoA/profile-displayphoto-shrink_800_800/0/1677411713067?e=1723680000&v=beta&t=n45ph1GBcG97yB8ThcUWJrddIi94XI0x-KrF4k5Y2p8',
          // bio: "Barak has a knack for backend systems and database management, ensuring smooth and efficient operations. He focuses on optimizing performance and reliability."
        }
      ]
    };
  }
};
</script>

<style scoped>
.narrow-container {
  max-width: 1000px; /* Adjust this value as needed */
  margin: 0 auto;
  padding: 20px; /* Add padding to create space inside the box */
  background-color: #ffffff; /* Ensure the background is white */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for better visibility */
  border-radius: 8px; /* Add border-radius for rounded corners */
}

h1 {
  color: #007bff;
  font-size: 2.5rem;
}

p.lead {
  font-size: 1.25rem;
  color: #6c757d;
}

.team-member {
  text-align: center;
}

.member-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #007bff;
}

.team-member h5 {
  font-size: 1.25rem;
  color: #343a40;
}

.team-member p {
  color: #6c757d;
}

.title {
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  color: #4e433c; /* dark Brown */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(139, 69, 19, 0.7); /* Shadow and red glow */
  margin-bottom: 30px;
  text-align: center;
}

</style>
