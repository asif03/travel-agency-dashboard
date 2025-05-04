import { OAuthProvider } from "appwrite";
import { account, databases } from "lib/appwrite";
import { data, redirect } from "react-router";

export const loginWithGoogle = async () => {
  try {
    account.createOAuth2Session(OAuthProvider.Google);
  } catch (e) {
    console.log("loginWithGoogle error", e);
  }
};

export const getUser = async () => {
  try {
    const user = await account.get();

    if (!user) {
      return redirect("/login");
    }

    const { documents } = await databases.listDocuments();
    return user;
  } catch (e) {
    console.log("getUser error", e);
  }
};
