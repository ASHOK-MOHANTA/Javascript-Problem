<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Propagation Demo</title>
  <style>
    .outer, .middle, .inner {
      padding: 30px;
      margin: 10px;
      border: 2px solid black;
    }
    .outer { background-color: #ffe0e0; }
    .middle { background-color: #e0ffe0; }
    .inner { background-color: #e0e0ff; }
    button { margin-top: 10px; }
  </style>
</head>
<body>

  <div class="outer" id="outer">
    Outer Div
    <button id="outerBtn">Outer Button</button>
    <div class="middle" id="middle">
      Middle Div
      <button id="middleBtn">Middle Button</button>
      <div class="inner" id="inner">
        Inner Div
        <button id="innerBtn">Inner Button</button>
      </div>
    </div>
  </div>

  <script>
    function addListeners(element, name) {
      element.addEventListener('click', function (e) {
        alert(`${name} clicked (Bubbling)`);
      });

      element.addEventListener('click', function (e) {
        alert(`${name} clicked (Capturing)`);
      }, true);
    }

    addListeners(document.getElementById('outer'), 'Outer Div');
    addListeners(document.getElementById('middle'), 'Middle Div');
    addListeners(document.getElementById('inner'), 'Inner Div');
    addListeners(document.getElementById('outerBtn'), 'Outer Button');
    addListeners(document.getElementById('middleBtn'), 'Middle Button');

    const innerBtn = document.getElementById('innerBtn');
    innerBtn.addEventListener('click', function (e) {
      alert('Inner Button clicked (Bubbling)');
      e.stopPropagation();
    });

    innerBtn.addEventListener('click', function (e) {
      alert('Inner Button clicked (Capturing)');
      e.stopPropagation();
    }, true);
  </script>

</body>
</html>
