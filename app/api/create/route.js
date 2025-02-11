import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
const api_key = "csmmtz3ndjqs";
const api_secret =
  "ra26e7q6a462qrnge9rvdsjyxxrx352tfhn734hmhtppeh3drayu9xsf2frgfrnc";
// const user_id = "user_2rcQZwnWAT0hAEfKwgLQPTA9i6W";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  function capitalize(str) {
    if (!str) return ""; // Handle empty or undefined strings
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("A new user has been created", token);
  const client = await clerkClient();
  await serverClient.upsertUser({id: user.data.id})
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });
  //give access to all chat 
  const slugs = ["Python-new", "Js-new", "React-new", "Node-new", "CSS-new", "NextJs-new"];
  slugs.forEach(async(item) => {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(item) + "Discussion",
      created_by_id : user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id])    
  });
  return Response.json({ message: "Hello World" });
}
