
let nfts = [];


function mintNFT(name, artist, description, creationDate) {
 
  const nft = {
    name: name,
    artist: artist,
    description: description,
    creationDate: creationDate
  };
  

  nfts.push(nft);
}


function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Artist: " + nfts[i].artist);
    console.log("Description: " + nfts[i].description);
    console.log("Creation Date: " + nfts[i].creationDate);
    console.log("--------------------------");
  }
}


function getTotalSupply() {
  return nfts.length;
}


mintNFT("Digital Sunrise", "Alice", "A beautiful sunrise over the mountains.", "2024-05-29");
mintNFT("Urban Jungle", "Bob", "A chaotic and colorful urban scene.", "2024-05-30");
mintNFT("Serene Waters", "Charlie", "A calm and peaceful lake view.", "2024-06-01");

listNFTs();
console.log("Total NFTs Minted: " + getTotalSupply());
