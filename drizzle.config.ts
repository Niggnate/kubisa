import "dotenv"
import { defineConfig } from "drizzle-kit"
import {configuration} from "@/lib/utils";

export default defineConfig({
    out: "./drizzle",
    schema: "./src/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: configuration.db.url,
    }
})