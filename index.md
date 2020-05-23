<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>

<body>
  <div class="container">
    <div class="note">
      <h1>Perfect Note</h1>
      <input type="text" name="list-item" id="inputValue" placeholder="Wash the dishes">
      <input type="button" value="+" id="addButton"></input>
      <ul id="list"></ul>
      <div class="empty-state">
        <img src="list.svg" alt="" height=" 200px">
        <h2>Add your first todo</h2>
        <p>What do you want to get done today?</p>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>

</html>
