function hitungSubnet() {
  const ipAddress = document.getElementById("ip-address").value;
  const subnetMask = document.getElementById("subnet-mask").value;

  // konversi IP address dan subnet mask ke biner
  const ipBiner = convertToBinary(ipAddress);
  const subnetMaskBiner = convertToBinary(subnetMask);

  // menghitung network address
  const networkAddressBiner = calculateNetworkAddress(
    ipBiner,
    subnetMaskBiner
  );
  const broadcastAddressBinary = calculateBroadcastAddress(
    ipBinary,
    subnetMaskBinary
  );

  // konversi network address dan broadcast ke bilagan desimal
  const networkAddress = convertToDecimal(networkAddressBinary);
  const broadcastAddress = convertToDecimal(broadcastAddressBinary);

  // menghitung angka host per subnet
  const subnetMaskBits = countSetBits(subnetMaskBinary);
  const numberOfSubnets = Math.pow(2, subnetMaskBits);
  const numberOfHostsPerSubnet = Math.pow(2, 32 - subnetMaskBits) - 2;

  // menampilkan hasil
  const output = document.getElementById("output");
  output.innerHTML =
    "<p>Network Address :</p> " +
    networkAddress +
    "<br>" +
    "<p>Broadcast Address :</p> " +
    broadcastAddress +
    "<br>" +
    "<p>Subnet :</p> " +
    numberOfSubnets +
    "<br>" +
    "<p>Jumlah host :</p> " +
    numberOfHostsPerSubnet +
    "<br>";
}

function convertToBinary(ipAddress) {
  const octets = ipAddress.split(".");
  let binary = "";
  for (let i = 0; i < octets.length; i++) {
    binary += parseInt(octets[i]).toString(2).padStart(8, "0");
  }
  return binary;
}

function convertToDecimal(binary) {
  const octets = binary.match(/.{1,8}/g);
  let decimal = "";
  for (let i = 0; i < octets.length; i++) {
    decimal += parseInt(octets[i], 2).toString() + ".";
  }
  return decimal.slice(0, -1);
}

function calculateNetworkAddress(ipBinary, subnetMaskBinary) {
  let networkAddressBinary = "";
  for (let i = 0; i < ipBinary.length; i++) {
    if (subnetMaskBinary.charAt(i) === "1") {
      networkAddressBinary += ipBinary.charAt(i);
    } else {
      networkAddressBinary += "0";
    }
  }
  return networkAddressBinary;
}

function calculateBroadcastAddress(ipBinary, subnetMaskBinary) {
  let broadcastAddressBinary = "";
  for (let i = 0; i < ipBinary.length; i++) {
    if (subnetMaskBinary.charAt(i) === "1") {
      broadcastAddressBinary += ipBinary.charAt(i);
    } else {
      broadcastAddressBinary += "1";
    }
  }
  return broadcastAddressBinary;
}

function countSetBits(binary) {
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary.charAt(i) === "1") {
      count++;
    }
  }
  return count;
}
