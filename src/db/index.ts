import { drizzle } from "drizzle-orm/neon-http"
import {configuration} from "@/lib/utils";


export const db = drizzle(configuration.db.url!)