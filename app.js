import { TatumSDK, Network } from "@tatumio/tatum";

const button = document.getElementById("get-balance");
const addressInput = document.getElementById("address");
const success = document.getElementById("content");
const page_404 = document.getElementById("page_404");
const form = document.getElementById("form");

button.addEventListener("click", async () => {
  try {
    const tatum = await TatumSDK.init({ network: Network.POLYGON_MUMBAI });
    console.log(tatum);

    const isOwner = await tatum.nft.checkNftOwner({
      tokenAddress: "0xC0a4508CF3dC8F9d137b76A22B41Af424c8fA53d", // replace with your collection
      // tokenId: "1",
      owner: [addressInput.value], // owner wallet
    });
    console.log(isOwner);

    if (isOwner) {
      success.style.display = "block";
      page_404.style.display = "none";
      form.style.display = "none";
    } else {
      page_404.style.display = "block";
      success.style.display = "none";
      form.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching NFT balance:", error);
  }
});
