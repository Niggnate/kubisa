import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle"
import {db} from "@/db";
import * as schema from "@/db/schema"
import { configuration } from "@/lib/utils"


export const auth = betterAuth({
    socialProviders: {
        github: {
            clientId: configuration.auth.github.clientId,
            clientSecret: configuration.auth.github.clientSecret
        },
        google: {
            clientId: configuration.auth.google.clientId,
            clientSecret: configuration.auth.google.clientSecret
        }
    },
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema,
        }
    })
})