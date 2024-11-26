import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const userHandler = NextAuth({
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENTID,
      clientSecret:process.env.GOOGLE_CLIENTSECRET,
    }),
    CredentialsProvider({
      name:"Credentials",
      credentials:{
        email:{label:"Email",type:"email",placeholder:"Email"},
        password:{label:"Password",type:"password",placeholder:"Password"}
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "Admin", email: "admin123@admin.com" }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
    ],
  secret:process.env.NEXTAUTH_SECRET
})

export default userHandler