<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Paragraph Adder</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    button {
      margin: 5px;
      padding: 10px;
    }
    #paragraph-container {
      margin-top: 20px;
      border: 1px solid #ccc;
      padding: 10px;
    }
    p {
      margin: 5px 0;
    }
  </style>
</head>
<body>

  <button id="add-btn">Add Paragraph</button>
  <button id="remove-btn">Remove Last Paragraph</button>

  <div id="paragraph-container">
    <!-- Paragraphs will be added here -->
  </div>

  <script>
    const addBtn = document.getElementById('add-btn');
    const removeBtn = document.getElementById('remove-btn');
    const container = document.getElementById('paragraph-container');

    addBtn.addEventListener('click', () => {
      const newPara = document.createElement('p');
      newPara.textContent = 'This is a new paragraph.';
      container.appendChild(newPara);
    });

    removeBtn.addEventListener('click', () => {
      const lastPara = container.lastElementChild;
      if (lastPara) {
        container.removeChild(lastPara);
      }
    });
  </script>

</body>
</html>
