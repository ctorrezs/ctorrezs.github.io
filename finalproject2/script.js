// Build object for session storage
var build = {
  userName: "",
  buildName: "",
  buildUse: "",
  cpu: null,
  motherboard: null,
  ram: null,
  storage: null,
  gpu: null,
  psu: null
};

function saveBuildToSession() {
  sessionStorage.setItem('pcBuild', JSON.stringify(build));
}

function updateSummaryTable() {
  // Only run if we're on index.html (table exists)
  if (!document.getElementById('cpuChoice')) {
    return;
  }

  function setPart(idText, idImg, idPrice, partObj) {
    if (!partObj) return;
    document.getElementById(idText).textContent = partObj.name;
    var img = document.getElementById(idImg);
    img.src = partObj.img;
    img.style.display = 'inline-block';
    document.getElementById(idPrice).textContent = '$' + partObj.price.toFixed(2);
  }

  // Fill each row if data exists
  setPart('cpuChoice', 'cpuImg', 'cpuPriceCell', build.cpu);
  setPart('mbChoice', 'mbImg', 'mbPriceCell', build.motherboard);
  setPart('ramChoice', 'ramImg', 'ramPriceCell', build.ram);
  setPart('storageChoice', 'storageImg', 'storagePriceCell', build.storage);
  setPart('gpuChoice', 'gpuImg', 'gpuPriceCell', build.gpu);
  setPart('psuChoice', 'psuImg', 'psuPriceCell', build.psu);

  // Compute total
  var total = 0;
  if (build.cpu) total += build.cpu.price;
  if (build.motherboard) total += build.motherboard.price;
  if (build.ram) total += build.ram.price;
  if (build.storage) total += build.storage.price;
  if (build.gpu) total += build.gpu.price;
  if (build.psu) total += build.psu.price;

  document.getElementById('totalCell').textContent = '$' + total.toFixed(2);
}

function loadBuildFromSession() {
  var saved = sessionStorage.getItem('pcBuild');
  if (saved) {
    build = JSON.parse(saved);
  }

  // If we're on index.html, update table + form
  updateSummaryTable();

  if (document.getElementById('userForm')) {
    if (build.userName) {
      document.getElementById('userName').value = build.userName;
    }
    if (build.buildName) {
      document.getElementById('buildName').value = build.buildName;
    }
    if (build.buildUse) {
      document.getElementById('buildUse').value = build.buildUse;
    }

    if (build.userName || build.buildName) {
      document.getElementById('greeting').textContent =
        "Welcome back, " + build.userName +
        "! Your build \"" + build.buildName + "\" is loaded from this session.";
    }

    document.getElementById('userForm').onsubmit = function (event) {
      event.preventDefault();
      build.userName = document.getElementById('userName').value;
      build.buildName = document.getElementById('buildName').value;
      build.buildUse = document.getElementById('buildUse').value;
      saveBuildToSession();
      document.getElementById('greeting').textContent =
        "Hello " + build.userName +
        "! Your build \"" + build.buildName +
        "\" for " + build.buildUse + " has been saved in this session.";
    };
  }

  var buyBtn = document.getElementById('buyNowBtn');
  if (buyBtn) {
    buyBtn.onclick = function () {
      alert("This is just a demo Buy Now button. In a real website, you would go to a checkout page.");
    };
  }
}

// Selection functions – used on the separate pages

function selectCpu(name, price, imgSrc) {
  build.cpu = { name: name, price: price, img: imgSrc };
  saveBuildToSession();
  window.location.href = 'index.html';
}

function selectMb(name, price, imgSrc) {
  build.motherboard = { name: name, price: price, img: imgSrc };
  saveBuildToSession();
  window.location.href = 'index.html';
}

function selectRam(name, price, imgSrc) {
  build.ram = { name: name, price: price, img: imgSrc };
  saveBuildToSession();
  window.location.href = 'index.html';
}

function selectStorage(name, price, imgSrc) {
  build.storage = { name: name, price: price, img: imgSrc };
  saveBuildToSession();
  window.location.href = 'index.html';
}

function selectGpu(name, price, imgSrc) {
  build.gpu = { name: name, price: price, img: imgSrc };
  saveBuildToSession();
  window.location.href = 'index.html';
}

function selectPsu(name, price, imgSrc) {
  build.psu = { name: name, price: price, img: imgSrc };
  saveBuildToSession();
  window.location.href = 'index.html';
}

// Run when each page loads
window.onload = loadBuildFromSession;
