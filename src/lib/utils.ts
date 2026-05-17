import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const configuration = {
    db: {
        url: process.env.DATABASE_URL as string,
    },
    auth: {
        betterAuth: {
            secret: process.env.BETTER_AUTH_SECRET as string,
            url: process.env.BETTER_AUTH_URL as string
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GUITHUB_CLIENT_SECRET as string
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }
    }
}
