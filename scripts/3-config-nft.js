import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xd3a88B672AD967CeA9990f87e750d05f68946E10");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Day Pass",
        description: "This NFT will give you access to poolDAO!",
        image: readFileSync("scripts/assets/flamingo.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();