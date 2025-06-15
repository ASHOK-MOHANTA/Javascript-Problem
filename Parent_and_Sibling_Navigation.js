<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Traversal Example</title>
  <style>
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 10px;
      cursor: pointer;
      background: #f0f0f0;
      margin-bottom: 5px;
    }
    li:hover {
      background: #d0eaff;
    }
  </style>
</head>
<body>

  <div id="container">
    <ul id="list">
      <li id="item1">Item 1</li>
      <li id="item2">Item 2</li>
      <li id="item3">Item 3</li>
    </ul>
  </div>

  <script>
    const item2 = document.getElementById('item2');

    item2.addEventListener('click', function() {
      // 1. Alert parent <ul>'s text content
      alert('Parent <ul> content: ' + item2.parentNode.textContent.trim());

      // 2. Log previous sibling (Item 1)
      const prev = item2.previousElementSibling;
      if (prev) {
        console.log('Previous sibling:', prev.textContent);
      }

      // 3. Log next sibling (Item 3)
      const next = item2.nextElementSibling;
      if (next) {
        console.log('Next sibling:', next.textContent);
      }
    });
  </script>

</body>
</html>
