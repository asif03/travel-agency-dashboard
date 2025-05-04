import { Client, Account, Databases, Storage } from "appwrite";
import { appwriteConfig } from "~/appwrite/config";

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId); // Replace with your project ID

const account = new Account(client);

const databases = new Databases(client);

const storage = new Storage(client);

export { client, account, databases, storage };
