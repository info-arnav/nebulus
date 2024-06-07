import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: [
            "openid",
            "https://www.googleapis.com/auth/bigquery",
            "https://www.googleapis.com/auth/bigquery.readonly",
            "https://www.googleapis.com/auth/cloud-platform.read-only",
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_only",
            "https://www.googleapis.com/auth/devstorage.read_write",
            "https://www.googleapis.com/auth/bigquery.insertdata",
            "https://www.googleapis.com/auth/adwords",
          ].join(" "),
        },
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
});
