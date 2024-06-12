<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.recipe-header {
  text-align: center;
  margin-bottom: 30px;
}

.recipe-header h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #333;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

.center {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.recipe-body {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.wrapped {
  flex: 1;
  min-width: 48%;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wrapped:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.info {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #555;
}

.time-likes {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.time, .likes {
  background-color: #f0f0f0;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  color: #444;
}

.ingredients-list, .instructions-list {
  padding-left: 20px;
}

.ingredients-list li, .instructions-list li {
  margin-bottom: 12px;
  font-size: 1.1em;
  line-height: 1.5;
  color: #666;
}

h3 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #444;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}
</style>
