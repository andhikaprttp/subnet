
// Matematika 

let data = [62, 35, 45, 47, 56, 58];

// mencari nilai terendah
let nilaiMin = Math.min(...data);

// mencari nilai tertinggi
let nilaiMax = Math.max(...data);

// menghitung rentang data
let rentang = nilaiMax - nilaiMin;

console.log("Rentang data adalah " + rentang);



function calculateSubnet() {
      const ipAddress = document.getElementById("ip-address").value;
      const subnetMask = document.getElementById("subnet-mask").value;
      
      // konversi IP address dan subnet mask ke biner
      const ipBinary = convertToBinary(ipAddress);
      const subnetMaskBinary = convertToBinary(subnetMask);
      
      // Calculate network address and broadcast address
      const networkAddressBinary = calculateNetworkAddress(ipBinary, subnetMaskBinary);
      const broadcastAddressBinary = calculateBroadcastAddress(ipBinary, subnetMaskBinary);
      
      // Convert network address and broadcast address to decimal
      const networkAddress = convertToDecimal(networkAddressBinary);
      const broadcastAddress = convertToDecimal(broadcastAddressBinary);
      
      // Calculate number of subnets and hosts per subnet
      const subnetMaskBits = countSetBits(subnetMaskBinary);
      const numberOfSubnets = Math.pow(2, subnetMaskBits);
      const numberOfHostsPerSubnet = Math.pow(2, 32 - subnetMaskBits) - 2;
      
      // menampilkan hasil
      const output = document.getElementById("output");
      output.innerHTML = "<strong>Network Address :</strong> " + networkAddress + "<br>" +
                         "<strong>Broadcast Address :</strong> " + broadcastAddress + "<br>" +
                         "<strong>Subnet :</strong> " + numberOfSubnets + "<br>" +
                         "<strong>Jumlah host :</strong> " + numberOfHostsPerSubnet + "<br>";
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
  for (let i = 0; i < ipBinary.length; i++) {  if (subnetMaskBinary.charAt(i) === "1") {
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