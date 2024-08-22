// might have to remove the /next if it doesn't work
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})


export { handler as GET, handler as POST }; 